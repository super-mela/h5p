// Import required classes
import JigsawPuzzleTile from '@components/h5p-jigsaw-puzzle-tile.js';
import JigsawPuzzleTitlebar from '@components/h5p-jigsaw-puzzle-titlebar.js';
import Util from '@services/util.js';

/** Class representing the content */
export default class JigsawPuzzleContent {
  /**
   * @class
   * @param {object} params Parameters.
   * @param {H5P.Image} params.puzzleImageInstance Background image.
   * @param {string} params.uuid UUID for multiple instances in one iframe.
   * @param {object} params.size Number of tiles (width x height).
   * @param {number} params.size.width Number of tiles horizontally.
   * @param {number} params.size.height Number of tiles vertically.
   * @param {string} params.sortingSpacePosition Either `row` or `column`.
   * @param {number} params.sortingSpace Percentage of white space for sorting.
   * @param {number} params.sortingSpaceColumn Percentage of white space for sorting.
   * @param {object} params.previousState Previous state.
   * @param {number} params.stroke Stroke width.
   * @param {object} callbacks Callbacks.
   * @param {function} callbacks.onResize Callback for triggering content resize.
   * @param {function} callbacks.onCompleted Callback for informing about puzzle completed.
   * @param {function} callbacks.onButtonFullscreenClicked Callback for fullscreen button clicked.
   */
  constructor(params = {}, callbacks = {}) {
    this.params = params;

    // Set missing callbacks
    this.callbacks = Util.extend({
      onResize: () => {},
      onCompleted: () => {},
      onButtonFullscreenClicked: () => {},
      onInteracted: () => {}
    }, callbacks);

    // Audios
    this.audios = [];

    // Puzzle tiles, instance + position
    this.tiles = [];

    this.tilesCreated = 0;

    // Original image size
    this.originalSize = null;

    // Maximum size (in fullscreen mode)
    this.maxSize = {
      heigth: null,
      width: null
    };

    // Border size, fallback fixed 2px for Firefox that's too slow to paint :-/
    this.borderWidth = 2;

    // Answer given
    this.isAnswerGiven = false;

    // H5P.Question DOM elements that need to be retrieved
    this.h5pQuestionContent = null;
    this.h5pQuestionButtons = null;

    // Main content
    this.content = document.createElement('div');
    this.content.classList.add('h5p-jigsaw-puzzle-content');

    // If no image is set, only show message
    if (!this.params?.puzzleImageInstance?.source) {
      const message = document.createElement('div');
      message.classList.add('h5p-jigsaw-puzzle-message');
      message.innerText = this.params.l10n.messageNoImage;
      this.content.appendChild(message);
      return;
    }

    // Titlebar
    this.addTitlebar();

    // Puzzle Area
    this.addPuzzleArea();

    // Image to be used for tiles and background
    this.image = document.createElement('img');
    this.image.addEventListener('load', () => {
      this.handleImageLoaded(this.params.imageFormat);
    });
    this.imageCrossOrigin = typeof H5P.getCrossOrigin === 'function' ?
      H5P.getCrossOrigin(params.puzzleImageInstance.source) :
      'Anonymous';
    this.image.src = params.puzzleImageInstance.source;

    if (typeof H5PEditor === 'undefined') {
      // Add audios
      this.addAudios();
    }
  }

  /**
   * Return the DOM for this class.
   * @returns {HTMLElement} DOM for this class.
   */
  getDOM() {
    return this.content;
  }

  /**
   * Add titlebar.
   */
  addTitlebar() {
    // Titlebar
    this.titlebar = new JigsawPuzzleTitlebar(
      {
        a11y: {
          buttonFullscreenEnter: this.params.a11y.buttonFullscreenEnter,
          buttonFullscreenExit: this.params.a11y.buttonFullscreenExit,
          buttonAudioMute: this.params.a11y.buttonAudioMute,
          buttonAudioUnmute: this.params.a11y.buttonAudioUnmute,
          disabled: this.params.a11y.disabled
        }
      },
      {
        onButtonAudioClicked: ((event) => {
          this.handleButtonAudioClicked(event);
        }),
        onButtonFullscreenClicked: ((event) => {
          this.handleButtonFullscreenClicked(event);
        })
      }
    );

    this.content.appendChild(this.titlebar.getDOM());
  }

