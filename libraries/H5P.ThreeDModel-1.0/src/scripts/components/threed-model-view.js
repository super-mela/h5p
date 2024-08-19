import '@google/model-viewer';
import  Util from '@services/util.js';
import './threed-model-view.scss';

export default class ThreeDModelView {

  constructor(params = {}, callbacks = {}) {
    this.params = Util.extend({
      annotations: []
    }, params);

    this.callbacks = Util.extend({
      onModelLoaded: () => {},
      onPlayStateChanged: () => {}
    }, callbacks);

    this.dom = this.buildDOM(this.params);

    this.setMaxSize(this.params.size);

    // Set model source, initiates loading the model
    this.dom.setAttribute('src', this.params.src);
  }

  /**
   * Build DOM.
   * @returns {HTMLElement} DOM.
   */
  getDOM() {
    return this.dom;
  }

  /**
   * Buid DOM.
   * @param {object} params Parameters.
   * @returns {HTMLElement} DOM.
   */
  buildDOM(params = {}) {
    // model-viewer is custom element expected by @google/model-viewer
    const dom = document.createElement('model-viewer');

    dom.classList.add('threed-model-view');
    if (params.className) {
      dom.classList.add(params.className);
    }

    dom.setAttribute('camera-controls', '');
    dom.setAttribute('disable-tap', '');

    if (params.poster) {
      dom.setAttribute('poster', params.poster);
    }

    if (params.alt) {
      dom.setAttribute('alt', params.alt);
    }
    dom.setAttribute('a11y', this.buildA11y(params.a11y));

    params.annotations.forEach((annotation, index) => {
      if (!annotation.surface || !annotation.text) {
        return;
      }

      const hotspot = document.createElement('div');
      hotspot.classList.add('hotspot');
      hotspot.setAttribute('slot', `hotspot-${index}`);
      hotspot.setAttribute('data-surface', annotation.surface);

      const label = document.createElement('span');
      label.classList.add('hotspot-label');
      label.textContent = annotation.text;
      hotspot.appendChild(label);

      dom.appendChild(hotspot);
    });

    dom.addEventListener('load', () => {
      this.updateAspectRatio();
      this.callbacks.onModelLoaded({
        availableAnimations: dom.availableAnimations ?? []
      });
    });

    dom.addEventListener('play', () => {
      this.isPlayingState = true;
      this.callbacks.onPlayStateChanged(true);
    });

    dom.addEventListener('pause', () => {
      this.isPlayingState = false;
      this.callbacks.onPlayStateChanged(false);
    });

    return dom;
  }

  /**
   * Show.
   */
  show() {
    this.dom.classList.remove('display-none');
  }

  /**
   * Hide.
   */
  hide() {
    this.dom.classList.add('display-none');
  }

  /**
   * Toggle play.
   */
  togglePlay() {
    if (this.isPlayingState) {
      this.dom.pause?.();
    }
    else {
      this.dom.play?.();
    }
  }

  /**
   * Set maximum size.
   * @param {object} size Size.
   * @param {number|undefined} size.maxWidth Maximum width or undefined to reset.
   * @param {number|undefined} size.maxHeight Maximum height or undefined to reset.
   */
  setMaxSize(size = {}) {
    this.dom.style.maxWidth = size.maxWidth ?? '';
    this.dom.style.maxHeight = size.maxHeight ?? '';
  }

  /**
   * Set model source.
   * @param {string} src Source object file path.
   */
  setModel(src) {
    if (typeof src !== 'string') {
      return;
    }

    if (
      !src.endsWith('.gltf') &&
      !src.endsWith('.glb')
    ) {
      return;
    }

    // Set model
    this.dom.setAttribute('src', src);
  }

  /**
   * Update the DOMs aspect ratio.
   * @param {object} ratio Aspect ratio.
   */
  updateAspectRatio(ratio) {
    let newAspectRatio;

    if (typeof ratio === 'number' && ratio > 0) {
      newAspectRatio = ratio;
    }

    if (!newAspectRatio) {
      // Try to get model dimensions for ratio
      const dimensions = this.getDimensions();
      if (dimensions?.x > 0 && dimensions?.y > 0) {
        newAspectRatio = dimensions.x / dimensions.y;
      }
    }

    if (!newAspectRatio) {
      return;
    }

    this.dom.style.aspectRatio = newAspectRatio;
  }

  /**
   * Get dimensions of DOM.
   * @returns {object|undefined} Dimensions.
   */
  getDimensions() {
    if (!this.dom.getDimensions) {
      return; // May not be ready yet
    }

    return this.dom.getDimensions();
  }

  /**
   * Build a11y attributes.
   * @param {object} params Parameters.
   * @returns {string} A11y attributes as string.
   */
  buildA11y(params = {}) {
    const a11yProps = [
      'back', 'front', 'left', 'right',
      'lower-back', 'lower-front', 'lower-left', 'lower-right',
      'upper-back', 'upper-front', 'upper-left', 'upper-right',
      'interaction-prompt'
    ];

    const a11yAttributes = {};
    a11yProps.forEach((prop) => {
      if (params[prop]) {
        a11yAttributes[prop] = params[prop];
      }
    });

    // Set the attribute on the DOM element with the new object
    return JSON.stringify(a11yAttributes);
  }
}
