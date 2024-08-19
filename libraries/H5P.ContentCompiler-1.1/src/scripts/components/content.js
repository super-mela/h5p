import Contents from '@models/contents.js';
import Screenreader from '@services/screenreader.js';
import Util from '@services/util.js';
import MediaScreen from './media-screen/media-screen.js';
import CardsList from '@components/cards-list/cards-list.js';
import ConfirmationDialog from '@components/confirmation-dialog/confirmation-dialog.js';
import ExerciseOverlay from '@components/exercise-overlay/exercise-overlay.js';
import Toolbar from '@components/toolbar/toolbar.js';
import TagSelector from '@components/tag-selector/tag-selector.js';
import MessageBox from './message-box/message-box.js';
import MessageBoxHint from './message-box/message-box-hint.js';
import './content.scss';

export default class Content {

  constructor(params = {}) {
    this.params = Util.extend({
      contents: [],
      previousState: {}
    }, params);

    this.buildDOM();
  }

  /**
   * Build DOM.
   */
  buildDOM() {
    this.dom = document.createElement('div');
    this.dom.classList.add('h5p-content-compiler-content');

    if (!this.params.contents.length) {
      this.messageBoxHint = new MessageBoxHint();
      this.messageBoxHint.setText(
        this.params.dictionary.get('l10n.noContents')
      );
      this.dom.append(this.messageBoxHint.getDOM());

      return;
    }

    // Retrieve all tags from contents
    this.allTags = this.params.contents
      .reduce((result, content) => {
        const keywords = (content.keywords || '')
          .split(',')
          .map((word) => word.trim());

        keywords.forEach((word) => {
          if (!result.includes(word)) {
            result.push(word);
          }
        });

        return result;
      }, [])
      .filter((text) => text.trim() !== '')
      .sort();

    // Set selected tags
    this.selectedTags = this.params.previousState.selectedTags;
    if (!this.selectedTags) {
      this.selectedTags = this.params.allKeywordsPreselected ?
        this.allTags :
        [];
    }

    // Pool of card models
    this.pool = new Contents(
      {
        globals: this.params.globals,
        contents: this.params.contents,
        ...(this.params.previousState.contents && {
          previousState: this.params.previousState.contents
        }),
        allKeywordsPreselected: this.params.allKeywordsPreselected
      },
      {
        onStateChanged: (params) => {
          this.handleExerciseStateChanged(params);
        },
        onCardStateChanged: (id, key, value) => {
          this.poolList.updateCardState(id, key, value);
        }
      }
    );

    // Title screen if set
    if (this.params.titleScreen) {
      this.intro = document.createElement('div');
      this.intro.classList.add('h5p-content-compiler-content-intro');

      this.startScreen = new MediaScreen({
        id: 'start',
        contentId: this.params.globals.get('contentId'),
        introduction: this.params.titleScreen.titleScreenIntroduction,
        medium: this.params.titleScreen.titleScreenMedium,
        buttons: [
          { id: 'start', text: this.params.dictionary.get('l10n.start') }
        ],
        a11y: {
          screenOpened: this.params.dictionary.get('a11y.startScreenWasOpened')
        }
      }, {
        onButtonClicked: () => {
          this.handleTitleScreenClosed();
        }
      });

      this.intro.append(this.startScreen.getDOM());

      this.dom.append(this.intro);
    }

    this.main = document.createElement('div');
    this.main.classList.add('h5p-content-compiler-content-main');
    this.dom.append(this.main);

    const buttons = [
      {
        id: 'filter',
        type: 'toggle',
        a11y: {
          active: this.params.dictionary.get('a11y.buttonFilter'),
        },
        onClick: () => {
          this.setMode(this.params.globals.get('modes')['filter']);
          this.announceModeChanged();
        }
      },
      {
        id: 'reorder',
        type: 'toggle',
        a11y: {
          active: this.params.dictionary.get('a11y.buttonReorder'),
        },
        onClick: () => {
          this.setMode(this.params.globals.get('modes')['reorder']);
          this.announceModeChanged();
        }
      },
      {
        id: 'view',
        type: 'toggle',
        a11y: {
          active: this.params.dictionary.get('a11y.buttonView'),
        },
        onClick: () => {
          this.setMode(this.params.globals.get('modes')['view']);
          this.announceModeChanged();
        }
      }
    ];

    buttons.push({
      id: 'reset',
      type: 'pulse',
      a11y: {
        active: this.params.dictionary.get('a11y.buttonReset'),
      },
      onClick: () => {
        this.handleResetConfirmation();
      }
    });

    buttons.push({
      id: 'reset-all',
      type: 'pulse',
      a11y: {
        active: this.params.dictionary.get('a11y.buttonResetAll'),
      },
      onClick: () => {
        this.handleResetAllConfirmation();
      }
    });

    // Toolbar
    this.toolbar = new Toolbar({
      dictionary: this.params.dictionary,
      buttons: buttons
    });
    this.main.append(this.toolbar.getDOM());

    this.messageBoxIntroduction = new MessageBox();
    this.main.appendChild(this.messageBoxIntroduction.getDOM());

    if (this.allTags.length) {
      this.tagSelector = new TagSelector(
        {
          dictionary: this.params.dictionary,
          tags: this.allTags.map((word) => {
            return {
              text: word,
              selected: this.selectedTags.includes(word)
            };
          })
        },
        {
          onChanged: (selectedTags) => {
            this.handleFilterChanged(selectedTags);
          }
        }
      );
      this.handleTagSelectorClicked({ active: true, quiet: true });
      this.main.append(this.tagSelector.getDOM());
    }

    // Pool of contents
    this.poolList = new CardsList(
      {
        dictionary: this.params.dictionary,
        globals: this.params.globals,
        contents: this.pool.getContents()
      },
      {
        onCardClicked: (params) => {
          this.handleCardClicked(params);
        },
        onCardsSwapped: (params) => {
          this.handleCardsSwapped(params);
        },
        onGotoToolbar: () => {
          this.toolbar.focus();
        }
      }
    );
    this.main.append(this.poolList.getDOM());

    this.messageBoxHint = new MessageBoxHint();
    this.messageBoxHint.hide();
    this.main.append(this.messageBoxHint.getDOM());

    if (this.intro) {
      this.main.classList.add('display-none');
    }

    this.exerciseOverlay = new ExerciseOverlay(
      {
        dictionary: this.params.dictionary
      },
      {
        onClosed: () => {
          this.handleExerciseClosed();
        }
      }
    );
    this.dom.append(this.exerciseOverlay.getDOM());

    // Confirmation Dialog
    this.confirmationDialog = new ConfirmationDialog({
      globals: this.params.globals
    });
    document.body.append(this.confirmationDialog.getDOM());

    // Screenreader for polite screen reading
    document.body.append(Screenreader.getDOM());

    // Update contents' state from previous state
    Object.entries(this.params.previousState?.contents || [])
      .forEach((entry) => {
        this.pool.updateState(entry[0], entry[1]);
      });

    // Update tag selector
    this.handleFilterChanged(this.selectedTags);

    // Select everything if author wants to
    if (
      !this.params.previousState.contents &&
      this.params.startWithEverything
    ) {
      Object.keys(this.pool.getContents()).forEach((id) => {
        this.pool.updateState(id, { isSelected: true });
      });
    }

    // Set content mode
    if (this.params.previousState.mode) {
      this.setMode(this.params.previousState.mode);
    }
    else if (this.params.startWithEverything) {
      this.setMode(this.params.globals.get('modes')['view']);
    }
    else {
      this.setMode(this.params.globals.get('modes')['filter']);
    }
  }

