import Util from '@services/util.js';
import './option-button.scss';

/**
 * Option button.
 */
export default class OptionButton {
  /**
   * @class
   * @param {object} [params] Parameters.
   * @param {object} [callbacks] Callbacks.
   * @param {function} [callbacks.onClicked] Called on button clicked.
   * @param {function} [callbacks.onGotFocus] Panel element got gocus.
   */
  constructor(params = {}, callbacks = {}) {
    this.params = Util.extend({}, params);

    this.callbacks = Util.extend({
      onClicked: () => {},
      onGotFocus: () => {}
    }, callbacks);

    this.dom = document.createElement('button');
    this.dom.classList.add('h5p-discrete-option-multi-choice-option-button');
    this.dom.classList.add(this.params.type);
    this.dom.setAttribute(
      'aria-label',
      this.params.dictionary
        .get('a11y.markAnswerAs')
        .replace(
          /@status/, this.params.dictionary.get('a11y.' + this.params.type)
        )
    );
    this.dom.setAttribute('disabled', 'disabled');

    this.dom.addEventListener('click', () => {
      this.callbacks.onClicked();
    });

    this.dom.addEventListener('focus', () => {
      this.callbacks.onGotFocus();
    });
  }

  /**
   * Get DOM.
   * @returns {HTMLElement} Button DOM.
   */
  getDOM() {
    return this.dom;
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

  /**
   * Select.
   */
  select() {
    this.dom.classList.add('selected');
  }

  /**
   * Unselect.
   */
  unselect() {
    this.dom.classList.remove('selected');
  }

  /**
   * Mark answer.
   * @param {boolean|null} correct True: correct. False: incorrect. Null: reset.
   * @param {HTMLElement|undefined} [scorePoints] Score points.
   */
  markAnswer(correct, scorePoints) {
    if (typeof correct !== 'boolean' && correct !== null) {
      return;
    }

    this.dom.classList.remove('answer-incorrect');
    this.dom.classList.remove('answer-correct');
    this.dom.innerHTML = '';

    if (correct === true) {
      this.dom.classList.add('answer-correct');
    }
    else if (correct === false) {
      this.dom.classList.add('answer-incorrect');
    }

    if (correct !== null && scorePoints) {
      this.dom.append(scorePoints);
    }
  }

  /**
   * Mark option.
   * @param {boolean|null} correct True: correct. False: incorrect. Null: reset.
   */
  markOption(correct) {
    if (typeof correct !== 'boolean' && correct !== null) {
      return;
    }

    this.dom.classList.remove('option-incorrect');
    this.dom.classList.remove('option-correct');

    if (correct === true) {
      this.dom.classList.add('option-correct');
    }
    else if (correct === false) {
      this.dom.classList.add('option-incorrect');
    }
  }

  /**
   * Reset.
   */
  reset() {
    this.markAnswer(null);
    this.markOption(null);

    this.dom.classList.remove('selected');
  }
}
