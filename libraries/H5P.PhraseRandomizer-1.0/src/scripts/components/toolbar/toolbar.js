import Util from '@services/util';
import ToolbarButton from '@components/toolbar/toolbar-button.js';
import ToolbarHeadline from '@components/toolbar/toolbar-headline.js';
import StatusContainers from '@components/toolbar/status-containers/status-containers.js';
import './toolbar.scss';

/** Class representing the button bar */
export default class Toolbar {

  /**
   * @class
   * @param {object} [params] Parameters.
   * @param {object[]} [params.buttons] Button parameters.
   * @param {boolean} [params.hidden] If true, hide toolbar.
   * @param {object} [callbacks] Callbacks.
   */
  constructor(params = {}, callbacks = {}) {
    this.params = Util.extend({
      buttons: [],
      hidden: false,
      headline: ''
    }, params);

    this.params.hidden = this.params.hidden ||
      (!this.params.headline && this.params.buttons?.length === 0);

    this.callbacks = Util.extend({
    }, callbacks);

    this.buttons = {};

    // Build DOM
    this.dom = document.createElement('div');
    this.dom.classList.add('h5p-phrase-randomizer-toolbar-tool-bar');
    this.dom.setAttribute('role', 'toolbar');
    this.dom.setAttribute(
      'aria-label', this.params.dictionary.get('a11y.toolbar')
    );
    this.dom.addEventListener('keydown', (event) => {
      this.handleKeydown(event);
    });

    if (this.params.hidden) {
      this.hide();
    }

    const headlineWrapper = document.createElement('div');
    headlineWrapper.classList.add('tool-bar-headline');
    this.dom.append(headlineWrapper);

    const headline = new ToolbarHeadline({ text: this.params.headline });
    headlineWrapper.append(headline.getDOM());

    const nonHeadlineWrapper = document.createElement('div');
    nonHeadlineWrapper.classList.add('tool-bar-non-headline');
    this.dom.append(nonHeadlineWrapper);

    this.statusContainers = new StatusContainers();
    nonHeadlineWrapper.append(this.statusContainers.getDOM());

    this.params.statusContainers.forEach((container) => {
      this.statusContainers.addContainer(container);
    });

    // Buttons
    this.buttonsContainer = document.createElement('div');
    this.buttonsContainer.classList.add('toolbar-buttons');
    nonHeadlineWrapper.append(this.buttonsContainer);

    this.params.buttons.forEach((button) => {
      this.addButton(button);
    });

    Object.values(this.buttons).forEach((button, index) => {
      button.setAttribute('tabindex', index === 0 ? '0' : '-1');
    });
    this.currentButtonIndex = 0;
  }

  /**
   * Return the DOM for this class.
   * @returns {HTMLElement} DOM for this class.
   */
  getDOM() {
    return this.dom;
  }

  /**
   * Focus whatever should get focus.
   */
  focus() {
    Object.values(this.buttons)[this.currentButtonIndex]?.focus();
  }

  /**
   * Enable.
   */
  enable() {
    Object.keys(this.buttons).forEach((id) => {
      this.enableButton(id);
    });
  }

  /**
   * Disable.
   */
  disable() {
    Object.keys(this.buttons).forEach((id) => {
      this.disableButton(id);
    });
  }

  /**
   * Add button.
   * @param {object} [button] Button parameters.
   */
  addButton(button = {}) {
    if (typeof button.id !== 'string') {
      return; // We need an id at least
    }

    this.buttons[button.id] = new ToolbarButton(
      {
        id: button.id,
        ...(button.a11y && { a11y: button.a11y }),
        classes: ['toolbar-button', `toolbar-button-${button.id}`],
        ...(typeof button.disabled === 'boolean' && {
          disabled: button.disabled
        }),
        ...(button.active && { active: button.active }),
        ...(button.type && { type: button.type }),
        ...(button.pulseStates && { pulseStates: button.pulseStates }),
        ...(button.pulseIndex && { pulseIndex: button.pulseIndex })
      },
      {
        ...(typeof button.onClick === 'function' && {
          onClick: (event, params) => {
            button.onClick(event, params);
          }
        })
      }
    );
    this.buttonsContainer.appendChild(this.buttons[button.id].getDOM());
  }

  /**
   * Set button attributes.
   * @param {string} id Button id.
   * @param {object} attributes HTML attributes to set.
   */
  setButtonAttributes(id = '', attributes = {}) {
    if (!this.buttons[id]) {
      return; // Button not available
    }

    for (let attribute in attributes) {
      this.buttons[id].setAttribute(attribute, attributes[attribute]);
    }
  }