  /**
   * Get DOM.
   * @returns {HTMLElement} Content DOM.
   */
  getDOM() {
    return this.dom;
  }

  /**
   * Set mode.
   * @param {number} mode Mode id.
   */
  setMode(mode) {
    if (this.mode === mode) {
      return;
    }

    this.mode = mode;

    for (const key in this.params.globals.get('modes')) {
      this.toolbar.forceButton(
        key,
        mode === this.params.globals.get('modes')[key]
      );

      if (mode === this.params.globals.get('modes')[key]) {
        this.toolbar.blockButton(key);
      }
      else {
        this.toolbar.unblockButton(key);
      }

      this.poolList.setMode(mode);
    }

    if (mode === this.params.globals.get('modes')['filter']) {
      this.toolbar.enableButton('tags');
      this.pool.setVisibilityByKeywords(
        this.allTags.length === 1 ? this.allTags : this.selectedTags
      );

      if (this.tagSelector?.isVisible() === false) {
        this.tagSelector?.show();
        this.announceTagSelector(true);
      }
    }
    else {
      if (this.selectedTags.length !== 0) {
        this.toolbar.forceButton('tags', false);
      }

      this.toolbar.disableButton('tags');

      if (this.tagSelector?.isVisible()) {
        this.tagSelector?.hide();
        this.announceTagSelector(false);
      }

      this.pool.setVisibility(true);
    }

    this.updateMessageBox();
    this.updateMessageBoxHint();

    this.params.globals.get('resize')();
  }
  /**
   * Announce tag selector state.
   * @param {boolean} open If true, announce selector was opened. Else closed.
   */
  announceTagSelector(open) {
    if (open) {
      Screenreader.read(this.params.dictionary.get('a11y.tagSelectorOpened'));
    }
    else {
      Screenreader.read(this.params.dictionary.get('a11y.tagSelectorClosed'));
    }
  }

