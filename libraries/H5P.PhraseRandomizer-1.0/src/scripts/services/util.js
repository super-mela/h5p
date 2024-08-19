import { decode } from 'he';

/** Class for utility functions */
export default class Util {
  /**
   * Extend an array just like JQuery's extend.
   * @returns {object} Merged objects.
   */
  static extend() {
    for (let i = 1; i < arguments.length; i++) {
      for (let key in arguments[i]) {
        if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
          if (typeof arguments[0][key] === 'object' && typeof arguments[i][key] === 'object') {
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
   * HTML decode and strip HTML.
   * @param {string|object} html html.
   * @returns {string} html value.
   */
  static purifyHTML(html) {
    if (typeof html !== 'string') {
      return '';
    }

    return Util.stripHTML(decode(html));
  }

  /**
   * Format language tag (RFC 5646). Assuming "language-coutry". No validation.
   * Cmp. https://tools.ietf.org/html/rfc5646
   * @param {string} languageCode Language tag.
   * @returns {string} Formatted language tag.
   */
  static formatLanguageCode(languageCode) {
    if (typeof languageCode !== 'string') {
      return languageCode;
    }

    /*
     * RFC 5646 states that language tags are case insensitive, but
     * recommendations may be followed to improve human interpretation
     */
    const segments = languageCode.split('-');
    segments[0] = segments[0].toLowerCase(); // ISO 639 recommendation
    if (segments.length > 1) {
      segments[1] = segments[1].toUpperCase(); // ISO 3166-1 recommendation
    }
    languageCode = segments.join('-');

    return languageCode;
  }

  /**
   * Add mixins to a class, useful for splitting files.
   * @param {object} [master] Master class to add mixins to.
   * @param {object[]|object} [mixins] Mixins to be added to master.
   */
  static addMixins(master = {}, mixins = []) {
    if (!master.prototype) {
      return;
    }

    if (!Array.isArray(mixins)) {
      mixins = [mixins];
    }

    const masterPrototype = master.prototype;

    mixins.forEach((mixin) => {
      const mixinPrototype = mixin.prototype;
      Object.getOwnPropertyNames(mixinPrototype).forEach((property) => {
        if (property === 'constructor') {
          return; // Don't need constructor
        }

        if (Object.getOwnPropertyNames(masterPrototype).includes(property)) {
          return; // property already present, do not override
        }

        masterPrototype[property] = mixinPrototype[property];
      });
    });
  }

  /**
   * Call callback function once dom element gets visible in viewport.
   * @param {HTMLElement} dom DOM element to wait for.
   * @param {function} callback Function to call once DOM element is visible.
   */
  static callOnceVisible(dom, callback) {
    if (typeof dom !== 'object' || typeof callback !== 'function') {
      return; // Invalid arguments
    }

    // iOS is behind ... Again ...
    const idleCallback = window.requestIdleCallback ?
      window.requestIdleCallback :
      window.requestAnimationFrame;

    idleCallback(() => {
      // Get started once visible and ready
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          observer.unobserve(dom);
          callback();
        }
      }, {
        threshold: 0
      });
      observer.observe(dom);
    });
  }

  /**
   * Get asset path.
   * @param {string} truePath HTTP path.
   * @param {string|number} contentId Content id.
   * @param {string} machineName H5P machine name of library.
   * @param {string} [distPath] Path to distribution files.
   * @returns {string|null} Path that H5P can use. Null if some problem.
   */
  static getAssetPath(
    truePath, contentId, machineName, distPath = 'dist/'
  ) {
    /*
     * One could fetch() the path here, but even when catching, the error
     * in the console doesn't look nice.
     */
    if (truePath.indexOf('sites/default/files/h5p/development') !== -1) {
      return truePath; // On Drupal dev system, path is okay
    }

    if (distPath.substring(0, 1) === '/') {
      distPath = distPath.substring(1);
    }
    if (distPath.substring(distPath.length - 1) !== '/') {
      distPath = `${distPath}/`;
    }

    /*
     * H5P cannot use the regular path on platforms that use cached assets like
     * WordPress. We therefore need to build the correct path to the assets
     * in the library directory ourselves. Same issue for embedded content.
     */
    let uberName = null;

    // Main content
    const library = H5PIntegration?.contents[`cid-${contentId}`]
      ?.library;

    if (library?.indexOf(`${machineName} `) !== -1) {
      uberName = library.replace(' ', '-');
    }

    // Subcontent?
    if (!uberName) {
      const jsonContent = H5PIntegration
        ?.contents[`cid-${contentId}`]?.jsonContent;

      if (!jsonContent) {
        return null;
      }
      const regexp = RegExp(`"library":"(${machineName} [0-9]+.[0-9]+)"`);
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
    const fileName = truePath.split('/').pop();

    let path = `${h5pBasePath}/${distPath}${fileName}`;

    if (!path.match(/^[a-z0-9]+:\/\//i)) {
      // Add protocol and origin
      path = `${window.location.origin}/${path}`;
    }

    return path;
  }

  /**
   * Shallow compare two arrays.
   * @param {string[]} a Array of strings 1.
   * @param {string[]} b Array of strings 2.
   * @returns {boolean} True, if equal. Else false.
   */
  static areArraysEqual(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
      return false;
    }

    if (a.length !== b.length) {
      return false;
    }

    return a.every((c, index) => c === b[index]);
  }
}
