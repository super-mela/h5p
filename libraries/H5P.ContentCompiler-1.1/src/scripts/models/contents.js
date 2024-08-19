import Util from '@services/util.js';
import ContentInstance from '@models/content-instance.js';

export default class Contents {

  constructor(params = {}, callbacks = {}) {
    this.params = Util.extend({
      contents: [],
      previousState: {}
    }, params);

    this.callbacks = Util.extend({
      onStateChanged: () => {},
      onCardStateChanged: () => {}
    }, callbacks);

    if (Object.keys(this.params.previousState).length) {
      this.params.contents = this.params.contents
        .map((contentParams) => {
          const id = contentParams.contentType.subContentId;
          contentParams.position = this.params.previousState[id].position;
          contentParams.previousState = this.params.previousState[id].instance;

          return contentParams;
        })
        .sort((params1, params2) => {
          return params1.position - params2.position;
        });
    }

    this.contents = {};

    this.params.contents.forEach((contentParams, index) => {
      contentParams.position = contentParams.position ?? index;
      this.addContent(contentParams);
    });
  }

  /**
   * Add content that has already been created.
   * @param {string} id Id of content.
   * @param {object} content Content that has already been created.
   */
  addContentReady(id, content) {
    this.contents[id] = content;
  }

  /**
   * Add content.
   * @param {object} [params] Parameters.
   * @param {string} [params.label] Content label if set in editor.
   * @param {string} [params.introduction] Introduction if set in editor.
   * @param {object} params.contentType Content type parameters.
   * @param {string} [params.keywords] Keywords delimited by , if set in editor.
   */
  addContent(params = {}) {
    if (!params.contentType?.subContentId) {
      return;
    }

    params = Util.extend({
      statusCode: this.params.globals.get('states')['unstarted'],
      keywords: ''
    }, params);

    const label = (!params.label && !params.image && !params.introduction) ?
      (
        params.contentType.metadata?.title ||
        this.params.dictionary.get('l10n.untitledContent')
      ) :
      params.label;

    const introduction = params.introduction || '';
    const contentInstance = new ContentInstance(
      {
        globals: this.params.globals,
        contentParams: params.contentType,
        previousState: params.previousState
      },
      {
        onStateChanged: (state) => {
          this.callbacks.onStateChanged({
            id: params.contentType.subContentId,
            state: state
          });
        }
      }
    );

    const keywords = params.keywords
      ?.split?.(',')
      .map((keyword) => keyword.trim())
      .filter((keyword) => keyword !== '');

    const content = {
      ...(label && { label: label }),
      ...(params.image && { image: params.image }),
      introduction: introduction,
      contentInstance: contentInstance,
      keywords: keywords,
      visuals: params.visuals,
      isSelected: false,
      isVisible: this.params.allKeywordsPreselected,
      position: params.position,
      statusCode: params.statusCode
    };

    this.contents[params.contentType.subContentId] = content;
  }

  /**
   * Get content by id.
   * @param {string} id Id for selection.
   * @returns {object|null} Content object.
   */
  getContent(id) {
    if (typeof id !== 'string') {
      return null;
    }

    return this.contents[id];
  }

  /**
   * Get content instance DOM by id.
   * @param {string} id Id for selection.
   * @returns {HTMLElement|null} Content instance DOM.
   */
  getContentDOM(id) {
    if (typeof id !== 'string') {
      return null;
    }

    return this.contents[id].contentInstance.instanceDOM;
  }

  /**
   * Remove content by id.
   * @param {string} id Id for removal.
   */
  removeContent(id) {
    if (typeof id !== 'string') {
      return;
    }

    delete this.contents[id];
  }

  /**
   * Get all contents.
   * @returns {object} Content objects.
   */
  getContents() {
    return this.contents;
  }

  /**
   * Update states.
   * @param {string} id Id of content.
   * @param {object} entries Entries as key value pair.
   */
  updateState(id, entries = {}) {
    if (typeof id !== 'string') {
      return;
    }

    Object.keys(entries).forEach((key) => {
      if (
        [
          'statusCode', 'isSelected', 'isActivated', 'position', 'isVisible'
        ].includes(key)
      ) {
        this.contents[id][key] = entries[key];
        this.callbacks.onCardStateChanged(id, key, entries[key]);
      }
    });
  }

  /**
   * Set visibility of all cards.
   * @param {boolean} isVisible If true, set visible. Else not visible.
   */
  setVisibility(isVisible) {
    if (typeof isVisible !== 'boolean') {
      return;
    }

    Object.entries(this.contents).forEach((content) => {
      this.updateState(content[0], {
        isVisible: isVisible
      });
    });
  }

  /**
   * Set visibility based on keyword match.
   * @param {string[]} keywords Filtered keywords.
   */
  setVisibilityByKeywords(keywords) {
    // Set visible if no keyword assigned or keyword was selected in filter
    Object.entries(this.contents).forEach((content) => {
      const isVisible = (
        !content[1].keywords.length ||
        content[1].keywords.some((keyword) => keywords.includes(keyword))
      );

      this.updateState(content[0], {
        isVisible: isVisible
      });
    });
  }

  /**
   * Reset contents.
   */
  reset() {
    Object.values(this.contents).forEach((content) => {
      content.contentInstance.setState(
        this.params.globals.get('states')['unstarted']
      );
      content.contentInstance.reset();
    });
  }

  /**
   * Select all or no cards.
   * @param {boolean} all True to select all, false to select none.
   */
  selectAll(all) {
    if (typeof all !== 'boolean') {
      return;
    }

    Object.keys(this.contents).forEach((key) => {
      this.updateState(key, { isSelected: all === true });
    });
  }

  /**
   * Select based on keyword match.
   * @param {string[]} keywords Filtered keywords.
   */
  selectByKeywords(keywords) {
    // Select if has keyword and keyword was selected in filter
    Object.entries(this.contents).forEach((content) => {
      if (!content[1].keywords.length) {
        return; // Does not have keywords
      }

      const influencedByTags = (
        content[1].keywords.some((keyword) => keywords.includes(keyword))
      );

      this.updateState(content[0], {
        isSelected: influencedByTags
      });
    });
  }

  /**
   * Answer H5P core's call to return the current state.
   * @returns {object} Current state.
   */
  getCurrentState() {
    const state = {};
    for (const id in this.contents) {
      const content = this.contents[id];

      state[id] = {
        isSelected: content.isSelected,
        position: content.position,
        statusCode: content.statusCode,
        instance: content.contentInstance?.instance?.getCurrentState?.() ?? {}
      };
    }

    return state;
  }
}
