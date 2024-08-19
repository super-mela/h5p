import '@components/threed-model.js';
import Util from '@services/util.js';
import ThreeDModel from './threed-model.js';
import './threed-model-preview.scss';

export default class threeDModelPreview {
  /**
   * 3D Preview of model
   * @class
   * @param {object} [params] Parameters.
   * @param {object} [callbacks] Callbacks.
   * @param {function} [callbacks.onDeleted] Callback when delete button is clicked.
   * @param {function} [callbacks.onModelClicked] Callback when model is clicked.
   */
  constructor(params = {}, callbacks = {}) {
    this.params = Util.extend({}, params);

    this.callbacks = Util.extend({
      onDeleted: () => {},
      onModelClicked: () => {}
    }, callbacks);

    this.isLargeView = false;

    this.model = new ThreeDModel(
      {
        className: 'h5peditor-3d-model-preview-model'
      },
      {
        onModelClicked: (surface) => {
          this.callbacks.onModelClicked(surface);
        }
      }
    );

    this.dom = document.createElement('div');
    this.dom.classList.add('h5peditor-3d-model-preview-wrapper');

    this.dom.addEventListener('transitionend', () => {
      window.parent.dispatchEvent(new Event('resize'));
    });

    const preview = document.createElement('div');
    preview.classList.add('h5peditor-3d-model-preview');
    preview.appendChild(this.model.getDOM());
    this.dom.appendChild(preview);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('h5peditor-3d-model-button-remove-model');
    deleteButton.addEventListener('click', () => {
      this.callbacks.onDeleted(deleteButton);
    });
    this.dom.appendChild(deleteButton);
  }

  /**
   * Get scene DOM.
   * @returns {HTMLElement} Scene DOM.
   */
  getDOM() {
    return this.dom;
  }

  /**
   * Show preview.
   */
  show() {
    this.dom.classList.remove('display-none');
  }

  /**
   * Hide preview.
   */
  hide() {
    this.dom.classList.add('display-none');
  }

  /**
   * Toggle large view.
   * @param {boolean} [large] If set, use. Otherwise use state.
   * @returns {boolean} True if new state is large view. Else false
   */
  toggleLargeView(large) {
    large = large ?? !this.isLargeView;

    this.dom.classList.toggle('large', large);

    this.isLargeView = large;

    return this.isLargeView;
  }

  /**
   * Set model.
   * @param {string} src Object file path.
   */
  setModel(src) {
    this.model.setModel(src);
  }

  /**
   * Update annotation.
   * @param {string} id Id of annotation.
   * @param {object} [params] Parameters.
   * @param {string} [params.surface] Surface value for 3d model viewer.
   * @param {string} [params.text] Text of annotation.
   */
  updateAnnotation(id, params = {}) {
    this.model.updateHotspot(id, params);
  }

  /**
   * Remove annotation.
   * @param {string} id Id of annotation.
   */
  removeAnnotation(id) {
    this.model.removeHotspot(id);
  }

  /**
   * Highlight.
   */
  highlight() {
    this.dom.scrollIntoView({ behavior: 'smooth', block: 'center' });

    this.dom.classList.add('highlight');
    this.dom.addEventListener('animationend', () => {
      this.dom.classList.remove('highlight');
    }, { once: true });
  }
}
