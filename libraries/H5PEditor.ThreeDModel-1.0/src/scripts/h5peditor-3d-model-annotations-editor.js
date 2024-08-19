import Annotations from '@models/annotations.js';
import Util from '@services/util.js';
import '@styles/h5peditor-3d-model-annotations.scss';

export default class threeDModelAnnotationsEditor {

  /**
   * @class
   * @param {object} parent Parent element in semantics.
   * @param {object} field Semantics field properties.
   * @param {object} params Parameters entered in editor form.
   * @param {function} setValue Callback to set parameters.
   */
  constructor(parent, field, params, setValue) {
    this.parent = parent;
    this.field = Util.extend({
      threeDModelAnnotations: {
        annotationIdField: 'id',
        annotationTextField: 'text',
        annotationSurfaceField: 'surface'
      }
    }, field);
    this.params = Util.extend({}, params);

    if (this.params.annotations) {
      this.params.annotations.forEach((annotation) => {
        annotation.text = Util.purifyHTML(annotation.text);
      });
    }

    this.setValue = setValue;

    this.handleDocumentClicked = this.handleDocumentClicked.bind(this);
    this.activeAnnotationButton = null;

    // Callbacks to call when parameters change
    this.changes = [];

    // Let parent handle ready callbacks of children
    this.passReadies = true;

    // DOM
    this.$container = H5P.jQuery('<div>', {
      class: 'h5peditor-3d-model-annotations-editor'
    });

    // Instantiate original field (or create your own and call setValue)
    this.fieldInstance = new H5PEditor.widgets[this.field.type](
      this.parent, this.field, this.params, this.setValue
    );
    this.fieldInstance.appendTo(this.$container);

    // Relay changes
    if (this.fieldInstance.changes) {
      this.fieldInstance.changes.push(() => {
        this.handleFieldChange();
      });
    }

    // Find list instance with annotations
    this.listInstance = this.fieldInstance.children.find((child) => {
      return child instanceof H5PEditor.List;
    });

    // Errors (or add your own)
    this.$errors = this.$container.find('.h5p-errors');

    this.modelFieldInstance = H5PEditor.findField(
      this.field.threeDModelAnnotations.modelFileField, this.parent
    );

    if (!this.modelFieldInstance) {
      return;
    }

    this.annotations = new Annotations(
      { threedModelField: this.modelFieldInstance }
    );

    // Hide annotations when model is hidden
    this.modelFieldInstance.on('previewVisibilityChanged', (event) => {
      this.$container.get(0).classList.toggle(
        'display-none', !event.data.visibility
      );
    });

    // Reset annotations when model is reset
    this.modelFieldInstance?.on('modelReset', () => {
      this.reset();
    });

    // Remove annotations when model is removed
    this.listInstance?.on('removedItem', (event) => {
      /*
       * H5P editor core doesn't inform about moved list items, so we the
       * index that we get here is useless as we cannot track it. We need
       * to find out what element was removed ourselves.
       */
      const remainingIds = (this.listInstance.getValue() ?? [])
        .map((item) => item.id);

      this.annotations.keep(remainingIds);
    });

    // Add annotation button to new annotation list item
    this.listInstance?.on('addedItem', (event) => {
      this.injectPlaceAnnotationButtons(event.data);
    });

    // Add annotation buttons to existing annotation list items
    this.listInstance.ready(() => {
      this.injectPlaceAnnotationButtons();
    });
  }

  /**
   * Append field to wrapper. Invoked by H5P core.
   * @param {H5P.jQuery} $wrapper Wrapper.
   */
  appendTo($wrapper) {
    $wrapper.get(0).append(this.$container.get(0));
  }

  /**
   * Validate current values. Invoked by H5P core.
   * @returns {boolean} True, if current value is valid, else false.
   */
  validate() {
    return this.fieldInstance.validate();
  }

  /**
   * Remove self. Invoked by H5P core.
   */
  remove() {
    this.$container.get(0).remove();
  }

  /**
   * Reset.
   */
  reset() {
    if (!this.listInstance) {
      return;
    }

    /*
     * Workaround for shortcoming in H5P core (see https://h5ptechnology.atlassian.net/browse/HFP-3989)
     * removeAllItems would not trigger `removedItem` events.
     */
    const size = this.listInstance.getValue()?.length ?? 0;
    for (let i = size - 1; i >= 0; i--) {
      this.listInstance.removeItem(i);
    }

    /*
     * Workaround for bug in H5P core (see https://h5ptechnology.atlassian.net/browse/HFP-3989)
     * List editor widgets would not remove items from DOM.
     */
    const listEditorParent = this.listInstance.widget?.container ??
      this.$container.get(0);

    listEditorParent.querySelectorAll('.h5p-li.listgroup')
      .forEach((listItem) => {
        listItem.remove();
      });

    /*
     * Ensure there's an initial item. En passant this works around bug in H5P
     * core (see https://h5ptechnology.atlassian.net/browse/HFP-3989) that
     * would prevent list editor widgets from removing collapse button when
     * there are no items left.
     */
    this.listInstance.addItem();
  }

