import UtilColor from '@services/util-color.js';
import Util from '@services/util.js';
import './wheel.scss';

/** Wheel */
export default class Wheel {
  /**
   * @class
   * @param {object} params Parameters.
   * @param {string[]} params.alphabet Alphabet for the wheel.
   * @param {number} params.position Start position (from previous state).
   * @param {number} params.index This wheels index of all wheels.
   * @param {number} params.total Total number of wheels.
   * @param {object} callbacks Callbacks.
   * @param {function} callbacks.onClicked Called when button is clicked.
   * @param {function} callbacks.onFocusChanged Called when focus changes.
   */
  constructor(params = {}, callbacks = {}) {
    this.params = Util.extend({}, params);

    this.callbacks = Util.extend({
      onChanged: () => {},
      onFocusChanged: () => {}
    }, callbacks);

    this.oldIndex = this.params.position ?? 0;

    const colorBackground = UtilColor.createColorGradient(
      this.params.colorBackground
    );

    const colorText = UtilColor.getColorText(this.params.colorBackground);

    this.dom = document.createElement('div');
    this.dom.classList.add('h5p-phrase-randomizer-wheel');
    if (colorBackground) {
      this.dom.style.setProperty('--wheel-color-background', colorBackground);
    }
    if (colorText) {
      this.dom.style.setProperty('--wheel-color-text', colorText);
    }

    this.list = document.createElement('div');
    this.list.classList.add('h5p-phrase-randomizer-wheel-list');
    this.list.classList.add('transition');
    this.list.addEventListener('transitionend', () => {
      if (typeof this.onWheelScrolled === 'function') {
        this.onWheelScrolled();
      }
      delete this.onWheelScrolled;
    });

    this.dom.appendChild(this.list);

    // Copy of first and last symbol required for simulating "infinite" wheel
    const alphabetPlus = [
      this.params.alphabet[this.params.alphabet.length - 1],
      ...this.params.alphabet,
      this.params.alphabet[0]
    ];

    this.items = alphabetPlus.map((symbol) => {
      const item = document.createElement('div');
      item.classList.add('h5p-phrase-randomizer-wheel-listitem');
      item.classList.add('cloaked');
      item.setAttribute('aria-hidden', 'true');

      const text = document.createElement('span');
      text.classList.add('h5p-phrase-randomizer-wheel-listitem-text');
      text.innerText = symbol;
      item.append(text);

      return item;
    });

    this.items.forEach((item) => {
      this.list.appendChild(item);
    });

    // Spin button desing pattern for aria
    this.spinbutton = document.createElement('div');
    this.spinbutton.classList.add('h5p-phrase-randomizer-wheel-spinbutton');
    this.spinbutton.setAttribute('role', 'spinbutton');
    this.spinbutton.setAttribute('tabindex', '0');
    this.spinbutton.setAttribute(
      'aria-label',
      this.params.dictionary.get('a11y.segment')
        .replace(/@number/g, this.params.index + 1)
        .replace(/@total/g, this.params.total)
    );

    this.spinbutton.addEventListener('keydown', (event) => {
      this.handleKeydown(event);
    });

    this.spinbutton.addEventListener('focus', () => {
      this.callbacks.onFocusChanged(true);
    });

    this.spinbutton.addEventListener('blur', () => {
      this.callbacks.onFocusChanged(false);
    });

    this.dom.appendChild(this.spinbutton);
  }

  /**
   * Return the DOM for this class.
   * @returns {HTMLElement} DOM for this class.
   */
  getDOM() {
    return this.dom;
  }

  randomize(params = {}) {
    this.list.classList.remove('transition');

    const targetIndex = params.endPosition + 1;

    this.spin({
      rounds: 10,
      duration: 2,
      targetIndex: targetIndex,
      onDone: () => {
        this.list.classList.add('transition');

        this.oldIndex = targetIndex;
        this.scrollTo({
          index: targetIndex, noAnimation: true, noFocus: params.noFocus
        });

        params.onDone?.();
      }
    });
  }

  /**
   * Spin the wheel.
   * @param {object} [params] Parameters.
   * @param {number} [params.rounds] Number of rounds to spin.
   * @param {number} [params.currentOffset] Current spin offset.
   * @param {number} [params.targetOffset] Target spin offset.
   * @param {number} [params.elapsedTime] Elapsed time in ms.
   * @param {number} [params.targetIndex] Index of element to end on.
   * @param {number} [params.totalItemsHeight] Total items height in px.
   * @param {number} [params.duration] Spinning time in s.
   * @param {number} [params.intervalMs] Interval, 20ms matches ~50 fps.
   * @param {function} [params.onDone] Callback when spinning is done.
   */
  spin(params = {}) {
    params = Util.extend({
      rounds: 1,
      currentOffset: 0,
      elapsedTime: 0,
      targetIndex: 0,
      totalItemsHeight: this.itemHeight * this.params.alphabet.length,
      intervalMs: 20,
      onDone: () => {}
    }, params);

    params.duration = params.duration ??
      params.rounds / 2; // Default duration if not set.

    // total height * rounds + difference to hit target index item
    params.targetOffset = params.targetOffset ??
      params.totalItemsHeight * params.rounds +
      ((params.targetIndex - this.oldIndex + this.params.alphabet.length) %
        this.params.alphabet.length
      ) * this.itemHeight;

    if (params.currentOffset >= params.targetOffset) {
      params.onDone();
      return;
    }

    const translation = (
      -this.oldIndex * this.itemHeight + this.itemOffset - params.currentOffset
    ) % params.totalItemsHeight;
    this.list.style.transform = `translateY(${translation}px)`;

    params.currentOffset = this.easeInOutQuad(
      params.elapsedTime, 0, params.targetOffset, params.duration
    );
    params.elapsedTime += params.intervalMs / 1000;

    window.setTimeout(() => {
      this.spin(params);
    }, params.intervalMs);
  }