  /**
   * Add puzzleArea.
   */
  addPuzzleArea() {
    // Puzzle area
    this.puzzleArea = document.createElement('div');
    this.puzzleArea.classList.add('h5p-jigsaw-puzzle-puzzle-area');
    if (this.params.sortingSpacePosition === 'column') {
      this.puzzleArea.classList.add('h5p-jigsaw-puzzle-puzzle-direction-column');
    }

    this.content.appendChild(this.puzzleArea);

    // Area where puzzle tiles need to be put
    this.puzzleDropzone = document.createElement('div');
    this.puzzleDropzone.classList.add('h5p-jigsaw-puzzle-tile-container');
    this.puzzleArea.appendChild(this.puzzleDropzone);
    window.requestAnimationFrame(() => {
      const styles = window.getComputedStyle(this.puzzleDropzone);
      this.borderWidth = parseFloat(styles.getPropertyValue('border-width')) || this.borderWidth;
    });

    // Optional sorting area for better overview
    this.sortingArea = document.createElement('div');
    this.sortingArea.classList.add('h5p-jigsaw-puzzle-sorting-area');

    if (this.params.sortingSpacePosition === 'row') {
      this.sortingArea.style.width = `${(100 * this.params.sortingSpace) / (100 - this.params.sortingSpace)}%`;
    }

    this.puzzleArea.appendChild(this.sortingArea);
  }

  /**
   * Create puzzle tile.
   * @param {object} params Parameters.
   * @param {number} params.x Tile grid position horizontally.
   * @param {number} params.y Tile grid position vertically.
   * @param {string} [params.format] Image format.
   * @returns {JigsawPuzzleTile} Puzzle tile.
   */
  createPuzzleTile(params) {
    const baseWidth = this.image.naturalWidth / this.params.size.width;
    const baseHeight = this.image.naturalHeight / this.params.size.height;
    const knobSize = Math.min(baseWidth, baseHeight) / 2;
    const tileWidth = baseWidth + ((params.x > 0) ? knobSize / 2 : 0);
    const tileHeight = baseHeight + ((params.y > 0) ? knobSize / 2 : 0);

    // Border types
    const borders = {
      top: {
        orientation: (params.y === 0) ? 'straight' : 'up',
        opacity: 1
      },
      right: {
        orientation: (params.x + 1 === this.params.size.width) ? 'straight' : 'left',
        opacity: 1
      },
      bottom: {
        orientation: (params.y + 1 === this.params.size.height) ? 'straight' : 'up',
        opacity: 1
      },
      left: {
        orientation: (params.x === 0) ? 'straight' : 'left',
        opacity: 1
      }
    };

    // Alignment
    let verticalAlignment = 'inner';
    if (params.y === 0) {
      verticalAlignment = 'top';
    }
    else if (params.y + 1 === this.params.size.height) {
      verticalAlignment = 'bottom';
    }
    let horizontalAlignment = 'inner';
    if (params.x === 0) {
      horizontalAlignment = 'left';
    }
    else if (params.x + 1 === this.params.size.width) {
      horizontalAlignment = 'right';
    }
    const type = `${verticalAlignment}-${horizontalAlignment}`;

    return new JigsawPuzzleTile(
      {
        id: params.y * this.params.size.width + params.x,
        baseWidth: baseWidth,
        baseHeight: baseHeight,
        width: tileWidth,
        height: tileHeight,
        gridPosition: { x: params.x, y: params.y },
        knobSize: knobSize,
        imageSource: this.image.src,
        imageCrossOrigin: this.imageCrossOrigin,
        type: type,
        stroke: this.params.stroke,
        borderColor: this.params.tileBorderColor,
        borders: borders,
        uuid: this.params.uuid,
        container: this.puzzleArea,
        size: this.params.size
      },
      {
        onPuzzleTileCreated: ((tile) => {
          this.handlePuzzleTileCreated(tile);
        }),
        onPuzzleTileMoveStarted: ((tile) => {
          this.handlePuzzleTileMoveStarted(tile);
        }),
        onPuzzleTileMoved: ((tile) => {
          this.handlePuzzleTileMoved(tile);
        }),
        onPuzzleTileMoveEnded: ((tile) => {
          this.handlePuzzleTileMoveEnded(tile);
        })
      }
    );
  }