  /**
   * Announce mode change.
   */
  announceModeChanged() {
    if (this.mode === this.params.globals.get('modes')['filter']) {
      Screenreader.read(
        this.params.dictionary.get('a11y.switchedToModeFilter')
      );
    }
    else if (this.mode === this.params.globals.get('modes')['reorder']) {
      Screenreader.read(
        this.params.dictionary.get('a11y.switchedToModeReorder')
      );
    }
    else if (this.mode === this.params.globals.get('modes')['view']) {
      Screenreader.read(
        this.params.dictionary.get('a11y.switchedToModeView')
      );
    }
  }

  /**
   * Update message for introduction.
   */
  updateMessageBox() {
    let html;

    if (this.mode === this.params.globals.get('modes')['filter']) {
      html = this.params.introductionTexts.introFilter;
    }
    else if (this.mode === this.params.globals.get('modes')['reorder']) {
      html = this.params.introductionTexts.introReorder;
    }
    else if (this.mode === this.params.globals.get('modes')['view']) {
      html = this.params.introductionTexts.introView;
    }

    html = (html || '').trim();

    if (html.length) {
      this.messageBoxIntroduction.setText(html);
      this.messageBoxIntroduction.show();
    }
    else {
      this.messageBoxIntroduction.hide();
    }
  }

  /**
   * Handle cards were swapped.
   * @param {object} [params] Parameters.
   * @param {string} params.id1 Id of card 1 that was swapped.
   * @param {string} params.id2 Id of card 2 that was swapped.
   */
  handleCardsSwapped(params = {}) {
    // Deactivate 'activated' state of cards
    const activeContents = Object
      .entries(this.pool.getContents())
      .filter((entry) => entry[1].isActivated);

    activeContents.forEach((content) => {
      this.pool.updateState(content[0], { isActivated: false });
    });

    const cardsOrder = this.poolList.getCardsOrder();
    const pos1 = cardsOrder.findIndex((id) => id === params.id1);
    const pos2 = cardsOrder.findIndex((id) => id === params.id2);

    this.pool.updateState(params.id1, { position: pos1 });
    this.pool.updateState(params.id2, { position: pos2 });

    if (Util.isUsingMouse() === false) {
      Screenreader.read(this.params.dictionary.get('a11y.swappedContents')
        .replace(/@position1/, pos2 + 1)
        .replace(/@position2/, pos1 + 1)
      );
    }

    // Focus card that swapping was initialized with
    this.poolList.focusCard(params.id1);
  }

