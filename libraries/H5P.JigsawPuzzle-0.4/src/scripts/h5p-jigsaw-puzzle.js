// Import required classes
import JigsawPuzzleContent from '@scripts/h5p-jigsaw-puzzle-content.js';
import Util from '@services/util.js';

/**
 * Class holding a full JigsawPuzzle.
 */
export default class JigsawPuzzle extends H5P.Question {
  /**
   * @class
   * @param {object} params Parameters passed by the editor.
   * @param {number} contentId Content's id.
   * @param {object} [extras] Saved state, metadata, etc.
   */
  constructor(params, contentId, extras = {}) {
    super('jigsaw-puzzle'); // CSS class selector for content's iframe: h5p-jigsaw-puzzle

    /*
     * this.params.behaviour.enableSolutionsButton and this.params.behaviour.enableRetry
     * are used by H5P's question type contract.
     * @see {@link https://h5p.org/documentation/developers/contracts#guides-header-8}
     * @see {@link https://h5p.org/documentation/developers/contracts#guides-header-9}
     */

    // Make sure all variables are set
    this.params = Util.extend({
      tilesHorizontal: 4,
      tilesVertical: 3,
      behaviour: {
        sortingSpacePosition: 'row',
        sortingSpace: 50,
        sortingSpaceColumn: 100,
        useFullArea: false,
        enableComplete: true,
        enableSolutionsButton: true,
        enableRetry: true,
        showBackground: true,
        showPuzzleOutlines: true
      },
      l10n: {
        complete: 'Complete',
        tryAgain: 'Retry',
        messageNoImage: 'There was no image given for this jigsaw puzzle.'
      },
      a11y: {
        buttonFullscreenEnter: 'Enter fullscreen mode',
        buttonFullscreenExit: 'Exit fullscreen mode',
        complete: 'Complete the puzzle. All tiles will be put to their correct position.',
        tryAgain: 'Retry the puzzle. All puzzle tiles will be shuffled on the canvas.',
        disabled: 'Disabled',
        close: 'Close'
      }
    }, params);

    // Sanitize for use as text
    for (let word in this.params.l10n) {
      this.params.l10n[word] = Util.stripHTML(Util.htmlDecode(this.params.l10n[word]));
    }
    for (let word in this.params.a11y) {
      this.params.a11y[word] = Util.stripHTML(Util.htmlDecode(this.params.a11y[word]));
    }

    this.contentId = contentId;
    this.extras = extras;

    // this.previousState now holds the saved content state of the previous session
    this.previousState = this.extras.previousState || {};

    /*
     * SVG background handling requires ids, so we need to make sure we can
     * distinguish between multiple puzzle instances in compound content types
     */
    this.uuid = H5P.createUUID();

    if (this.params.puzzleImage) {
      this.puzzleImageInstance = H5P.newRunnable(this.params.puzzleImage, this.contentId);
    }

    // Handle resize from H5P core
    this.on('resize', () => {
      this.handleH5PResized();
    });
  }

  /**
   * Register the DOM elements with H5P.Question.
   */
  registerDomElements() {
    // Create content
    this.content = new JigsawPuzzleContent(
      {
        contentId: this.contentId,
        imageFormat: this.params?.puzzleImage?.params?.file?.mime,
        previousState: this.previousState,
        puzzleImageInstance: this.puzzleImageInstance,
        showBackground: this.params.behaviour.showBackground,
        showPuzzleOutlines: this.params.behaviour.showPuzzleOutlines,
        size: {
          width: this.params.tilesHorizontal,
          height: this.params.tilesVertical
        },
        sortingSpacePosition: this.params.behaviour.sortingSpacePosition,
        sortingSpace: this.params.behaviour.sortingSpace,
        sortingSpaceColumn: this.params.behaviour.sortingSpaceColumn,
        sound: this.params.sound || {},
        stroke: Math.max(window.innerWidth / 750, 1.75),
        tileBorderColor: 'rgba(88, 88, 88, 0.5)',
        useFullArea: this.params.behaviour.useFullArea,
        uuid: this.uuid,
        a11y: {
          buttonFullscreenEnter: this.params.a11y.buttonFullscreenEnter,
          buttonFullscreenExit: this.params.a11y.buttonFullscreenExit,
          disabled: this.params.a11y.disabled,
          close: this.params.a11y.close
        },
        l10n: {
          messageNoImage: this.params.l10n.messageNoImage
        }
      },
      {
        onResize: (() => {
          // Handle resize request from content
          this.handleOnResize();
        }),
        onCompleted: ((params) => {
          // Handle completion of puzzle from content
          this.handlePuzzleCompleted(params);
        }),
        onButtonFullscreenClicked: (() => {
          // Handle request to toggle fullscreen mode
          this.toggleFullscreen();
        }),
        onInteracted: (() => {
          // Handle interacted
          this.handleInteracted();
        })
      }
    );

    // Register content with H5P.Question
    this.setContent(this.content.getDOM());

    if (!this.params?.puzzleImage?.params?.file?.path) {
      return; // No image given, rest not needed
    }

    // Register Buttons
    this.addButtons();

    // Wait for content DOM to be completed to handle DOM initialization
    if (document.readyState === 'complete') {
      window.requestAnimationFrame(() => {
        this.handleDOMInitialized();
      });
    }
    else {
      document.addEventListener('readystatechange', () => {
        if (document.readyState === 'complete') {
          window.requestAnimationFrame(() => {
            this.handleDOMInitialized();
          });
        }
      });
    }

    // Resize fullscreen dimensions when rotating screen
    window.addEventListener('orientationchange', () => {
      if (H5P.isFullscreen) {
        setTimeout(() => { // Needs time to rotate for window.innerHeight
          this.content.setFixedHeight(true);
        }, 200);
      }
    }, false);
  }

