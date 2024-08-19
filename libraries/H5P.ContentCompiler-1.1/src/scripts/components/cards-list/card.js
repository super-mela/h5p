import Util from '@services/util.js';
import './card.scss';

export default class Card {

  /**
   * @class
   * @param {object} [params] Parameters.
   * @param {string} params.label Label.
   * @param {string} [params.introduction] Introduction text.
   * @param {string[]} [params.keywords] Keywords.
   * @param {object} [callbacks] Callbacks.
   * @param {function} [callbacks.onClicked] Callback click.
   * @param {function} [callbacks.onMouseDown] Callback mouse down.
   * @param {function} [callbacks.onDragStart] Callback drag start.
   * @param {function} [callbacks.onDragEnter] Callback drag enter.
   * @param {function} [callbacks.onDragLeave] Callback drag leave.
   * @param {function} [callbacks.onDragEnd] Callback drag end.
   */
  constructor(params = {}, callbacks = {}) {
    this.params = Util.extend({
      keywords: []
    }, params);

    this.callbacks = Util.extend({
      onClicked: () => {},
      onMouseDown: () => {},
      onDragStart: () => {},
      onDragEnter: () => {},
      onDragLeave: () => {},
      onDragEnd: () => {}
    }, callbacks);

    this.dom = document.createElement('li');
    this.dom.classList.add('h5p-content-compiler-card');

    this.dom.addEventListener('mousedown', (event) => {
      this.callbacks.onMouseDown(event);
    });
    this.dom.addEventListener('dragstart', (event) => {
      this.handleDragStart(event);
    });
    this.dom.addEventListener('dragenter', (event) => {
      this.handleDragEnter(event);
    });
    this.dom.addEventListener('dragleave', (event) => {
      this.handleDragLeave(event);
    });
    this.dom.addEventListener('dragend', (event) => {
      this.handleDragEnd(event);
    });

    this.button = document.createElement('button');
    this.button.classList.add('h5p-content-compiler-card-content');
    this.button.addEventListener('click', () => {
      this.handleClicked();
    });
    this.dom.append(this.button);

    if (this.params.label) {
      const label = document.createElement('div');
      label.classList.add('h5p-content-compiler-card-label');
      label.innerHTML = this.params.label;
      this.button.append(label);
    }

    if (this.params.image?.path) {
      const image = document.createElement('img');
      image.classList.add('h5p-content-compiler-card-image');
      if (this.params.label) {
        image.classList.add('has-label');
      }
      image.setAttribute('draggable', 'false');
      image.setAttribute('alt', ''); // Only decorational

      image.addEventListener('load', () => {
        this.params.globals.get('resize')();
      });

      if (this.params.visuals?.imageSizing === 'custom') {
        image.classList.add('fixed-ratio');
      }

      H5P.setSource(
        image, this.params.image, this.params.globals.get('contentId')
      );

      this.button.append(image);
    }

    // An empty introduction will serve as a growing element in flexbox
    const introduction = document.createElement('p');
    introduction.classList.add('h5p-content-compiler-card-introduction');
    introduction.innerHTML = this.params.introduction;
    if (!this.params.introduction) {
      introduction.classList.add('empty');
    }

    this.button.append(introduction);

    this.status = document.createElement('div');
    this.status.classList.add('h5p-content-compiler-card-status');
    this.button.append(this.status);

    this.setStatusCode(this.params.globals.get('states')['unstarted']);
    this.isSelected = false;
    this.isActivated = false;

    this.updateAriaLabel();
  }

  /**
   * Get DOM.
   * @returns {HTMLElement} Content DOM.
   */
  getDOM() {
    return this.dom;
  }

  /**
   * Show.
   */
  show() {
    this.dom.classList.remove('display-none');
  }

  /**
   * Hide.
   */
  hide() {
    this.dom.classList.add('display-none');
  }

  /**
   * Focus.
   */
  focus() {
    this.button.focus();
  }

  /**
   * Set draggable state.
   * @param {boolean} state If true, is draggable. Else not.
   */
  setDraggable(state) {
    this.dom.setAttribute('draggable', state);
  }

  /**
   * Toggle card's dropzone state.
   * @param {boolean} state If true, card is a dropzone. Else not a dropzone.
   */
  toggleDropzone(state) {
    this.isDropzone = state;

    this.updateAriaLabel();
  }

  /**
   * Update aria label.
   */
  updateAriaLabel() {
    let ariaLabelSegments = [`${this.params.dictionary.get('a11y.exerciseLabel').replace(/@label/g, this.params.label)}`];

    if (this.mode === this.params.globals.get('modes')['filter']) {
      const selected = this.isSelected ?
        this.params.dictionary.get('a11y.selected') :
        this.params.dictionary.get('a11y.notSelected');

      ariaLabelSegments.push(selected);

    }
    else if (this.mode === this.params.globals.get('modes')['reorder']) {
      if (this.isActivated) {
        ariaLabelSegments.push(
          this.params.dictionary.get('a11y.selectedForReordering')
        );
      }
      else if (this.isDropzone) {
        ariaLabelSegments.push(
          this.params.dictionary.get('a11y.selectedForDropzone')
        );
      }
    }
    else if (this.mode === this.params.globals.get('modes')['view']) {
      ariaLabelSegments.push(
        this.params.dictionary.get(`l10n.status${this.statusCode}`)
      );
    }
    else {
      return;
    }

    this.button.setAttribute('aria-label', ariaLabelSegments.join('. '));
  }