  /**
   * Set tile position.
   * @param {object} params Parameters.
   * @param {JigsawPuzzleTile} params.tile Puzzle tile.
   * @param {number} params.x Absolute x position.
   * @param {number} params.y Absolute y position.
   * @param {boolean} [params.animate] If true, animate moving.
   */
  setTilePosition(params = {}) {
    if (!params.tile) {
      return;
    }

    if (typeof params.x !== 'number' || params.x < 0) {
      return;
    }

    if (typeof params.y !== 'number' || params.y < 0) {
      return;
    }

    params.animate = params.animate ?? false;

    if (params.animate) {
      params.tile.animateMove({
        duration: params.duration
      });
    }

    // Required for resizing, relative position of tile in puzzle dropzone
    this.tiles[params.tile.getId()].position = {
      x: (params.x - this.puzzleDropzone.offsetLeft) / this.puzzleDropzone.offsetWidth,
      y: (params.y - this.puzzleDropzone.offsetTop) / this.puzzleDropzone.offsetHeight
    };

    // Absolute tile position on screen
    params.tile.setPosition({
      x: params.x,
      y: params.y
    });
  }

  /**
   * Get asset path.
   * @param {string} truePath HTTP path.
   * @returns {string} Path that H5P can use.
   */
  getAssetPath(truePath) {
    if (truePath.indexOf('sites/default/files/h5p/development') !== -1) {
      return truePath; // On Drupal dev system, path is okay
    }

    /*
     * H5P cannot use the regular path on platforms that use cached assets like
     * WordPress. We therefore need to build the correct path to the assets
     * in the library directory ourselves.
     */

    let uberName = null;

    // Main content
    const library = H5PIntegration?.contents[`cid-${this.params.contentId}`]?.library;
    if (library?.indexOf('H5P.JigsawPuzzle ') !== -1) {
      uberName = library.replace(' ', '-');
    }

    // Subcontent
    if (!uberName) {
      const jsonContent = H5PIntegration?.contents[`cid-${this.params.contentId}`]?.jsonContent;
      if (!jsonContent) {
        return null;
      }
      const regexp = RegExp('"library":"(H5P.JigsawPuzzle [0-9]+.[0-9]+)"');
      const found = jsonContent.match(regexp);
      if (found) {
        uberName = found[1].replace(' ', '-');
      }
    }

    if (!uberName) {
      return null; // Some problem
    }

    // Get asset path
    const h5pBasePath = H5P.getLibraryPath(uberName);
    const assetPathEnd = truePath.substr(truePath.indexOf('/assets'));

    return `${h5pBasePath}/dist${assetPathEnd}`;
  }

  /**
   * Add audios.
   */
  addAudios() {
    if (!this.params.sound || this.audiosDefined || !H5P.SoundJS.initializeDefaultPlugins()) {
      return;
    }

    H5P.SoundJS.alternateExtensions = ['mp3'];

    // Add custom overrides of default included audios
    [
      'puzzleStarted', 'puzzleTilePickUp', 'puzzleTileCorrect',
      'puzzleTileIncorrect', 'puzzleCompleted'
    ].forEach((id) => {
      if (this.params.sound[id] && this.params.sound[id].length > 0 && this.params.sound[id][0].path) {
        H5P.SoundJS.registerSound(H5P.getPath(this.params.sound[id][0].path, this.params.contentId), id);
        this.hasAudios = true;
      }
    });

    this.audiosDefined = true;
  }

  /**
   * Start audio.
   * @param {string} id Id.
   */
  startAudio(id) {
    if (!this.isAudioEnabled) {
      return;
    }

    H5P.SoundJS.play(id, H5P.SoundJS.INTERRUPT_NONE, 0);
  }

  /**
   * Stop audios
   */
  stopAudios() {
    H5P.SoundJS.stop();
  }

  /**
   * Set H5P.Question elements.
   * H5P.Question doesn't give access to these and there could be multiple on page.
   * @param {HTMLElement} container H5P container element.
   */
  setH5PQuestionElements(container) {
    this.h5pQuestionContent = container.querySelector('.h5p-question-content');
    this.h5pQuestionButtons = container.querySelector('.h5p-question-buttons');
  }

  /**
   * Enable fullscreen button in titlebar.
   */
  enableFullscreenButton() {
    if (!this.titlebar) {
      return;
    }

    this.titlebar.enableFullscreenButton();
    this.titlebar.showFullscreenButton();
  }

  /**
   * Set dimensions to fullscreen.
   * @param {boolean} enterFullScreen If true, enter fullscreen, else exit.
   */
  toggleFullscreen(enterFullScreen = false) {
    this.titlebar.toggleFullscreenButton(enterFullScreen);

    this.setFixedHeight(enterFullScreen);
  }