  /**
   * Get button.
   * @param {string} id Button id.
   * @returns {ToolbarButton|null} Button.
   */
  getButton(id) {
    return this.buttons[id] || null;
  }

  /**
   * Force button state.
   * @param {string} id Button id.
   * @param {boolean|number} active If true, toggle active, else inactive.
   */
  forceButton(id = '', active) {
    if (!this.buttons[id]) {
      return; // Button not available
    }

    this.buttons[id].force(active);
  }

  /**
   * Block button.
   * @param {string} id Button id.
   */
  blockButton(id = '') {
    if (!this.buttons[id]) {
      return; // Button not available
    }

    this.buttons[id].block();
  }

  /**
   * Unblock button.
   * @param {string} id Button id.
   */
  unblockButton(id = '') {
    if (!this.buttons[id]) {
      return; // Button not available
    }

    this.buttons[id].unblock();
  }

  /**
   * Enable button.
   * @param {string} id Button id.
   */
  enableButton(id = '') {
    if (!this.buttons[id]) {
      return; // Button not available
    }

    this.buttons[id].enable();
  }

  /**
   * Disable button.
   * @param {string} id Button id.
   */
  disableButton(id = '') {
    if (!this.buttons[id]) {
      return; // Button not available
    }

    this.buttons[id].disable();
  }

  /**
   * Show button.
   * @param {string} id Button id.
   */
  showButton(id = '') {
    if (!this.buttons[id]) {
      return; // Button not available
    }

    this.buttons[id].show();
  }

  /**
   * Hide button.
   * @param {string} id Button id.
   */
  hideButton(id = '') {
    if (!this.buttons[id]) {
      return; // Button not available
    }

    this.buttons[id].hide();
  }

  /**
   * Decloak button.
   * @param {string} id Button id.
   */
  decloakButton(id = '') {
    if (!this.buttons[id]) {
      return; // Button not available
    }

    this.buttons[id].decloak();
  }

  /**
   * Cloak button.
   * @param {string} id Button id.
   */
  cloakButton(id = '') {
    if (!this.buttons[id]) {
      return; // Button not available
    }

    this.buttons[id].cloak();
  }

  /**
   * Focus a button.
   * @param {string} id Button id.
   */
  focusButton(id = '') {
    if (!this.buttons[id] || this.buttons[id].isCloaked()) {
      return; // Button not available
    }

    this.buttons[id].focus();
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
   * Move button focus
   * @param {number} offset Offset to move position by.
   */
  moveButtonFocus(offset) {
    if (typeof offset !== 'number') {
      return;
    }

    if (
      this.currentButtonIndex + offset < 0 ||
      this.currentButtonIndex + offset > Object.keys(this.buttons).length - 1
    ) {
      return; // Don't cycle
    }

    Object.values(this.buttons)[this.currentButtonIndex]
      .setAttribute('tabindex', '-1');

    this.currentButtonIndex = this.currentButtonIndex + offset;

    const focusButton = Object.values(this.buttons)[this.currentButtonIndex];

    focusButton.setAttribute('tabindex', '0');
    focusButton.focus();
  }

  /**
   * Status status of container.
   * @param {string} id Id of container to set status of.
   * @param {object} params Parameters for status container.
   */
  setStatusContainerStatus(id, params = {}) {
    this.statusContainers.setStatus(id, params);
  }

  /**
   * Show status container
   * @param {string} id Id of container to show.
   */
  showStatusContainer(id) {
    this.statusContainers.showContainer(id);
  }

  /**
   * Hide status container
   * @param {string} id Id of container to show.
   */
  hideStatusContainer(id) {
    this.statusContainers.hideContainer(id);
  }

  /**
   * Handle key down.
   * @param {KeyboardEvent} event Keyboard event.
   */
  handleKeydown(event) {
    if (event.code === 'ArrowLeft' || event.code === 'ArrowUp') {
      this.moveButtonFocus(-1);
    }
    else if (event.code === 'ArrowRight' || event.code === 'ArrowDown') {
      this.moveButtonFocus(1);
    }
    else if (event.code === 'Home') {
      this.moveButtonFocus(0 - this.currentButtonIndex);
    }
    else if (event.code === 'End') {
      this.moveButtonFocus(
        Object.keys(this.buttons).length - 1 - this.currentButtonIndex
      );
    }
    else {
      return;
    }

    event.preventDefault();
  }
}
