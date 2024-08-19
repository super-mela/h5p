import Util from '@services/util.js';
import Dictionary from '@services/dictionary.js';
import Jukebox from '@services/jukebox.js';
import PhraseRandomizer from '@scripts/h5p-phrase-randomizer.js';
import Toolbar from '@components/toolbar/toolbar.js';
import Randomizer from '@components/randomizer.js';
import FoundSolutionsList from '@components/found-solutions-list.js';

import AudioClick from '@audio/click.mp3';

/**
 * Mixin containing methods for initializing the content.
 */
export default class Initialization {
  /**
   * Sanitize parameters.
   */
  sanitize() {
    /*
     * this.params.behaviour.enableSolutionsButton and
     * this.params.behaviour.enableRetry are used by H5P's question type
     * contract.
     * @see {@link https://h5p.org/documentation/developers/contracts#guides-header-8}
     * @see {@link https://h5p.org/documentation/developers/contracts#guides-header-9}
     */

    // Sanitize parameters
    this.params = Util.extend({
      segments: [],
      solutions: [],
      audio: {
        useDefaultClickPreviousNext: true
      },
      mode: 'free',
      behaviour: {
        enforceHorizontalDisplay: false,
        enableRetry: true,
        enableSolutionsButton: true,
        enableCheckButton: true,
        maxAttempts: Infinity
      },
      l10n: {
        check: 'Check',
        submit: 'Submit',
        showSolution: 'Show solution',
        retry: 'Retry',
        outOfAttempts: 'You ran out of lives.',
        theSolutionsAre: 'These are the solutions.',
        notASolution: 'This is not a solution.',
        noMessage: '...',
        scoreDisplay: '@current / @total',
        foundASolution: 'You found a solution!',
        foundAllSolutions: 'You found all the solutions!',
        foundSolutionsTitle: 'Found solutions',
        toBeFound: 'To be found'
      },
      a11y: {
        buttonRandomize: 'Randomize all segments',
        check: 'Check the answers. The responses will be marked as correct or incorrect.',
        showSolution: 'Show the solutions.',
        retry: 'Retry the task. Reset all segments and start the task over again.',
        currentText: 'Current label: @text',
        currentTexts: 'Current labels: @texts',
        previousText: 'Previous text',
        nextText: 'Next text',
        spinSegment: 'Spin segment @number to get random text for it',
        theSolutionsAre: 'These are the solutions (@number in total): @combination',
        notASolution: 'This is not a solution.',
        disabled: 'disabled',
        randomizer: 'Randomizer',
        toolbar: 'Toolbar',
        segment: 'Segment @number of @total',
        solution: 'Solution',
        found: 'Found',
        notFound: 'Not found',
        buttonAudioActive: 'Mute audio. Currently unmuted.',
        buttonAudioInactive: 'Unmute audio. Currently muted.'
      }
    }, this.params);

    // Sanitize segments
    while (this.params.segments.length < Initialization.MIN_SEGMENTS) {
      this.params.segments.push({});
    }
    this.params.segments = this.params.segments
      .splice(0, Initialization.MAX_SEGMENTS)
      .map((segment) => {
        segment.options = segment.options || [];
        segment.colorBackground =
          segment.colorBackground ?? 'rgb(255, 255, 255)';

        while (segment.options.length < Initialization.MIN_OPTIONS) {
          segment.options.push(
            segment.options?.[0] ?? Initialization.PLACEHOLDER_OPTION
          );
        }

        segment.options = segment.options.map((option) => {
          option = Util.purifyHTML(option);
          return option;
        });

        return segment;
      });

    // Sanitize solutions
    if (this.params.mode === 'free') {
      this.params.solutions = [];
    }
    else {
      this.params.solutions = this.params.solutions.solutions;
    }

    if (this.params.solutions.length > PhraseRandomizer.MAX_SEGMENTS) {
      this.params.solutions.splice(PhraseRandomizer.MAX_SEGMENTS);
    }

    this.params.solutions = this.params.solutions
      .reduce((validSolutions, solutionsText) => {
        const solution = solutionsText.split(',')
          .map((solutionIndex, segmentIndex) => {
            return this.params.segments[segmentIndex]?.options?.[solutionIndex];
          });

        return (solution) ?
          [...validSolutions, solution] :
          validSolutions;
      }, []);

    if (!this.params.solutions.length) {
      this.params.mode === 'free'; // No valid solutions, so enforcing free mode
    }

    if (this.params.mode === 'free') {
      this.params.behaviour.maxAttempts = Infinity;
    }
  }