  /**
   * Set dimensions to fullscreen.
   * @param {boolean} enterFullScreen If true, enter fullscreen, else exit.
   */
  setFixedHeight(enterFullScreen = false) {
    if (enterFullScreen) {
      // Compute maximum available height and width
      const styleContent = window.getComputedStyle(this.h5pQuestionContent);
      const marginContentVertical = parseFloat(styleContent.getPropertyValue('margin-bottom'));
      const marginContentHorizontal = parseFloat(styleContent.getPropertyValue('margin-left')) + parseFloat(styleContent.getPropertyValue('margin-right'));

      const styleButtons = window.getComputedStyle(this.h5pQuestionButtons);
      const marginButtons = parseFloat(styleButtons.getPropertyValue('margin-bottom')) + parseFloat(styleButtons.getPropertyValue('margin-top'));

      this.maxSize = {
        height: window.innerHeight - 2 * this.params.stroke - this.puzzleArea.offsetTop - marginContentVertical - marginButtons - this.h5pQuestionButtons.offsetHeight,
        width: (window.innerWidth - 2 * this.params.stroke - marginContentHorizontal) * (100 - this.params.sortingSpace) / 100
      };
    }
    else {
      this.maxSize = {
        heigth: null,
        width: null
      };
    }

    this.handleResized();
  }

  /**
   * Reset.
   */
  reset() {
    setTimeout(() => {
      this.tiles.forEach((tile) => {
        this.showTileBorders(tile.instance);
        tile.instance.enable();
        tile.instance.setDone(false);
      });

      this.randomizeTiles({
        useFullArea: this.params.useFullArea,
        layout: this.params.randomizerPattern,
        keepDone: false
      });

      this.isAnswerGiven = false;
      this.tilesCreated = 0;

      this.startAudio('puzzleStarted');
    }, 0);
  }

  /**
   * Randomize all tiles.
   * @param {object} params Parameters.
   * @param {boolean} [params.useFullArea] If true, use full area to spread tiles.
   * @param {string} [params.layout] Spread layout, random by default.
   * @param {boolean} [params.keepDone] If not true, will shuffle all tiles.
   */
  randomizeTiles(params = {}) {
    // All tile ids in random order
    let tilesToRandomize = Util.shuffleArray(this.tiles);

    // Randomize position in DOM
    for (let i = tilesToRandomize.length; i >= 0; i--) {
      this.puzzleArea.appendChild(tilesToRandomize[Math.random() * i | 0].instance.getDOM());
    }

    if (params.keepDone) {
      // Don't shuffle tiles that had already been placed correctly
      tilesToRandomize = tilesToRandomize.map((tile) => (tile.instance.isDone) ? null : tile);
    }

    // Determine maximum tile size
    const maxTileSize = this.tiles.reduce((max, current) => {
      return {
        width: Math.max(max.width, current.instance.getSize().width),
        height: Math.max(max.height, current.instance.getSize().height)
      };
    }, { width: 0, height: 0 });

    // Check what arey should be used to arrange tiles on
    const useFullArea = params.useFullArea ||
      this.sortingArea.offsetWidth < maxTileSize.width ||
      this.sortingArea.offsetHeight < maxTileSize.height;

    // Compute offset
    const offset = {
      left: this.puzzleArea.offsetLeft,
      top: this.puzzleArea.offsetTop
    };

    if (!useFullArea) {
      offset.left += (this.params.sortingSpacePosition === 'column') ?
        0 :
        this.puzzleDropzone.offsetWidth;

      offset.top += (this.params.sortingSpacePosition === 'column') ?
        this.puzzleDropzone.offsetHeight :
        0;
    }

    // Compute maximum size of area
    const maxPos = {
      x: this.sortingArea.offsetWidth - maxTileSize.width,
      y: this.sortingArea.offsetHeight - maxTileSize.height
    };

    if (useFullArea) {
      maxPos.x += (this.params.sortingSpacePosition === 'column') ?
        0 :
        this.puzzleDropzone.offsetWidth;

      maxPos.y += (this.params.sortingSpacePosition === 'column') ?
        this.puzzleDropzone.offsetHeight :
        0;
    }

    tilesToRandomize.forEach((tile) => {
      if (tile === null) {
        return; // Tile at this index is done
      }

      const currentTile = tile.instance;

      let x = 0;
      let y = 0;

      // Random position
      x = offset.left + Math.random() * maxPos.x;
      y = offset.top + Math.random() * maxPos.y;

      this.setTilePosition({
        tile: currentTile,
        x: x,
        y: y,
        animate: true
      });
    });
  }

