import './h5p-jigsaw-puzzle-tile.scss';

import Util from '@services/util.js';

/** Class representing a puzzle tile */
export default class JigsawPuzzleTile {
  /**
   * @class
   * @param {object} params Parameters.
   * @param {object} callbacks Callbacks.
   * @param {function} callbacks.onTileCreated Callback for when tile is created.
   * @param {function} callbacks.onTileMoveStart Callback for when tile is about to be moved.
   * @param {function} callbacks.onTileMove Callback for when tile is moved.
   * @param {function} callbacks.onTileMoveEnd Callback for when tile is dropped.
   */
  constructor(params = {}, callbacks = {}) {
    this.params = params;

    // Set missing callbacks
    this.callbacks = Util.extend({
      onPuzzleTileCreated: () => {},
      onPuzzleTileMoveStarted: () => {},
      onPuzzleTileMoved: () => {},
      onPuzzleTileMoveEnded: () => {}
    }, callbacks);

    // SVG path borders to be used separately
    this.pathBorders = {};

    // Keep track of movement
    this.moveInitialX = null;
    this.moveInitialY = null;
    this.deltaX = null;
    this.deltaY = null;

    // Keep track if tile is at target position
    this.isDone = false;
    this.scale = 1;

    // Add background image
    this.backgroundImage = new Image();
    this.backgroundImage.addEventListener('load', () => {
      this.handleImageLoaded();
    });
    // Use the same crossOrigin policy as the initial image used.
    this.backgroundImage.crossOrigin = params.imageCrossOrigin;
    this.backgroundImage.src = params.imageSource;

    // add handlers
    this.handleTileMoveStarted = this.handleTileMoveStarted.bind(this);
    this.handleTileMoved = this.handleTileMoved.bind(this);
    this.handleTileMoveEnded = this.handleTileMoveEnded.bind(this);
    this.handleAnimationMoveEnded = this.handleAnimationMoveEnded.bind(this);

    this.tile = document.createElement('div');
    this.tile.classList.add('h5p-jigsaw-puzzle-tile');

    // Initial scale
    this.setScale(this.scale);
  }

  /**
   * Return the DOM for tile.
   * @returns {HTMLElement} DOM for this class.
   */
  getDOM() {
    return this.tile;
  }

  /**
   * Return the outer HTML for tile.
   * @returns {string} Outer HTML for tile.
   */
  getHTML() {
    return this.tile.outerHTML;
  }

