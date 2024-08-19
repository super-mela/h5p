import '@styles/h5peditor-tabs.scss';

export default class Tabs extends H5PEditor.Library {
  /**
   * @class
   * @param {object} parent Parent element in semantics.
   * @param {object} field Semantics field properties.
   * @param {object} params Parameters entered in editor form.
   * @param {function} setValue Callback to set parameters.
   */
  constructor(parent, field = {}, params, setValue) {
    super(parent, field, params, setValue);
    this.parent = parent;
    this.field = field;
    this.params = params;
    this.setValue = setValue;

    // Callbacks to call when parameters change
    this.changes = [];

    // Let parent handle ready callbacks of children
    this.passReadies = true;

    // DOM
    this.$container = H5P.jQuery('<div>', { class: 'h5peditor-tabs' });

    // Instantiate original field (or create your own and call setValue)
    this.libraryTabs = new H5PEditor.widgets[this.field.type](
      this.parent, this.field, this.params, this.setValue
    );
    this.libraryTabs.appendTo(this.$container);

    // Make library select element from orginal field available, other widgets may expect it
    this.$select = this.libraryTabs.$select;
    this.params = this.libraryTabs.params;
    this.libraries = this.libraryTabs.libraries;
    this.metadataForm = this.libraryTabs.metadataForm;

    // Remove Tabs as option from subcontent
    this.libraryTabs.change(() => {
      // Make variables from orginal field available, other widgets may expect them
      this.libraries = this.libraryTabs.libraries;
      this.metadataForm = this.libraryTabs.metadataForm;

      this.sanitizeColumnOptions();

      const columnTabsIds = this.findTabsIds();
      if (columnTabsIds.length > 0) {
        // Column content seems to have been pasted and might contain Tabs
        this.sanitizeColumnParams(columnTabsIds);
        this.sanitizeColumnDOM(columnTabsIds);
      }
    });

    // Relay changes
    if (this.libraryTabs.changes) {
      this.libraryTabs.changes.push(() => {
        this.handleFieldChange();
      });
    }

    // Errors (or add your own)
    this.$errors = this.$container.find('.h5p-errors');
  }

  /**
   * Append field to wrapper. Invoked by H5P core.
   * @param {H5P.jQuery} $wrapper Wrapper.
   */
  appendTo($wrapper) {
    this.$container.appendTo($wrapper);
  }

  /**
   * Validate current values. Invoked by H5P core.
   * @returns {boolean} True, if current value is valid, else false.
   */
  validate() {
    let validate = true;
    this.libraryTabs.children[0].forEachChild((child) => {
      validate = validate && child.validate();
    });

    return validate;
  }

  /**
   * Remove self. Invoked by H5P core.
   */
  remove() {
    // Can't be removed as H5P.Column is only option
  }

  /**
   * Handle change of field.
   */
  handleFieldChange() {
    this.params = this.libraryTabs.params;
    this.changes.forEach((change) => {
      change(this.params);
    });
  }

  /**
   * Sanitize Column options.
   */
  sanitizeColumnOptions() {
    // H5P.Column editor list needs to be loaded
    if (!this.libraryTabs?.children?.length) {
      return;
    }

    // Remove Tabs from Column options
    this.libraryTabs.children[0].forEachChild((child) => {
      const libraryColumn = H5PEditor.findField('content', child);
      libraryColumn.field.options = libraryColumn.field.options
        .filter((option) => option.indexOf('H5P.Tabs ') === -1);

      /*
       * There doesn't seem to be a way to get hold of the H5P editor select
       * object and to determine when it's ready, so using DOM here to remove
       * Tabs from the select field (is loaded for fresh H5Ps)
       */
      const selectColumn = libraryColumn.$select.get(0);

      this.waitForColumnOptions(selectColumn, 200, () => {
        // Remove Tabs from Column DOM options, first option is '-'
        for (let i = selectColumn.children.length - 1; i >= 1; i--) {
          if (selectColumn.children[i].value.indexOf('H5P.Tabs ') !== -1) {
            selectColumn.removeChild(selectColumn.children[i]);
          }
        }
      });
    });
  }

  /**
   * Wait for Column options to be loaded to DOM.
   * @param {HTMLElement} selectColumn Select field DOM.
   * @param {number} timeout Timeout in seconds, minimum 100ms.
   * @param {object} callback Callback function.
   */
  waitForColumnOptions(selectColumn, timeout, callback) {
    if (typeof callback !== 'function' || !selectColumn) {
      return;
    }

    if (typeof timeout !== 'number' || timeout < 100) {
      timeout = 200;
    }

    if (selectColumn.children.length === 1) {
      setTimeout(
        this.waitForColumnOptions, timeout, selectColumn, timeout, callback
      );
    }
    else {
      callback();
    }
  }

  /**
   * Find ids of Tabs instances in Column.
   * @returns {number[]} Ids of Tabs instances in Column.
   */
  findTabsIds() {
    const columnContents = this.libraryTabs?.params?.params?.content;

    if (!columnContents) {
      return [];
    }

    // Get ids of Tabs inside Column
    const columnTabsIds = [];
    for (let i = columnContents.length - 1; i >= 0; i--) {
      if (columnContents[i].content?.library?.indexOf('H5P.Tabs ') !== -1) {
        columnTabsIds.push(i);
      }
    }

    return columnTabsIds;
  }

  /**
   * Sanitize Column parameters.
   * @param {number[]} columnTabsIds Ids of Tabs instances in Column.
   */
  sanitizeColumnParams(columnTabsIds = []) {
    const columnContents = this.libraryTabs?.params?.params?.content;

    if (!columnContents) {
      return;
    }

    // Remove Tabs from params
    this.libraryTabs.params.params.content = columnContents
      .filter((content, index) => {
        return columnTabsIds.indexOf(index) === -1;
      });
  }

  /**
   * Sanitize Column DOM in editor.
   * @param {number[]} columnTabsIds Ids of Tabs instances in Column.
   */
  sanitizeColumnDOM(columnTabsIds = []) {
    // Remove Tabs from editor DOM
    const columnContentsDOM = this.libraryTabs.$libraryWrapper.get(0)
      .querySelector('.list > .h5peditor-widget-wrapper > ul');
    if (!columnContentsDOM.childNodes) {
      return;
    }

    columnTabsIds.forEach((id) => {
      this.libraryTabs.children[0].removeItem(id);
      if (columnContentsDOM.childNodes.length > id) {
        columnContentsDOM.removeChild(columnContentsDOM.childNodes[id]);
      }
    });
  }
}
