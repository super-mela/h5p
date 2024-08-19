import Util from '@services/util.js';
import Dictionary from '@services/dictionary.js';
import Globals from '@services/globals.js';
import Content from '@components/content.js';
import '@styles/h5p-content-compiler.scss';

export default class ContentCompiler extends H5P.EventDispatcher {
  /**
   * @class
   * @param {object} params Parameters passed by the editor.
   * @param {number} contentId Content's id.
   * @param {object} [extras] Saved state, metadata, etc.
   */
  constructor(params, contentId, extras = {}) {
    super();

    // Sanitize parameters
    this.params = Util.extend({
      introductionTexts: {},
      contents: [],
      visuals: {
        cardWidth: '14rem',
        imageSizing: 'custom',
        customRatioWidth: 16,
        customRatioHeight: 9,
        introClamp: 'unset'
      },
      behaviour: {
        startWithEverything: false,
        allKeywordsPreselected: true,
        bindSelectionToTags: true
      },
      l10n: {
        start: 'Start',
        selected: 'selected',
        statusUnstarted: '',
        statusViewed: 'viewed',
        statusCompleted: 'completed',
        statusCleared: 'cleared',
        noCardsFilter: 'You need to select keywords in order to see contents to select from.',
        noCardsSelected: 'You have not selected any content.',
        untitledContent: 'Untitled Content',
        confirmResetHeader: 'Reset all contents?',
        confirmResetDialog: 'All your contents and their status will be reset, but your selection will remain as is. Do you want to proceed?',
        confirmResetAllHeader: 'Reset all contents and selections?',
        confirmResetAllDialog: 'All your contents and their status and your selections will be reset. Do you want to proceed?',
        no: 'No',
        yes: 'Yes',
        noContents: 'No valid contents were set.'
      },
      a11y: {
        exerciseLabel: 'Exercise: @label',
        toolbar: 'Toolbar. Use the key combination Alt plus T to focus the toolbar later on.',
        tagSelector: 'Tag selector. Use to filter exercises.',
        tagSelectorOpened: 'Tag selector was opened.',
        tagSelectorClosed: 'Tag selector was closed.',
        selected: 'Selected',
        notSelected: 'Not selected',
        selectedForReordering: 'Selected for reordering. Select second content to swap positions.',
        selectedForDropzone: 'Select to swap positions with previously selected card.',
        cardListFilter: 'Select all exercises that you want to work on',
        cardListReorder: 'Change the order of exercises',
        cardList: 'Do selected exercises',
        buttonFilter: 'Switch to select mode',
        buttonReorder: 'Switch to reorder mode',
        buttonView: 'Switch to view mode',
        buttonTags: 'Toggle displaying tag selector',
        buttonReset: 'Reset exercises',
        buttonResetAll: 'Reset exercises and selections',
        close: 'Close',
        switchedToModeFilter: 'Switched to select mode.',
        switchedToModeReorder: 'Switched to reorder mode.',
        switchedToModeView: 'Switched to view mode.',
        swappedContents: 'Swapped content at position @position1 with content at position @position2.'
      }
    }, params);

    if (this.params.behaviour.startWithEverything) {
      this.params.behaviour.allKeywordsPreselected = true;
    }

    this.contentId = contentId;
    this.extras = extras;

    // Set globals
    this.globals = new Globals();
    this.globals.set('contentId', this.contentId);
    this.globals.set('mainInstance', this);
    this.globals.set('states', ContentCompiler.STATES);
    this.globals.set('modes', ContentCompiler.MODES);
    this.globals.set('resize', () => {
      this.trigger('resize');
    });

    // Sanitize
    this.params.contents = this.params.contents
      .filter((content) => {
        return content.contentType?.subContentId;
      })
      .map((content) => {
        const amendedContent = content;
        amendedContent.visuals = this.params.visuals;

        return amendedContent;
      });

    // Fill dictionary
    this.dictionary = new Dictionary();
    this.dictionary.fill({ l10n: this.params.l10n, a11y: this.params.a11y });

    this.previousState = extras?.previousState || {};
    const defaultLanguage = extras?.metadata?.defaultLanguage || 'en';
    this.languageTag = Util.formatLanguageCode(defaultLanguage);

    this.buildDOM();

    this.setCustomCSSProperties();
  }

  /**
   * Attach library to wrapper.
   * @param {H5P.jQuery} $wrapper Content's container.
   */
  attach($wrapper) {
    $wrapper.get(0).classList.add('h5p-content-compiler');
    $wrapper.get(0).appendChild(this.dom);
  }

  /**
   * Set custom CSS properties.
   */
  setCustomCSSProperties() {
    if (this.params.visuals.cardWidth.match(/^\d+(?:\.\d+)?(?: )?$/)) {
      this.params.visuals.cardWidth = `${this.params.visuals.cardWidth}px`;
    }
    this.dom.style.setProperty('--card-width', this.params.visuals.cardWidth);

    this.dom.style.setProperty(
      '--card-image-ratio-width', this.params.visuals.customRatioWidth
    );

    this.dom.style.setProperty(
      '--card-image-ratio-height', this.params.visuals.customRatioHeight
    );

    this.dom.style.setProperty(
      '--card-introduction-clamp', this.params.visuals.introClamp
    );
  }


  /**
   * Build main DOM.
   */
  buildDOM() {
    this.dom = document.createElement('div');
    this.dom.classList.add('h5p-content-compiler-main');

    this.content = new Content(
      {
        dictionary: this.dictionary,
        globals: this.globals,
        startWithEverything: this.params.behaviour.startWithEverything,
        allKeywordsPreselected: this.params.behaviour.allKeywordsPreselected,
        bindSelectionToTags: this.params.behaviour.bindSelectionToTags,
        contents: this.params.contents,
        introductionTexts: this.params.introductionTexts,
        ...(
          this.params.showTitleScreen &&
          { titleScreen: this.params.titleScreen }
        ),
        ...(
          Object.keys(this.previousState).length &&
          { previousState: this.previousState.content }
        )
      },
      {
        resize: () => {
          this.trigger('resize');
        }
      }
    );
    this.dom.append(this.content.getDOM());
  }

  /**
   * Get task title.
   * @returns {string} Title.
   */
  getTitle() {
    // H5P Core function: createTitle
    return H5P.createTitle(
      this.extras?.metadata?.title || ContentCompiler.DEFAULT_DESCRIPTION
    );
  }

  /**
   * Get content type description.
   * @returns {string} Description.
   */
  getDescription() {
    return ContentCompiler.DEFAULT_DESCRIPTION;
  }

  /**
   * Answer H5P core's call to return the current state.
   * @returns {object} Current state.
   */
  getCurrentState() {
    return {
      content: this.content.getCurrentState()
    };
  }
}

/** @constant {string} DEFAULT_DESCRIPTION Default description. */
ContentCompiler.DEFAULT_DESCRIPTION = 'Content Compiler';

/** @constant {string} DEFAULT_CARD_IMAGE_RATIO Default ratio. */
ContentCompiler.DEFAULT_CARD_IMAGE_RATIO = '16/9';

/** @constant {object} STATES States lookup */
ContentCompiler.STATES = {
  unstarted: 0,
  viewed: 1,
  completed: 2,
  cleared: 3
};

/** @constant {object} MODES Modes lookup */
ContentCompiler.MODES = {
  filter: 0,
  reorder: 1,
  view: 2
};
