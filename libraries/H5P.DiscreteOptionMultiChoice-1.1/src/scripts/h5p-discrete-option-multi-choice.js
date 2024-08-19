import Util from '@services/util.js';
import Dictionary from '@services/dictionary.js';
import Globals from '@services/globals.js';
import QuestionTypeContract from '@mixins/question-type-contract.js';
import XAPI from '@mixins/xapi.js';
import Main from '@components/main.js';
import '@styles/h5p-discrete-option-multi-choice.scss';

export default class DiscreteOptionMultiChoice extends H5P.Question {
  /**
   * @class
   * @param {object} params Parameters passed by the editor.
   * @param {number} contentId Content's id.
   * @param {object} [extras] Saved state, metadata, etc.
   */
  constructor(params, contentId, extras = {}) {
    super('discrete-option-multi-choice');

    Util.addMixins(DiscreteOptionMultiChoice, [QuestionTypeContract, XAPI]);

    // Sanitize parameters
    this.params = Util.extend({
      behaviour: {
        enableRetry: true, // @see {@link https://h5p.org/documentation/developers/contracts#guides-header-9}
        enableSolutionsButton: false, // @see {@link https://h5p.org/documentation/developers/contracts#guides-header-8}
        enableCheckButton: false, // Undocumented in contract, but required for Question Set
        mode: 'standard',
        oneItemAtATime: true,
        showResults: false,
        randomAnswers: true,
        singlePoint: false,
        confidenceLevels: '100,50,0'
      },
      answers: [],
      l10n: {
        check: 'Check',
        submit: 'Submit',
        showSolution: 'Show solution',
        retry: 'Retry',
        confidence: 'I am @percent sure.',
        yourResults: 'Your results'
      },
      a11y: {
        check: 'Check the answers. The responses will be marked as correct, incorrect, or unanswered.',
        showSolution: 'Show the solution. The task will be marked with its correct solution.',
        retry: 'Retry the task. Reset all responses and start the task over again.',
        yourResult: 'You got @score out of @total points',
        taskConfidenceMark: 'Choose your confidence and mark as correct or incorrect',
        taskMark: 'Mark as correct or incorrect',
        markAnswerAs: 'Mark answer as @status',
        correct: 'correct',
        incorrect: 'incorrect',
        panelNotExpandable: 'This item can currently not be expanded.',
        panelAdded: 'Showing next answer option: @option',
        allAnswered: 'There are no more answer options to mark.',
        youMarkedThisAs: 'You marked this as @correctness',
        confidenceAt: 'Confidence: @value',
        yourAnswerWas: 'Your answer was @correctness',
        correctAnswerWas: 'The correct answer was to mark this as @correctness'
      }
    }, params);

    // Ensure values match what discrete option multiple choice is for
    if (this.params.behaviour.mode === 'standard') {
      this.params.behaviour.randomAnswers = true;
      this.params.behaviour.singlePoint = true;
    }

    this.contentId = contentId;
    this.extras = extras;

    // Fill dictionary
    this.dictionary = new Dictionary();
    this.dictionary.fill({ l10n: this.params.l10n, a11y: this.params.a11y });

    // Set globals
    this.globals = new Globals();
    this.globals.set('params', this.params);
    this.globals.set('resize', () => {
      this.trigger('resize');
    });
    this.globals.set('read', (text) => {
      this.read(text);
    });

    this.previousState = extras?.previousState || {};

    const defaultLanguage = extras?.metadata?.defaultLanguage || 'en';
    this.languageTag = Util.formatLanguageCode(defaultLanguage);

    // Build content
    this.content = new Main(
      {
        dictionary: this.dictionary,
        globals: this.globals
      },
      {
        onAnswerGiven: (scoreDelta, skipXAPI) => {
          this.handleAnswerGiven(scoreDelta, skipXAPI);
        },
        onGameOver: (params) => {
          this.handleGameOver(params);
        }
      }
    );
  }

