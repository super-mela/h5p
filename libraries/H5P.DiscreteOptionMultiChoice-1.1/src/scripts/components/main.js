import Util from '@services/util.js';
import PanelList from '@components/panel-list/panel-list.js';
import { VIEW_STATES } from '@scripts/h5p-discrete-option-multi-choice';

/**
 * Main DOM component incl. main controller.
 */
export default class Main {
  /**
   * @class
   * @param {object} [params] Parameters.
   * @param {object} [callbacks] Callbacks.
   * @param {function} [callbacks.onAnswerGiven] User gave answer.
   * @param {function} [callbacks.onGameOver] Game is over.
   */
  constructor(params = {}, callbacks = {}) {
    this.params = Util.extend({
    }, params);

    this.callbacks = Util.extend({
      onAnswered: () => {},
      onGameOver: () => {}
    }, callbacks);

    this.dom = document.createElement('div');
    this.dom.classList.add('h5p-discrete-option-multi-choice-main');

    this.answerOptionsParams = this.params.globals.get('params').answerOptions;
    this.mode = this.params.globals.get('params').behaviour.mode;
    this.confidenceLevels = this.params.globals
      .get('params').behaviour.confidenceLevels
      .split(',')
      .map((level) => parseInt(level) / 100);

    this.currentPanelIndex = 0;
  }

  /**
   * Get DOM.
   * @returns {HTMLElement} Content DOM.
   */
  getDOM() {
    return this.dom;
  }

  /**
   * Focus a panel.
   * @param {number} index Index of panel to focus.
   */
  focusPanel(index) {
    this.panelList.focus(index);
  }

  /**
   * Handle user changed confidence.
   * @param {number} index Index of confidence level.
   * @param {boolean} confidenceIndex Index of confidence.
   */
  handleConfidenceChanged(index, confidenceIndex) {
    this.answerOptions[index].confidenceIndex = confidenceIndex;
  }

  /**
   * Handle user answered true/false for an option.
   * @param {object} [params] Parameters.
   * @param {number} params.index Index of the option.
   * @param {boolean} params.userAnswer Answer given by user.
   * @param {boolean} [params.quiet] If false, announce change.
   * @param {boolean} [params.focus] If true, focus next panel.
   */
  handleAnswered(params = {}) {
    params.quiet = params.quiet ?? true;

    this.panelList.disablePanel(this.currentPanelIndex);

    if (this.params.globals.get('params').behaviour.oneItemAtATime) {
      this.panelList.hidePanel(this.currentPanelIndex);
    }

    const confidence = (this.mode === 'allOptionsWeighted') ?
      this.confidenceLevels[this.answerOptions[params.index].confidenceIndex] :
      1;

    this.answerOptions[params.index].userAnswer = params.userAnswer;
    this.answerOptions[params.index].isOvertime = this.isOvertime ?? false;

    let scoreDelta = 0;

    if (this.isOvertime) {
      scoreDelta = 0;
    }
    else if (this.answerOptions[params.index].correct !== params.userAnswer) {
      scoreDelta = -1 * confidence;
    }
    else if (this.answerOptions[params.index].correct) {
      scoreDelta = 1 * confidence;
    }
    else if (this.mode !== 'standard') {
      scoreDelta = 1 * confidence;
    }

    this.callbacks.onAnswerGiven(scoreDelta, params.quiet);

    if (
      this.currentPanelIndex >= this.answerOptions.length - 1 ||
      this.mode === 'standard' && this.isOvertime
    ) {
      // Award 1 point if all answer options are wrong and none was chosen
      if (
        this.mode !== 'standard' &&
        this.answerOptions.every((option) => {
          return option.correct === option.userAnswer && !option.correct;
        })
      ) {
        this.callbacks.onAnswerGiven(1, params.quiet);
      }

      this.callbacks.onGameOver({ quiet: params.quiet }); // Nothing more to show
      return;
    }

    // Check whether continuing is possible in standard mode
    if (this.mode === 'standard') {
      if (scoreDelta < 0) {
        this.callbacks.onGameOver({ quiet: params.quiet }); // Wrong answer
        return;
      }

      // Randomly add one more option on correct answer to distract
      if (scoreDelta === 1 && Math.random() < 0.5) {
        this.callbacks.onGameOver({ quiet: params.quiet }); // Done
        return;
      }

      if (scoreDelta === 1) {
        this.isOvertime = true;
      }
    }

    // Show next panel
    this.currentPanelIndex++;
    this.panelList.attachPanel(this.currentPanelIndex, true);
    this.panelList.enablePanel(this.currentPanelIndex);

    if (!params.quiet) {
      const message = Util.stripHTML(
        this.params.dictionary.get('a11y.panelAdded')
          .replace(/@option/, this.answerOptions[this.currentPanelIndex].text)
      );

      this.params.globals.get('read')(message);
    }

    // Focus first option of next panel
    if (params.focus) {
      window.setTimeout(() => {
        this.panelList.focus(this.currentPanelIndex, true);
      }, 10); // Prevent jumping before iframe resize and let screenreader read
    }
  }

