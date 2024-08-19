import Util from '@services/util.js';
import Panel from '@components/panel-list/panel/panel.js';
import './panel-list.scss';

/**
 * Panel list.
 */
export default class PanelList {
  /**
   * @class
   * @param {object} [params] Parameters.
   * @param {object[]} [params.options] Options for panels.
   * @param {object} [callbacks] Callbacks.
   * @param {function} [callbacks.onAnswered] Option was answered.
   */
  constructor(params = {}, callbacks = {}) {
    this.params = Util.extend({
      options: []
    }, params);

    // Set uuid for each option
    this.params.options = this.params.options.map((option) => {
      option.uuid = `panel-${H5P.createUUID()}`;
      return option;
    });

    this.callbacks = Util.extend({
      onAnswered: () => {},
      onConfidenceChanged: () => {}
    }, callbacks);

    this.attachedPanels = [];

    this.dom = document.createElement('ul');
    this.dom.classList.add('h5p-discrete-option-multi-choice-panel-list');
    this.dom.addEventListener('keydown', (event) => {
      this.handleKeydown(event);
    });

    this.panels = params.options.map((option, index) => {
      return new Panel(
        {
          dictionary: this.params.dictionary,
          options: option
        },
        {
          onAnswered: (score) => {
            this.handleAnswered(index, score);
          },
          onConfidenceChanged: (confidenceIndex) => {
            this.handleConfidenceChanged(index, confidenceIndex);
          },
          onGotFocus: () => {
            this.handlePanelGotFocus(index);
          }
        }
      );
    });

    this.attachPanel(0, false);
    this.enablePanel(0);
  }

  /**
   * Get DOM.
   * @returns {HTMLElement} Panel list DOM.
   */
  getDOM() {
    return this.dom;
  }

  /**
   * Show feedback.
   * @param {object} [params] Parameters.
   * @param {(boolean|null)[]} params.selected Selected answers.
   */
  showFeedback(params = {}) {
    this.panels.forEach((panel, index) => {
      panel.showFeedback({ selected: params.selected[index] });
    });
  }

  /**
   * Show results.
   * @param {H5P.Question.ScorePoints} [scorePoints] Score points.
   */
  showResults(scorePoints) {
    this.panels.forEach((panel, index) => {
      if (this.params.options[index].isOvertime) {
        return;
      }

      const wasAnswerCorrect =
        this.params.options[index].correct ===
        this.params.options[index].userAnswer;

      // Mark selected answer option correctness
      panel.markAnswer(
        wasAnswerCorrect,
        scorePoints?.getElement(wasAnswerCorrect)
      );
    });
  }

  /**
   * Show solutions.
   */
  showSolutions() {
    this.showResults();

    this.panels.forEach((panel, index) => {
      // Mark expected answer option
      const markOptions = (this.params.options[index].correct) ?
        { correct: true } :
        { incorrect: true };
      panel.markOption(markOptions);
    });
  }

  /**
   * Handle keydown. Implements recommended ARIA pattern
   * @param {KeyboardEvent} event Keyboard event.
   */
  handleKeydown(event) {
    if (event.code === 'ArrowUp' || event.code === 'ArrowLeft') {
      if (![...this.dom.childNodes].includes(event.target)) {
        return; // Only care about panels
      }

      if (this.currentFocusPanel > 0) {
        this.currentFocusPanel--;
        this.focus(this.currentFocusPanel);
      }
    }
    else if (event.code === 'ArrowDown' || event.code === 'ArrowRight') {
      if (![...this.dom.childNodes].includes(event.target)) {
        return; // Only care about panels
      }

      if (this.currentFocusPanel < this.dom.childNodes.length - 1) {
        this.currentFocusPanel++;
        this.focus(this.currentFocusPanel);
      }
    }
    else if (event.code === 'Home') {
      if (![...this.dom.childNodes].includes(event.target)) {
        return; // Only care about panels
      }

      this.focus(0);
    }
    else if (event.code === 'End') {
      if (![...this.dom.childNodes].includes(event.target)) {
        return; // Only care about panels
      }

      this.focus(this.dom.childNodes.length - 1);
    }
    else if (event.code === 'Escape') {
      this.panels.forEach((panel) => {
        panel.collapse();
      });
      this.focus(this.currentFocusPanel);
    }
    else {
      return;
    }

    event.preventDefault();
  }