  /**
   * Add all the buttons that shall be passed to H5P.Question.
   */
  addButtons() {
    // Complete button
    this.addButton(
      'complete',
      this.params.l10n.complete, () => {
        this.handleClickButtonComplete({ xAPI: true });
      },
      this.params.behaviour.enableComplete && this.previousState?.tiles?.some((done) => !done),
      { 'aria-label': this.params.a11y.complete },
      {}
    );

    // Retry button
    this.addButton(
      'try-again',
      this.params.l10n.tryAgain, () => {
        this.handleClickButtonRetry();
      },
      this.params.behaviour.enableRetry && (!!this.previousState?.tiles && this.previousState?.tiles?.some((done) => done)),
      { 'aria-label': this.params.a11y.tryAgain },
      {}
    );
  }

  /**
   * Disable all buttons.
   */
  disableButtons() {
    for (let id in this.buttons) {
      this.disableButton(id);
    }
  }

  /**
   * Disable a single button.
   * @param {string} id Id of button to be disabled.
   */
  disableButton(id) {
    if (!this.buttons[id]) {
      return;
    }

    this.buttons[id].setAttribute('disabled', true);
    this.buttons[id].classList.add('disabled');
  }

  /**
   * Enable all buttons.
   */
  enableButtons() {
    for (let id in this.buttons) {
      this.enableButton(id);
    }
  }

  /**
   * Enable a single button.
   * @param {string} id Id of button to be enabled.
   */
  enableButton(id) {
    if (!this.buttons[id]) {
      return;
    }

    this.buttons[id].removeAttribute('disabled');
    this.buttons[id].classList.remove('disabled');
  }

  /**
   * Toggle fullscreen button.
   * @param {string|boolean} [state] enter|false for enter, exit|true for exit.
   */
  toggleFullscreen(state) {
    if (!this.container) {
      return;
    }

    if (typeof state === 'string') {
      if (state === 'enter') {
        state = false;
      }
      else if (state === 'exit') {
        state = true;
      }
    }

    if (typeof state !== 'boolean') {
      state = !H5P.isFullscreen;
    }

    if (state === true) {
      H5P.fullScreen(H5P.jQuery(this.container), this);
    }
    else {
      H5P.exitFullScreen();

      setTimeout(() => {
        this.trigger('resize');
      }, 100); // Small images

      setTimeout(() => {
        this.trigger('resize');
      }, 500); // Large images take more time
    }
  }

  /**
   * Check if result has been submitted or input has been given.
   * @returns {boolean} True, if answer was given.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-1}
   */
  getAnswerGiven() {
    return (this.content) ? this.content.getAnswerGiven() : false;
  }

  /**
   * Get latest score.
   * @returns {number} latest score.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-2}
   */
  getScore() {
    return (this.content) ? this.content.getScore() : 0;
  }

  /**
   * Get maximum possible score.
   * @returns {number} Score necessary for mastering.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-3}
   */
  getMaxScore() {
    return this.params.tilesHorizontal * this.params.tilesVertical;
  }

  /**
   * Show solutions.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-4}
   */
  showSolutions() {
    if (this.content) {
      return; // not ready yet
    }

    this.handleClickButtonComplete({ xAPI: false });
    this.trigger('resize');
  }

  /**
   * Reset task.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-5}
   */
  resetTask() {
    if (this.params.behaviour.enableComplete) {
      this.showButton('complete');
    }

    this.hideButton('try-again');

    if (this.content) {
      this.content.reset();
    }

    this.trigger('resize');
  }

  /**
   * Get xAPI data.
   * @returns {object} XAPI statement.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-6}
   */
  getXAPIData() {
    return ({
      statement: this.getXAPIAnsweredEvent().data.statement
    });
  }

