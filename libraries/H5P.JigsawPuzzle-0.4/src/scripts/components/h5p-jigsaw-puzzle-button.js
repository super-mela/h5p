import './h5p-jigsaw-puzzle-button.scss';

// Import required classes
import Util from '@services/util.js';

/** Class representing the content */
export default class JigsawPuzzleButton {
  /**
   * @class
   * @param {object} params Parameter from editor.
   * @param {object} [callbacks] Callbacks.
   */
  constructor(params, callbacks) {
    // Set missing params
    this.params = Util.extend({
      a11y: {
        active: '',
        disabled: '',
        inactive: ''
      },
      active: false,
      classes: [],
      disabled: false,
      hidden: false,
      type: 'pulse',
      noTabWhenDisabled: false
    }, params || {});

    if (!Array.isArray(this.params.classes)) {
      this.params.classes = [this.params.classes];
    }

    if (this.params.type === 'pulse') {
      if (!this.params.a11y.inactive) {
        this.params.a11y.inactive = this.params.a11y.active || '';
      }
      if (!this.params.a11y.active) {
        this.params.a11y.active = this.params.a11y.inactive || '';
      }
    }

    this.active = this.params.active;
    this.disabled = this.params.disabled;
    this.visible = !this.params.hidden;

    // Sanitize callbacks
    this.callbacks = Util.extend({
      onClick: () => {}
    }, callbacks);

    // Button
    this.button = document.createElement('button');

    if (this.params.classes) {
      this.params.classes.forEach((className) => {
        this.button.classList.add(className);
      });
    }
    this.button.setAttribute('aria-pressed', this.params.active);
    this.button.setAttribute('tabindex', '0');

    if (this.params.active === true) {
      this.activate();
    }
    else {
      this.deactivate();
    }

    if (this.params.disabled === true) {
      this.disable();
    }
    else {
      this.enable();
    }

    if (this.params.hidden === true) {
      this.hide();
    }
    else {
      this.show();
    }

    this.button.addEventListener('click', (event) => {
      if (this.disabled) {
        return;
      }

      if (this.params.type === 'toggle') {
        this.toggle();
      }
      this.callbacks.onClick(event);
    });
  }

  /**
   * Return the DOM for this class.
   * @returns {HTMLElement} DOM for this class.
   */
  getDOM() {
    return this.button;
  }

  /**
   * Show button.
   */
  show() {
    this.button.classList.remove('h5p-jigsaw-puzzle-display-none');

    this.visible = true;
  }

  /**
   * Hide button.
   */
  hide() {
    this.button.classList.add('h5p-jigsaw-puzzle-display-none');

    this.visible = false;
  }

  /**
   * Enable button.
   */
  enable() {
    this.disabled = false;

    this.button.classList.remove('h5p-jigsaw-puzzle-button-disabled');
    if (this.params.noTabWhenDisabled) {
      this.button.setAttribute('tabindex', 0);
    }

    if (this.active) {
      this.activate();
    }
    else {
      this.deactivate();
    }
  }

  /**
   * Disable button.
   */
  disable() {
    this.button.classList.add('h5p-jigsaw-puzzle-button-disabled');
    this.button.setAttribute('aria-label', this.params.a11y.disabled);
    if (this.params.noTabWhenDisabled) {
      this.button.setAttribute('tabindex', -1);
    }

    this.disabled = true;
  }

  /**
   * Activate button.
   */
  activate() {
    if (this.disabled) {
      return;
    }

    if (this.params.type === 'toggle') {
      this.button.classList.add('h5p-jigsaw-puzzle-button-active');
      this.button.setAttribute('aria-pressed', true);
    }

    this.button.setAttribute('aria-label', this.params.a11y.active);

    this.active = true;
  }

  /**
   * Deactivate button.
   */
  deactivate() {
    if (this.disabled) {
      return;
    }

    this.active = false;

    if (this.params.type === 'toggle') {
      this.button.classList.remove('h5p-jigsaw-puzzle-button-active');
      this.button.setAttribute('aria-pressed', false);
    }

    this.button.setAttribute('aria-label', this.params.a11y.inactive);
  }

  /**
   * Toggle active state.
   * @param {boolean} active If true, force active; if false, force inactive.
   */
  toggle(active) {
    if (this.disabled) {
      return;
    }

    active = (typeof active === 'boolean') ? active : !this.active;

    if (active) {
      this.activate();
    }
    else {
      this.deactivate();
    }
  }

  /**
   * Determine whether button is active.
   * @returns {boolean} True, if button is active, else false.
   */
  isActive() {
    return this.active;
  }

  /**
   * Determine whether button is disabled.
   * @returns {boolean} True, if button is disabled, else false.
   */
  isDisabled() {
    return this.disabled;
  }

  isVisible() {

  }
}