  /**
   * Move a tile to its target position.
   * @param {JigsawPuzzleTile} tileInstance Tile instance.
   * @param {object} [params] Parameters.
   * @param {boolean} [params.animate] If true, animate moving.
   */
  moveTileToTarget(tileInstance, params = {}) {
    params.animate = params.animate ?? false;

    const currentSize = tileInstance.getSize();
    const currentGridPosition = tileInstance.getGridPosition();

    const targetPosition = {
      x: this.puzzleDropzone.offsetLeft + currentGridPosition.x * currentSize.width - Math.sign(currentGridPosition.x) * currentSize.knob / 2 - currentGridPosition.x * currentSize.knob / 2,
      y: this.puzzleDropzone.offsetTop + currentGridPosition.y * currentSize.height - Math.sign(currentGridPosition.y) * currentSize.knob / 2 - currentGridPosition.y * currentSize.knob / 2
    };

    this.setTilePosition({
      tile: tileInstance,
      x: targetPosition.x,
      y: targetPosition.y,
      animate: params.animate
    });
  }

  /**
   * Move all puzzle tiles to targets and finalize them.
   * @param {JigsawPuzzleTile[]} [tiles] Tiles to move to target.
   * @param {object} [params] Parameters.
   * @param {boolean} [params.animate] If true, animate.
   * @param {boolean} [params.finalize] If true, will finalize tiles.
   */
  moveTilesToTarget(tiles, params = {}) {
    tiles = tiles ?
      tiles.map((tile) => (tile.instance ? tile : { instance: tile })) :
      this.tiles;

    params.animate = params.animate ?? true;
    params.finalize = params.finalize ?? true;

    tiles.forEach((tile) => {
      this.moveTileToTarget(tile.instance, { animate: params.animate });

      if (params.finalize) {
        this.finalizeTile(tile.instance);
      }
    });
  }

  /**
   * Finalize tile.
   * @param {JigsawPuzzleTile} tile Tile to be finalized.
   */
  finalizeTile(tile) {
    tile.disable();
    tile.putInBackground();
    this.hideTileBorders(tile);
    tile.setDone(true);
  }

  /**
   * Update background Frame.
   * @param {number} index Index of tile.
   * @param {JigsawPuzzleTile} tile Reference tile.
   */
  updatePuzzleOutlines(index, tile) {
    const currentTileDOM = tile.getDOM();
    const currentPuzzleOutline = this.puzzleOutlines[index];

    currentPuzzleOutline.style.width = currentTileDOM.style.width;
    currentPuzzleOutline.style.height = currentTileDOM.style.height;

    const currentSize = tile.getSize();
    const currentGridPosition = tile.getGridPosition();

    const targetPosition = {
      x: this.puzzleDropzone.offsetLeft + currentGridPosition.x * currentSize.width - Math.sign(currentGridPosition.x) * currentSize.knob / 2 - currentGridPosition.x * currentSize.knob / 2,
      y: this.puzzleDropzone.offsetTop + currentGridPosition.y * currentSize.height - Math.sign(currentGridPosition.y) * currentSize.knob / 2 - currentGridPosition.y * currentSize.knob / 2
    };

    this.puzzleOutlines[index].style.left = `${targetPosition.x}px`;
    this.puzzleOutlines[index].style.top = `${targetPosition.y}px`;

    if (!currentPuzzleOutline.isConnected) {
      this.puzzleDropzone.appendChild(currentPuzzleOutline);

      // Tile is in top row
      if (tile.getId() < this.params.size.width) {
        const top = currentPuzzleOutline.querySelector('.border-top');
        if (top) {
          top.setAttribute('stroke-opacity', '0');
        }
      }

      // Tile is in outer right column
      if (tile.getId() % this.params.size.width === this.params.size.width - 1) {
        const right = currentPuzzleOutline.querySelector('.border-right');
        if (right) {
          right.setAttribute('stroke-opacity', '0');
        }
      }

      // Tile is in bottom row
      if (this.params.size.width * (this.params.size.height - 1) - 1 < tile.getId()) {
        const bottom = currentPuzzleOutline.querySelector('.border-bottom');
        if (bottom) {
          bottom.setAttribute('stroke-opacity', '0');
        }
      }

      // Tile is in outer left column
      if (tile.getId() % this.params.size.width === 0) {
        const left = currentPuzzleOutline.querySelector('.border-left');
        if (left) {
          left.setAttribute('stroke-opacity', '0');
        }
      }
    }
  }

  /**
   * Show all tile borders
   * @param {JigsawPuzzleTile} tile Tile to show borders of.
   */
  showTileBorders(tile) {
    tile.setBorders({ top: true, right: true, bottom: true, left: true });
  }