  /**
   * Handle user answered.
   * @param {number} index Index of answer option.
   * @param {boolean} userAnswer User answer.
   */
  handleAnswered(index, userAnswer) {
    this.callbacks.onAnswered(index, userAnswer);
  }

  /**
   * Handle user changed confidence.
   * @param {number} index Index of answer option.
   * @param {boolean} confidenceIndex Confidence index.
   */
  handleConfidenceChanged(index, confidenceIndex) {
    this.callbacks.onConfidenceChanged(index, confidenceIndex);
  }

  /**
   * Handle panel received focus.
   * @param {number} index Index of panel that got focus.
   */
  handlePanelGotFocus(index) {
    this.currentFocusPanel = index;
  }

  /**
   * Show panel.
   * @param {number} index Index of panel to show.
   * @param {boolean} animate If true, animate.
   */
  showPanel(index, animate) {
    if (!this.panelExists(index)) {
      return;
    }

    this.panels[index].show({ animate: animate });
  }

  /**
   * Hide panel.
   * @param {number} index Index of panel to hide.
   */
  hidePanel(index) {
    if (!this.panelExists(index)) {
      return;
    }

    this.panels[index].hide();
  }

  /**
   * Show all panels.
   */
  showAll() {
    for (let index = 0; index < this.panels.length; index++) {
      this.showPanel(index);
    }
  }

  /**
   * Enable panel.
   * @param {number} index Index of panel to enable.
   */
  enablePanel(index) {
    if (!this.panelExists(index)) {
      return;
    }

    this.panels[index].enable();
  }

  /**
   * Disable panel.
   * @param {number} index Index of panel to disable.
   */
  disablePanel(index) {
    if (!this.panelExists(index)) {
      return;
    }

    this.panels[index].disable();
  }

  /**
   * Disable all panels.
   */
  disableAll() {
    for (let index = 0; index < this.panels.length; index++) {
      this.disablePanel(index);
    }
  }

  /**
   * Focus panel.
   * @param {number} index Index of panel to give focus to.
   * @param {boolean} [firstChild] If true, focus first child if possible.
   */
  focus(index, firstChild = false) {
    if (!this.panelExists(index)) {
      return;
    }

    this.panels[index].focus({ firstChild: firstChild });
  }

  /**
   * Attach all options.
   */
  attachAllOptions() {
    const alreadyAttachedCount = this.dom.childNodes.length;

    this.panels.forEach((panel, index) => {
      if (index < alreadyAttachedCount) {
        return;
      }

      this.dom.append(this.panels[index].getDOM());
      this.panels[index].disable();
    });

    this.params.globals.get('resize')();
  }

  /**
   * Attach option.
   * @param {number} index Index of option to attach.
   * @param {boolean} animate If true, animate.
   */
  attachPanel(index, animate) {
    if (!this.panelExists(index)) {
      return;
    }

    this.dom.append(this.panels[index].getDOM());
    this.showPanel(index, animate);

    this.params.globals.get('resize')();
  }

  /**
   * Determine whether panel exists.
   * @param {number} index Index of panel to check for.
   * @returns {boolean} True if panel exists. Else false.
   */
  panelExists(index) {
    return (
      typeof index === 'number' &&
      index >= 0 && index < this.panels.length
    );
  }

  /**
   * Reset.
   * @param {object} [params] Parameters.
   */
  reset(params = {}) {
    params = Util.extend({
      previousState: []
    }, params);

    this.panels.forEach((panel, index) => {
      panel.reset({ previousState: params.previousState?.[index] });
    });
  }
}
