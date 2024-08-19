import Util from '@services/util.js';
import Card from '@components/cards-list/card.js';
import CardPlaceholder from './card-placeholder.js';
import './cards-list.scss';

export default class CardsList {

  /**
   * @class
   * @param {object} [params] Parameters.
   * @param {object} [params.contents] Contents.
   * @param {number} [params.mode] Mode.
   * @param {object} [callbacks] Callbacks.
   * @param {function} [callbacks.onCardClicked] Callback click.
   * @param {function} [callbacks.onCardsSwapped] Callback cards swapped.
   * @param {function} [callbacks.onCardMouseDown] Callback mouse down.
   * @param {function} [callbacks.onCardDragStart] Callback drag start.
   * @param {function} [callbacks.onCardDragEnter] Callback drag enter.
   * @param {function} [callbacks.onCardDragLeave] Callback drag leave.
   * @param {function} [callbacks.onCardDragEnd] Callback drag end.
   * @param {function} [callbacks.onGotoToolbar] Callback to go to toolbar.
   */
  constructor(params = {}, callbacks = {}) {
    this.params = Util.extend({
      contents: {},
      mode: params.globals.get('modes')['filter']
    }, params);

    this.callbacks = Util.extend({
      onCardClicked: () => {},
      onCardsSwapped: () => {},
      onCardMouseDown: () => {},
      onCardDragStart: () => {},
      onCardDragEnter: () => {},
      onCardDragLeave: () => {},
      onCardDragEnd: () => {},
      onGotoToolbar: () => {}
    }, callbacks);

    this.dom = document.createElement('ul');
    this.dom.classList.add('h5p-content-compiler-cards-list');
    this.dom.setAttribute('role', 'list'); // Explicit list role required for some screen readers
    this.dom.addEventListener('keydown', (event) => {
      this.handleKeydown(event);
    });

    this.cards = {};

    this.placeholder = new CardPlaceholder();

    for (const id in this.params.contents) {
      const contentParams = this.params.contents[id];

      this.addCard(
        {
          id: id,
          card: {
            label: contentParams.label,
            image: contentParams.image,
            introduction: contentParams.introduction,
            keywords: contentParams.keywords,
            visuals: contentParams.visuals
          }
        },
        {
          onClicked: (states) => {
            this.handleCardClicked(id, states);
          },
          onMouseDown: (event) => {
            this.handleCardMouseDown(event);
          },
          onDragStart: (event) => {
            this.handleCardDragStart(id, event);
          },
          onDragEnter: (event) => {
            this.handleCardDragEnter(id, event);
          },
          onDragLeave: (event) => {
            this.handleCardDragLeave(id, event);
          },
          onDragEnd: () => {
            this.handleCardDragEnd();
          }
        }
      );
    }

    this.setMode(this.params.mode);
  }

  /**
   * Get DOM.
   * @returns {HTMLElement} Content DOM.
   */
  getDOM() {
    return this.dom;
  }

  /**
   * Add card.
   * @param {object} [params] Parameters.
   * @param {string} params.id Id of card to add.
   * @param {object} params.card Card parameters.
   * @param {object} [callbacks] Callbacks.
   * @param {function} [callbacks.onCardClicked] Handler for card clicked.
   */
  addCard(params = {}, callbacks = {}) {
    if (typeof params.id !== 'string' || !params.card) {
      return; // No id given
    }

    this.cards[params.id] = new Card(
      {
        ...params.card,
        dictionary: this.params.dictionary,
        globals: this.params.globals
      },
      callbacks
    );
    this.dom.append(this.cards[params.id].getDOM());
  }

  /**
   * Remove card.
   * @param {string} id Id of card to be removed.
   */
  removeCard(id) {
    if (typeof id !== 'string') {
      return; // No id given
    }

    delete this.cards[id];
  }

  /**
   * Focus card.
   * @param {string} id Id of card to remove focus.
   */
  focusCard(id) {
    if (typeof id !== 'string') {
      return; // No id given
    }

    this.cards[id]?.focus();
  }