  /**
   * Inject place annotation buttons.
   * @param {H5PEditor.Group} [groupToInjectInto] Group to inject into.
   */
  injectPlaceAnnotationButtons(groupToInjectInto) {
    let groups = [];
    if (groupToInjectInto instanceof H5PEditor.Group) {
      groups.push(groupToInjectInto);
    }
    else {
      this.listInstance.forEachChild((child) => {
        groups.push(child);
      });
    }

    groups.forEach((group) => {
      // Get field instances of group
      const idFieldInstance = group.children.find((child) => {
        return child.field.name ===
          this.field.threeDModelAnnotations.annotationIdField;
      });

      const textFieldInstance = group.children.find((child) => {
        return (
          child instanceof H5PEditor.Text &&
          child.field.name ===
            this.field.threeDModelAnnotations.annotationTextField
        );
      });

      const surfaceFieldInstance = group.children.find((child) => {
        return child.field.name ===
          this.field.threeDModelAnnotations.annotationSurfaceField;
      });

      if (!idFieldInstance || !textFieldInstance || !surfaceFieldInstance) {
        return; // Required fields not found
      }

      if (
        !textFieldInstance.$item ||
        textFieldInstance.$item.get(0)
          .querySelector('button.h5p-3d-model-add-annotation-button')
      ) {
        return; // Already injected
      }

      /*
       * Determine index of group inside list, required when groupToInjectInto
       * is set, otherwise, index of of foreach would suffice.
       */
      let index = null;
      group.parent.forEachChild((child, i) => {
        if (index !== null) {
          return;
        }
        else if (child === group) {
          index = i;
        }
      });

      if (typeof index !== 'number') {
        return;
      }

      /*
       * Workaround for shortcoming in H5P core
       * (see https://h5ptechnology.atlassian.net/browse/HFP-3989)
       * that doesn't allow easy tracking of list items.
       * We technically wouldn't need that id field at all if we knew
       * where list items were moved to.
       */

      /*
       * Setting unique id for annotation.
       * Widget "none" does not update params by using setValue
       */
      idFieldInstance.params = idFieldInstance.params ?? H5P.createUUID();
      idFieldInstance.setValue(idFieldInstance.field, idFieldInstance.params);

      this.annotations.add(
        idFieldInstance.params,
        {
          textFieldInstance: textFieldInstance,
          surfaceFieldInstance: surfaceFieldInstance,
        }
      );
      this.setValue(this.field, this.params);

      // Inject button next to text field
      const inputWrapper = document.createElement('div');
      inputWrapper.classList.add('h5p-annotation-input-wrapper');

      textFieldInstance.$item.get(0).insertBefore(
        inputWrapper, textFieldInstance.$input.get(0)
      );

      inputWrapper.append(textFieldInstance.$input.get(0));

      const addAnnotationButton = document.createElement('button');
      addAnnotationButton.classList.add('h5p-3d-model-add-annotation-button');
      addAnnotationButton.setAttribute(
        'aria-label',
        H5PEditor.t('H5PEditor.ThreeDModel', 'placeAnnotation')
      );

      addAnnotationButton.addEventListener('click', (event) => {
        this.handleAnnotationButtonClicked(event, idFieldInstance.params);
      });

      inputWrapper.append(addAnnotationButton);
    });
  }

  /**
   * Handle annotation button clicked.
   * This will activate the button and wait for a click on the model to place
   * the annotation or a click outside the model to deactivate the button.
   * @param {PointerEvent} event Event.
   * @param {string} id Id of annotation that the button belongs to.
   */
  handleAnnotationButtonClicked(event, id) {
    if (this.activeAnnotationButton === event.target) {
      this.setActiveAnnotationButton();
      return;
    }

    this.setActiveAnnotationButton(event.target);

    // Ensure the author knows what to do / convenience
    this.modelFieldInstance.highlight();

    // prevent listener from reacting on annotation button click
    window.requestAnimationFrame(() => {
      // Wait for model to send surface or clicked event somewhere else
      document.addEventListener('click', (event) => {
        this.handleDocumentClicked(event);
      }, { once: true });

      this.modelFieldInstance.once('modelClicked', (event) => {
        this.handleDocumentClicked(event, id);
      });
    });
  }

  /**
   * Handle document clicked.
   * @param {PointerEvent} event Event.
   * @param {string} id Id of annotation that the active button belongs to.
   */
  handleDocumentClicked(event, id) {
    // The order in which the event listeners are called is not guaranteed
    if (event instanceof PointerEvent) {
      if (event.target.classList.contains('h5peditor-3d-model-resize-button')) {
        return; // Ignore, so people can still resize the preview
      }

      // Clicked somewhere else
      document.removeEventListener('click', this.handleDocumentClicked);

      if (event.target.tagName !== 'MODEL-VIEWER') {
        // Cancel annotation
        this.modelFieldInstance.off('modelClicked');

        if (!event.target.classList.contains(
          'h5p-3d-model-add-annotation-button')
        ) {
          // Deactivate annotation button
          this.setActiveAnnotationButton();
        }
      }
    }
    else if (event instanceof H5P.Event) {
      // Click on model and received surface

      this.annotations.update(id, event.data.surface);
      this.setValue(this.field, this.params);

      this.modelFieldInstance.off('modelClicked');
      this.setActiveAnnotationButton();
    }
  }

  /**
   * Set active annotation button while deactivating the previous one.
   * @param {HTMLButtonElement} button Button to set active.
   */
  setActiveAnnotationButton(button = null) {
    if (this.activeAnnotationButton) {
      this.activeAnnotationButton.classList.remove('active');
    }

    this.activeAnnotationButton = button;

    if (this.activeAnnotationButton) {
      this.activeAnnotationButton.classList.add('active');
    }
  }

  /**
   * Handle change of field.
   */
  handleFieldChange() {
    this.params = this.fieldInstance.params;
    this.changes.forEach((change) => {
      change(this.params);
    });
  }
}