  /**
   * Hide neighboring tile borders
   * @param {JigsawPuzzleTile} tile Tile whose neighbors will be checked.
   */
  hideTileBorders(tile) {
    // top
    if (tile.getId() < this.params.size.width) {
      // Tile is in top row
      tile.setBorders({ top: false });
    }
    else {
      const neighbor = this.tiles[tile.getId() - this.params.size.width].instance;
      if (neighbor.isDisabled) {
        tile.setBorders({ top: false });
        neighbor.setBorders({ bottom: false });
      }
    }

    // right
    if (tile.getId() % this.params.size.width === this.params.size.width - 1) {
      // Tile is in outer right column
      tile.setBorders({ right: false });
    }
    else {
      const neighbor = this.tiles[tile.getId() + 1].instance;
      if (neighbor.isDisabled) {
        tile.setBorders({ right: false });
        neighbor.setBorders({ left: false });
      }
    }

    // bottom
    if (this.params.size.width * (this.params.size.height - 1) - 1 < tile.getId()) {
      // Tile is in bottom row
      tile.setBorders({ bottom: false });
    }
    else {
      const neighbor = this.tiles[tile.getId() + this.params.size.width].instance;
      if (neighbor.isDisabled) {
        tile.setBorders({ bottom: false });
        neighbor.setBorders({ top: false });
      }
    }

    // left
    if (tile.getId() % this.params.size.width === 0) {
      // Tile is in outer left column
      tile.setBorders({ left: false });
    }
    else {
      const neighbor = this.tiles[tile.getId() - 1].instance;
      if (neighbor.isDisabled) {
        tile.setBorders({ left: false });
        neighbor.setBorders({ right: false });
      }
    }
  }

  /**
   * Check if result has been submitted or input has been given.
   * @returns {boolean} True, if answer was given.
   */
  getAnswerGiven() {
    return this.isAnswerGiven;
  }

  /**
   * Get latest score.
   * @returns {number} latest score.
   */
  getScore() {
    return this.tiles.reduce((sum, tile) => sum + (tile.instance.isDone ? 1 : 0), 0);
  }

  /**
   * Get current state
   * @returns {object} Current state.
   */
  getCurrentState() {
    return {
      audioButtonState: this.titlebar.getAudioButtonState(),
      tiles: this.tiles.map((tile) => tile.instance.isDone)
    };
  }

  /**
   * Handle puzzle image loaded and create puzzle tiles from it.
   * @param {string} format Desired format.
   */
  handleImageLoaded(format) {
    this.originalSize = {
      width: this.image.naturalWidth,
      height: this.image.naturalHeight
    };

    for (let y = 0; y < this.params.size.height; y++) {
      for (let x = 0; x < this.params.size.width; x++) {
        this.tiles.push({
          instance: this.createPuzzleTile({
            x: x,
            y: y,
            format: format
          }),
          position: {
            x: 0,
            y: 0
          }
        });
      }
    }

    if (this.params.showBackground) {
      const backgroundImage = document.createElement('img');
      backgroundImage.classList.add('h5p-jigsaw-puzzle-background-image');
      backgroundImage.setAttribute('src', this.image.src);
      this.puzzleDropzone.appendChild(backgroundImage);
    }

    // Use audio
    if (this.hasAudios) {
      this.titlebar.showAudioButton();
      this.titlebar.enableAudioButton();
      this.isAudioEnabled = this.params?.previousState?.audioButtonState || true;
      this.titlebar.toggleAudioButton(this.isAudioEnabled);
    }

    // Resize now that the content is created
    this.handleResized();
  }

