import Util from '@services/util.js';
import Option from './option.js';
import Feedback from './feedback.js';
import './panel.scss';

/**
 * Panel list.
 */
export default class Panel {
  /**
   * @class
   * @param {object} [params] Parameters.
   * @param {object} params.options Answer options.
   * @param {object} [callbacks] Callbacks.
   * @param {function} [callbacks.onAnswered] Option was answered.
   * @param {function} [callbacks.onConfidenceChanged] Confidence changed.
   * @param {function} [callbacks.onGotFocus] Panel element got gocus.
   */
  constructor(params = {}, callbacks = {}) {
    this.params = Util.extend({}, params);

    this.callbacks = Util.extend({
      onAnswered: () => {},
      onConfidenceChanged: () => {},
      onGotFocus: () => {}
    }, callbacks);

    const optionUUID = `option-${H5P.createUUID()}`;

    /*
     * Implementing 'Disclosure' pattern (amended for disabled buttons)
     * @see https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/
     */
    this.dom = document.createElement('li');
    this.dom.classList.add('h5p-discrete-option-multi-choice-panel');
    this.dom.classList.add('animate');
    this.dom.setAttribute('role', 'button');
    this.dom.setAttribute('tabindex', '0');
    this.dom.setAttribute('aria-controls', optionUUID);

    this.dom.addEventListener('keydown', (event) => {
      this.handleKeydown(event);
    });

    this.dom.addEventListener('focus', () => {
      this.callbacks.onGotFocus();
    });

    const question = document.createElement('div');
    question.classList.add('h5p-discrete-option-multi-choice-question');
    this.dom.appendChild(question);

    this.option = new Option(
      {
        dictionary: this.params.dictionary,
        uuid: optionUUID,
        text: params.options.text,
        correct: params.options.correct,
        ...(
          Object.keys(params.options.selector || {}).length &&
          { selector: params.options.selector }
        ),
        confidenceIndex: params.options.confidenceIndex
      },
      {
        onAnswered: (score) => {
          this.callbacks.onAnswered(score);
        },
        onConfidenceChanged: (confidenceIndex) => {
          this.callbacks.onConfidenceChanged(confidenceIndex);
        },
        onGotFocus: () => {
          this.callbacks.onGotFocus();
        }
      }
    );
    question.append(this.option.getDOM());

    this.feedback = new Feedback({
      chosenFeedback: params.options.hintAndFeedback.chosenFeedback,
      notChosenFeedback: params.options.hintAndFeedback.notChosenFeedback
    });
    this.dom.append(this.feedback.getDOM());
  }

  /**
   * Get DOM.
   * @returns {HTMLElement} Panel list DOM.
   */
  getDOM() {
    return this.dom;
  }

  /**
   * Focus option.
   * @param {object} [params] Parameters.
   * @param {boolean} [params.firstChild] If true, try to focus first child.
   */
  focus(params = {}) {
    if (params.firstChild) {
      this.option.focus();
    }
    else {
      this.dom.focus();
    }
  }

  /**
   * Show feedback.
   * @param {object} [params] Parameters.
   * @param {boolean|null} params.selected Selected option.
   */
  showFeedback(params = {}) {
    this.feedback.show(params.selected);
  }

  /**
   * Hide feedback.
   */
  hideFeedback() {
    this.feedback.hide();
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

    this.option.markAnswer(correct, scorePoints);
  }

  /**
   * Mark option.
   * @param {object} [params] Parameters.
   */
  markOption(params = {}) {
    this.option.markOption(params);
  }

  /**
   * Expand.
   */
  expand() {
    this.isExpanded = true;
    this.dom.setAttribute('aria-expanded', 'true');
    this.option.enable();
  }

  /**
   * Collapse.
   */
  collapse() {
    this.isExpanded = false;
    this.dom.setAttribute('aria-expanded', 'false');
    this.option.disable();
  }

  /**
   * Show.
   * @param {object} [params] Parameters.
   * @param {boolean} [params.animate] If true, animate.
   */
  show(params = {}) {
    this.dom.classList.remove('display-none');

    if (params.animate) {
      window.requestAnimationFrame(() => {
        this.dom.classList.remove('animate');
      });
    }
    else {
      this.dom.classList.remove('animate');
    }
  }

  /**
   * Hide.
   */
  hide() {
    this.dom.classList.add('display-none');
  }

  /**
   * Enable.
   */
  enable() {
    this.isDisabled = false;
    this.expand();
  }

  /**
   * Disable.
   */
  disable() {
    this.isDisabled = true;
    this.collapse();
  }

  /**
   * Reset.
   * @param {object} [params] Parameters.
   */
  reset(params = {}) {
    params = Util.extend({
      previousState: {}
    }, params);

    this.hideFeedback();
    this.option.reset({ previousState: params.previousState });
  }

  /**
   * Handle keydown.
   * @param {KeyboardEvent} event KeyboardEvent.
   */
  handleKeydown(event) {
    if (event.target !== this.dom) {
      return; // Do not mess with childrens' listeners
    }

    if (event.code === 'Space' || event.key === 'Enter') {
      if (this.isDisabled) {
        this.params.globals.get('read')(
          this.params.dictionary.get('a11y.panelNotExpandable')
        );
        return;
      }

      if (this.isExpanded) {
        this.collapse();
      }
      else {
        this.expand();
      }
    }
    else {
      return;
    }

    event.preventDefault();
  }
}
