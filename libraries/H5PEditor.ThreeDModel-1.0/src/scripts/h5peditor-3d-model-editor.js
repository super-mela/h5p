import threeDModelConversionDropzone from '@components/threed-model-conversion-dropzone.js';
import threeDModelPreview from '@components/threed-model-preview.js';
import '@styles/h5peditor-3d-model.scss';

export default class threeDModelEditor extends H5P.EventDispatcher {
  /**
   * Timeout in milliseconds to wait for image to load.
   * @constant {number}
   * @returns {number} Timeout in milliseconds.
   */
  static get IMAGE_LOAD_TIMEOUT_MS() {
    return 500;
  }

  /**
   * Timeout delts in milliseconds to wait for image to load.
   * @constant {number}
   * @returns {number} Timeout delta in milliseconds.
   */
  static get IMAGE_LOAD_TIMEOUT_DELTA_MS() {
    return 20;
  }

  /**
   * Used to load additional GLTF resources
   * @class H5PEditor.ThreeDModel
   * @param {object} parent Parent object in semantics hierarchy.
   * @param {object} field Fields in semantics where widget is used.
   * @param {object} params Parameters of form.
   * @param {function} setValue Callback to update the form value.
   * @throws {Error} No image found.
   */
  constructor(parent, field, params, setValue) {
    super();

    this.parent = parent;
    this.field = field;
    this.params = params;
    this.setValue = setValue;

    // Sanitize field parameters
    this.field.threeDModel =
      this.field.threeDModel || {};
    this.field.threeDModel.fileTypeExtensions =
      this.field.threeDModel.fileTypeExtensions || ['gltf', 'glb'];

    this.queue = [];

    // Create the wrapper:
    this.$container = H5P.jQuery('<div>', {
      'class': 'field h5peditor-3d-model-container'
    });

    const widgetName = this.field.type;
    this.fieldInstance =
      new H5PEditor.widgets[widgetName](parent, field, params, setValue);
    this.fieldInstance.appendTo(this.$container);

    // Errors
    this.$errors = this.$container.children().children('.h5p-errors');

    this.filePreview = this.fieldInstance.$file.get(0);

    // Create preview
    this.preview = new threeDModelPreview(
      {},
      {
        onDeleted: (button) => {
          this.fieldInstance.confirmRemovalDialog.show(
            H5P.jQuery(button).offset().top
          );
        },
        onModelClicked: (surface) => {
          this.trigger('modelClicked', { surface });
        }
      }
    );

    this.filePreview.parentNode.insertBefore(
      this.preview.getDOM(), this.filePreview
    );

    this.filePreview.style.clear = 'none';

    this.resizeButton = document.createElement('button');
    this.resizeButton.classList.add('h5peditor-3d-model-resize-button');
    this.resizeButton.addEventListener('click', () => {
      const large = this.preview.toggleLargeView();

      this.resizeButton.classList.toggle('large', large);
      const ariaLabel = large ?
        H5PEditor.t('H5PEditor.ThreeDModel', 'sizeDown') :
        H5PEditor.t('H5PEditor.ThreeDModel', 'sizeUp');
      this.resizeButton.setAttribute('aria-label', ariaLabel);
    });

    this.resizeButton.setAttribute(
      'aria-label', H5PEditor.t('H5PEditor.ThreeDModel', 'sizeUp')
    );

    this.filePreview.after(this.resizeButton);

    this.fieldInstance.confirmRemovalDialog.on('confirmed', () => {
      this.filePreview.classList.remove('display-none');
    });

    this.parent.ready( () => {
      // Create dropzone
      this.dropzone = this.dropzone ||
        new threeDModelConversionDropzone((result) => {
          this.handleConversionDone(result);
        });
      const container = this.$container.get(0);
      container.parentNode.insertBefore(
        this.dropzone.getDOM(), container.nextSibling
      );
    });

    // Changes
    this.changes = [];

    this.fileIcon = document.createElement('div');
    this.fileIcon.classList.add('h5peditor-3d-model-file-icon');

    // Update icon on loadup
    H5PEditor.followField(this.parent, this.field.name, (event) => {
      if (!event || !event.path) {
        this.resetModel();
        return;
      }

      // Only gltf supported
      const extension = event.path.split('.').pop().toLowerCase();
      if (!this.field.threeDModel.fileTypeExtensions.includes(extension)) {
        return;
      }

      this.setModel(event.path);
    });

    this.fieldInstance.on('uploadProgress', () => {
      this.preview.hide();
      this.resizeButton.classList.add('display-none');
      this.trigger('previewVisibilityChanged', { visibility: false });
    });

    // React on file changes
    this.fieldInstance.changes.push((event) => {
      if (!event) {
        this.resetModel();
      }
      else {
        this.handleFileUploaded(event.path);
      }
    });
  }

