import Util from '@services/util.js';
import './tab.scss';

export default class Tab {
  /**
   * @class
   * @param {object} [params] Parameters.
   * @param {object} [callbacks] Callbacks.
   */
  constructor(params = {}, callbacks = {}) {
    this.params = params;

    this.callbacks = Util.extend({
      onClicked: () => {},
      onMove: () => {}
    }, callbacks);

    // Create DOM.
    this.dom = document.createElement('button');
    this.dom.classList.add('h5p-tabs-button');
    this.dom.setAttribute('id', `h5p-tabs-tab-${this.params.uuid}`);
    this.dom.setAttribute('role', 'tab');
    this.dom.setAttribute('aria-selected', 'false');
    this.dom.setAttribute('aria-controls', `h5p-tabs-tabpanel-${this.params.uuid}`);
    this.dom.innerText = this.params.label;

    this.dom.addEventListener('click', () => {
      this.callbacks.onClicked(this.params.id);
    });

    this.dom.addEventListener('keydown', (event) => {
      this.handleKeyDown(event);
    });
  }

  /**
   * Return DOM for component..
   * @returns {HTMLElement} DOM for component.
   */
  getDOM() {
    return this.dom;
  }

  /**
   * Activate tab.
   */
  activate() {
    this.dom.classList.add('active');
    this.dom.setAttribute('aria-selected', 'true');
    this.dom.removeAttribute('tabindex', '-1');
  }

  /**
   * Deactivate tab.
   */
  deactivate() {
    this.dom.classList.remove('active');
    this.dom.setAttribute('aria-selected', 'false');
    this.dom.setAttribute('tabindex', '-1');
  }

  /**
   * Focus tab.
   */
  focus() {
    this.dom.focus();
  }

  /**
   * Handle key down.
   * @param {KeyboardEvent} event Keyboard event.
   */
  handleKeyDown(event) {
    let propagate = true;

    if (event.key === 'ArrowLeft') {
      this.callbacks.onMove(Tab.PREVIOUS);
      propagate = false;
    }
    else if (event.key === 'ArrowRight') {
      this.callbacks.onMove(Tab.NEXT);
      propagate = false;
    }
    else if (event.key === 'Home') {
      this.callbacks.onMove(Tab.FIRST);
      propagate = false;
    }
    else if (event.key === 'End') {
      this.callbacks.onMove(Tab.LAST);
      propagate = false;
    }

    if (!propagate) {
      event.stopPropagation();
      event.preventDefault();
    }
  }
}

/** @constant {number} Move one tab to the left */
Tab.PREVIOUS = -1;

/** @constant {number} Move one tab to the right */
Tab.NEXT = -2;

/** @constant {number} Move to first tab */
Tab.FIRST = -3;

/** @constant {number} Move to last tab */
Tab.LAST = -4;
