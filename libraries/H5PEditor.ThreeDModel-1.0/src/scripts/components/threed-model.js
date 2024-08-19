import '@google/model-viewer';
import  Util from '@services/util.js';
import './threed-model.scss';

export default class ThreeDModel {
  /**
   * @class
   * @param {object} [params] Parameters.
   * @param {string} [params.className] Class name.
   * @param {string} [params.alt] Alt text.
   * @param {object} [params.a11y] Accessibility attributes.
   * @param {object} [callbacks] Callbacks.
   * @param {function} [callbacks.onLoad] Callback when model is loaded.
   * @param {function} [callbacks.onModelClicked] Callback when model is clicked.
   */
  constructor(params = {}, callbacks = {}) {
    this.callbacks = Util.extend({
      onLoad: () => {},
      onModelClicked: () => {}
    }, callbacks);

    this.dom = this.buildDOM({
      className: params.className,
      alt: params.alt,
      a11y: params.a11y
    });
  }

  /**
   * Get DOM.
   * @returns {HTMLElement} DOM.
   */
  getDOM() {
    return this.dom;
  }

  /**
   * Build DOM.
   * @param {object} [params] Parameters.
   * @param {string} [params.className] Class name.
   * @param {string} [params.alt] Alt text.
   * @param {object} [params.a11y] Accessibility attributes.
   * @returns {HTMLElement} DOM.
   */
  buildDOM(params = {}) {
    // model-viewer is custom element expected by @google/model-viewer
    const dom = document.createElement('model-viewer');

    dom.classList.add('threed-model');
    if (params.className) {
      dom.classList.add(params.className);
    }

    dom.setAttribute('camera-controls', '');
    dom.setAttribute('disable-tap', '');

    if (params.alt) {
      dom.setAttribute('alt', params.alt);
    }

    dom.setAttribute('a11y', this.buildA11y(params.a11y));

    dom.addEventListener('load', () => {
      this.updateAspectRatio();
      this.callbacks.onLoad();
    });

    dom.addEventListener('click', (event) => {
      const surface = dom.surfaceFromPoint(event.clientX, event.clientY);

      if (surface !== null) {
        this.callbacks.onModelClicked(surface);
      }
    });

    return dom;
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

  /**
   * Set model source.
   * @param {string} src Source object file path.
   */
  setModel(src) {
    if (typeof src !== 'string') {
      return;
    }

    // H5P integration may append query parameters or a fragment
    const srcWithoutApendix = src.split('#').shift().split('?').shift();
    if (
      !srcWithoutApendix.endsWith('.gltf') &&
      !srcWithoutApendix.endsWith('.glb')
    ) {
      return; // Only support GLTF and GLB
    }

    // Set model
    this.dom.setAttribute('src', src);
  }

  /**
   * Update hotspot. Will create one if not set yet.
   * @param {string} id Id of hotspot to update.
   * @param {object} [params] Parameters to update.
   * @param {string} [params.surface] Surface value for 3d model viewer.
   * @param {string} [params.text] Text to display in hotspot label.
   */
  updateHotspot(id, params = {}) {
    if (typeof id !== 'string') {
      return;
    }

    let hotspot = this.dom.querySelector(
      `.hotspot[slot="hotspot-${id}"]`
    );

    // Create hotspot if missing and surface is set
    if (!hotspot && params.surface) {
      hotspot = document.createElement('div');
      hotspot.classList.add('hotspot');
      hotspot.setAttribute('slot', `hotspot-${id}`);

      const label = document.createElement('span');
      label.classList.add('hotspot-label');
      hotspot.appendChild(label);
    }

    if (params.surface) {
      /*
       * updateHotspot (see https://modelviewer.dev/docs/index.html#entrydocs-annotations-methods-updateHotspot)
       * does not re-render the model (!?), so we update the data-surface
       * attribute directly on the hotspot element and make it re-render by
       * appending it to the DOM again below.
       */
      hotspot.setAttribute('data-surface', params.surface);
    }

    this.dom.append(hotspot);

    if (typeof params.text === 'string') {
      const label = hotspot.querySelector('.hotspot-label');
      if (!label) {
        return; // Should never happen
      }

      label.classList.toggle('display-none', !params.text);
      label.textContent = params.text;
    }
  }

  /**
   * Remove hotspot.
   * @param {string} id Id of hotspot to remove.
   */
  removeHotspot(id) {
    if (typeof id !== 'string') {
      return;
    }

    const hotspot = this.dom.querySelector(
      `.hotspot[slot="hotspot-${id}"]`
    );

    hotspot?.remove();
  }

  /**
   * Update dom aspect ratio from model aspect ratio.
   */
  updateAspectRatio() {
    const dimensions = this.getDimensions();
    if (!dimensions) {
      return;
    }

    this.dom.style.aspectRatio = `${dimensions.x} / ${dimensions.y}`;
  }

  /**
   * Get model dimensions.
   * @returns {object|undefined} Dimensions.
   */
  getDimensions() {
    if (!this.dom.getDimensions) {
      return; // May not be ready yet
    }

    return this.dom.getDimensions();
  }

  /**
   * Build a11y attributes.
   * @param {object} params Parameters.
   * @returns {string} A11y attributes as JSON string.
   */
  buildA11y(params = {}) {
    const a11yProps = [
      'back', 'front', 'left', 'right',
      'lower-back', 'lower-front', 'lower-left', 'lower-right',
      'upper-back', 'upper-front', 'upper-left', 'upper-right',
      'interaction-prompt'
    ];

    const a11yAttributes = {};
    a11yProps.forEach((prop) => {
      if (params[prop]) {
        a11yAttributes[prop] = params[prop];
      }
    });

    // Set the attribute on the DOM element with the new object
    return JSON.stringify(a11yAttributes);
  }
}
