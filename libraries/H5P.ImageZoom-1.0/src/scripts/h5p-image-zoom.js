import Dictionary from '@scripts/h5p-image-zoom-dictionary.js';
import Util from '@services/util.js';

export default class ImageZoom extends H5P.Question {
  /**
   * @class
   * @param {object} params Parameters passed by the editor.
   * @param {number} contentId Content's id.
   */
  constructor(params, contentId) {
    super('image-zoom');

    // Set defaults
    this.params = Util.extend({
      visual: {
        imageWidth: '100%',
        imageAlignment: 'center',
        zoomLensWidth: '20%',
        zoomLensHeight: '25%',
        darkenImageOnZoom: true
      },
      behaviour: {
        autoZoom: true,
        hideMagnificationIndicator: false,
        zoomScales: '1, 1.25, 1.5, 2, 3, 5', // Might go in editor at some point
        zoomLevelDefault: 2
      }
    }, params);
    this.contentId = contentId;

    // Dictionary provides default values
    Dictionary.fill(this.params.a11y);

    this.zoomLensSize = {
      width: this.sanititzeCSS(this.params.visual.zoomLensWidth, { min: 1, default: '20 %' }),
      height: this.sanititzeCSS(this.params.visual.zoomLensHeight, { min: 1, default: '25 %' })
    };
    this.zoomScales = this.params.behaviour.zoomScales.split(',');

    this.zoomLevel = (() => {
      if (
        typeof this.params.behaviour.zoomLevelDefault === 'number' &&
        this.zoomScales.length > this.params.behaviour.zoomLevelDefault
      ) {
        return this.params.behaviour.zoomLevelDefault;
      }
      return Math.floor(this.zoomScales.length / 2);
    })();
  }

  /**
   * SanitizeCSS value.
   * @param {string|number} cssValue CSS value.
   * @param {object} [params] Parameters.
   * @param {number} [params.min] Minimum numerical value.
   * @param {number} [params.max] Maximum numerical value.
   * @param {string} [params.default] Default value.
   * @returns {string|null} Value and unit separated by space or null.
   */
  sanititzeCSS(cssValue, params = {}) {
    params.default = typeof params.default === 'string' ? params.default : null;

    if (typeof cssCalue === 'number') {
      cssValue = cssValue.toString();
    }

    if (typeof cssValue !== 'string') {
      return params.default;
    }

    cssValue = cssValue.trim();

    let value;
    let unit;

    if (/^[+-]?([0-9]*[.])?[0-9]+$/.test(cssValue)) {
      unit = 'px';
      value = cssValue.trim();
    }
    else if (cssValue.substr(-2) === 'px') {
      unit = 'px';
      value = cssValue.substr(0, cssValue.length - 2).trim();
    }
    else if (cssValue.substr(-1) === '%') {
      unit = '%';
      value = cssValue.substr(0, cssValue.length - 1).trim();
    }
    else {
      return params.default;
    }

    if (/^[+-]?([0-9]*[.])?[0-9]+$/.test(value) === false) {
      return params.default;
    }

    const numeric = parseFloat(value);
    if (typeof params.min === 'number' && numeric < params.min) {
      return params.default;
    }
    else if (typeof params.max === 'number' && numeric > params.max) {
      return params.default;
    }

    return `${value} ${unit}`;
  }