  /**
   * Handle resize. Set size dpending on fullscreen and scale
   */
  handleResized() {
    if (this.originalSize) {
      const regularScale = (this.puzzleDropzone.offsetWidth - this.borderWidth) / this.originalSize.width;
      const regularSize = {
        height: regularScale * this.originalSize.height - this.borderWidth,
        width: regularScale * this.originalSize.width - this.borderWidth
      };

      /*
       * maxHeight/maxWidth are set in fullscreen mode
       * Checking for this.puzzleDropzone.style.width because it is set when the
       * dropzone has already been scaled in fullscreen mode - may toggle back
       * to regular mode otherwise due to size detection delay
       */
      if (this.maxSize.height && (this.puzzleDropzone.style.width || regularSize.height > this.maxSize.height || regularSize.width > this.maxSize.width)) {
        if ((this.maxSize.height - this.borderWidth) / this.originalSize.height < (this.maxSize.width - this.borderWidth) / this.originalSize.width) {
          this.scale = (this.maxSize.height - this.borderWidth) / this.originalSize.height;
          this.puzzleDropzone.style.height = `${this.maxSize.height - 2 * this.borderWidth}px`;
          this.puzzleDropzone.style.width = `${this.scale * this.originalSize.width - this.borderWidth}px`;
        }
        else {
          this.scale = (this.maxSize.width - this.borderWidth) / this.originalSize.width;
          this.puzzleDropzone.style.height = `${this.scale * this.originalSize.height - this.borderWidth}px`;
          this.puzzleDropzone.style.width = `${this.maxSize.width - 2 * this.borderWidth}px`;
        }
        this.puzzleDropzone.style.flexShrink = 0;
      }
      else {
        this.scale = regularScale;
        this.puzzleDropzone.style.height = `${regularSize.height}px`;
        this.puzzleDropzone.style.width = '';
        this.puzzleDropzone.style.flexShrink = '';
      }

      // Dynamically set sorting space height if displayed below puzzle
      if (this.params.sortingSpacePosition === 'column') {
        const sortingSpaceHeight = this.params.sortingSpaceColumn / 100 *
          parseFloat(this.puzzleDropzone.style.height);

        this.sortingArea.style.height = `${sortingSpaceHeight}px`;
      }

      this.tiles.forEach((tile, index) => {
        tile.instance.setScale(this.scale);

        // Recompute position with offset
        tile.instance.setPosition({
          x: tile.position.x * this.puzzleDropzone.offsetWidth + this.puzzleDropzone.offsetLeft,
          y: tile.position.y * this.puzzleDropzone.offsetHeight + this.puzzleDropzone.offsetTop
        });

        if (this.puzzleOutlines) {
          this.updatePuzzleOutlines(index, tile.instance);
        }
      });
    }

    this.callbacks.onResize();
  }

  /**
   * Handle puzzle tile being about to be moved.
   * @param {JigsawPuzzleTile} tile Puzzle tile.
   */
  handlePuzzleTileMoveStarted(tile) {

    // Ghost all enabled tiles to allow comfortable positioning
    this.tiles.forEach((tile) => {
      tile.instance.putInBackground();
      if (!tile.instance.isDisabled) {
        tile.instance.ghost();
      }
    });

    // Put dragged tile on top and unghost
    tile.putOnTop();
    tile.unghost();

    this.startAudio('puzzleTilePickUp');
  }

  /**
   * Handle puzzle tile being moved.
   */
  handlePuzzleTileMoved() {
    // Could be useful for showing hints
  }

  /**
   * Handle puzzle tile being dropped.
   * @param {JigsawPuzzleTile} tile Puzzle tile.
   */
  handlePuzzleTileMoveEnded(tile) {
    // Unghost all tiles to show everything
    this.tiles.forEach((tile) => {
      tile.instance.unghost();
    });

    // Get current tile geometry
    const currentPosition = tile.getPosition();
    const currentSize = tile.getSize();
    const currentGridPosition = tile.getGridPosition();

    // Update position
    this.tiles[tile.getId()].position = currentPosition;

    const targetPosition = {
      x: this.puzzleDropzone.offsetLeft + currentGridPosition.x * currentSize.width - Math.sign(currentGridPosition.x) * currentSize.knob / 2 - currentGridPosition.x * currentSize.knob / 2,
      y: this.puzzleDropzone.offsetTop + currentGridPosition.y * currentSize.height - Math.sign(currentGridPosition.y) * currentSize.knob / 2 - currentGridPosition.y * currentSize.knob / 2
    };

    // If tile if dropped close enough to target, snap it there
    const slack = Math.min(currentSize.width, currentSize.height) * JigsawPuzzleContent.SLACK_FACTOR;
    if (
      (Math.abs(currentPosition.x - targetPosition.x) < slack) &&
      (Math.abs(currentPosition.y - targetPosition.y) < slack)
    ) {
      this.setTilePosition({
        tile: tile,
        x: targetPosition.x,
        y: targetPosition.y
      });

      // Final position set
      this.finalizeTile(tile);

      this.startAudio('puzzleTileCorrect');
    }
    else {
      // Make DOM position permanent
      this.setTilePosition({
        tile: tile,
        x: currentPosition.x,
        y: currentPosition.y
      });

      tile.setDone(false);
      this.startAudio('puzzleTileIncorrect');
    }

    // For question type contract
    this.isAnswerGiven = true;
    this.callbacks.onInteracted();

    // Handle completed
    if (this.tiles.every((tile) => tile.instance.isDone)) {
      this.handlePuzzleCompleted({ xAPI: true });
    }
  }