  /**
   * Ease a value in and out quadratically.
   * @param {number} timeS Current time in seconds.
   * @param {number} start Start value.
   * @param {number} delta Delta from start value.
   * @param {number} durationS Total duration in seconds.
   * @returns {number} Eased value.
   */
  easeInOutQuad(timeS, start, delta, durationS) {
    if ((timeS /= durationS / 2) < 1) {
      return delta / 2 * timeS * timeS + start;
    }

    return -delta / 2 * ((--timeS) * (timeS - 2) - 1) + start;
  }

  /**
   * Set position.
   * @param {number} position New position.
   */
  setPosition(position) {
    position = position % this.params.alphabet.length;

    /*
     * Simulates "infinite" wheel by scrolling to copied symbol first and
     * then jumping to back/forth to original symbol after scrolling is done
     */
    if (
      this.oldIndex - 1 === 0 &&
      position === this.params.alphabet.length - 1
    ) {
      // Overflow scrolling up
      this.onWheelScrolled = () => {
        this.oldIndex = this.params.alphabet.length;
        this.scrollTo({ index: this.oldIndex, noAnimation: true });
      };

      this.oldIndex = 0;
    }
    else if (this.oldIndex === this.params.alphabet.length && position === 0) {
      // Overflow scrolling down
      this.onWheelScrolled = () => {
        this.oldIndex = 1;
        this.scrollTo({ index: this.oldIndex, noAnimation: true });
      };

      this.oldIndex = this.params.alphabet.length + 1;
    }
    else {
      this.oldIndex = position + 1;
    }

    this.scrollTo({ index: this.oldIndex });
  }

  /**
   * Scroll to index on wheel.
   * @param {object} params Parameters.
   * @param {number} params.index Index to scroll to.
   * @param {boolean} params.noAnimation If true, jump instead of scrolling.
   * @param {boolean} params.noFocus If true, don't set focus when done.
   */
  scrollTo(params = {}) {
    if (typeof params.index !== 'number') {
      return;
    }

    const alphabetIndex = (params.index - 1 + this.params.alphabet.length) %
      this.params.alphabet.length;

    this.spinbutton.setAttribute('aria-valuenow', `${alphabetIndex}`);
    this.spinbutton.setAttribute(
      'aria-valuetext', this.params.alphabet[alphabetIndex]
    );

    // Compute correct translation
    this.wheelHeight = this.wheelHeight ||
      this.dom.getBoundingClientRect().height;
    this.itemHeight = this.itemHeight ||
      this.list.childNodes[0].getBoundingClientRect().height;
    this.itemOffset = (this.wheelHeight - this.itemHeight) / 2;

    const translation =
      `translateY(${-params.index * this.itemHeight + this.itemOffset}px)`;

    if (!params.noAnimation) {
      this.list.style.transform = translation;
      return;
    }

    this.list.classList.remove('transition');

    window.requestAnimationFrame(() => {
      this.list.style.transform = translation;
      if (!params.noFocus) {
        this.focusSpinbutton();
      }

      window.requestAnimationFrame(() => {
        this.list.classList.add('transition');
      });
    });
  }

  /**
   * Uncloak list items.
   */
  uncloak() {
    this.items.forEach((item) => {
      item.classList.remove('cloaked');
    });
  }

  /**
   * Focus spinbutton.
   */
  focusSpinbutton() {
    this.spinbutton.focus();
  }

  /**
   * Handle key down on spinbutton.
   * @param {KeyboardEvent} event Keyboard event
   */
  handleKeydown(event) {
    if (this.isDisabled || event.repeat || this.isTransitioning) {
      event.stopPropagation();
      event.preventDefault();
      return;
    }

    if (event.target.getAttribute('role') !== 'spinbutton') {
      return; // Just to be sure ...
    }

    if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      event.stopPropagation();
      event.preventDefault();

      this.callbacks.onChanged(event.key);
    }
  }

  /**
   * Cooldown. Workaround for transitionend event that may never be called.
   * @param {number} timeout Timeout.
   */
  cooldown(timeout) {
    window.clearTimeout(this.cooldownTimeout);
    this.isTransitioning = true;

    window.setTimeout(() => {
      this.isTransitioning = false;
    }, timeout);
  }
}
