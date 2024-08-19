import Util from '@services/util.js';
import RandomizerSegment from '@components/randomizer-segment/randomizer-segment.js';
import MessageDisplay from '@components/message-display.js';
import './randomizer.scss';

/** Segment */
export default class Randomizer {
  /**
   * @class
   * @param {object} params Parameters.
   * @param {string[]} params.solution Solution symbols.
   * @param {object} [params.previousState] Previously stored state.
   * @param {object} callbacks Callbacks.
   * @param {function} callbacks.onChanged Called when randomizer is changed.
   * @param {function} callbacks.onResized Called when randomizer is resized.
   */
  constructor(params = {}, callbacks = {}) {
    this.params = Util.extend({
      previousState: {}
    }, params);

    this.callbacks = Util.extend({
      onChanged: () => {},
      onResized: () => {}
    }, callbacks);

    this.spinningSegments = {};

    this.segments = this.params.segments.map((segment, index) => {
      return new RandomizerSegment(
        {
          dictionary: this.params.dictionary,
          jukebox: this.params.jukebox,
          index: index,
          total: this.params.segments.length,
          alphabet: segment.options,
          position: this.params.previousState?.positions[index] ?? null,
          colorBackground: segment.colorBackground,
          title: segment.title
        },
        {
          onChanged: () => {
            this.handleSegmentChanged();
          },
          onSpinningStateChanged: (id, state) => {
            this.handleSpinningStateChanged(id, state);
          },
          onVisible: () => {
            this.callbacks.onResized();
          }
        }
      );
    });

    this.currentSegmentId = 0;
    this.handleAnimationEnded = this.handleAnimationEnded.bind(this);

    this.buildDOM();
    this.updateConfigurationAria();
  }

  /**
   * Build DOM. Using spin button design pattern for a11y.
   * @see https://www.w3.org/WAI/ARIA/apg/example-index/spinbutton/datepicker-spinbuttons.html
   */
  buildDOM() {
    this.dom = document.createElement('div');
    this.dom.classList.add('h5p-phrase-randomizer-case');

    this.randomizerDOM = document.createElement('div');
    this.randomizerDOM.classList.add('h5p-phrase-randomizer-elements');
    this.dom.appendChild(this.randomizerDOM);

    const groupLabelId = `group-${H5P.createUUID()}`;
    const configurationId = `configuration-${H5P.createUUID()}`;

    this.segmentsDOM = document.createElement('div');
    this.segmentsDOM.classList.add('h5p-phrase-randomizer-segments');
    this.segmentsDOM.setAttribute('role', 'group');
    this.segmentsDOM.setAttribute(
      'aria-labelledby', `${groupLabelId} ${configurationId}`
    );
    this.randomizerDOM.appendChild(this.segmentsDOM);

    this.groupLabel = document.createElement('div');
    this.groupLabel.classList.add('h5p-phrase-randomizer-group-label');
    this.groupLabel.setAttribute('id', groupLabelId);
    this.groupLabel.innerText =
      `${this.params.dictionary.get('a11y.randomizer')}.`;
    this.segmentsDOM.appendChild(this.groupLabel);

    // Will announce current combination for all segments
    this.currentCombination = document.createElement('div');
    this.currentCombination.classList.add(
      'h5p-phrase-randomizer-current-combination-aria');
    this.currentCombination.setAttribute('id', configurationId);
    this.segmentsDOM.appendChild(this.currentCombination);

    this.segments.forEach((segment) => {
      this.segmentsDOM.appendChild(segment.getDOM());
    });

    this.messageDisplay = new MessageDisplay();
    this.messageDisplay.setText(this.params.dictionary.get('l10n.noMessage'));
    if (this.params.mode === 'quiz') {
      this.messageDisplay.show();
    }

    this.randomizerDOM.appendChild(this.messageDisplay.getDOM());
  }

  /**
   * Return the DOM for this class.
   * @returns {HTMLElement} DOM for this class.
   */
  getDOM() {
    return this.dom;
  }

  /**
   * Resize.
   * @param {number|undefined} containerWidth H5P container width.
   */
  resize(containerWidth) {
    this.messageDisplay.setWidth(
      this.segmentsDOM.getBoundingClientRect().width
    );

    if (!containerWidth) {
      return;
    }

    /*
     * This could be done much nicer with CSS container queries, but guess what
     * fruit vendor does not support it well ...
     */
    if (typeof containerWidth === 'number') {
      // Will determine the space that 2 segments need next to each other
      const minWidthHorizontal = this.getMinWidthHorizontal();

      this.segmentsDOM.classList.toggle(
        'vertical-buttons', containerWidth < minWidthHorizontal
      );
    }
  }

  /**
   * Get minimum width required to display case horizontally.
   * @returns {number} Minimum width required to display case horizontally in px.
   */
  getMinWidthHorizontal() {
    if (this.minWidthHorizontal) {
      return this.minWidthHorizontal;
    }

    const segmentMinWidthHorizontal = this.segments[0].getMinWidthHorizontal();

    const gap = parseFloat(
      window.getComputedStyle(this.segmentsDOM).getPropertyValue('gap')
    );

    // Space for two segments next to each other
    const segmentsMinWidthHorizontal = 2 * segmentMinWidthHorizontal + gap;

    const totalPaddingHorizontal =
      parseFloat(
        window.getComputedStyle(this.randomizerDOM).getPropertyValue('padding-left')
      ) +
      parseFloat(
        window.getComputedStyle(this.randomizerDOM).getPropertyValue('padding-right')
      ) +
      parseFloat(
        window.getComputedStyle(this.dom).getPropertyValue('padding-left')
      ) +
      parseFloat(
        window.getComputedStyle(this.dom).getPropertyValue('padding-right')
      );

    this.minWidthHorizontal =
      segmentsMinWidthHorizontal + totalPaddingHorizontal;

    return this.minWidthHorizontal;
  }