  /**
   * Build SVG element.
   * @param {object} params Parameters.
   * @returns {HTMLElement} SVG element.
   */
  buildSVG(params = {}) {
    const svg = document.createElement('svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('viewBox', `0 0 ${params.width + params.stroke} ${params.height + params.stroke}`);

    // Create background pattern
    const defs = document.createElement('defs');
    const pattern = document.createElement('pattern');
    pattern.setAttribute('id', `h5p-jigsaw-puzzle-${this.params.uuid}-pattern-${this.params.id}`);
    pattern.setAttribute('width', this.params.size.width);
    pattern.setAttribute('height', this.params.size.height);
    pattern.setAttribute('x', -((this.params.gridPosition.x * this.params.baseWidth * this.scale - Math.sign(this.params.gridPosition.x) * this.knob / 2) / this.width));
    pattern.setAttribute('y', -((this.params.gridPosition.y * this.params.baseHeight * this.scale - Math.sign(this.params.gridPosition.y) * this.knob / 2) / this.height));
    const image = document.createElement('image');
    image.setAttribute('width', params.image.naturalWidth);
    image.setAttribute('height', params.image.naturalHeight);
    image.setAttribute('href', params.image.src);
    pattern.appendChild(image);
    defs.appendChild(pattern);
    svg.appendChild(defs);

    // Set Main
    const path = document.createElement('path');
    path.setAttribute('fill', `url(#h5p-jigsaw-puzzle-${this.params.uuid}-pattern-${this.params.id})`);
    path.setAttribute('stroke-opacity', '0');
    path.setAttribute('stroke-width', params.stroke);
    path.setAttribute('d', this.buildPathDash({
      width: params.baseWidth,
      height: params.baseHeight,
      type: params.type,
      stroke: params.stroke
    }));
    svg.appendChild(path);

    // Add paths for borders
    ['top', 'right', 'bottom', 'left'].forEach((side) => {
      this.pathBorders[side] = this.buildPathDOM({
        stroke: params.stroke,
        color: this.params.borderColor,
        width: params.baseWidth,
        height: params.baseHeight,
        orientation: this.params.borders[side].orientation,
        opacity: this.params.borders[side].opacity,
        side: side,
        gridPosition: {
          x: this.params.gridPosition.x,
          y: this.params.gridPosition.y
        },
        className: `border-${side}`
      });

      svg.appendChild(this.pathBorders[side]);
    });

    return svg;
  }

  /**
   * Build DOM element for SVG path.
   * @param {object} params Parameters.
   * @returns {HTMLElement} DOM for SVG path.
   */
  buildPathDOM(params = {}) {
    const pathDOM = document.createElement('path');
    if (params.className) {
      pathDOM.classList.add(params.className);
    }
    pathDOM.setAttribute('fill-opacity', '0');
    pathDOM.setAttribute('stroke', params.color);
    pathDOM.setAttribute('stroke-width', params.stroke);
    pathDOM.setAttribute('stroke-opacity', params.opacity);
    pathDOM.setAttribute('d', this.buildPathSegment({
      width: params.width,
      height: params.height,
      orientation: params.orientation,
      stroke: params.stroke,
      side: params.side,
      gridPosition: {
        x: this.params.gridPosition.x,
        y: this.params.gridPosition.y
      }
    }));

    return pathDOM;
  }

  /**
   * Build SVG segment.
   * @param {object} params Parameters.
   * @returns {string} SVG path.
   */
  buildPathSegment(params = {}) {
    const knob = Math.min(params.width, params.height) / 2;

    // Offset for side and knob
    let offsetX = (params.side === 'right') ? params.width : 0;
    if (params.gridPosition.x !== 0) {
      offsetX += params.stroke / 2 + knob / 2;
    }

    let offsetY = (params.side === 'bottom') ? params.height : 0;
    if (params.gridPosition.y !== 0) {
      offsetY += params.stroke / 2 + knob / 2;
    }

    // Start position
    const offset = `M ${offsetX}, ${offsetY}`;
    const pathSide = (params.side === 'top' || params.side === 'bottom') ? 'horizontal' : 'vertical';

    const path = JigsawPuzzleTile.PATHS_BORDER[`${pathSide}-${params.orientation}`];

    return `${offset} ${path}`
      .replace(/@w/g, params.width)
      .replace(/@h/g, params.height)
      .replace(/@knob/g, knob)
      .replace(/@gapw/g, (params.width - knob) / 2)
      .replace(/@gaph/g, (params.height - knob) / 2);
  }

  /**
   * Build SVG path dash.
   * @param {object} params Parameters.
   * @param {string} params.type Puzzle tile type.
   * @param {number} params.width Width.
   * @param {number} params.height Height.
   * @returns {string} SVG path dash.
   */
  buildPathDash(params = {}) {
    const knob = Math.min(params.width, params.height) / 2;

    return JigsawPuzzleTile.PATHS[params.type]
      .replace(/@offknob/g, params.stroke / 2 + knob / 2)
      .replace(/@off/g, params.stroke / 2)
      .replace(/@w/g, params.width)
      .replace(/@h/g, params.height)
      .replace(/@knob/g, knob)
      .replace(/@gapw/g, (params.width - knob) / 2)
      .replace(/@gaph/g, (params.height - knob) / 2);
  }

  /**
   * Update parameters.
   * @param {object} params Parameters.
   */
  updateParams(params) {
    this.params = Util.extend(this.params, params);
    this.repaintSVG(); // Might flicker
  }

  /**
   * Set CSS z-index.
   * @param {number} [index] Z-index or empty to reset.
   */
  setZIndex(index = '') {
    if (index !== '' && typeof index !== 'number') {
      return;
    }

    this.tile.style.zIndex = index;
  }

  /**
   * Get grid position.
   * @returns {object} Grid position.
   */
  getGridPosition() {
    return {
      x: this.params.gridPosition.x,
      y: this.params.gridPosition.y
    };
  }

  /**
   * Get tile id.
   * @returns {number} Tile id.
   */
  getId() {
    return this.params.id;
  }

  /**
   * Set size by scale relative to original size.
   * @param {number} scale Scale.
   */
  setScale(scale) {
    if (typeof scale !== 'number' || scale < 0) {
      return;
    }

    this.scale = scale;

    this.width = this.scale * this.params.width;
    this.height = this.scale * this.params.height;
    this.knob = this.scale * this.params.knobSize;
    this.stroke = this.scale * this.params.stroke;

    this.tile.style.width = `${this.width + this.stroke}px`;
    this.tile.style.height = `${this.height + this.stroke}px`;
  }

  /**
   * Get size.
   * @returns {object|null} Size.
   */
  getSize() {
    if (!this.tile.style.width || !this.tile.style.height) {
      return null;
    }

    return {
      baseWidth: this.params.baseWidth,
      baseHeight: this.params.baseHeight,
      width: this.width,
      height: this.height,
      knob: this.knob,
      stroke: this.stroke
    };
  }

  /**
   * Get position.
   * @returns {object|null} Position.
   */
  getPosition() {
    if (!this.tile.style.left || !this.tile.style.top) {
      return null;
    }

    return {
      x: parseFloat(this.tile.style.left),
      y: parseFloat(this.tile.style.top)
    };
  }

  /**
   * Set position.
   * @param {object} position Position.
   * @param {number} position.x X-position.
   * @param {number} position.y Y-position.
   */
  setPosition(position = {}) {
    if (typeof position.x !== 'number' || typeof position.y !== 'number') {
      return;
    }

    // Keep tile inside puzzle area
    const puzzleArea = this.params.container;
    const minX = puzzleArea.offsetLeft;
    const maxX = puzzleArea.offsetLeft + puzzleArea.offsetWidth - this.width;

    const minY = puzzleArea.offsetTop;
    const maxY = puzzleArea.offsetTop + puzzleArea.offsetHeight - this.height;

    this.tile.style.left = `${Math.min(Math.max(minX, position.x), maxX)}px`;
    this.tile.style.top = `${Math.min(Math.max(minY, position.y), maxY)}px`;
  }

  /**
   * Set tile borders.
   * @param {object} positions Key-value pair for position and boolean.
   */
  setBorders(positions) {
    for (let name in positions) {
      if (typeof positions[name] !== 'boolean') {
        return;
      }

      const border = this.tile.querySelector(`.border-${name}`);
      if (border) {
        border.setAttribute('stroke-opacity', positions[name] ? '1' : '0');
      }
    }
  }

  /**
   * Set tile done.
   * @param {boolean} [done] Done state.
   */
  setDone(done = true) {
    this.isDone = done;
  }

  /**
   * Show tile.
   */
  show() {
    this.tile.classList.remove('hidden');
  }

  /**
   * Hide tile.
   */
  hide() {
    this.tile.classList.add('hidden');
  }

  /**
   * Ghost tile.
   */
  ghost() {
    this.tile.classList.add('ghosted');
  }

  /**
   * Unghost tile.
   */
  unghost() {
    this.tile.classList.remove('ghosted');
  }

  /**
   * Enable tile.
   */
  enable() {
    this.tile.removeAttribute('disabled', 'disabled');
    this.isDisabled = false;
  }

  /**
   * Disable tile.
   */
  disable() {
    this.isDisabled = true;
    this.tile.setAttribute('disabled', 'disabled');
  }

  /**
   * Put tile in background.
   */
  putInBackground() {
    this.tile.classList.remove('onTop');
  }

  /**
   * Put tile on top.
   */
  putOnTop() {
    this.tile.classList.add('onTop');
  }

  /**
   * Animate moving until moving ended.
   */
  animateMove() {
    // Prevent previous animation from removing the animate-move class
    this.tile.removeEventListener('transitionend', this.handleAnimationMoveEnded);
    this.tile.addEventListener('transitionend', this.handleAnimationMoveEnded);

    // Will be removed by transitionend listener
    this.tile.classList.add('animate-move');
  }

  /**
   * Repaint the svg content.
   */
  repaintSVG() {
    const svg = this.buildSVG({
      id: this.params.id,
      gridPosition: this.params.gridPosition,
      baseWidth: this.params.baseWidth,
      baseHeight: this.params.baseHeight,
      width: this.params.width,
      height: this.params.height,
      stroke: this.params.stroke,
      image: this.backgroundImage,
      type: this.params.type
    });

    this.tile.innerHTML = svg.outerHTML;
  }

  /**
   * Handle image was loaded.
   */
  handleImageLoaded() {
    this.setScale(this.scale);

    this.repaintSVG();

    this.callbacks.onPuzzleTileCreated(this);

    this.tile.addEventListener('touchstart', this.handleTileMoveStarted, true);
    this.tile.addEventListener('mousedown', this.handleTileMoveStarted, true);
  }

  /**
   * Handle tile started moving.
   * @param {Event} event MouseEvent|TouchEvent.
   */
  handleTileMoveStarted(event) {
    if (this.isDisabled) {
      return;
    }

    // Would otherwise delay movement
    this.tile.classList.remove('animate-move');

    event = event || window.event;
    event.preventDefault();

    // Keep track of starting click position in absolute pixels
    // Listeners for moving and dropping
    if (event.type === 'touchstart') {
      this.moveInitialX = this.tile.offsetLeft - event.touches[0].clientX;
      this.moveInitialY = this.tile.offsetTop - event.touches[0].clientY;
      this.tile.addEventListener('touchmove', this.handleTileMoved, false);
      this.tile.addEventListener('touchend', this.handleTileMoveEnded, false);
    }
    else {
      this.moveInitialX = this.tile.offsetLeft - event.clientX;
      this.moveInitialY = this.tile.offsetTop - event.clientY;
      document.addEventListener('mousemove', this.handleTileMoved, true);
      document.addEventListener('mouseup', this.handleTileMoveEnded, true);
    }

    this.callbacks.onPuzzleTileMoveStarted(this);
  }

  /**
   * Handle tile moved.
   * @param {Event} event MouseEvent|TouchEvent.
   */
  handleTileMoved(event) {
    event = event || window.event;
    event.preventDefault();

    // Update position
    if (event.type === 'touchmove') {
      this.setPosition({
        x: this.moveInitialX + event.touches[0].clientX,
        y: this.moveInitialY + event.touches[0].clientY
      });
    }
    else {
      this.setPosition({
        x: this.moveInitialX + event.clientX,
        y: this.moveInitialY + event.clientY
      });
    }

    this.callbacks.onPuzzleTileMoved(this);
  }

  /**
   * Handle tile stopped moving.
   */
  handleTileMoveEnded() {
    // Remove listeners
    this.tile.removeEventListener('touchmove', this.handleTileMoved, false);
    this.tile.removeEventListener('touchend', this.handleTileMoveEnded, false);
    document.removeEventListener('mousemove', this.handleTileMoved, true);
    document.removeEventListener('mouseup', this.handleTileMoveEnded, true);

    this.tile.classList.add('animate-move');

    this.callbacks.onPuzzleTileMoveEnded(this);
  }

  /**
   * Handle moving animation ended.
   */
  handleAnimationMoveEnded() {
    this.tile.style.transitionDuration = '';
    this.tile.classList.remove('animate-move');
    this.tile.removeEventListener('transitionend', this.handleAnimationMoveEnded);
  }
}

// TODO: Could this be made simpler by using percentages?

/** constant {object} SVG path for complete tiles */
JigsawPuzzleTile.PATHS = {
  'top-left': 'M @off, @off l @w, 0 l 0, @gaph a 1 1 0 0 0 0 @knob l 0, @gaph l -@gapw, 0 a 1 1 0 0 0 -@knob 0 l -@gapw, 0 l 0 -@h Z',
  'top-inner': 'M @offknob, @off l @w, 0 l 0, @gaph a 1 1 0 0 0 0 @knob l 0, @gaph l -@gapw, 0 a 1 1 0 0 0 -@knob 0 l -@gapw, 0 l 0, -@gaph a 1 1 0 0 1 0 -@knob l 0, -@gaph Z',
  'top-right': 'M @offknob, @off l @w, 0 l 0, @h l -@gapw, 0 a 1 1 0 0 0 -@knob 0 l -@gapw, 0 l 0, -@gaph a 1 1 0 0 1 0 -@knob l 0, -@gaph Z',
  'inner-left': 'M @off, @offknob l @gapw, 0 a 1 1 0 0 1 @knob 0 l @gapw, 0 l 0, @gaph a 1 1 0 0 0 0 @knob l 0, @gaph l -@gapw, 0 a 1 1 0 0 0 -@knob 0 l -@gapw, 0 l 0, -@h Z',
  'inner-inner': 'M @offknob, @offknob l @gapw, 0 a 1 1 0 0 1 @knob 0 l @gapw, 0 l 0, @gaph a 1 1 0 0 0 0 @knob l 0, @gaph l -@gapw, 0 a 1 1 0 0 0 -@knob 0 l -@gapw, 0 l 0, -@gaph a 1 1 0 0 1 0 -@knob l 0, -@gaph Z',
  'inner-right': 'M @offknob, @offknob l @gapw, 0 a 1 1 0 0 1 @knob 0 l @gapw, 0 l 0, @h l -@gapw, 0 a 1 1 0 0 0 -@knob 0 l -@gapw, 0 l 0, -@gaph a 1 1 0 0 1 0 -@knob l 0, -@gaph Z',
  'bottom-left': 'M @off, @offknob l @gapw, 0 a 1 1 0 0 1 @knob 0 l @gapw, 0 l 0, @gaph a 1 1 0 0 0 0 @knob l 0, @gaph l -@w, 0 l 0, -@h Z',
  'bottom-inner': 'M @offknob, @offknob l @gapw, 0 a 1 1 0 0 1 @knob 0 l @gapw, 0 l 0, @gaph a 1 1 0 0 0 0 @knob l 0, @gaph l -@w, 0 l 0, -@gaph a 1 1 0 0 1 0 -@knob l 0, -@gaph Z',
  'bottom-right': 'M @offknob, @offknob l @gapw, 0 a 1 1 0 0 1 @knob 0 l @gapw, 0 l 0, @h l -@w, 0 l 0, -@gaph a 1 1 0 0 1 0 -@knob l 0, -@gaph Z'
};

/** constant {object} Single SVG path border segments */
JigsawPuzzleTile.PATHS_BORDER = {
  'horizontal-straight': 'l @w, 0',
  'horizontal-up': 'l @gapw, 0 a 1 1 0 0 1 @knob 0 l @gapw, 0',
  'horizontal-down': 'l @gapw, 0 a 1 1 0 0 0 @knob 0 l @gapw, 0',
  'vertical-straight': 'l 0, @h',
  'vertical-left': 'l 0, @gaph a 1 1 0 0 0 0 @knob l 0, @gaph',
  'vertical-right': 'l 0, @gaph a 1 1 0 0 1 0 @knob l 0, @gaph'
};