  /**
   * Initialize.
   */
  initialize() {
    const defaultLanguage = this.extras?.metadata?.defaultLanguage || 'en';
    this.languageTag = Util.formatLanguageCode(defaultLanguage);

    // Fill dictionary
    this.dictionary = new Dictionary();
    this.dictionary.fill({ l10n: this.params.l10n, a11y: this.params.a11y });

    this.setInbuiltSound();
    this.jukebox = new Jukebox();
    this.fillJukebox();

    // Retrieve previous state
    this.previousState = this.extras?.previousState || {};
    this.viewState = this.previousState.viewState ??
      PhraseRandomizer.VIEW_STATES['task'];
    this.wasAnswerGiven = Object.keys(this.previousState).length > 0;

    this.foundSolutions = this.previousState.foundSolutions ??
      this.params.solutions.map(() => {
        return ({
          labels: [this.dictionary.get('l10n.toBeFound')]
        });
      });

    this.wrongAnswers = this.previousState.wrongAnswers ?? [];

    this.attemptsLeft = this.previousState.attemptsLeft ??
      this.params.behaviour.maxAttempts;

    // Randomizer instance
    this.randomizer = new Randomizer(
      {
        dictionary: this.dictionary,
        jukebox: this.jukebox,
        mode: this.params.mode,
        solutions: this.params.solutions,
        segments: this.params.segments,
        previousState: this.previousState.randomizer,
        column: this.params.behaviour.column
      },
      {
        onChanged: () => {
          this.handleAnswerGiven();
        },
        onResized: () => {
          this.trigger('resize');
        },
        onSpinningNumberChanged: (number) => {
          this.handleSpinningNumberChanged(number);
        }
      }
    );

    // Relay H5P resize to randomizer component
    this.on('resize', () => {
      this.randomizer.resize();
    });
  }

  /**
   * Build main DOM.
   * @returns {HTMLElement} Main DOM.
   */
  buildDOM() {
    const dom = document.createElement('div');
    dom.classList.add('h5p-phrase-randomizer-main');

    const buttons = [];
    if (
      this.params.audio.useDefaultClickPreviousNext ||
      this.jukebox.getAudioIds().length
    ) {
      buttons.push({
        id: 'audio',
        active: true,
        type: 'toggle',
        a11y: {
          active: this.dictionary.get('a11y.buttonAudioActive'),
          inactive: this.dictionary.get('a11y.buttonAudioInactive')
        },
        onClick: (ignore, params) => {
          this.toggleAudio(params.active);
        }
      });
    }

    if (this.params.behaviour.enableRetry) {
      buttons.push({
        id: 'randomize',
        type: 'pulse',
        a11y: {
          active: this.dictionary.get('a11y.buttonRandomize'),
        },
        onClick: () => {
          this.randomizer.randomize();
          this.handleAnswerGiven();
        }
      });
    }

    // Set up toolbar's status containers
    const toolbarStatusContainers = [];

    toolbarStatusContainers.push({ id: 'attempts' });
    toolbarStatusContainers.push({ id: 'found', hasMaxValue: true });

    // Toolbar
    this.toolbar = new Toolbar({
      dictionary: this.dictionary,
      ...(this.params.headline && { headline: this.params.headline }),
      buttons: buttons,
      statusContainers: toolbarStatusContainers
    });
    dom.append(this.toolbar.getDOM());

    if (this.params.behaviour.maxAttempts === Infinity) {
      this.toolbar.hideStatusContainer('attempts');
    }

    // Initialize attempts left
    this.toolbar.setStatusContainerStatus(
      'attempts',
      { value: this.attemptsLeft }
    );

    // Initialize found container
    this.toolbar.setStatusContainerStatus(
      'found',
      { value: this.getFoundScore(), maxValue: this.getFoundMaxScore() }
    );

    if (this.params.mode !== 'free') {
      this.toolbar.showStatusContainer('found');
    }

    if (this.params.behaviour.maxAttempts !== Infinity) {
      this.toolbar.showStatusContainer('attempts');
    }

    if (this.params.introduction) {
      const introduction = document.createElement('div');
      introduction.classList.add('h5p-phrase-randomizer-introduction');

      const content = document.createElement('div');
      content.classList.add('h5p-phrase-randomizer-intro-content');
      content.innerHTML = this.params.introduction;
      introduction.append(content);

      dom.append(introduction);
    }

    dom.append(this.randomizer.getDOM());

    this.foundSolutionsList = new FoundSolutionsList({
      dictionary: this.dictionary
    });

    if (this.foundSolutions.length > 0) {
      this.foundSolutionsList.setListItems(
        this.foundSolutions.map((solution) => {
          return solution;
        })
      );
    }

    if (this.params.mode !== 'free') {
      this.foundSolutionsList.show();
    }

    // Check answer button
    this.addButton(
      'check-answer',
      this.dictionary.get('l10n.check'),
      () => {
        this.checkAnswer();
      },
      this.params.mode !== 'free',
      { 'aria-label': this.dictionary.get('a11y.check') },
      {
        contentData: this.extras,
        textIfSubmitting: this.dictionary.get('l10n.submit')
      });

    // Show solution button
    this.addButton(
      'show-solution',
      this.dictionary.get('l10n.showSolution'),
      () => {
        this.showSolutions({ showRetry: true });
      },
      false,
      { 'aria-label': this.dictionary.get('a11y.showSolution') }
    );

    // Retry button
    this.addButton(
      'try-again',
      this.dictionary.get('l10n.retry'),
      () => {
        this.resetTask();
        this.randomizer.focus();
      },
      false,
      { 'aria-label': this.dictionary.get('a11y.retry') }
    );

    return dom;
  }

