/** Class for utility functions */
class Util {
  /**
   * Extend an array just like JQuery's extend.
   * @returns {object} Merged objects.
   */
  static extend() {
    for (let i = 1; i < arguments.length; i++) {
      for (let key in arguments[i]) {
        if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
          if (
            typeof arguments[0][key] === 'object' &&
            typeof arguments[i][key] === 'object'
          ) {
            this.extend(arguments[0][key], arguments[i][key]);
          }
          else {
            arguments[0][key] = arguments[i][key];
          }
        }
      }
    }
    return arguments[0];
  }

  /**
   * Retrieve true string from HTML encoded string.
   * @param {string} input Input string.
   * @returns {string} Output string.
   */
  static htmlDecode(input) {
    var dparser = new DOMParser().parseFromString(input, 'text/html');
    return dparser.documentElement.textContent;
  }

  /**
   * Retrieve string without HTML tags.
   * @param {string} html Input string.
   * @returns {string} Output string.
   */
  static stripHTML(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  }

  /**
   * Get closest parent node by selector.
   * @param {HTMLElement} node Node.
   * @param {string} selector CSS classname, id or tagname.
   * @returns {HTMLElement|null} Closest parent node by selector or null.
   */
  static closestParent(node, selector) {
    if (typeof node !== 'object' || typeof selector !== 'string') {
      return null; // missing or invalid value
    }

    if (!node.parentNode) {
      return null; // no parent left
    }

    if (selector.substring(0, 1) === '.') { // classnames
      const selectors = selector
        .split('.')
        .filter((selector) => selector !== '');

      if (selectors.every((selector) => {
        return node.parentNode?.classList?.contains(selector);
      })) {
        return node.parentNode;
      }
    }
    else if (selector.substring(0, 1) === '#') { // id
      if (
        typeof node.parentNode.getAttribute === 'function' &&
        node.parentNode.getAttribute('id') === selector.substr(1)
      ) {
        return node.parentNode;
      }
    }
    else if (node.parentNode.tagName.toLowerCase() === selector.toLowerCase()) { // tagname
      return node.parentNode;
    }

    return this.closestParent(node.parentNode, selector);
  }

  /**
   * Shuffle array.
   * @param {object[]} array Array.
   * @returns {object[]} Shuffled array.
   */
  static shuffleArray(array) {
    const newArray = [...array]; // Shallow clone

    let j, x, i;
    for (i = newArray.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = x;
    }

    return newArray;
  }
}

export default Util;