  /**
   * Attach content.
   */
  registerDomElements() {
    this.container = document.createElement('div');
    this.container.classList.add('h5p-image-zoom-container');

    if (this.params.behaviour.autoZoom) {
      this.container.classList.add('h5p-image-zoom-auto-zoom');
    }

    // Set image alignment
    if (this.params.visual.imageAlignment !== 'center') {
      this.container.style.alignItems = this.params.visual.imageAlignment;
    }

    // Leave room for side by side option in the future
    this.displays = document.createElement('div');
    this.displays.classList.add('h5p-image-zoom-displays');

    // Navigation
    this.displayNavigation = document.createElement('div');
    this.displayNavigation.classList.add('h5p-image-zoom-display-navigation');

    const wrapperNavigation = document.createElement('div');
    wrapperNavigation.classList.add('h5p-image-zoom-wrapper-navigation');

    this.imageInstance = H5P.newRunnable(
      this.params.image,
      this.contentId,
      H5P.jQuery(wrapperNavigation),
      true,
      {}
    );
    this.imageNavigation = this.imageInstance.$img.get(0);
    this.imageNavigation.setAttribute('draggable', false);

    this.imageNavigation.classList.add('h5p-image-zoom-image-navigation');
    if (this.params.visual.darkenImageOnZoom) {
      this.imageNavigation.classList.add('h5p-image-zoom-darken');
    }

    this.displayNavigation.appendChild(wrapperNavigation);
    this.displays.appendChild(this.displayNavigation);

    if (this.params.image?.params?.file) {
      this.imageInstance.on('loaded', () => {
        this.imageLoaded = true;
        this.handleImageLoaded();
      });
    }
    else {
      // H5P.Image provides SVG placeholder that needs height
      wrapperNavigation.classList.add('h5p-image-zoom-image-placeholder');
      this.imageLoaded = true;
      this.handleImageLoaded();
    }

    // Zoom lens
    this.wrapperLens = document.createElement('div');
    this.wrapperLens.classList.add('h5p-image-zoom-wrapper-lens');

    this.imageInstanceLens = H5P.newRunnable(
      this.params.image,
      this.contentId,
      H5P.jQuery(this.wrapperLens),
      true,
      {}
    );
    this.imageLens = this.imageInstanceLens.$img.get(0);
    this.imageLens.classList.add('h5p-image-zoom-image-lens');
    this.displayNavigation.appendChild(this.wrapperLens);

    // Toggle button
    this.toggleButton = document.createElement('button');
    this.toggleButton.classList.add('h5p-image-zoom-button-toggle');
    if (this.params.behaviour.hideMagnificationIndicator) {
      this.toggleButton.classList.add('h5p-image-zoom-button-toggle-hidden');
    }
    this.toggleButton.setAttribute('aria-pressed', 'false');
    this.toggleButton.setAttribute('aria-label', Dictionary.get('magnify'));
    this.displayNavigation.appendChild(this.toggleButton);

    this.container.appendChild(this.displays);

    this.setContent(this.container);

    H5P.externalDispatcher.on('initialized', () => {
      this.isInitialized = true;
      this.handleImageLoaded();
    });
  }

  /**
   * Get zoom scale.
   * @param {number} [zoomLevel] Zoom level, defaults to global state.
   * @returns {number|undefined} Zoom scale.
   */
  getZoomScale(zoomLevel) {
    zoomLevel = zoomLevel || this.zoomLevel;

    if (
      typeof zoomLevel !== 'number' ||
      zoomLevel < 0 ||
      zoomLevel >= this.zoomScales.length
    ) {
      return;
    }

    return this.zoomScales[zoomLevel];
  }

  /**
   * Set zoom level.
   * @param {number|null} zoomLevel Zoom level to set, null to reset.
   */
  setZoomLevel(zoomLevel) {
    if (zoomLevel === null) {
      zoomLevel = Math.floor(this.zoomScales.length / this.params.behaviour.zoomLevelDefault);
    }

    if (
      typeof zoomLevel !== 'number' ||
      zoomLevel < 0 ||
      zoomLevel >= this.zoomScales.length
    ) {
      return;
    }

    this.zoomLevel = zoomLevel;
    const lensSize = this.getLensSize();
    this.imageLens.style.transform = `scale(${this.getZoomScale(this.zoomLevel) / lensSize.widthFactor}, ${this.getZoomScale(this.zoomLevel) / lensSize.heightFactor})`;
  }

  /**
   * Activate zoom.
   */
  activateZoom() {
    this.isZooming = true;
    this.toggleButton.setAttribute('aria-pressed', 'true');
    this.container.classList.add('h5p-image-zoom-active');
    this.setZoomLevel(this.zoomLevel);
  }

  /**
   * Deactivate zoom.
   */
  deactivateZoom() {
    this.isZooming = false;
    this.toggleButton.setAttribute('aria-pressed', 'false');
    this.container.classList.remove('h5p-image-zoom-active');
    this.setZoomLevel(null);
  }

  /**
   * Get zoom lens width and height as percentage.
   * @returns {object} Zoom lens width and height as percentage.
   */
  getLensSize() {
    let imageRect;

    const widthValue = parseFloat(this.zoomLensSize.width.split(' ')[0]);
    const widthUnit = this.zoomLensSize.width.split(' ')[1];
    let widthFactor;
    if (widthUnit === '%') {
      widthFactor = widthValue / 100;
    }
    else {
      imageRect = this.imageNavigation.getBoundingClientRect();
      widthFactor = Math.min(widthValue / imageRect.width, 1);
    }

    const heightValue = parseFloat(this.zoomLensSize.height.split(' ')[0]);
    const heightUnit = this.zoomLensSize.height.split(' ')[1];
    let heightFactor;
    if (heightUnit === '%') {
      heightFactor = heightValue / 100;
    }
    else {
      imageRect = imageRect || this.imageNavigation.getBoundingClientRect();
      heightFactor = Math.min(heightValue / imageRect.height, 1);
    }

    return {
      width: widthValue,
      widthUnit: widthUnit,
      widthFactor: widthFactor,
      height: heightValue,
      heightUnit: heightUnit,
      heightFactor: heightFactor
    };
  }