  /**
   * Recreate the view state from previous state.
   */
  recreateViewState() {
    if (this.viewState === PhraseRandomizer.VIEW_STATES['task']) {
      this.announceMessage({
        text: this.dictionary.get('l10n.noMessage'),
        aria: ''
      });
    }
    else if (this.viewState === PhraseRandomizer.VIEW_STATES['results']) {
      this.handleAllSolutionsFound({ skipXAPI: true });
      this.toggleButtons({ skipFocus: true });
    }
    else if (this.viewState === PhraseRandomizer.VIEW_STATES['solutions']) {
      this.showSolutions({ showRetry: true });
    }
  }

  /**
   * Set inbuilt sound.
   */
  async setInbuiltSound() {
    const copyright = {
      author: 'Oliver Tacke',
      license: 'PD',
      version: 'CC0 1.0',
      year: '2023'
    };

    const mimeTypes = {
      webm: ['webm'],
      mpeg: ['mp3', 'mp4'],
      ogg: ['ogg'],
      wav: ['wav']
    };

    if (this.params.audio.useDefaultClickPreviousNext) {
      const audioClickPath = Util.getAssetPath(
        AudioClick, this.contentId, 'H5P.PhraseRandomizer'
      );

      if (audioClickPath) {
        const fileExtension = audioClickPath.split('.').pop();
        let mime = null;
        Object.keys(mimeTypes).forEach((key) => {
          if (mime) {
            return;
          }

          if (mimeTypes[key].includes(fileExtension)) {
            mime = `audio/${key}`;
          }
        });

        this.params.audio.clickPreviousNext = [{
          path: audioClickPath,
          ...(mime && { mime: mime }),
          copyright: { ...copyright, title: 'Click' }
        }];
      }
    }
  }

  /**
   * Fill jukebox with audios.
   */
  fillJukebox() {
    const audios = {};

    for (const key in this.params.audio) {
      if (!this.params.audio[key]?.[0]?.path) {
        continue;
      }

      const src = H5P.getPath(
        this.params.audio[key][0].path, this.contentId
      );

      const crossOrigin =
        H5P.getCrossOrigin?.(this.params.audio[key][0]) ??
        'Anonymous';

      audios[key] = {
        src: src,
        crossOrigin: crossOrigin
      };
    }

    this.jukebox.fill(audios);
  }
}

// These values could be fetched from semantics.json automatically.

Initialization.MIN_SEGMENTS = 1;
Initialization.MAX_SEGMENTS = 6;

Initialization.MIN_OPTIONS = 2;
Initialization.PLACEHOLDER_OPTION = '---';