  /**
   * Randomize.
   */
  randomize() {
    this.segments.forEach((segment) => {
      segment.spin({ noFocus: true });
    });
  }

  /**
   * Get response.
   * @returns {string} Response.
   */
  getResponse() {
    return this.segments.map((segment) => segment.getResponse());
  }

  /**
   * Get current positions of segments.
   * @returns {number[]} Current positions of segments.
   */
  getPositions() {
    return this.segments.map((segment) => segment.getPosition());
  }

  /**
   * Get current state.
   * @returns {object} Current state.
   */
  getCurrentState() {
    return {
      positions: this.getPositions()
    };
  }

  /**
   * Set text.
   * @param {string} text Text to display.
   */
  setMessage(text) {
    this.messageDisplay.setText(text);
  }

  /**
   * Get text.
   * @returns {string} Text from display.
   */
  getMessage() {
    return this.messageDisplay.getText();
  }

  /**
   * Focus.
   */
  focus() {
    this.segments[this.currentSegmentId].focus();
  }

  /**
   * Enable.
   */
  enable() {
    this.segments.forEach((segment) => {
      segment.enable();
    });
  }

  /**
   * Disable.
   */
  disable() {
    this.segments.forEach((segment) => {
      segment.disable();
    });
  }

  /**
   * Update combination aria.
   */
  updateConfigurationAria() {
    const symbolString = this.segments
      .map((segment) => segment.getResponse())
      .join(' ');

    let text = this.params.dictionary
      .get('a11y.currentTexts')
      .replace(/@texts/g, symbolString);
    if (text.substring(text.length - 1) !== '.') {
      text = `${text}.`;
    }

    this.currentCombination.innerText = text;
  }

  /**
   * Show solutions.
   */
  showSolutions() {
    this.updateConfigurationAria();
  }

  /**
   * Reset.
   */
  reset() {
    this.segments.forEach((segment) => {
      segment.reset();
    });

    this.updateConfigurationAria();
  }

  /**
   * Handle animation wrong.
   */
  showAnimationWrongCombination() {
    if (this.isAnimating) {
      return;
    }

    this.isAnimating = true;
    this.dom.addEventListener('animationend', this.handleAnimationEnded);
    this.dom.classList.add('wrong-combination');
    this.dom.classList.add('animate');
  }

  /**
   * Handle animation correct.
   */
  showAnimationCorrectCombination() {
    if (this.isAnimating) {
      return;
    }

    this.isAnimating = true;
    this.dom.addEventListener('animationend', this.handleAnimationEnded);
    this.dom.classList.add('correct-combination');
    this.dom.classList.add('animate');
  }

  /**
   * Handle animation ended.
   */
  handleAnimationEnded() {
    this.dom.classList.remove('animate');
    this.dom.classList.remove('correct-combination');
    this.dom.classList.remove('wrong-combination');
    this.dom.addEventListener('animationend', this.handleAnimationEnded);
    this.isAnimating = false;
  }

  /**
   * Handle segment changed.
   */
  handleSegmentChanged() {
    this.updateConfigurationAria();
    this.callbacks.onChanged();
  }

  /**
   * Handle segment activation.
   * @param {KeyboardEvent.key} key Key for movement.
   */
  handleSegmentAction(key) {
    if (key === 'ArrowLeft' && this.currentSegmentId > 0) {
      this.currentSegmentId--;
    }
    else if (
      key === 'ArrowRight' && this.currentSegmentId < this.segments.length - 1
    ) {
      this.currentSegmentId++;
    }
    else if (key === 'Home') {
      this.currentSegmentId = 0;
    }
    else if (key === 'End') {
      this.currentSegmentId = this.segments.length - 1;
    }
    else if (key === 'ArrowUp') {
      this.segments[this.currentSegmentId].changeToNextSymbol();
      this.segments[this.currentSegmentId].blur();
      this.segments[this.currentSegmentId].focus();
    }
    else if (key === 'ArrowDown') {
      this.segments[this.currentSegmentId].changeToPreviousSymbol();
      this.segments[this.currentSegmentId].blur();
      this.segments[this.currentSegmentId].focus();
    }
    else {
      return;
    }

    this.segments[this.currentSegmentId].focus();
  }

  /**
   * Handle state change of one of the spinner segments.
   * @param {number} id Index of segment.
   * @param {boolean} state True if spinning started, false if stopped.
   */
  handleSpinningStateChanged(id, state) {
    if (typeof id !== 'number' || typeof state !== 'boolean') {
      return;
    }

    if (state) {
      this.spinningSegments[id] = true;
    }
    else {
      delete this.spinningSegments[id];
    }

    this.callbacks.onSpinningNumberChanged(
      Object.keys(this.spinningSegments).length
    );
  }
}