  /**
   * Update annotation,
   * @param {string} id Id of annotation.
   * @param {object} [params] Parameters to update.
   */
  updateAnnotation(id, params = {}) {
    if (typeof id !== 'string') {
      return;
    }

    this.preview.updateAnnotation(id, params);
  }

  /**
   * Remove annotation
   * @param {string} id If of annotation to remove.
   */
  removeAnnotation(id) {
    if (typeof id !== 'string') {
      return;
    }

    this.preview.removeAnnotation(id);
  }

  /**
   * Highlight the preview.
   */
  highlight() {
    this.preview.highlight();
  }

  /**
   * Reset model.
   */
  resetModel() {
    this.preview.setModel();
    this.trigger('modelReset');

    this.preview.hide();
    this.resizeButton.classList.add('display-none');
    this.trigger('previewVisibilityChanged', { visibility: false });
  }

  /**
   * Set model in preview.
   * @param {string} path Full URL path to model file.
   */
  setModel(path) {
    this.dropzone.hide();

    this.filePreview.classList.add('display-none');

    // Get potential cross-origin source
    const element = document.createElement('div');
    H5P.setSource(element, { path: path }, H5PEditor.contentId);
    const src = element.src;
    this.preview.setModel(src);

    this.preview.show();
    this.resizeButton.classList.remove('display-none');
    this.trigger('previewVisibilityChanged', { visibility: true });
  }

