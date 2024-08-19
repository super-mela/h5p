import { getInteractionsField, areChildrenValid } from '@h5phelpers/editorForms.js';

/**
 * Create interaction form and append it to wrapper.
 * @private
 * @param {object} field Field of semantics.
 * @param {object} params Parameters for field.
 * @param {HTMLElement} wrapper Element to attach form to.
 * @param {object} parent Parent field instance.
 */
export const createInteractionForm = (field, params, wrapper, parent) => {
  /**
   * Hide elements on checked.
   * @param {HTMLInputElement} checkBox Checkbox input to listen for onChange.
   * @param {HTMLElement} elementToHide Element to hide when 'checkBox' toggled to true.
   */
  const hideElementsOnChecked = (checkBox, elementToHide) =>  {
    //If the element is already checked when the form is created, hide it
    if (checkBox.checked) {
      elementToHide.classList.add('do-not-display');
    }

    //Add event listener on checkbox for to listen to changes in toggling
    checkBox.addEventListener('change', (event) => {
      elementToHide.classList.toggle('do-not-display', event.target.checked);
    });
  };

  const hiddenFormFields = ['interactionpos'];

  const interactionsField = getInteractionsField(field);
  const interactionFields = interactionsField.field.fields.filter((field) => {
    return !hiddenFormFields.includes(field.name);
  });

  H5PEditor.processSemanticsChunk(
    interactionFields,
    params,
    wrapper,
    parent
  );

  /**
   * Remove elements.
   * @private
   * @param {HTMLElement} wrapperElem Parent element of elements to be removed.
   * @param {string[]} selectors Class names to remove from wrapper.
   * @param {string} selectorString Class name to further specifying which elements to remove.
   */
  const removeElements = (wrapperElem, selectors, selectorString) => {
    if (!Array.isArray(selectors)) {
      selectors = [selectors];
    }

    selectors.forEach((selector) => {
      const foundElement = wrapperElem.querySelector(`${selectorString} ${selector}`);
      foundElement?.parentNode.removeChild(foundElement);
    });
  };

  const libraryWrapper = wrapper.querySelector('.field.library');

  const hiddenSemanticsSelectors = [
    '.h5p-editor-flex-wrapper',
    '.h5peditor-field-description',
    'select',
    '.h5peditor-copypaste-wrap',
  ];

  // Remove fields in that we don't want to show when library isn't AdvancedText
  if (params.action.library.indexOf('H5P.AdvancedText') === -1) {
    removeElements(wrapper, '.field-name-showAsOpenSceneContent', '');
  }
  else {
    /*
     * If library is AdvancedText, then add listener for dynamically removing
     * hotspot checkbox when opene scene content is checked.
     * The hiding/removal of the openSceneContent checkbox when hotspot is
     * toggle is handled by the showWhen widget declared in semantics.json.
     * Required, because showWhen cannot be chained.
     */
    const hotSpotField = wrapper.querySelector('.field-name-showAsHotspot');
    const openSceneContentToggle = wrapper
      .querySelector('.field-name-showAsOpenSceneContent input');
    hideElementsOnChecked(openSceneContentToggle, hotSpotField);
  }

  // Remove semantics that we don't want to show
  removeElements(libraryWrapper, hiddenSemanticsSelectors, '.field.library > ');
};

/**
 * Set interaction position parameter
 * @param {object} params Parameters.
 * @param {string} [interactionPosition] Position (`${yaw},${pitch}`).
 * @returns {object} Sanitized parameters.
 */
export const sanitizeInteractionParams = (params, interactionPosition) => {
  if (interactionPosition) {
    params.interactionpos = interactionPosition;
  }

  return params;
};

/**
 * Check if interaction form is valid and mark invalid fields with an error.
 * @param {object} children Children to validate.
 * @returns {boolean} True if all children are valid, else false.
 */
export const validateInteractionForm = (children) => {
  H5PEditor.Html.removeWysiwyg();
  return areChildrenValid(children);
};
