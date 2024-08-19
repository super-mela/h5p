import Util from '@services/util';
import QuestionTypeContract from '@mixins/question-type-contract';
import Initialization from '@mixins/initialization';
import XAPI from '@mixins/xapi';
import '@styles/h5p-phrase-randomizer.scss';

export default class PhraseRandomizer extends H5P.Question {
  /**
   * @class
   * @param {object} params Parameters passed by the editor.
   * @param {number} contentId Content's id.
   * @param {object} [extras] Saved state, metadata, etc.
   */
  constructor(params, contentId, extras = {}) {
    super('phrase-randomizer');

    Util.addMixins(
      PhraseRandomizer, [QuestionTypeContract, Initialization, XAPI]
    );

    /*
     * this.params.behaviour.enableSolutionsButton and
     * this.params.behaviour.enableRetry are used by H5P's question type
     * contract.
     * @see {@link https://h5p.org/documentation/developers/contracts#guides-header-8}
     * @see {@link https://h5p.org/documentation/developers/contracts#guides-header-9}
     */

    this.params = params;
    this.contentId = contentId;
    this.extras = extras;

    // Inititialization mixin
    this.sanitize();
    this.initialize();
    this.dom = this.buildDOM();

    this.recreateViewState();
  }

  /**
   * Register the DOM elements with H5P.Question.
   */
  registerDomElements() {
    // Register content
    this.setContent(this.dom);

    // Retrieve root h5p container - unfortunately not accessible via H5P core
    Util.callOnceVisible(this.dom, () => {
      this.h5pContainer = this.dom.closest('.h5p-content .h5p-container');

      this.h5pContainer.append(this.foundSolutionsList.getDOM());

      this.on('resize', () => {
        this.resize();
      });

      this.resize();
    });
  }

  /**
   * Resize content.
   */
  resize() {
    if (!this.h5pContainer) {
      return;
    }

    this.horizontalMargin = this.horizontalMargin ?? (
      this.h5pContainer.getBoundingClientRect().width -
      this.dom.getBoundingClientRect().width
    );

    this.randomizer.resize(
      this.h5pContainer.getBoundingClientRect().width - this.horizontalMargin
    );
  }

  /**
   * Enable.
   */
  enable() {
    this.toolbar.enable();
    this.randomizer.enable();
  }

  /**
   * Disable.
   */
  disable() {
    this.toolbar.disable();
    this.randomizer.disable();
  }

  /**
   * Get current state.
   * @returns {object|undefined} Current state.
   */
  getCurrentState() {
    if (!this.getAnswerGiven()) {
      return {}; // No relevant input that would need to be restored. Also resets database.
    }

    return {
      attemptsLeft: this.attemptsLeft,
      viewState: this.viewState,
      message: this.randomizer.getMessage(),
      randomizer: this.randomizer.getCurrentState(),
      foundSolutions: this.foundSolutions,
      wrongAnswers: this.wrongAnswers
    };
  }

  /**
   * Check answer.
   * @param {object} [params] Parameters.
   * @param {boolean} params.skipXAPI If true, don't trigger xAPI events.
   */
  checkAnswer(params = {}) {
    this.handleAnswerGiven();

    const answer = this.randomizer.getResponse();

    const answerIsCorrect = this.params.solutions.some((solution) => {
      return Util.areArraysEqual(solution, answer);
    });

    if (answerIsCorrect) {
      this.handleCorrectResponse({ ...params, answer: answer });
    }
    else {
      this.handleWrongResponse({ ...params, answer: answer });
    }
  }

  /**
   * Return number of found solutions.
   * @returns {number} Number of found solutions.
   */
  getFoundScore() {
    return this.foundSolutions.filter(
      (solution) => solution.style === 'found'
    ).length;
  }

  /**
   * Return maximum number of solutions.
   * @returns {number} Maximum number of solutions.
   */
  getFoundMaxScore() {
    return this.params.solutions.length;
  }

  /**
   * Handle correct response.
   * @param {object} [params] Parameters.
   * @param {boolean} params.skipXAPI If true, don't trigger xAPI events.
   */
  handleCorrectResponse(params = {}) {
    this.randomizer.showAnimationCorrectCombination();

    const answerInSolutionIndex = this.params.solutions
      .findIndex((solution) => Util.areArraysEqual(solution, params.answer));

    if (answerInSolutionIndex !== -1) {
      this.foundSolutions[answerInSolutionIndex] = {
        labels: params.answer,
        style: 'found'
      };

      this.toolbar.setStatusContainerStatus(
        'found',
        { value: this.getFoundScore(), maxValue: this.getFoundMaxScore() }
      );

      this.foundSolutionsList.setListItems(this.foundSolutions);
      this.trigger('resize');
    }

    if (this.getFoundScore() !== this.getFoundMaxScore()) {
      this.announceMessage(
        { text: this.dictionary.get('l10n.foundASolution') }
      );

      if (!params.skipXAPI) {
        this.triggerXAPIEvent('responded');
      }
      return;
    }
    this.handleAllSolutionsFound(params);
    this.toggleButtons();
  }

