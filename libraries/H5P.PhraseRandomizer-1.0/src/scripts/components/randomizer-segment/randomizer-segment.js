import Util from '@services/util.js';
import Button from './button.js';
import Wheel from './wheel.js';
import './randomizer-segment.scss';

/** Segment */
export default class RandomizerSegment {
  /**
   * @class
   * @param {object} params Parameters.
   * @param {number} params.index This segment's index.
   * @param {number} params.total Total number of segments.
   * @param {string[]} params.alphabet This segment's alphabet.
   * @param {number|null} params.position Start position (from previous state).
   * @param {object} callbacks Callbacks.
   * @param {function} callbacks.onChanged Called when position changed.
   * @param {function} callbacks.onSpinningStateChanged Called when spinning is started/stopped.
   * @param {function} callbacks.onVisible Called when segment got visible.
   */
  constructor(params = {}, callbacks = {}) {
    this.params = Util.extend({}, params);
    this.callbacks = Util.extend({
      onChanged: () => {},
      onSpinningStateChanged: () => {},
      onVisible: () => {}
    }, callbacks);

    this.position = this.params.position ??
      Math.floor(Math.random() * this.params.alphabet.length);

    const currentText = this.params.alphabet[this.position];

    this.dom = document.createElement('div');
    this.dom.classList.add('h5p-phrase-randomizer-segment');

    if (this.params.title) {
      const title = document.createElement('div');
      title.classList.add('h5p-phrase-randomizer-segment-title');
      title.innerHTML = this.params.title;
      this.dom.append(title);
    }

    const main = document.createElement('div');
    main.classList.add('h5p-phrase-randomizer-segment-main');
    this.dom.append(main);

    this.wheel = new Wheel(
      {
        dictionary: this.params.dictionary,
        jukebox: this.params.jukebox,
        alphabet: this.params.alphabet,
        position: this.position,
        index: this.params.index,
        total: this.params.total,
        colorBackground: this.params.colorBackground
      },
      {
        onChanged: (key) => {
          this.handleWheelChanged(key);
        },
        onFocusChanged: (focusOn) => {
          this.dom.classList.toggle('focus', focusOn);
        }
      }
    );
    main.appendChild(this.wheel.getDOM());

    this.buttons = document.createElement('div');
    this.buttons.classList.add('h5p-phrase-randomizer-segment-buttons');
    main.append(this.buttons);

    this.buttonNext = new Button(
      { id: 'next', label: '', classes: ['next'] },
      {
        onClicked: () => {
          this.params.jukebox?.play('clickPreviousNext');
          this.changeSymbol((this.position + this.params.alphabet.length - 1) %
            this.params.alphabet.length
          );
        }
      }
    );
    this.buttonNext.setAriaLabel([
      this.params.dictionary.get('a11y.nextText'),
      this.params.dictionary.get('a11y.currentText').replace(/@text/g, currentText)
    ]);
    this.buttons.append(this.buttonNext.getDOM());

    this.buttonPrevious = new Button(
      { id: 'previous', label: '', classes: ['previous'] },
      {
        onClicked: () => {
          this.params.jukebox?.play('clickPreviousNext');
          this.changeSymbol((this.position + 1) % this.params.alphabet.length);
        }
      }
    );
    this.buttonPrevious.setAriaLabel([
      this.params.dictionary
        .get('a11y.previousText'),
      this.params.dictionary
        .get('a11y.currentText').replace(/@text/g, currentText)
    ]);
    this.buttons.append(this.buttonPrevious.getDOM());

    this.buttonSpin = new Button(
      { id: 'spin', label: '', classes: ['spin'] },
      {
        onClicked: () => {
          this.spin();
          this.callbacks.onChanged();
        }
      }
    );
    this.buttonSpin.setAriaLabel([
      this.params.dictionary
        .get('a11y.spinSegment').replace(/@number/g, this.params.index + 1),
      this.params.dictionary
        .get('a11y.currentText').replace(/@text/g, currentText)
    ]);
    this.buttonSpin.getDOM().removeAttribute('tabindex');
    this.buttons.append(this.buttonSpin.getDOM());

    Util.callOnceVisible(this.dom, () => {
      this.setPosition(this.position);
      this.wheel.uncloak();
      this.callbacks.onSpinningStateChanged(this.params.index, false);
      this.callbacks.onVisible();
    });
  }

  /**
   * Return the DOM for this class.
   * @returns {HTMLElement} DOM for this class.
   */
  getDOM() {
    return this.dom;
  }

  /**
   * Get minimum width if all buttons should be placed horizontally.
   * @returns {number} Minimum width if all buttons placed horizontally.
   */
  getMinWidthHorizontal() {
    const buttons = [this.buttonNext, this.buttonPrevious, this.buttonSpin];

    const gap = parseFloat(
      window.getComputedStyle(this.buttons).getPropertyValue('gap')
    );

    return (
      buttons.reduce((total, button) => total += button.getWidth(), 0) +
      (buttons.length - 1) * gap
    );
  }

