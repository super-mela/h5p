/**
 * Mixin containing methods for H5P Question Type contract.
 */
export default class QuestionTypeContract {
  /**
   * Check if result has been submitted or input has been given.
   * @returns {boolean} True, if answer was given.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-1}
   */
  getAnswerGiven() {
    return this.wasAnswerGiven;
  }

  /**
   * Get latest score.
   * @returns {number} latest score.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-2}
   */
  getScore() {
    return Math.round(Math.max(0, Math.min(this.score, this.getMaxScore())));
  }

  /**
   * Get maximum possible score.
   * @returns {number} Score necessary for mastering.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-3}
   */
  getMaxScore() {
    if (
      this.params.behaviour.mode === 'standard' ||
      this.params.behaviour.singlePoint
    ) {
      return 1;
    }

    const correctAnswersCount = this.params.answerOptions.length;

    // If no answer is marked as correct, we still need 1 at least.
    return Math.max(1, correctAnswersCount);
  }

  /**
   * Show solutions.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-4}
   */
  showSolutions() {
    this.hideButton('show-solution');
    this.hideButton('try-again');

    this.content.showAllPanels();
    this.content.showFeedback();
    this.content.showSolutions();
  }

  /**
   * Reset task.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-5}
   */
  resetTask() {
    this.reset({ focus: true });
  }

  /**
   * Get xAPI data.
   * @returns {object} XAPI statement.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-6}
   */
  getXAPIData() {
    const xAPIEvent = this.createXAPIEvent('answered');

    return { statement: xAPIEvent.data.statement };
  }

  /**
   * Answer call to return the current state.
   * @returns {object|undefined} Current state.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-7}
   */
  getCurrentState() {
    if (!this.getAnswerGiven()) {
      // Nothing relevant to store, but previous state in DB must be cleared after reset
      return this.contentWasReset ? {} : undefined;
    }

    return {
      content: this.content.getCurrentState(),
      currentAnswerIndex: this.currentAnswerIndex,
      viewState: this.viewState
    };
  }
}