  /**
   * Register the DOM elements with H5P.Question.
   */
  registerDomElements() {
    // Set optional media
    const media = this.params.media.type;
    if (media && media.library) {
      const type = media.library.split(' ')[0];
      // Image
      if (type === 'H5P.Image') {
        if (media.params.file) {
          this.setImage(media.params.file.path, {
            disableImageZooming: this.params.media.disableImageZooming,
            alt: media.params.alt,
            title: media.params.title,
            expandImage: media.params.expandImage,
            minimizeImage: media.params.minimizeImage
          });
        }
      }
      // Video
      else if (type === 'H5P.Video') {
        if (media.params.sources) {
          this.setVideo(media);
        }
      }
      // Audio
      else if (type === 'H5P.Audio') {
        if (media.params.files) {
          this.setAudio(media);
        }
      }
    }

    // Register task introduction text
    if (this.params.question) {
      this.introduction = document.createElement('div');
      this.introduction.innerHTML = this.params.question;
      this.setIntroduction(this.introduction);
    }

    // Register content
    const contentDOM = this.content.getDOM();
    this.setContent(contentDOM);
    this.addButtons();

    this.reset({ previousState: this.previousState.content ?? {} });

    if (
      this.previousState.viewState ===
      VIEW_STATES['results'] &&
      this.viewState !== VIEW_STATES['results']
    ) {
      this.handleGameOver({ skipXAPI: true });
    }
    else if (
      this.previousState.viewState ===
      VIEW_STATES['solutions']
    ) {
      this.handleGameOver({ skipXAPI: true });
      this.handleShowSolutions();
    }

    // Container/media queries seem to kick in late, so we need one extra resize
    const callback = window.requestIdleCallback ?
      window.requestIdleCallback :
      window.requestAnimationFrame;

    callback(() => {
      this.observer = this.observer || new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.observer.disconnect();
          this.content.toggleIntroductionVisibility();
          this.trigger('resize');
        }
      }, {
        root: document.documentElement,
        threshold: 0
      });
      this.observer.observe(contentDOM);
    });
  }

  /**
   * Add all buttons for H5P.Question.
   */
  addButtons() {
    // Just to ensure that H5P.QuestionSet finds one - may not be necessary
    this.addButton(
      'check-answer',
      this.dictionary.get('l10n.check'),
      () => {},
      this.params.behaviour.enableCheckButton,
      { 'aria-label': this.dictionary.get('a11y.check') },
      {
        contentData: this.contentData,
        textIfSubmitting: this.dictionary.get('l10n.submit'),
      }
    );

    this.addButton(
      'show-solution',
      this.dictionary.get('l10n.showSolution'),
      () => {
        this.handleShowSolutions();
      },
      false,
      { 'aria-label': this.dictionary.get('a11y.showSolution') },
      {}
    );

    this.addButton(
      'try-again',
      this.dictionary.get('l10n.retry'),
      () => {
        this.handleRetry();
      },
      false,
      { 'aria-label': this.dictionary.get('a11y.retry') },
      {}
    );
  }

  /**
   * Handle click on 'Show solutions' button.
   */
  handleShowSolutions() {
    this.setViewState('solutions');
    this.hideButton('show-solution');
    this.content.showSolutions();

    this.content.focusPanel(0);
  }

  /**
   * Handle click on 'Retry' button.
   */
  handleRetry() {
    this.reset({ focus: true });
  }

  /**
   * Handle user gave answer.
   * @param {number} scoreDelta Score difference caused by answer.
   * @param {boolean} skipXAPI If true, skipXAPI.
   */
  handleAnswerGiven(scoreDelta, skipXAPI = false) {
    if (this.params.behaviour.singlePoint) {
      if (this.score === -1 || scoreDelta < 0) {
        this.score = -1;
      }
      else {
        this.score = 1;
      }
    }
    else {
      this.score = this.score + scoreDelta;
    }

    this.wasAnswerGiven = true;

    this.currentAnswerIndex++;

    if (!skipXAPI) {
      this.triggerXAPIEvent('interacted');
      this.triggerXAPIEvent('progressed');
    }
  }

  /**
   * Handle game over.
   * @param {object} [params] Parameters.
   * @param {boolean} [params.skipXAPI] If true, skip xapi.
   * @param {boolean} [params.quiet] If false, announce game over.
   */
  handleGameOver(params = {}) {
    if (!params.quiet) {
      this.read(this.dictionary.get('a11y.allAnswered'));
    }

    this.setViewState('results');

    if (this.params.behaviour.enableSolutionsButton) {
      this.showButton('show-solution');
    }

    if (this.params.behaviour.enableRetry) {
      this.showButton('try-again');
    }

    if (this.params.behaviour.showResults) {
      const showScores = this.params.behaviour.mode === 'allOptions' &&
        !this.params.behaviour.singlePoint;

      this.content.showResults({ showScores: showScores });
    }
    else if (
      this.globals.get('params').behaviour.oneItemAtATime &&
      !params.skipXAPI // Re-creating state, so not required again
    ) {
      this.content.appendResultsMessage();
    }

    // Ensure smooth display
    this.trigger('resize');

    const textScore = H5P.Question.determineOverallFeedback(
      this.params.overallFeedback, this.getScore() / this.getMaxScore()
    );

    // H5P.Question expects ':num' and ':total'
    const ariaMessage = this.params.a11y.yourResult
      .replace('@score', ':num')
      .replace('@total', ':total');

    this.setFeedback(
      textScore,
      this.getScore(),
      this.getMaxScore(),
      ariaMessage
    );

    this.content.showFeedback();

    window.setTimeout(() => {
      this.content.focusPanel(0);
    }, 50); // Give time to read results

    if (!params.skipXAPI) {
      this.triggerXAPIEvent('answered');
    }
  }

  /**
   * Reset.
   * @param {object} [params] Parameters.
   */
  reset(params = {}) {
    this.score = 0;
    this.currentAnswerIndex = 1;
    this.wasAnswerGiven = false;
    this.contentWasReset = true;

    this.content.reset({
      previousState: params.previousState ?? {},
      focus: params.focus ?? false
    });

    this.removeFeedback();
    this.hideButton('show-solution');
    this.hideButton('try-again');

    this.setViewState('task');

    this.trigger('resize');
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

    this.content.setViewState(this.viewState);
  }
}

/** @constant {object} view states */
export const VIEW_STATES = { task: 0, results: 1, solutions: 2 };
