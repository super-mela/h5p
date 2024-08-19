import Util from '@services/util.js';
import './cycle-button.scss';

/**
 * Cycle button.
 */
export default class CycleButton {
  /**
   * @class
   * @param {object} [params] Parameters.
   * @param {object} [params.selector] Options for confidence selector.
   * @param {number} [params.confidenceIndex] Index of chosen confidence option.
   * @param {object} [callbacks] Callbacks.
   * @param {function} [callbacks.onClicked] On clicked handler.
   * @param {function} [callbacks.onGotFocus] Panel element got gocus.
   */
  constructor(params = {}, callbacks = {}) {
    this.params = Util.extend({
      selector: {},
      confidenceIndex: 0
    }, params);

    this.callbacks = Util.extend({
      onClicked: () => {},
      onGotFocus: () => {}
    }, callbacks);

    this.dom = document.createElement('button');
    this.dom.classList.add('h5p-discrete-option-multi-choice-cycle-button');
    this.dom.addEventListener('click', () => {
      this.select( (this.selectedIndex + 1) % this.params.selector.options.length );
      this.callbacks.onClicked(this.selectedIndex);
    });
    this.dom.addEventListener('focus', () => {
      this.callbacks.onGotFocus();
    });

    this.select(this.params.confidenceIndex);
  }

  /**
   * Get DOM.
   * @returns {HTMLElement} DOM.
   */
  getDOM() {
    return this.dom;
  }

  /**
   * Get current value.
   * @returns {string} current value.
   */
  getCurrentValue() {
    return this.params.selector.options[this.selectedIndex].value;
  }

  /**
   * Focus.
   */
  focus() {
    if (this.isDisabled) {
      return;
    }

    this.dom.focus();
  }

  /**
   * Select option.
   * @param {number} index Index of option to choose.
   */
  select(index) {
    if (!this.params.selector) {
      return;
    }

    if (
      typeof index !== 'number' ||
      index < 0 || index > this.params.selector.options.length - 1
    ) {
      return;
    }

    this.selectedIndex = index;
    this.dom.innerHTML = this.params.selector.options[this.selectedIndex].label;
    this.dom.setAttribute(
      'aria-label',
      `Change confidence. Current value: ${this.params.selector.options[this.selectedIndex].value}`
    );
  }

  /**
   * Enable.
   */
  enable() {
    this.isDisabled = false;
    this.dom.removeAttribute('disabled');
  }

  /**
   * Disable.
   */
  disable() {
    this.isDisabled = true;
    this.dom.setAttribute('disabled', 'disabled');
  }
}
