import Util from '@services/util.js';
import H5PUtil from '@services/h5p-util.js';
import Dictionary from '@services/dictionary.js';
import ThreeDModelView from '@components/threed-model-view.js';
import MessageBox from '@components/messageBox/message-box.js';

import '@styles/h5p-3d-model.scss';

export default class ThreeDModel extends H5P.EventDispatcher {
  /**
   * @class
   * @param {object} params Parameters passed by the editor.
   * @param {number} contentId Content's id.
   * @param {object} [extras] Saved state, metadata, etc.
   */
  constructor(params, contentId, extras = {}) {
    super();

    // Sanitize parameters
    const defaults = Util.extend({}, H5PUtil.getSemanticsDefaults());
    this.params = Util.extend(defaults, params);

    this.params = H5PUtil.processParameters(this.params);

    if (this.params.annotations?.annotations) {
      this.params.annotations.annotations.forEach((annotation) => {
        annotation.text = Util.purifyHTML(annotation.text);
      });
    }

    this.contentId = contentId;
    this.extras = extras;

    // Fill dictionary
    this.dictionary = new Dictionary();
    this.dictionary.fill({ l10n: this.params.l10n, a11y: this.params.a11y });

    this.previousState = extras?.previousState || {};

    this.isFullscreenAllowed = this.isRoot() && H5P.fullscreenSupported;

    if (!this.params.model?.file?.path) {
      const messageBox = new MessageBox({
        text: this.dictionary.get('l10n.noModel')
      });
      this.dom = messageBox.getDOM();
      return;
    }

    // Retrieve true local source
    const element = document.createElement('div');
    H5P.setSource(
      element, { path: this.params.model?.file?.path ?? '' }, this.contentId
    );

    // Optional poster
    const poster = document.createElement('img');
    if (this.params.visuals?.poster?.path) {
      poster.addEventListener('load', () => {
        this.model.updateAspectRatio(
          poster.naturalWidth / poster.naturalHeight
        );

        this.trigger('resize');
      });
      H5P.setSource(
        poster, { path: this.params.visuals.poster.path }, this.contentId
      );
    }

    this.model = new ThreeDModelView({
      src: element.src,
      poster: poster.src,
      annotations: this.params.annotations?.annotations,
      className: 'h5p-3d-model-main',
      alt: this.params.model.alt,
      size: this.params.size,
      a11y: this.params.a11y
    }, {
      onModelLoaded: (params) => {
        this.handleModelLoaded(params);
      },
      onPlayStateChanged: (isPlaying) => {
        this.handlePlayStateChanged(isPlaying);
      }
    });

    this.dom = this.model.getDOM();
  }

