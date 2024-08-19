import Util from '@services/util.js';
import './feedback.scss';

/**
 * Feedback button.
 */
export default class Feedback {
  /**
   * @class
   * @param {object} [params] Parameters.
   * @param {string} [params.chosenFeedback] Feedback when selected 'correct'.
   * @param {string} [params.notChosenFeedback] Feedback when selected 'incorrect'.
   */
  constructor(params = {}) {
    this.params = Util.extend({
      chosenFeedback: '',
      notChosenFeedback: ''
    }, params);

    this.dom = document.createElement('div');
    this.dom.classList.add('h5p-discrete-option-multi-choice-feedback');
    this.dom.classList.add('display-none');
  }

  /**
   * Get DOM.
   * @returns {HTMLElement} Feedback DOM.
   */
  getDOM() {
    return this.dom;
  }

  /**
   * Show.
   * @param {boolean|null} selected Boolean for selected answer, null for none.
   */
  show(selected) {
    if (typeof selected !== 'boolean') {
      return;
    }

    if (selected && this.params.chosenFeedback) {
      this.dom.innerHTML = this.params.chosenFeedback;
    }
    else if (!selected && this.params.notChosenFeedback) {
      this.dom.innerHTML = this.params.notChosenFeedback;
    }
    else {
      return;
    }

    this.dom.classList.remove('display-none');
  }

  /**
   * Hide.
   */
  hide() {
    this.dom.classList.add('display-none');
    this.dom.innerHTML = '';
  }
}