  /**
   * Handle new file uploaded.
   * @param {string} path Path to model.
   */
  handleFileUploaded(path = '') {
    let extension = path.split('#');
    if (extension.length > 1) {
      extension = extension.slice(0, -1);
    }
    extension = extension.join('#').split('.').slice(-1)[0].toLowerCase();

    // Only gltf supported
    if (!this.field.threeDModel.fileTypeExtensions.includes(extension)) {
      this.handleError(
        H5PEditor.t('H5PEditor.ThreeDModel', 'filetypeNotSupported')
      );
      this.dropzone.hide();

      return;
    }

    /*
     * GLTF files are JSON files, but may not be in embedded format with base64
     * encoded textures or bin files. Would require to upload assets separately
     * and encode them. For now, only allow GLTF in embedded format and GLB.
     */
    if (extension === 'gltf') {
      // Get potential cross-origin source
      const element = document.createElement('div');
      H5P.setSource(element, { path: path }, H5PEditor.contentId);
      const src = element.src;

      // Try to parse JSON from file
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', src);
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== 4) {
            return;
          }

          try {
            const json = JSON.parse(xhr.responseText);

            // Three.JS cannot handle glTF v1.0.
            if (!this.isGLTFVersionTwo(json)) {
              this.handleError(
                H5PEditor.t('H5PEditor.ThreeDModel', 'onlyVersionTwo')
              );
              return;
            }

            // Can't upload multiple files or zip files, offer conversion
            if (!this.isGLTFEmbeddedFormat(json)) {
              this.handleError(
                H5PEditor.t('H5PEditor.ThreeDModel', 'onlyEmbeddedAssets')
              );
              this.handleEmbeddedAssets();

              return;
            }
          }
          catch (error) {
            this.handleError(
              `${H5PEditor.t('H5PEditor.ThreeDModel', 'fileDamaged')} (${error})`
            );
            return;
          }

          this.setModel(path);
        };
        xhr.send();
      }
      catch (error) {
        this.handleError(
          `${H5PEditor.t('H5PEditor.ThreeDModel', 'fileDamaged')} (${error})`
        );
        return;
      }
    }
    else {
      this.setModel(path);
    }
  }

  /**
   * Handle embedded assets uploaded.
   */
  handleEmbeddedAssets() {
    this.dropzone.show();
  }

  /**
   * Handle conversion done.
   * @param {object} result Result.
   * @param {object} [result.file] File data.
   * @param {string} [result.error] Error message.
   */
  handleConversionDone(result) {
    if (result.error) {
      this.handleError(
        `${H5PEditor.t('H5PEditor.ThreeDModel', 'conversionError')} (${result.error})`
      );
      return;
    }

    // Hope all's sanitized here with the file
    this.fieldInstance.upload(result.file, 'foo.glb');

    this.dropzone.hide();
  }

  /**
   * Check JSON of GLTF file for being embedded format.
   * @param {object} gltfJson GLTF file as JSON object.
   * @returns {boolean} True, if is embedded format, else false.
   */
  isGLTFEmbeddedFormat(gltfJson) {
    const uriProperties = this.findObjects(gltfJson, 'uri', '');
    return !uriProperties.some(({ uri }) => !uri.startsWith('data:'));
  }

  /**
   * Check JSON of GLTF file for version strings.
   * @param {object} json GLTF file as JSON object.
   * @returns {boolean} True, if no version is of 1.0.
   */
  isGLTFVersionTwo(json) {
    const objects = this.findObjects(json, 'version', '');
    return !objects.some((obj) => obj.version === '1.0');
  }

  /**
   * Get objects with particular key (and value) from object.
   * @param {object} obj Object to search in.
   * @param {string} key Key to search for.
   * @param {string} val Value to search for.
   * @returns {object[]} Objects.
   */
  findObjects(obj, key, val) {
    let objects = [];

    for (const [i, value] of Object.entries(obj)) {
      if (typeof value === 'object') {
        objects = objects.concat(this.findObjects(value, key, val));
      }
      else {
        if (
          (i === key && (value === val || val === '')) ||
          (value === val && key === '')
        ) {
          if (!objects.includes(obj)) {
            objects.push(obj);
          }
        }
      }
    }

    return objects;
  }

  /**
   * Handle error.
   * @param {string} errorMessage Error message text.
   */
  handleError(errorMessage) {
    this.$errors.get(0).innerHTML = '';

    const errorString = H5PEditor.createError(errorMessage);

    const errorNode = new DOMParser()
      .parseFromString(errorString, 'text/html')
      .body.firstChild;

    this.$errors.get(0).append(errorNode);
    this.removeFile();
  }

  /**
   * Remove file from widget.
   */
  removeFile() {
    delete this.fieldInstance.params;
    this.fieldInstance.setValue(this.fieldInstance.field);
    this.fieldInstance.addFile();

    this.fieldInstance.changes.forEach((change) => change());
  }

  /**
   * Show file pseudo icon.
   * @param {string} type File type.
   */
  showFileIcon(type) {
    // Wait for image. File.addFile() might not have completed yet
    const waitForImg = (timeout = threeDModelEditor.IMAGE_LOAD_TIMEOUT_MS) => {
      if (timeout <= 0) {
        return;
      }

      const img = this.fieldInstance.$file.find('img').get(0);
      if (img) {
        this.fileIcon.title = type;
        this.fileIcon.innerText = type;
        img.style.display = 'none';
        const thumbnail =
          this.fieldInstance.$file.get(0).querySelector('.thumbnail');
        if (thumbnail) {
          thumbnail.append(this.fileIcon);
        }
      }
      else {
        setTimeout(() => {
          waitForImg(timeout - threeDModelEditor.IMAGE_LOAD_TIMEOUT_DELTA_MS);
        }, threeDModelEditor.IMAGE_LOAD_TIMEOUT_DELTA_MS);
      }
    };

    waitForImg();
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
    return this.fieldInstance.validate();
  }

  /**
   * Remove self. Invoked by H5P core.
   */
  remove() {
    this.$container.remove();
  }
}