  /**
   * Get Lens position as rounded percentage.
   * @returns {object} Position with x and y part.
   */
  getLensPosition() {
    let positions = this.imageLens.style.transformOrigin.split(' ');
    if (
      positions.length === 2 &&
      positions.every((position) => /^\d*(.\d+)?%$/.test(position))
    ) {
      positions = positions.map((value) => {
        return `${Math.round(parseFloat(value))} %`;
      });
    }
    else {
      positions = [Dictionary.get('unknown'), Dictionary.get('unknown')];
    }

    return {
      x: positions[0],
      y: positions[1]
    };
  }

  /**
   * Update lens.
   * @param {object} position Pointer position on screen.
   * @param {number} position.x X pointer position.
   * @param {number} position.y Y pointer position.
   */
  setLensPosition(position) {
    const imageRect = this.imageNavigation.getBoundingClientRect();
    const lensRect = this.wrapperLens.getBoundingClientRect();

    const imagePointerPosition = {
      x: position.x - imageRect.left,
      y: position.y - imageRect.top
    };

    const lensPosition = {
      x: Math.max(0, Math.min(imagePointerPosition.x - lensRect.width / 2, imageRect.width - lensRect.width)),
      y: Math.max(0, Math.min(imagePointerPosition.y - lensRect.height / 2, imageRect.height - lensRect.height))
    };

    const lensPositionPercentage = {
      x: lensPosition.x / imageRect.width * 100,
      y: lensPosition.y / imageRect.height * 100
    };

    this.wrapperLens.style.left = `${lensPositionPercentage.x}%`;
    this.wrapperLens.style.top = `${lensPositionPercentage.y}%`;

    const lensOffsets = {
      minX: lensRect.width / 2,
      maxX: imageRect.width - lensRect.width / 2,
      minY: lensRect.height / 2,
      maxY: imageRect.height - lensRect.height / 2
    };

    const cappedPosition = {
      x: Math.max(lensOffsets.minX, Math.min(imagePointerPosition.x, lensOffsets.maxX)),
      y: Math.max(lensOffsets.minY, Math.min(imagePointerPosition.y, lensOffsets.maxY))
    };

    /*
     * 99.5 instead of 100, because otherwise magnification may cause margin.
     * Will still be read as 100% to screen reader due to rounding
     */
    const cappedPositionPercentage = {
      x: Util.project(cappedPosition.x, lensOffsets.minX, lensOffsets.maxX, 0, 99.5),
      y: Util.project(cappedPosition.y, lensOffsets.minY, lensOffsets.maxY, 0, 99.5)
    };

    this.imageLens.style.transformOrigin = `${cappedPositionPercentage.x}% ${cappedPositionPercentage.y}%`;
  }

  /**
   * Read lens position to screen reader.
   */
  readLensPosition() {
    let x, y;
    ({ x, y } = this.getLensPosition());

    const screenreaderText = Dictionary.get('movedLensTo')
      .replace(/@positionHorizontal/g, x)
      .replace(/@positionVertical/g, y);

    this.read(screenreaderText);
  }

  /**
   * Read zoom scale to screen reader.
   */
  readZoomScale() {
    const screenreaderText = Dictionary.get('zoomedToScale')
      .replace(/@magnification/g, this.getZoomScale());
    this.read(screenreaderText);
  }

  /**
   * Handle image loaded.
   */
  handleImageLoaded() {
    if (!this.isInitialized || !this.imageLoaded) {
      return;
    }

    // Set image width
    const width = this.params.visual.imageWidth === 'natural' ?
      `min(${this.imageNavigation.naturalWidth}px, 100%)` :
      this.params.visual.imageWidth;
    this.displays.style.width = width;

    // Set zoom lens size.
    const zoomLensSize = this.getLensSize();

    this.wrapperLens.style.width = (zoomLensSize.widthUnit === '%') ?
      `calc(100% * ${zoomLensSize.widthFactor})` :
      `min(100%, ${zoomLensSize.width}px)`;

    this.wrapperLens.style.height = (zoomLensSize.heightUnit === '%') ?
      `calc(100% * ${zoomLensSize.heightFactor})` :
      `min(100%, ${zoomLensSize.height}px)`;

    this.addEventListeners();

    this.trigger('resize');
  }

  /**
   * Add event listeners
   */
  addEventListeners() {
    // Also handles enter/space on toggle button
    this.displayNavigation.addEventListener('click', (event) => {
      this.handleClick(event);
    });

    this.displayNavigation.addEventListener('touchstart', () => {
      this.handleTouchStart();
    });

    this.displayNavigation.addEventListener('mouseover', () => {
      this.handleMouseOver();
    });

    this.displayNavigation.addEventListener('mousemove', (event) => {
      this.handleMouseMove(event);
    });

    this.displayNavigation.addEventListener('mouseout', (event) => {
      this.handleMouseOut(event);
    });

    this.displayNavigation.addEventListener('wheel', (event) => {
      this.handleWheel(event);
    });

    this.toggleButton.addEventListener('keydown', (event) => {
      this.handleKeydown(event);
    });
  }

