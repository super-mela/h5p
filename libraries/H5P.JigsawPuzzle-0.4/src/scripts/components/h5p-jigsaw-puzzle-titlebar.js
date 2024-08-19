import './h5p-jigsaw-puzzle-titlebar.scss';

// Import required classes
import JiggsawPuzzleButton from './h5p-jigsaw-puzzle-button.js';
import Util from '@services/util.js';

/** Class representing the content */
export default class JiggsawPuzzleTitlebar {
  /**
   * @class
   * @param {object} params Parameter from editor.
   * @param {string} params.title Title.
   * @param {string} params.dateString Date.
   * @param {object} params.a11y Accessibility strings.
   * @param {string} params.a11y.buttonToggleActive Text for inactive button.
   * @param {string} params.a11y.buttonToggleInactive Text for inactive button.
   * @param {object} callbacks Callbacks.
   * @param {function} callbacks.handlebuttonToggle Handles click.
   */
  constructor(params = {}, callbacks = {}) {
    // Set missing params
    this.params = Util.extend({
      a11y: {
        buttonFullscreenEnter: 'Enter fullscreen mode',
        buttonFullscreenExit: 'Exit fullscreen mode',
        buttonAudioMute: 'Mute music',
        buttonAudioUnmute: 'Unmute music'
      }
    }, params);

    // Set missing callbacks
    this.callbacks = Util.extend({
      onButtonFullscreenClicked: () => {
        console.warn('A function for handling the fullscreen button is missing.');
      },
      onButtonAudioClicked: () => {
        console.warn('A function for handling the audio button is missing.');
      }
    }, callbacks);

    this.numberVisibleButtons = 0;

    this.titleBar = document.createElement('div');
    this.titleBar.classList.add('h5p-jigsaw-puzzle-title-bar');

    // Audio button
    this.buttonAudio = new JiggsawPuzzleButton(
      {
        type: 'toggle',
        classes: [
          'h5p-jigsaw-puzzle-button',
          'h5p-jigsaw-puzzle-button-audio'
        ],
        disabled: true,
        noTabWhenDisabled: true,
        hidden: true,
        a11y: {
          active: this.params.a11y.buttonAudioMute,
          inactive: this.params.a11y.buttonAudioUnmute,
          disabled: this.params.a11y.disabled
        }
      },
      {
        onClick: ((event) => {
          this.callbacks.onButtonAudioClicked(event);
        })
      }
    );
    this.titleBar.appendChild(this.buttonAudio.getDOM());

    // Fullscreen button
    this.buttonFullscreen = new JiggsawPuzzleButton(
      {
        type: 'toggle',
        classes: [
          'h5p-jigsaw-puzzle-button',
          'h5p-jigsaw-puzzle-button-fullscreen'
        ],
        disabled: true,
        noTabWhenDisabled: true,
        hidden: true,
        a11y: {
          active: this.params.a11y.buttonFullscreenExit,
          inactive: this.params.a11y.buttonFullscreenEnter,
          disabled: this.params.a11y.disabled
        }
      },
      {
        onClick: (() => {
          this.callbacks.onButtonFullscreenClicked();
        })
      }
    );
    this.titleBar.appendChild(this.buttonFullscreen.getDOM());
  }

  /**
   * Return the DOM for this class.
   * @returns {HTMLElement} DOM for this class.
   */
  getDOM() {
    return this.titleBar;
  }

  /**
   * Show fullscreen button.
   */
  showFullscreenButton() {
    this.buttonFullscreen.show();
    this.numberVisibleButtons++;

    if (!this.visible) {
      this.show();
    }
  }

  /**
   * Show audio button.
   */
  showAudioButton() {
    this.buttonAudio.show();
    this.numberVisibleButtons++;

    if (!this.visible) {
      this.show();
    }
  }

  /**
   * Disable fullscreen button.
   */
  disableFullscreenButton() {
    this.buttonFullscreen.disable();
  }

  /**
   * Disable audio button.
   */
  disableAudioButton() {
    this.buttonAudio.disable();
  }

  /**
   * Enable fullscreen button.
   */
  enableFullscreenButton() {
    this.buttonFullscreen.enable();
  }

  /**
   * Enable audio button.
   */
  enableAudioButton() {
    this.buttonAudio.enable();
  }

  /**
   * Get audio button state.
   * @returns {boolean} True if audio button is active.
   */
  getAudioButtonState() {
    return this.buttonAudio.isActive();
  }

  /**
   * Set fullscreen button state.
   * @param {string|boolean} state enter|false for enter, exit|true for exit.
   */
  toggleFullscreenButton(state) {
    if (typeof state === 'string') {
      if (state === 'enter') {
        state = false;
      }
      else if (state === 'exit') {
        state = true;
      }
    }

    if (typeof state === 'boolean') {
      this.buttonFullscreen.toggle(state);
    }
  }

  /**
   * Set audio button state.
   * @param {string|boolean} state mute|false for mute, unmute|true for unmute.
   */
  toggleAudioButton(state) {
    if (typeof state === 'string') {
      if (state === 'mute') {
        state = false;
      }
      else if (state === 'unmute') {
        state = true;
      }
    }

    if (typeof state === 'boolean') {
      this.buttonAudio.toggle(state);
    }
  }

  /**
   * Determine whether titlebar has visible buttons.
   * @returns {boolean} True, if titltbar has visible buttons, else false.
   */
  hasVisibleButtons() {
    return this.numberVisibleButtons > 0;
  }

  /**
   * Show titlebar.
   */
  show() {
    this.titleBar.classList.remove('display-none');
    this.visible = true;
  }

  /**
   * Hide titlebar.
   */
  hide() {
    this.titleBar.classList.add('display-none');
    this.false = true;
  }
}