  /**
   * Show results.
   * @param {object} [params] Parameters.
   */
  showResults(params = {}) {
    this.panelList.showAll();

    this.scorePoints = this.scorePoints || new H5P.Question.ScorePoints();
    this.panelList.showResults(
      params.showScores ? this.scorePoints : null
    );
  }

  /**
   * Show feedback.
   */
  showFeedback() {
    this.panelList.showFeedback(
      { selected: this.answerOptions.map((option) => option.userAnswer) }
    );
  }

  /**
   * Show all panels.
   */
  showAllPanels() {
    this.panelList.showAll();
    this.panelList.attachAllOptions();
  }

  /**
   * Show solutions.
   */
  showSolutions() {
    this.resultsMessage?.remove();

    this.panelList.showAll();
    this.panelList.disableAll();
    this.panelList.showSolutions();
  }

  /**
   * Append message for results.
   */
  appendResultsMessage() {
    this.resultsMessage = document.createElement('p');
    this.resultsMessage.classList.add(
      'h5p-discrete-option-multi-choice-message'
    );
    this.resultsMessage.innerText = this.params.dictionary.get(
      'l10n.yourResults'
    );

    this.dom.append(this.resultsMessage);
  }

  /**
   * Set view state.
   * @param {string|number} state State to be set.
   */
  setViewState(state) {
    if (
      typeof state === 'string' &&
      VIEW_STATES[state] !== undefined
    ) {
      this.viewState = VIEW_STATES[state];
    }
    else if (
      typeof state === 'number' &&
      Object.values(VIEW_STATES).includes(state)
    ) {
      this.viewState = state;
    }
    else {
      return;
    }

    this.toggleIntroductionVisibility();
  }

  /**
   * Toggle visibility of introduction.
   * @param {boolean} [state] State to set.
   */
  toggleIntroductionVisibility(state) {
    if (typeof state !== 'boolean') {
      // Hide introduction if showing results
      state = Object.entries(VIEW_STATES).find((pair) => {
        return pair[1] === this.viewState;
      })[0] === 'results';
    }

    this.dom.closest('.h5p-discrete-option-multi-choice')
      ?.querySelector('.h5p-question-introduction')
      ?.classList.toggle('display-none', state);
  }

