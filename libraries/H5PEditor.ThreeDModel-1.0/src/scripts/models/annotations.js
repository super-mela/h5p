export default class Annotations {

  /**
   * @class
   * @param {object} [params] Parameters.
   * @param {object} params.threedModelField 3D model field instance.
   */
  constructor(params = {}) {
    this.annotations = {};
    this.threedModelField = params.threedModelField;
  }

  /**
   * Add annotation.
   * @param {string} id Id of annotation.
   * @param {object} params Parameters.
   * @param {object} params.textFieldInstance Text field instance.
   * @param {object} params.surfaceFieldInstance Surface field instance.
   */
  add(id, params = {}) {
    if (
      typeof id !== 'string' ||
      !params.textFieldInstance ||
      !params.surfaceFieldInstance
    ) {
      return;
    }

    const annotation = {
      textFieldInstance: params.textFieldInstance,
      surfaceFieldInstance: params.surfaceFieldInstance
    };

    // Change listener would not fire on keyup or paste
    annotation.textFieldInstance.$input.get(0).addEventListener('keyup', () => {
      this.update(id);
    });

    this.annotations[id] = annotation;

    if (annotation.surfaceFieldInstance.params === undefined) {
      return;
    }

    this.threedModelField?.updateAnnotation(
      id,
      {
        surface: annotation.surfaceFieldInstance.params,
        text: annotation.textFieldInstance.value ?? '',
      }
    );
  }

  /**
   * Keep annotations with the given ids and remove the rest.
   * @param {string[]} ids Ids of annotations to keep.
   */
  keep(ids = []) {
    if (!Array.isArray(ids)) {
      return;
    }

    for (const id in this.annotations) {
      if (!ids.includes(id)) {
        this.remove(id);
      }
    }
  }

  /**
   * Remove annotation.
   * @param {string} id Id of annotation to remove.
   */
  remove(id) {
    if (!id) {
      return;
    }

    this.threedModelField?.removeAnnotation(id);
    delete this.annotations[id];
  }

  /**
   * Update annotation.
   * @param {string} id Id of annotation to update.
   * @param {string} [surface] Surface value for 3d model viewer.
   */
  update(id, surface) {
    if (!this.annotations[id]) {
      return;
    }

    if (surface) {
      // Widget "none" does not update params by using setValue
      this.annotations[id].surfaceFieldInstance.params = surface;
      this.annotations[id].surfaceFieldInstance.setValue(
        this.annotations[id].surfaceFieldInstance.field,
        this.annotations[id].surfaceFieldInstance.params
      );
    }

    if (this.annotations[id].surfaceFieldInstance.params === undefined) {
      return; // Annotations without surface are not set
    }

    this.threedModelField?.updateAnnotation(
      id,
      {
        surface: this.annotations[id].surfaceFieldInstance.params,
        // textFieldInstance.value would only have been updated on "change"
        text: this.annotations[id].textFieldInstance.$input.get(0).value ?? ''
      }
    );
  }
}