  /**
   * Handle key down.
   * @param {KeyboardEvent} event Keyboard event.
   */
  handleKeydown(event) {
    if (!this.isZooming) {
      return;
    }

    if (event.key === '+') {
      this.setZoomLevel(Math.max(0, Math.min(this.zoomLevel + 1, this.zoomScales.length - 1)));
      this.readZoomScale();
    }
    else if (event.key === '-') {
      this.setZoomLevel(Math.max(0, Math.min(this.zoomLevel - 1, this.zoomScales.length - 1)));
      this.readZoomScale();
    }
    else if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
      event.preventDefault();
      const lensRect = this.wrapperLens.getBoundingClientRect();

      let x = lensRect.left;
      let y = lensRect.top;

      if (event.key === 'ArrowLeft') {
        y += lensRect.height / 2;
      }
      else if (event.key === 'ArrowRight') {
        x += lensRect.width;
        y += lensRect.height / 2;
      }
      else if (event.key === 'ArrowUp') {
        x += lensRect.width / 2;
      }
      else if (event.key === 'ArrowDown') {
        x += lensRect.width / 2;
        y += lensRect.height;
      }

      this.setLensPosition({ x: x, y: y });
      this.readLensPosition();
    }
  }

  /**
   * Handle mouse wheel change.
   * @param {Event} event Wheel event.
   */
  handleWheel(event) {
    if (!this.isZooming) {
      return;
    }

    event.preventDefault(); // Don't scroll page.

    this.setZoomLevel(Math.max(0, Math.min(this.zoomLevel - Math.sign(event.deltaY), this.zoomScales.length - 1)));
  }

  /**
   * Handle click.
   * @param {Event} event Click event.
   */
  handleClick(event) {
    if (event.pointerType && event.pointerType !== '' && event.pointerType !== 'mouse') {
      event.preventDefault();
      return; // Potentially touch device, leave zoom to pinch zoom on device
    }

    // iOS sometimes issues MouseEvent without TouchEvent up front.
    if (Util.isIOS()) {
      event.preventDefault();
      return;
    }

    if (this.params.behaviour.autoZoom && event.target !== this.toggleButton) {
      event.preventDefault();
      return; // Was click on lens
    }

    if (this.isZooming) {
      if (event.target === this.toggleButton) {
        this.read(`${Dictionary.get('unmagnified')}`);
      }

      this.deactivateZoom();
    }
    else {
      let position = {
        x: event.pageX,
        y: event.pageY
      };

      if (event.target === this.toggleButton) {
        this.imageNavigation.focus();

        this.read(`${Dictionary.get('magnified')} ${Dictionary.get('instructions')}`);

        // Use center of image for initial position if using keyboard
        const imageRect = this.imageNavigation.getBoundingClientRect();
        position = {
          x: imageRect.left + imageRect.width / 2,
          y: imageRect.height / 2
        };
      }

      this.activateZoom();
      this.setLensPosition(position);
    }
  }

  /**
   * Handle touch start.
   * Touch devices may issue an emulated mousemove after touchend, but
   * touch devices should allow pinch zoom, so can't use event.preventDefault()
   */
  handleTouchStart() {
    this.isTouching = true;

    // mousemove would have been issued after 1s
    clearTimeout(this.touchstartTimeout);
    this.touchstartTimeout = setTimeout(() => {
      this.isTouching = false;
    }, 1000);
  }

  /**
   * Handle pointer enters image.
   */
  handleMouseOver() {
    if (
      !this.params.behaviour.autoZoom || this.isTouching ||
      Util.isIOS() // iOS sometimes triggers MouseEvent without TouchEvent
    ) {
      return;
    }

    this.activateZoom();
  }

  /**
   * Handle mouse pointer moving over image.
   * @param {Event} event Mouse event.
   */
  handleMouseMove(event) {
    if (
      this.isTouching ||
      Util.isIOS()  // iOS sometimes triggers MouseEvent without TouchEvent
    ) {
      // Event triggered by touch. Possible future: check event.pointerType
      return;
    }

    if (this.params.behaviour.autoZoom && !this.isZooming) {
      this.activateZoom(); // Might have been deactivated by button
    }
    else if (!this.isZooming) {
      return;
    }

    this.setLensPosition({ x: event.pageX, y: event.pageY });
  }

  /**
   * Handle pointer leaves image.
   */
  handleMouseOut() {
    if (!this.params.behaviour.autoZoom) {
      return;
    }

    this.deactivateZoom();
  }
}
