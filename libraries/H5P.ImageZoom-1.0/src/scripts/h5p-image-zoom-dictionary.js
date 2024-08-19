import he from 'he';
import Util from '@services/util.js';

/** Class for dictionary */
export default class Dictionary {
  /**
   * Fill dictionary with translations.
   * @param {object} translation Translations.
   */
  static fill(translation) {
    translation = Util.extend(Dictionary.DEFAULT_TRANSLATIONS, translation);
    Dictionary.translation = Dictionary.sanitize(translation);
  }

  /**
   * Get translation for a key.
   * @param {string} key Key to look for.
   * @returns {string} Translation.
   */
  static get(key) {
    return Dictionary.translation[key];
  }

  /**
   * Sanitize translations recursively: HTML decode and strip HTML.
   * @param {object|string} translation Translation.
   * @returns {object|string} Sanitized translation.
   */
  static sanitize(translation) {
    if (typeof translation === 'object') {
      for (let key in translation) {
        translation[key] = Dictionary.sanitize(translation[key]);
      }
    }
    else if (typeof translation === 'string') {
      translation = he.decode(translation);
      const div = document.createElement('div');
      div.innerHTML = translation;
      translation = div.textContent || div.innerText || '';
    }
    else {
      // Invalid translation
    }

    return translation;
  }
}

/** @constant {object} Default translations */
Dictionary.DEFAULT_TRANSLATIONS = {
  magnify: 'Magnify',
  magnified: 'Magnification activated.',
  unmagnified: 'Magnification deactivated.',
  instructions: 'Use arrow keys to move magnification lens. Use plus key to zoom in. Use minus key to zoom out.',
  zoomedToScale: 'Zoomed to scale of @magnification to 1.',
  movedLensTo: 'Moved lens to @positionHorizontal horizontally and to @positionVertical vertically.',
  unknown: 'unknown'
};