  /**
   * Get element index inside list.
   * @param {HTMLElement} node Node to get index for.
   * @returns {number} Index of node or -1 if not found.
   */
  getElementIndex(node) {
    return [...this.dom.children]
      .filter((child) => child !== this.placeholder.getDOM())
      .indexOf(node);
  }

  /**
   * Set mode.
   * @param {string|number} mode Mode to set.
   */
  setMode(mode) {
    if (typeof mode === 'string') {
      mode = this.params.globals.get('modes')[mode];
    }

    if (
      typeof mode !== 'number' ||
      !Object.values(this.params.globals.get('modes')).includes(mode)
    ) {
      return;
    }

    // Set CSS modifier
    for (const key in this.params.globals.get('modes')) {
      this.dom.classList.toggle(key, mode === this.params.globals.get('modes')[key]);
    }

    // Allow to drag cards when in reordering mode
    Object.values(this.cards).forEach((card) => {
      card.setDraggable(mode === this.params.globals.get('modes')['reorder']);
    });

    for (const id in this.cards) {
      this.cards[id].setMode(mode);
    }

    this.mode = mode;

    this.updateAriaLabel();
  }

  /**
   * Update aria label.
   */
  updateAriaLabel() {
    let ariaLabelSegments = [];

    if (this.mode === this.params.globals.get('modes')['filter']) {
      ariaLabelSegments.push(
        this.params.dictionary.get('a11y.cardListFilter')
      );
    }
    else if (this.mode === this.params.globals.get('modes')['reorder']) {
      ariaLabelSegments.push(
        this.params.dictionary.get('a11y.cardListReorder')
      );
    }
    else if (this.mode === this.params.globals.get('modes')['view']) {
      ariaLabelSegments.push(
        this.params.dictionary.get('a11y.cardListView')
      );
    }
    else {
      return;
    }

    this.dom.setAttribute('aria-label', `${ariaLabelSegments.join('. ')}.`);
  }

  /**
   * Update state of a card view.
   * @param {string} id Card's id.
   * @param {string} key Key of state to be changed.
   * @param {string|number|boolean} value Value of state to be changed.
   */
  updateCardState(id, key, value) {
    if (typeof id !== 'string') {
      return;
    }

    this.cards[id].updateState(key, value);

    // Activating/deactivating one card will make all other/no cards dropzones.
    if (key === 'isActivated') {
      Object.values(this.cards)
        .filter((card) => !card.isActivated)
        .forEach((card) => {
          card.toggleDropzone(value);
        });
    }
  }

  /**
   * Swap cards by id.
   * @param {string} id1 Id of card 1.
   * @param {string} id2 Id of card 2.
   */
  swapCardsById(id1, id2) {
    if (typeof id1 !== 'string' || typeof id2 !== 'string') {
      return;
    }

    this.swapCards(this.cards[id1].getDOM(), this.cards[id2].getDOM());
  }

  /**
   * Swap cards by HTML element.
   * @param {HTMLElement} element1 DOM of card 1.
   * @param {HTMLElement} element2 DOM of card 2.
   */
  swapCards(element1, element2) {
    // Swap dragged draggable and draggable that's dragged to if not identical
    if (
      element1 && element2 &&
      element1 !== element2
    ) {
      Util.swapDOMElements(element1, element2);
    }
  }

  /**
   * Get order of cards on screen.
   * @returns {string[]} Cards order.
   */
  getCardsOrder() {
    // Determine card ids based on position of DOM in list
    return [... this.getDOM().childNodes]
      .filter((cardDOM) => cardDOM !== this.placeholder.getDOM())
      .map((cardDOM) => {
        const position = Object.values(this.cards)
          .findIndex((card) => card.getDOM() === cardDOM);

        return Object.keys(this.cards)[position];
      });
  }