  /**
   * Get current response.
   * @returns {string} Current response.
   */
  getResponse() {
    return this.params.alphabet[this.position];
  }

  /**
   * Get current position.
   * @returns {number} Current position.
   */
  getPosition() {
    return this.position;
  }

  /**
   * Focus.
   */
  focus() {
    this.wheel.focusSpinbutton();
  }

  /**
   * Enable.
   */
  enable() {
    this.isDisabled = false;

    this.buttonNext.enable();
    this.buttonPrevious.enable();
    this.buttonSpin.enable();

    const currentText = this.params.alphabet[this.position];
    this.buttonNext.setAriaLabel([
      this.params.dictionary
        .get('a11y.nextText'),
      this.params.dictionary
        .get('a11y.currentText').replace(/@text/g, currentText)
    ]);
    this.buttonPrevious.setAriaLabel([
      this.params.dictionary
        .get('a11y.previousText'),
      this.params.dictionary
        .get('a11y.currentText').replace(/@text/g, currentText)
    ]);
  }

  /**
   * Disable.
   */
  disable() {
    this.isDisabled = true;

    clearTimeout(this.cooldownTimeout);

    this.buttonNext.disable();
    this.buttonPrevious.disable();
    this.buttonSpin.disable();

    this.buttonNext.setAriaLabel([
      this.params.dictionary.get('a11y.nextText'),
      this.params.dictionary.get('a11y.disabled')
    ]);
    this.buttonNext.setAriaLabel([
      this.params.dictionary.get('a11y.previousText'),
      this.params.dictionary.get('a11y.disabled')
    ]);
  }

  /**
   * Reset.
   */
  reset() {
    this.enable();
    this.setPosition(Math.floor(Math.random() * this.params.alphabet.length));
  }

  /**
   * Spin the wheel and end at random position.
   */
  spin() {
    this.callbacks.onSpinningStateChanged(this.params.index, true);

    this.disable();

    const endPosition = Math.floor(Math.random() * this.params.alphabet.length);

    this.wheel.randomize({
      endPosition: endPosition,
      noFocus: true,
      onDone: () => {
        this.setPosition(endPosition);
        this.enable();

        this.callbacks.onSpinningStateChanged(this.params.index, false);
      }
    });
  }

  /**
   * Set position.
   * @param {number} position New position.
   */
  setPosition(position) {
    this.position = position;
    this.wheel.setPosition(this.position);

    const currentText = this.params.alphabet[this.position];
    const buttonSymbol = (this.isDisabled) ?
      this.params.dictionary
        .get('a11y.disabled') :
      this.params.dictionary
        .get('a11y.currentText').replace(/@text/g, currentText);

    this.buttonNext.setAriaLabel([
      this.params.dictionary.get('a11y.nextText'),
      buttonSymbol
    ]);

    this.buttonPrevious.setAriaLabel([
      this.params.dictionary.get('a11y.previousText'),
      buttonSymbol
    ]);
  }

  /**
   * Change symbol.
   * @param {number} position New position.
   */
  changeSymbol(position) {
    if (this.isCoolingDown) {
      return;
    }

    this.setPosition(position);
    this.callbacks.onChanged();

    // Allow setting while not disabled without cooling down
    if (this.isDisabled) {
      return;
    }

    this.cooldown();
  }

  /**
   * Cooldown. Workaround, because transitionend is unreliable.
   */
  cooldown() {
    if (this.isCoolingDown) {
      return;
    }
    this.isCoolingDown = true;

    this.wheel.cooldown(RandomizerSegment.COOLDOWN_TIMEOUT_MS);
    this.buttonPrevious.disable();
    this.buttonNext.disable();
    this.buttonSpin.disable();

    clearTimeout(this.cooldownTimeout);
    this.cooldownTimeout = setTimeout(() => {
      this.buttonPrevious.enable();
      this.buttonNext.enable();
      this.buttonSpin.enable();

      this.isCoolingDown = false;
    }, RandomizerSegment.COOLDOWN_TIMEOUT_MS);
  }

  /**
   * Handle wheel changed.
   * @param {string} key KeyboardEvent key.
   */
  handleWheelChanged(key) {
    let position;

    if (key === 'ArrowUp') {
      position = (this.position + this.params.alphabet.length - 1) %
        this.params.alphabet.length;
    }
    else if (key === 'ArrowDown') {
      position = (this.position + 1) % this.params.alphabet.length;
    }
    else if (key === 'Home') {
      position = 0;
    }
    else if (key === 'End') {
      position = this.params.alphabet.length - 1;
    }
    else {
      return;
    }

    this.changeSymbol(position);
  }
}

/** @constant {number} COOLDOWN_TIMEOUT_MS Cooldown timeout in ms */
RandomizerSegment.COOLDOWN_TIMEOUT_MS = 275;