  /**
   * Build xAPI completed event.
   * @returns {H5P.XAPIEvent} XAPI answer event.
   */
  getXAPIAnsweredEvent() {
    const xAPIEvent = this.createXAPIEvent('answered');

    xAPIEvent.setScoredResult(this.getScore(), this.getMaxScore(), this,
      true, this.isPassed());

    return xAPIEvent;
  }

  /**
   * Create an xAPI event for Jigsaw Puzzle.
   * @param {string} verb Short id of the verb we want to trigger.
   * @returns {H5P.XAPIEvent} Event template.
   */
  createXAPIEvent(verb) {
    const xAPIEvent = this.createXAPIEventTemplate(verb);
    Util.extend(
      xAPIEvent.getVerifiedStatementValue(['object', 'definition']),
      this.getxAPIDefinition());
    return xAPIEvent;
  }

  /**
   * Get the xAPI definition for the xAPI object.
   * @returns {object} XAPI definition.
   */
  getxAPIDefinition() {
    let description = this.getDescription();

    // Build definition
    return {
      name: { 'en-US': this.getTitle() },
      description: { 'en-US': description },
      type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
      interactionType: 'other'
    };
  }

  /**
   * Determine whether the task has been passed by the user.
   * @returns {boolean} True if user passed or task is not scored.
   */
  isPassed() {
    return this.getScore() >= this.getMaxScore();
  }

  /**
   * Get tasks title.
   * @returns {string} Title.
   */
  getTitle() {
    let raw;
    if (this.extras.metadata) {
      raw = this.extras.metadata.title;
    }
    raw = raw || JigsawPuzzle.DEFAULT_DESCRIPTION;

    // H5P Core function: createTitle
    return H5P.createTitle(raw);
  }

  /**
   * Get tasks description.
   * @returns {string} Description.
   */
  getDescription() {
    return this.params.taskDescription || JigsawPuzzle.DEFAULT_DESCRIPTION;
  }

  /**
   * Answer call to return the current state.
   * @returns {object|undefined} Current state.
   */
  getCurrentState() {
    if (!this.params?.puzzleImage?.params?.file?.path || !this.content) {
      return;
    }

    return this.content.getCurrentState();
  }

  /**
   * Handle DOM initialized.
   */
  handleDOMInitialized() {
    // Add fullscreen button on first call after H5P.Question has created the DOM
    this.container = Util.closestParent(this.content.getDOM(), '.h5p-jigsaw-puzzle');

    if (this.container) {
      this.content.setH5PQuestionElements(this.container);

      if (this.isRoot() && H5P.fullscreenSupported) {
        this.content.enableFullscreenButton();

        this.on('enterFullScreen', () => {
          setTimeout(() => { // Needs time to get into fullscreen for window.innerHeight
            this.content.toggleFullscreen(true);
          }, 200);
        });

        this.on('exitFullScreen', () => {
          this.content.toggleFullscreen(false);
        });
      }
      else {
        this.content.updateTitlebarVisibility();
      }

      // H5P.Question doesn't allow us to access these directly :-/
      this.buttons = {};
      this.buttons['complete'] = this.container.querySelector('.h5p-question-complete');
      this.buttons['try-again'] = this.container.querySelector('.h5p-question-try-again');
    }
  }

  /**
   * Own resize handler.
   */
  handleH5PResized() {
    if (this.bubblingUpwards || !this.content) {
      return; // Prevent send event back down.
    }

    this.content.handleResized();
  }

  /**
   * Resize callback for children (content).
   */
  handleOnResize() {
    // Prevent target from sending event back down
    this.bubblingUpwards = true;

    this.trigger('resize');

    // Reset
    this.bubblingUpwards = false;
  }

  /**
   * Handle user interacted
   */
  handleInteracted() {
    if (this.getScore() > 0) {
      this.showButton('try-again');
    }

    this.triggerXAPI('interacted');
  }

  /**
   * Handle puzzle completed.
   * @param {object} [params] Parameters.
   * @param {boolean} [params.xAPI] If true, will trigger xAPI.
   */
  handlePuzzleCompleted(params = {}) {
    this.hideButton('complete');
    this.showButton('try-again');

    if (params.xAPI) {
      this.trigger(this.getXAPIAnsweredEvent());
    }
  }

  /**
   * Handle click on button complete.
   * @param {object} params Parameters.
   */
  handleClickButtonComplete(params) {
    this.handleInteracted();
    this.content.handlePuzzleCompleted(params);
    this.content.moveTilesToTarget();
  }

  /**
   * Handle click on button retry.
   */
  handleClickButtonRetry() {
    this.resetTask();
  }
}

/** @constant {string} */
JigsawPuzzle.DEFAULT_DESCRIPTION = 'Jigsaw Puzzle';