  /**
   * Update message.
   */
  updateMessageBoxHint() {
    if (typeof this.mode !== 'number') {
      return;
    }

    if (this.mode === this.params.globals.get('modes')['filter']) {
      const numberCardsFiltered = Object.values(this.pool.getContents())
        .filter((content) => content.isVisible).length;

      if (numberCardsFiltered === 0) {
        this.messageBoxHint.setText(
          this.params.dictionary.get('l10n.noCardsFilter')
        );
        this.messageBoxHint.show();
        Screenreader.read(this.params.dictionary.get('l10n.noCardsFilter'));
      }
      else {
        this.messageBoxHint.hide();
      }
    }
    else {
      const numberCardsSelected = Object.values(this.pool.getContents())
        .filter((content) => content.isSelected).length;

      if (numberCardsSelected === 0) {
        this.messageBoxHint.setText(
          this.params.dictionary.get('l10n.noCardsSelected')
        );
        this.messageBoxHint.show();
        setTimeout(() => {
          Screenreader.read(this.params.dictionary.get('l10n.noCardsSelected'));
        }, 50); // Let "switched" message get read first
      }
      else {
        this.messageBoxHint.hide();
      }
    }
  }

  /**
   * Answer H5P core's call to return the current state.
   * @returns {object|undefined} Current state.
   */
  getCurrentState() {
    if (!this.pool) {
      return;
    }

    return {
      mode: this.mode,
      selectedTags: this.selectedTags,
      contents: this.pool.getCurrentState()
    };
  }

  /**
   * Handle card was clicked.
   * @param {object} [params] Parameters.
   * @param {string} params.id Id of card that was clicked.
   * @param {boolean} [params.selected] If true, handle selection.
   */
  handleCardClicked(params = {}) {
    if (!params.id) {
      return;
    }

    if (this.mode === this.params.globals.get('modes')['filter']) {
      if (typeof params.isSelected === 'boolean') {
        this.pool.updateState(params.id, { isSelected: params.isSelected });
      }
    }
    else if (this.mode === this.params.globals.get('modes')['reorder']) {
      if (typeof params.isActivated === 'boolean') {
        const activeContents = Object
          .entries(this.pool.getContents())
          .filter((entry) => entry[1].isActivated);

        if (activeContents.length) {
          const id1 = activeContents[0][0];

          this.poolList.swapCardsById(id1, params.id);

          this.handleCardsSwapped({ id1: id1, id2: params.id });
        }
        else {
          this.pool.updateState(params.id, { isActivated: params.isActivated });
        }
      }
    }
    else if (this.mode === this.params.globals.get('modes')['view']) {
      const content = this.pool.getContent(params.id);

      this.exerciseOverlay.setH5PContent(content.contentInstance.getDOM());
      this.exerciseOverlay.setTitle(
        content?.label || content?.contentInstance?.params?.metadata?.title ||
        ''
      );
      this.exerciseOverlay.show();

      content.contentInstance.setState(this.params.globals.get('states')['viewed']);

      // Keep track to give back focus later
      this.currentCardId = params.id;

      window.requestAnimationFrame(() => {
        this.params.globals.get('resize')();
      });
    }
  }

  /**
   * Handle selection of tags changed.
   * @param {string[]} selectedTags Selected tags.
   */
  handleFilterChanged(selectedTags) {
    if (this.params.bindSelectionToTags) {
      // Determine what tag was selected/unselected
      const wasUnselected = this.selectedTags
        .filter((tag) => !selectedTags.includes(tag));

      let wasSelected = selectedTags
        .filter((tag) => !this.selectedTags.includes(tag));

      // Edge case when instantiating depending on settings
      if (
        !this.params.previousState.selectedTags &&
        this.params.allKeywordsPreselected &&
        wasUnselected.length === 0 &&
        wasSelected.length === 0
      ) {
        wasSelected = this.allTags;
      }

      const contents = this.pool.getContents();

      // Determine all ids that need to remain selected
      let selectedIds = [];
      for (const id in contents) {
        selectedTags.forEach((tag) => {
          if (
            contents[id].keywords.includes(tag) &&
            !selectedIds.includes(id)
          ) {
            selectedIds.push(id);
          }
        });
      }

      // Update selection according to tag
      for (const id in contents) {
        const keywords = contents[id].keywords ?? [];

        if (
          wasUnselected.filter((tag) => keywords.includes(tag)).length &&
          !selectedIds.includes(id) // Still selected by other tag
        ) {
          this.pool.updateState(id, { isSelected: false });
        }
        else if (wasSelected.filter((tag) => keywords.includes(tag)).length) {
          this.pool.updateState(id, { isSelected: true });
        }
      }
    }

    this.selectedTags = selectedTags;
    this.pool.setVisibilityByKeywords(this.selectedTags);

    this.updateMessageBoxHint();

    this.params.globals.get('resize')();
  }