  /**
   * Reset.
   * @param {object} [params] Parameters.
   */
  reset(params = {}) {
    params = Util.extend({
      previousState: {}
    }, params);

    this.dom.innerHTML = '';

    this.currentPanelIndex = 0;

    this.isOvertime = false;

    const behavior = this.params.globals.get('params').behaviour;

    // Set order of answer options
    this.order = params.previousState.order ??
      [...Array(this.answerOptionsParams.length).keys()];

    if (behavior.randomAnswers && !params.previousState.order) {
      this.order = Util.shuffleArray(this.order);
    }

    // Build selector parameters
    let selector = null;
    if (behavior.mode === 'allOptionsWeighted') {
      const labels = behavior.confidenceLevels
        .split(',')
        .map((value) => `${value.trim()}&nbsp;%`);

      const values = labels.map((value) => {
        return value.replace(/&nbsp;/, ' ');
      });

      selector = { options: [] };
      for (let i = 0; i < values.length; i++) {
        selector.options.push({
          value: values[i],
          label: labels?.[i] ?? values[i]
        });
      }
    }

    this.answerOptions = [];

    this.order.forEach((position, index) => {
      const option = this.answerOptionsParams[position];

      option.userAnswer =
        params.previousState.answers?.[index].userAnswer ?? null;

      option.confidenceIndex =
        params.previousState.answers?.[index].confidenceIndex ?? 0;

      option.selector = selector;

      this.answerOptions.push(option);
    });

    this.panelList = new PanelList(
      {
        dictionary: this.params.dictionary,
        globals: this.params.globals,
        options: this.answerOptions
      },
      {
        onAnswered: (index, userAnswer) => {
          this.handleAnswered({
            index: index,
            userAnswer: userAnswer,
            quiet: false,
            focus: true
          });
        },
        onConfidenceChanged: (index, confidenceIndex) => {
          this.handleConfidenceChanged(index, confidenceIndex);
        }
      }
    );

    this.panelList.reset({ previousState: params.previousState.answers });

    // Re-create previous user answers
    if (params.previousState.answers) {
      params.previousState.answers.forEach((answer, index) => {
        if (typeof answer.userAnswer === 'boolean') {
          this.handleAnswered({ index: index, userAnswer: answer.userAnswer });
        }
      });
    }

    this.dom.append(this.panelList.getDOM());

    if (params.focus) {
      this.panelList.focus(this.currentPanelIndex, true);
    }
  }


  /**
   * Get current state.
   * @returns {object} Current state.
   */
  getCurrentState() {
    return {
      order: this.order,
      answers: this.answerOptions.map((option) => {
        return ({
          userAnswer: option.userAnswer,
          confidenceIndex: option.confidenceIndex
        });
      }),
      isOvertime: this.isOvertime
    };
  }

  /**
   * Get all options up to the first correct one.
   * @returns {object[]} Scored answer options.
   */
  getScoredAnswerOptions() {
    let scoredOptions = [...this.answerOptions];

    if (this.mode === 'standard') {
      scoredOptions = scoredOptions.reduce((selection, option) => {
        if (selection.length && selection[selection.length - 1].correct) {
          return selection;
        }

        selection.push(option);

        return selection;
      }, []);
    }

    return scoredOptions;
  }

  /**
   * Get user response for xAPI statement.
   * @returns {string} User response for xAPI statement.
   */
  getXAPIResponse() {
    return this.getScoredAnswerOptions()
      .map((option, index) => {
        if ((option.userAnswer === true)) {
          return 2 * index;
        }

        if ((option.userAnswer === false)) {
          return 2 * index + 1;
        }

        return null;
      })
      .filter((response) => response !== null)
      .join('[,]');
  }

  /**
   * Get choices for xAPI statement.
   * @returns {object[]} Choices for xAPI statement.
   */
  getXAPIChoices() {
    return this.getScoredAnswerOptions()
      .reduce((choices, choice, index) => {
        choices.push(
          {
            id: (index * 2).toString(),
            description: {
              'en-US': `${Util.stripHTML(choice.text)} (@correct)`
            }
          },
          {
            id: (index * 2 + 1).toString(),
            description: {
              'en-US': `${Util.stripHTML(choice.text)} (@incorrect)`
            }
          }
        );

        return choices;
      }, []);
  }

  /**
   * Get correct responses pattern for xAPI.
   * @returns {string[]} Correct responses pattern.
   */
  getXAPICorrectResponsesPattern() {
    return [
      this.getScoredAnswerOptions()
        .reduce((correct, option, index) => {
          if (option.correct) {
            correct.push((2 * index).toString());
          }
          else {
            correct.push((2 * index + 1).toString());
          }

          return correct;
        }, [])
        .join('[,]')
    ];
  }
}
