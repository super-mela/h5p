import Util from '@services/util.js';
import Tag from './tag.js';
import './tag-selector.scss';

export default class TagSelector {
  /**
   * Tag selector.
   * @class
   * @param {object} params Parameter from editor.
   * @param {object} [callbacks] Callbacks.
   */
  constructor(params, callbacks) {
    // Set missing params
    this.params = Util.extend({
      tags: []
    }, params || {});

    this.callbacks = Util.extend({
    }, callbacks || {});

    this.tags = {};

    this.dom = document.createElement('div');
    this.dom.classList.add('tag-selector');

    this.list = document.createElement('ul');
    this.list.classList.add('tag-list');
    this.list.setAttribute('role', 'listbox');
    this.list.setAttribute('tabindex', '0');
    this.list.setAttribute(
      'aria-label', this.params.dictionary.get('a11y.tagSelector')
    );
    this.list.setAttribute('aria-multiselectable', 'true');
    this.list.addEventListener('keydown', (event) => {
      this.handleKeydown(event);
    });
    this.list.addEventListener('click', (event) => {
      this.handleClicked(event);
    });
    this.list.addEventListener('focus', () => {
      this.handleFocusChanged();
    });
    this.list.addEventListener('blur', () => {
      this.handleFocusChanged();
    });
    this.dom.append(this.list);

    this.params.tags.forEach((tagParam) => {
      const uuid = `tag-${H5P.createUUID()}`;
      const tag = new Tag(
        {
          text: tagParam.text,
          selected: tagParam.selected,
          uuid: uuid
        }
      );

      this.list.append(tag.getDOM());

      this.tags[uuid] = tag;
    });

    this.currentTagIndex = 0;
    this.moveButtonFocus(0);

    this.hide();
  }

  /**
   * Return the DOM for this class.
   * @returns {HTMLElement} DOM for this class.
   */
  getDOM() {
    return this.dom;
  }

  /**
   * Show.
   */
  show() {
    this.dom.classList.remove('display-none');
    this.visible = true;
  }

  /**
   * Hide.
   */
  hide() {
    this.dom.classList.add('display-none');
    this.visible = false;
  }

  /**
   * Determine whether tag selector is visible.
   * @returns {boolean} True, if visible else false.
   */
  isVisible() {
    return this.visible;
  }

  /**
   * Get tag index.
   * @param {HTMLElement} dom DOM of Tag.
   * @returns {number|undefined} Index of tag dom.
   */
  getTagIndex(dom) {
    if (!dom) {
      return;
    }

    return Object.values(this.tags).findIndex((tag) => {
      return dom === tag.getDOM();
    });
  }

  /**
   * Handle tag clicked.
   */
  updateSelectedTags() {
    const selectedTags = Object.values(this.tags)
      .filter((tag) => {
        return tag.isSelected();
      })
      .map((tag) => {
        return tag.getText();
      });

    this.callbacks.onChanged(selectedTags);
  }

  /**
   * Select all or no tags.
   * @param {boolean} all True to select all, false to select none.
   */
  selectAll(all) {
    if (typeof all !== 'boolean') {
      return;
    }

    Object.values(this.tags).forEach((tag) => {
      tag.toggleSelected(all === true);
    });

    this.updateSelectedTags();
  }

  /**
   * Handle all tags selected.
   */
  handleTagSelectedAll() {
    // If all tags are selected, select none. Else select all.
    const numberSelected = Object.values(this.tags).reduce((sum, tag) => {
      return sum + (tag.isSelected() ? 1 : 0);
    }, 0);

    this.selectAll(numberSelected !== Object.keys(this.tags).length);
  }

  /**
   * Handle focus changed.
   */
  handleFocusChanged() {
    if (document.activeElement === this.list) {
      this.moveButtonFocus(0); // Just focus
    }
    else {
      this.moveButtonFocus(null); // Remove focus
    }
  }

  /**
   * Move button focus
   * @param {number|null} offset Offset to move position by. Null removes all focus
   */
  moveButtonFocus(offset) {
    if (offset === null) {
      Object.values(this.tags).forEach((tag) => {
        tag.toggleFocus(false);
      });

      return;
    }

    if (typeof offset !== 'number') {
      return;
    }

    if (
      this.currentTagIndex + offset < 0 ||
      this.currentTagIndex + offset > Object.keys(this.tags).length - 1
    ) {
      return; // Don't cycle
    }

    this.currentTagIndex = this.currentTagIndex + offset;

    Object.values(this.tags).forEach((tag, index) => {
      tag.toggleFocus(index === this.currentTagIndex);
    });

    this.list.setAttribute(
      'aria-activedescendant', Object.keys(this.tags)[this.currentTagIndex]
    );
  }

  /**
   * Handle click.
   * @param {Event} event Event.
   */
  handleClicked(event) {
    if (event.target.getAttribute('role') !== 'option') {
      return;
    }

    const index = this.getTagIndex(event.target);
    Object.values(this.tags)[index].toggleSelected();

    this.updateSelectedTags();
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
      this.moveButtonFocus(0 - this.currentTagIndex);
    }
    else if (event.code === 'End') {
      this.moveButtonFocus(
        Object.keys(this.buttons).length - 1 - this.currentTagIndex
      );
    }
    else if (event.code === 'Enter' || event.code === 'Space') {
      this.handleClicked(
        { target: Object.values(this.tags)[this.currentTagIndex].getDOM() }
      );
    }
    else if (event.code === 'KeyA' && event.ctrlKey) {
      this.handleTagSelectedAll();
    }
    else {
      return;
    }

    event.preventDefault();
  }
}