  /**
   * Update card's state.
   * @param {string} key Key of state.
   * @param {number|string} value Value io state.
   */
  updateState(key, value) {
    if (key === 'statusCode') {
      this.setStatusCode(value);
    }
    else if (key === 'isSelected') {
      this.toggleSelected(value);
    }
    else if (key === 'isActivated') {
      this.toggleActivated(value);
    }
    else if (key === 'isVisible') {
      value ? this.show() : this.hide();
    }

    this.updateAriaLabel();
  }

  /**
   * Toggle card selection.
   * @param {boolean} [state] State to be toggled to.
   * @returns {boolean} True, if card is selected, else false.
   */
  toggleSelected(state) {
    if (typeof state !== 'boolean') {
      state = !this.isSelected; // Use previous selection to determine.
    }

    if (state) {
      this.dom.classList.add('selected');
      this.isSelected = true;
      this.status.innerHTML = this.params.dictionary.get('l10n.selected');
    }
    else {
      this.dom.classList.remove('selected');
      this.isSelected = false;
      this.status.innerHTML = null;
    }

    this.updateAriaLabel();

    return state;
  }

  /**
   * Toggle card activation for reordering.
   * @param {boolean} [state] State to be toggled to.
   * @returns {boolean} True, if card is activated, else false.
   */
  toggleActivated(state) {
    if (typeof state !== 'boolean') {
      state = !this.isActivated; // Use previous selection to determine.
    }

    if (state) {
      this.dom.classList.add('activated');
      this.isActivated = true;
    }
    else {
      this.dom.classList.remove('activated');
      this.isActivated = false;
    }

    this.updateAriaLabel();

    return state;
  }

  /**
   * Set status code.
   * @param {number} state State id.
   */
  setStatusCode(state) {
    const statusCode = Object.entries(this.params.globals.get('states'))
      .find((entry) => entry[1] === state)[0];

    this.statusCode =
      `${statusCode.charAt(0).toLocaleUpperCase()}${statusCode.slice(1)}`;

    if (
      this.mode !== this.params.globals.get('modes')['view'] &&
      Object.keys(this.params.globals.get('states')).includes(statusCode)
    ) {
      return;
    }

    this.updateAriaLabel();

    this.status.innerHTML = this.params.dictionary.get(
      `l10n.status${this.statusCode}`
    );
  }

  /**
   * Set mode.
   * @param {number} mode Mode id.
   */
  setMode(mode) {
    this.mode = mode;

    if (mode === this.params.globals.get('modes')['filter']) {
      if (this.isSelected) {
        this.status.innerHTML = this.params.dictionary.get('l10n.selected');
      }
      else {
        this.status.innerHTML = null;
      }
    }
    else if (mode === this.params.globals.get('modes')['reorder']) {
      this.status.innerHTML = null;
    }
    else if (mode === this.params.globals.get('modes')['view']) {
      this.status.innerHTML = this.params.dictionary.get(
        `l10n.status${this.statusCode}`
      );
    }

    Object.keys(this.params.globals.get('modes')).forEach((key) => {
      this.dom.classList.toggle(
        key,
        mode === this.params.globals.get('modes')[key]
      );
    });

    this.updateAriaLabel();
  }

  /**
   * Handle clicked.
   */
  handleClicked() {
    const isSelected = (
      this.mode === this.params.globals.get('modes')['filter']
    ) ?
      !this.isSelected :
      this.isSelected;

    const isActivated = (
      this.mode === this.params.globals.get('modes')['reorder']
    ) ?
      !this.isActivated :
      this.isActivated;

    this.callbacks.onClicked({
      isSelected: isSelected,
      isActivated: isActivated
    });
  }

  /**
   * Handle card drag start.
   * @param {DragEvent} event Drag event.
   */
  handleDragStart(event) {
    if (Util.isTouchDevice(event)) {
      return;
    }

    this.dom.classList.add('dragging');
    event.dataTransfer.effectAllowed = 'move';

    this.callbacks.onDragStart(event);
  }

  /**
   * Handle card drag enter.
   * @param {DragEvent} event Drag event.
   */
  handleDragEnter(event) {
    if (Util.isTouchDevice(event)) {
      return;
    }

    this.callbacks.onDragEnter(event);
  }

  /**
   * Handle card drag leave.
   * @param {DragEvent} event Drag event.
   */
  handleDragLeave(event) {
    if (Util.isTouchDevice(event)) {
      return;
    }

    this.callbacks.onDragLeave(event);
  }

  /**
   * Handle card drag end.
   * @param {DragEvent} event Drag event.
   */
  handleDragEnd(event) {
    if (Util.isTouchDevice(event)) {
      return;
    }

    this.show();

    this.dom.classList.remove('dragging');

    this.callbacks.onDragEnd(event);
  }
}
