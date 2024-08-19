import Util from '@services/util.js';
import './found-solutions-list.scss';

export default class FoundSolutionsList {

  /**
   * @class
   * @param {object} [params] Parameters.
   */
  constructor(params = {}) {
    this.params = Util.extend({}, params);

    this.dom = document.createElement('div');
    this.dom.classList.add('h5p-phrase-randomizer-found-solutions');

    const title = document.createElement('div');
    title.classList.add('h5p-phrase-randomizer-found-solutions-title');
    title.innerText = this.params.dictionary.get('l10n.foundSolutionsTitle');
    this.dom.append(title);

    this.list = document.createElement('ol');
    this.list.classList.add('h5p-phrase-randomizer-found-solutions-list');
    this.dom.append(this.list);

    this.hide();
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

  getDOM() {
    return this.dom;
  }

  /**
   * Set list items.
   * @param {(object[])[]} items Items.
   */
  setListItems(items) {
    while (this.list.firstChild) {
      this.list.firstChild.remove();
    }

    items.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.classList.add('h5p-phrase-randomizer-found-solutions-list-item');
      listItem.classList.add(item.style || 'neutral');
      listItem.innerText = item.labels.join(' ');
      this.list.append(listItem);
    });
  }
}