  /**
   * Handle card clicked.
   * @param {string} id Id of card that was clicked.
   * @param {object} states Card states.
   */
  handleCardClicked(id, states = {}) {
    if (this.mode === this.params.globals.get('modes')['filter']) {
      this.callbacks.onCardClicked({
        id: id,
        isSelected: states.isSelected
      });
    }
    else if (this.mode === this.params.globals.get('modes')['reorder']) {
      this.callbacks.onCardClicked({
        id: id,
        isActivated: states.isActivated
      });
    }
    else if (this.mode === this.params.globals.get('modes')['view']) {
      this.callbacks.onCardClicked({ id: id });
    }
  }

  /**
   * Handle mouse down on card.
   * @param {MouseEvent} event Mouse event.
   */
  handleCardMouseDown(event) {
    if (this.mode !== this.params.globals.get('modes')['reorder']) {
      return;
    }

    this.pointerPosition = { x: event.clientX, y: event.clientY };
  }

  /**
   * Handle card drag start.
   * @param {string} id Id of card that started being dragged.
   * @param {DragEvent} event Drag event.
   */
  handleCardDragStart(id, event) {
    if (this.mode !== this.params.globals.get('modes')['reorder']) {
      return;
    }

    // Workaround for Firefox that may scale the draggable down otherwise
    event.dataTransfer.setDragImage(
      this.cards[id].getDOM(),
      this.pointerPosition.x -
        this.cards[id].getDOM().getBoundingClientRect().left,
      this.pointerPosition.y -
        this.cards[id].getDOM().getBoundingClientRect().top
    );

    this.draggedElement = event.currentTarget;

    // Would hide browser's draggable copy as well without timeout
    clearTimeout(this.placeholderTimeout);
    this.placeholderTimeout = window.setTimeout(() => {
      this.placeholder.setSize(
        this.draggedElement.offsetWidth, this.draggedElement.offsetHeight
      );

      this.dom.insertBefore(
        this.placeholder.getDOM(), this.draggedElement.nextSibling
      );

      this.cards[id].hide();
    }, 0);
  }

  /**
   * Handle card drag enter.
   * @param {string} id Id of card that was entered.
   * @param {DragEvent} event Drag event.
   */
  handleCardDragEnter(id, event) {
    if (this.mode !== this.params.globals.get('modes')['reorder']) {
      return;
    }

    this.dropzoneElement = event.currentTarget;

    // Swap dragged draggable and draggable that's dragged to if not identical
    if (
      this.dropzoneElement && this.draggedElement &&
      this.draggedElement !== this.dropzoneElement
    ) {
      this.swapCards(this.dropzoneElement, this.draggedElement);

      this.dom.insertBefore(
        this.placeholder.getDOM(), this.draggedElement.nextSibling
      );

      const cardIndex1 = Object.values(this.cards)
        .findIndex((card) => card.getDOM() === this.draggedElement);
      const id1 = Object.keys(this.cards)[cardIndex1];

      this.callbacks.onCardsSwapped({
        id1: id1,
        id2: id
      });
    }
  }

  /**
   * Handle card drag leave.
   * @param {string} id Id of card that was left.
   * @param {DragEvent} event Drag event.
   */
  handleCardDragLeave(id, event) {
    if (this.mode !== this.params.globals.get('modes')['reorder']) {
      return;
    }

    if (this.dom !== event.target || this.dom.contains(event.fromElement)) {
      return;
    }

    this.dropzoneElement = null;
  }

  /**
   * Handle card drag end.
   */
  handleCardDragEnd() {
    if (this.mode !== this.params.globals.get('modes')['reorder']) {
      return;
    }

    clearTimeout(this.placeholderTimeout);
    this.placeholder.getDOM().remove();

    this.draggedElement = null;
    this.dropzoneElement = null;
  }

  /**
   * Handle keydown.
   * @param {KeyboardEvent} event Keyboard event.
   */
  handleKeydown(event) {
    // Jump to toolbar on Alt+T
    if (event.code === 'KeyT' && event.altKey) {
      this.callbacks.onGotoToolbar();
    }
    else {
      return;
    }

    event.preventDefault();
  }
}
