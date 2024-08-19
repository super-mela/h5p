/**
 * Mixin containing methods for H5P Question Type contract.
 */
export default class QuestionTypeContract {

  /**
   * Determine whether the task was answered already.
   * @returns {boolean} True if answer was given by user, else false.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-1}
   */
  getAnswerGiven() {
    return this.wasAnswerGiven;
  }

  /**
   * Get current score.
   * @returns {number} Current score.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-2}
   */
  getScore() {
    if (this.params.mode === 'free') {
      return 1;
    }

    return this.foundSolutions
      .filter((solution) => solution.style === 'found').length;
  }

  /**
   * Get maximum possible score.
   * @returns {number} Maximum possible score.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-3}
   */
  getMaxScore() {
    if (this.params.mode === 'free') {
      return 1;
    }

    return this.params.solutions.length;
  }

  /**
   * Show solutions.
   * @param {object} params Parameters.
   * @param {boolean} params.showRetry If true and valid, show retry button.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-4}
   */
  showSolutions(params = {}) {
    const resultingItems = this.foundSolutions.map((foundSolution, index) => {
      if (foundSolution.style !== 'found') {
        foundSolution.labels = this.params.solutions[index];
        foundSolution.style = 'not-found';
      }
      return foundSolution;
    });

    const combination = resultingItems.map((item, index) => {
      const identifier = `${this.dictionary.get('a11y.solution')} ${index + 1}`;
      const text = item.labels.join(' ');
      const status = item.style === 'found' ?
        this.dictionary.get('a11y.found') :
        this.dictionary.get('a11y.notFound');

      return `${identifier}: ${text}: ${status}.`;
    });

    const ariaText = this.dictionary
      .get('a11y.theSolutionsAre')
      .replace(/@number/g, resultingItems.length)
      .replace(/@combination/g, combination);

    this.toolbar.disable();
    this.randomizer.disable();
    this.randomizer.showSolutions();

    this.foundSolutionsList.setListItems(resultingItems);

    this.announceMessage({
      text: this.dictionary.get('l10n.theSolutionsAre'),
      aria: ariaText
    });

    // Announce message before some other element gets focus
    window.setTimeout(() => {
      this.setViewState('solutions');
      this.hideButton('check-answer');
      this.hideButton('show-solution');
      this.hideButton('try-again');

      if (params.showRetry) {
        if (this.params.behaviour.enableRetry) {
          window.setTimeout(() => {
            this.showButton('try-again');
          }, 50);
        }
        else {
          window.setTimeout(() => {
            this.randomizer.focus(); // No button to focus, focus randomizer instead
          }, 50);
        }
      }
    }, 50);
  }

  /**
   * Reset task.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-5}
   */
  resetTask() {
    this.setViewState('task');
    this.removeFeedback();

    this.wasAnswerGiven = false;

    this.foundSolutions = this.params.solutions.map(() => {
      return ({
        labels: [this.dictionary.get('l10n.toBeFound')]
      });
    });
    this.attemptsLeft = this.params.behaviour.maxAttempts;
    this.foundSolutionsList.setListItems(this.foundSolutions);

    this.wrongAnswers = [];

    if (this.attemptsLeft !== Infinity) {
      this.toolbar.setStatusContainerStatus(
        'attempts',
        { value: this.attemptsLeft }
      );
    }

    this.toolbar.setStatusContainerStatus(
      'found',
      { value: this.getFoundScore(), maxValue: this.getFoundMaxScore() }
    );

    this.announceMessage({
      text: this.dictionary.get('l10n.noMessage'),
      aria: ''
    });

    this.hideButton('show-solution');
    this.hideButton('try-again');

    if (this.params.mode !== 'free') {
      this.showButton('check-answer');
    }

    this.randomizer.reset();
    this.enable();
  }

  /**
   * Get xAPI data.
   * @returns {object} XAPI statement.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-6}
   */
  getXAPIData() {
    const xAPIEvent = this.createXAPIEvent('answered');
    return {
      statement: xAPIEvent.data.statement
    };
  }
}