  /**
   * Attach library to wrapper.
   * @param {H5P.jQuery} $wrapper Content's container.
   */
  attach($wrapper) {
    this.container = $wrapper.get(0);

    if (this.params.visuals.backgroundImage && this.params.model?.file?.path) {
      const backgroundImage = document.createElement('img');
      if (this.params.visuals.backgroundImage.path) {
        H5P.setSource(
          backgroundImage,
          { path: this.params.visuals.backgroundImage.path },
          this.contentId
        );
      }

      this.container.classList.add('has-background-image');
      this.container.style.setProperty(
        '--h5p-3d-model-background-image', `url(${backgroundImage.src})`
      );
    }
    else if (
      this.params.visuals.backgroundColor && this.params.model?.file?.path
    ) {
      /*
       * Using custom CSS variables to allow easier customization.
       * When running standalone, the default background color of .h5p-content
       * will be overridden to allow true transparency in webpages.
       */
      const h5pContent = this.container.closest('.h5p-content');

      if (this.container.classList.contains('h5p-standalone') && h5pContent) {
        h5pContent.style.setProperty(
          '--h5p-3d-model-background-color', this.params.visuals.backgroundColor
        );

        h5pContent.style.backgroundColor =
          'var(--h5p-3d-model-background-color)';
      }
      else {
        this.container.style.setProperty(
          '--h5p-3d-model-background-color', this.params.visuals.backgroundColor
        );
      }

      this.container.style.backgroundColor =
        'var(--h5p-3d-model-background-color)';
    }

    this.container.classList.add('h5p-3d-model');

    this.container.appendChild(this.dom);

    this.buttonPlay = document.createElement('button');
    this.buttonPlay.classList.add('h5p-3d-model-button');
    this.buttonPlay.classList.add('h5p-3d-model-button-play');
    this.buttonPlay.classList.add('display-none');
    this.buttonPlay.setAttribute(
      'aria-label', this.dictionary.get('a11y.buttonPlay')
    );
    this.buttonPlay.addEventListener('click', () => {
      this.model.togglePlay();
    });
    this.container.appendChild(this.buttonPlay);

    if (this.isFullscreenAllowed) {
      this.buttonPlay.classList.add('has-fullscreen-button');
      this.buttonFullscreen = document.createElement('button');
      this.buttonFullscreen.classList.add('h5p-3d-model-button');
      this.buttonFullscreen.classList.add('h5p-3d-model-button-fullscreen');
      this.buttonFullscreen.setAttribute(
        'aria-label', this.dictionary.get('a11y.buttonFullscreenEnter')
      );
      this.buttonFullscreen.addEventListener('click', () => {
        this.handleFullscreenClicked();
      });
      this.container.appendChild(this.buttonFullscreen);

      this.on('enterFullScreen', () => {
        this.buttonFullscreen.setAttribute(
          'aria-label', this.dictionary.get('a11y.buttonFullscreenExit')
        );
        this.model.setMaxSize();
      });

      this.on('exitFullScreen', () => {
        this.buttonFullscreen.setAttribute(
          'aria-label', this.dictionary.get('a11y.buttonFullscreenEnter')
        );
        this.model.setMaxSize(this.params.size);
      });
    }
  }

  /**
   * Handle fullscreen button clicked.
   */
  handleFullscreenClicked() {
    setTimeout(() => {
      this.toggleFullscreen();
    }, 300); // Some devices don't register user gesture before call to to requestFullscreen
  }

  /**
   * Toggle fullscreen button.
   * @param {string|boolean} state enter|false for enter, exit|true for exit.
   */
  toggleFullscreen(state) {
    if (!this.container || !this.isFullscreenAllowed) {
      return;
    }

    if (typeof state === 'string') {
      if (state === 'enter') {
        state = false;
      }
      else if (state === 'exit') {
        state = true;
      }
    }

    if (typeof state !== 'boolean') {
      state = !H5P.isFullscreen;
    }

    if (state) {
      H5P.fullScreen(H5P.jQuery(this.container), this);
    }
    else {
      H5P.exitFullScreen();
    }
  }

  /**
   * Handle animation play state changed.
   * @param {boolean} isPlaying True if playing, else false.
   */
  handlePlayStateChanged(isPlaying) {
    this.buttonPlay.classList.toggle('playing', isPlaying);

    if (isPlaying) {
      this.buttonPlay.setAttribute(
        'aria-label', this.dictionary.get('a11y.buttonPause')
      );
    }
    else {
      this.buttonPlay.setAttribute(
        'aria-label', this.dictionary.get('a11y.buttonPlay')
      );
    }
  }

  /**
   * Handle model loaded.
   * @param {object} params Parameters.
   * @param {string[]} [params.availableAnimations] Available animation names.
   */
  handleModelLoaded(params) {
    if (params.availableAnimations.length) {
      this.buttonPlay.classList.remove('display-none');
    }

    this.trigger('resize');
  }

  /**
   * Get task title.
   * @returns {string} Title.
   */
  getTitle() {
    // H5P Core function: createTitle
    return H5P.createTitle(
      this.extras?.metadata?.title || ThreeDModel.DEFAULT_DESCRIPTION
    );
  }

  /**
   * Get description.
   * @returns {string} Description.
   */
  getDescription() {
    return ThreeDModel.DEFAULT_DESCRIPTION;
  }
}

/** @constant {string} Default description */
ThreeDModel.DEFAULT_DESCRIPTION = '3D Model';