  /**
   * Handle intermediary wrong response.
   * @param {object} [params] Parameters.
   * @param {boolean} params.skipXAPI If true, don't trigger xAPI events.
   */
  handleWrongResponse(params = {}) {
    this.randomizer.showAnimationWrongCombination();

    // Keep track of wrong answers (for xAPI)
    const answer = params.answer.join(' ');
    if (!this.wrongAnswers.includes(answer)) {
      this.wrongAnswers.push(answer);
    }

    if (!params.skipXAPI) {
      this.triggerXAPIEvent('responded');
    }

    this.attemptsLeft = Math.max(0, this.attemptsLeft - 1);
    this.toolbar.setStatusContainerStatus(
      'attempts',
      { value: this.attemptsLeft }
    );

    if (this.attemptsLeft > 0) {
      this.announceMessage({
        text: this.dictionary.get('l10n.notASolution')
      });
    }
    else {
      this.announceMessage({
        text: this.dictionary.get('l10n.outOfAttempts')
      });

      this.showResults();

      this.disable();

      if (!params.skipXAPI) {
        this.triggerXAPIEvent('answered');
      }

      this.toggleButtons();
    }
  }

  /**
   * Handle all solutions found.
   * @param {object} [params] Parameters.
   * @param {boolean} params.skipXAPI If true, don't trigger xAPI events.
   */
  handleAllSolutionsFound(params) {
    this.disable();

    if (this.getFoundScore() === this.getFoundMaxScore()) {
      this.announceMessage(
        { text: this.dictionary.get('l10n.foundAllSolutions') }
      );
    }
    else {
      this.announceMessage(
        { text: this.dictionary.get('l10n.outOfAttempts') }
      );
    }

    this.showResults();

    if (!params.skipXAPI) {
      this.triggerXAPIEvent('answered');
    }
  }

  /**
   * Toggle buttons, so only required ones are visible.
   */
  toggleButtons() {
    window.setTimeout(() => {
      this.hideButton('check-answer');

      let focusButton;

      if (
        this.params.behaviour.enableSolutionsButton &&
        this.getFoundScore() !== this.getFoundMaxScore()
      ) {
        focusButton = 'show-solution';
        this.showButton('show-solution');
      }

      if (this.params.behaviour.enableRetry) {
        focusButton = 'try-again';
        this.showButton('try-again');
      }

      if (focusButton) {
        setTimeout(() => {
          this.focusButton('try-again'); // Not done by H5P.Question
        }, 50);
      }
      else {
        setTimeout(() => {
          this.randomizer.focus(); // No button to focus, focus randomizer instead
        }, 50);
      }
    }, 50);
  }

  /**
   * Show results.
   */
  showResults() {
    this.setViewState('results');
    this.setFeedback('', this.getScore(), this.getMaxScore());
  }

  /**
   * Announce message as text and audio.
   * @param {object} params Parameters.
   * @param {string} params.text Text.
   */
  announceMessage(params = {}) {
    if (!params.text) {
      return;
    }

    this.randomizer.setMessage(params.text);
    this.read(params.aria ?? params.text); // H5P.Question function
  }

  /**
   * Set view state.
   * @param {string|number} state State to be set.
   */
  setViewState(state) {
    if (
      typeof state === 'string' &&
      PhraseRandomizer.VIEW_STATES[state] !== undefined
    ) {
      this.viewState = PhraseRandomizer.VIEW_STATES[state];
    }
    else if (
      typeof state === 'number' &&
      Object.values(PhraseRandomizer.VIEW_STATES).includes(state)
    ) {
      this.viewState = state;

      this.content.setViewState(
        PhraseRandomizer.VIEW_STATES.find((value) => value === state).keys[0]
      );
    }
  }

  /**
   * Toggle audio.
   * @param {boolean} [state] State to set audio to.
   */
  async toggleAudio(state) {
    this.isAudioOn = (typeof state === 'boolean') ? state : !this.isAudioOn;

    if (!this.isAudioOn) {
      this.jukebox.muteAll();
    }
    else {
      await this.jukebox.resumeAudioContext();
      this.jukebox.unmuteAll();
    }
  }

  /**
   * Handle randomizer was changed.
   */
  handleAnswerGiven() {
    this.triggerXAPIEvent('interacted');
    this.wasAnswerGiven = true;
  }

  /**
   * Handle spinning number changed.
   * @param {number} number Number of spinning segments.
   */
  handleSpinningNumberChanged(number) {
    if (typeof number !== 'number' || number < 0) {
      return;
    }

    this.randomizer.updateConfigurationAria();

    if (number === 0) {
      this.toolbar.enableButton('randomize');
      this.randomizer.focus();
    }
    else {
      this.toolbar.disableButton('randomize');
    }
  }
}

/** @constant {object} VIEW_STATES view states */
PhraseRandomizer.VIEW_STATES = { task: 0, results: 1, solutions: 2 };

/** @constant {number} SEGMENTS_MAX Maximum number of segments */
PhraseRandomizer.SEGMENTS_MAX = 6;
