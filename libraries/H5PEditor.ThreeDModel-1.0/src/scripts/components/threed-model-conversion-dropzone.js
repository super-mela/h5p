import threeDModelGLTF2GLB from '@services/gltf2glb.js';
import './threed-model-conversion-dropzone.scss';

export default class threeDModelConversionDropzone {
  /**
   * Dropzone to convert folders with gltf assets to glb
   * @class H5PEditor.ThreeDModelConversionDropzone
   * @param {function} callback Callback for file or error.
   */
  constructor(callback) {
    this.callback = callback || (() => {});

    this.converter = this.converter || new threeDModelGLTF2GLB();

    this.container = document.createElement('div');
    this.container.classList.add(
      'h5peditor-3d-model-converter-container',
      'display-none'
    );

    const dropzone = document.createElement('div');
    dropzone.classList.add('h5peditor-3d-model-converter-dropzone');
    dropzone.innerText = H5PEditor.t('H5PEditor.ThreeDModel', 'dropFolderHere');

    dropzone.addEventListener('dragover', (event) => {
      this.handleDragOver(event);
    }, false);

    dropzone.addEventListener('drop', (event) => {
      this.handleDrop(event);
    }, false);

    this.container.appendChild(dropzone);
  }

  /**
   * Get scene DOM.
   * @returns {HTMLElement} Scene DOM.
   */
  getDOM() {
    return this.container;
  }

  /**
   * Show dropzone.
   */
  show() {
    this.container.classList.remove('display-none');
  }

  /**
   * Hide dropzone.
   */
  hide() {
    this.container.classList.add('display-none');
  }

  /**
   * Handle dragover for converter dropzone.
   * @param {Event} event DragOver event.
   */
  handleDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  }

  /**
   * Handle drop on converter dropzone.
   * @param {Event} event Drop event.
   */
  handleDrop(event) {
    event.stopPropagation();
    event.preventDefault();

    this.converter.convert(event.dataTransfer.items, (result) => {
      this.callback(result);
    });
  }
}
