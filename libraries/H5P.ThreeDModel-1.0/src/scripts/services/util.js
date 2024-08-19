import { decode } from 'he';

/** Class for utility functions */
export default class Util {
  /**
   * Extend an array just like JQuery's extend.
   * @param {object[]} args - Arguments.
   * @returns {object} Merged objects.
   */
  static extend(...args) {
    const [target, ...sources] = args;
    for (const source of sources) {
      for (const [key, value] of Object.entries(source)) {
        if (typeof target[key] === 'object' && typeof value === 'object') {
          this.extend(target[key], value);
        }
        else {
          target[key] = value;
        }
      }
    }
    return target;
  }

  /**
   * HTML decode and strip HTML.
   * @param {string|object} html html.
   * @returns {string} html value.
   */
  static purifyHTML(html) {
    if (typeof html !== 'string') {
      return '';
    }

    let text = decode(html);
    const div = document.createElement('div');
    div.innerHTML = text;
    text = div.textContent || div.innerText || '';

    return text;
  }
}