  /**
   * Handle audio button clicked.
   * @param {Event} event Event.
   */
  handleButtonAudioClicked(event) {
    const classList = event?.currentTarget.classList || [];
    this.isAudioEnabled = [...classList].indexOf('h5p-jigsaw-puzzle-button-active') !== -1;

    if (!this.isAudioEnabled) {
      this.stopAudios();
    }
  }

  /**
   * Handle fullscreen button clicked.
   */
  handleButtonFullscreenClicked() {
    this.callbacks.onButtonFullscreenClicked();
  }

  /**
   * Handle puzzle completed.
   * @param {object} params Parameters.
   */
  handlePuzzleCompleted(params) {
    this.startAudio('puzzleCompleted');

    this.callbacks.onCompleted(params);
  }

  /**
   * Handle puzzle tile was created.
   * @param {JigsawPuzzleTile} tile Puzzle tile.
   */
  handlePuzzleTileCreated(tile) {
    // Position tile randomly depending on space available
    if (this.params.previousState.tiles && this.params.previousState.tiles[tile.getId()] === true) {
      this.moveTilesToTarget([tile], { animate: false, finalize: true });
    }

    this.puzzleArea.appendChild(tile.getDOM());
    this.tilesCreated++;

    // All tiles created?
    if (this.tilesCreated === this.params.size.width * this.params.size.height) {
      if (this.params.showPuzzleOutlines) {
        // Compute background frame color from dropzone border color
        let rgba = window
          .getComputedStyle(this.puzzleDropzone)
          .getPropertyValue('border-color')
          .replace(/[^.^\d,]/g, '')
          .split(',')
          .map((value) => parseFloat(value, 10));

        if (rgba.length === 4) {
          rgba[3] /= 2;
        }
        else {
          rgba = [0, 0, 0, 0.05];
        }
        rgba = `rgba(${rgba.join(',')})`;

        setTimeout(() => {
          // Create puzzle outlines from actual puzzle tiles
          this.puzzleOutlines = this.tiles
            .map((tile) => {
              const clone = tile.instance.getDOM().cloneNode(true);
              clone.setAttribute('disabled', 'disabled');

              // Remove background
              const background = clone.querySelector('svg path');
              if (background) {
                background.parentNode.removeChild(background);
              }

              // Change border colors
              const borders = clone.querySelectorAll('svg path');
              borders.forEach((border) => {
                border.setAttribute('stroke', rgba);
              });

              return clone;
            });
        }, 0); // Make sure original tiles have been rendered
      }

      setTimeout(() => {
        this.handleResized();
        this.handleAllTilesCreated();
      }, 0);
    }
  }

  /**
   * Handle all puzzle tiles created.
   *
   * Could be preloaded e.g. in Course Presentation where width is still 0.
   * @param {number} [interval] Interval.
   * @param {number} [retries] Number of retries.
   */
  handleAllTilesCreated(interval = 500, retries = Infinity) {
    if (this.puzzleArea?.offsetWidth > 0) {
      this.handleDOMVisible();
    }
    else if (retries === 0) {
      this.tiles.forEach((tile) => {
        tile.instance.show();
      });

      return; // Give up
    }
    else {
      this.tiles.forEach((tile) => {
        tile.instance.hide();
      });

      clearTimeout(this.timeoutWaitForPuzzleArea);
      this.timeoutWaitForPuzzleArea = setTimeout(() => {
        this.handleAllTilesCreated(interval, retries - 1);
      }, interval);
    }
  }

  /**
   * Handle DOM visible.
   */
  handleDOMVisible() {
    this.tiles.forEach((tile) => {
      tile.instance.show();
    });

    this.moveTilesToTarget(this.tiles, { animate: false, finalize: false });
    setTimeout(() => {
      this.randomizeTiles({
        useFullArea: this.params.useFullArea,
        keepDone: Object.keys(this.params.previousState).length > 0
      });

      this.startAudio('puzzleStarted');

      window.requestAnimationFrame(() => {
        this.isPuzzleSetUp = true;

        setTimeout(() => {
          this.handleResized();
        }, 250); // For large images
      });
    }, 500);
  }

  /**
   * Update titlebar visibility.
   */
  updateTitlebarVisibility() {
    if (!this.titlebar.hasVisibleButtons()) {
      this.titlebar.hide();
    }
  }
}

/** @constant {number} Slack factor for snapping as percentage of tile size */
JigsawPuzzleContent.SLACK_FACTOR = 0.25;