  /**
   * Handle tag selector clicked.
   * @param {object} [params] Parameters.
   */
  handleTagSelectorClicked(params = {}) {
    if (params.active === true) {
      this.tagSelector?.show();

      if (!params.quiet) {
        this.announceTagSelector(true);
      }
    }
    else if (params.active === false) {
      this.tagSelector?.hide();

      if (!params.quiet) {
        this.announceTagSelector(false);
      }
    }

    this.params.globals.get('resize')();
  }

  /**
   * Handle title screen closed.
   */
  handleTitleScreenClosed() {
    this.main.classList.remove('display-none');
    this.toolbar.focusButton('filter');

    this.params.globals.get('resize')();
  }

  /**
   * Handle exercise state changed.
   * @param {object} [params] Parameters.
   * @param {string} params.id Subcontent id of exercise.
   * @param {number} params.state State id.
   */
  handleExerciseStateChanged(params = {}) {
    if (typeof params.id !== 'string' || typeof params.state !== 'number') {
      return;
    }

    this.pool.updateState(params.id, { 'statusCode': params.state });
  }

  /**
   * Handle exercise closed.
   */
  handleExerciseClosed() {
    this.exerciseOverlay.hide();

    // Give focus back to previously focussed card
    this.poolList.focusCard(this.currentCardId);
  }

  /**
   * Handle reset confirmation.
   */
  handleResetConfirmation() {
    this.confirmationDialog.update(
      {
        headerText: this.params.dictionary.get('l10n.confirmResetHeader'),
        dialogText: this.params.dictionary.get('l10n.confirmResetDialog'),
        cancelText: this.params.dictionary.get('l10n.no'),
        confirmText: this.params.dictionary.get('l10n.yes')
      }, {
        onConfirmed: () => {
          this.handleReset();
        }
      }
    );

    this.confirmationDialog.show();
  }

  /**
   * Handle reset all confirmation.
   */
  handleResetAllConfirmation() {
    this.confirmationDialog.update(
      {
        headerText: this.params.dictionary.get('l10n.confirmResetAllHeader'),
        dialogText: this.params.dictionary.get('l10n.confirmResetAllDialog'),
        cancelText: this.params.dictionary.get('l10n.no'),
        confirmText: this.params.dictionary.get('l10n.yes')
      }, {
        onConfirmed: () => {
          this.handleResetAll();
        }
      }
    );

    this.confirmationDialog.show();
  }

  /**
   * Handle reset.
   */
  handleReset() {
    this.pool.reset();
  }

  /**
   * Handle reset all.
   */
  handleResetAll() {
    this.pool.reset();

    // Reset all tags selections to start value
    this.tagSelector?.selectAll(this.params.allKeywordsPreselected === true);

    if (this.params.startWithEverything) {
      this.pool.selectAll(true);

      // Move to view
      if (this.mode !== this.params.globals.get('modes')['view']) {
        this.setMode(this.params.globals.get('modes')['view']);
        this.announceModeChanged();
      }

      // Required to update status
      this.poolList.setMode(this.params.globals.get('modes')['view']);
    }
    else {
      this.pool.selectAll(false);

      // Move to filter
      if (this.mode !== this.params.globals.get('modes')['filter']) {
        this.setMode(this.params.globals.get('modes')['filter']);
        this.announceModeChanged();
      }
    }

    this.updateMessageBoxHint();
  }
}
