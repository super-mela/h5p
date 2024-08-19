import Color from 'color';
import '@styles/color_overrides.scss';

/**
 * Color class.
 * @class
 */
export default class Colors {

  /**
   * Set new base color.
   * @param {string} color RGB color code in hex: #rrggbb.
   */
  static setBase(color) {
    if (!color) {
      return;
    }


    Colors.colorBase = Color(color);
  }

  /**
   * Get color.
   * @param {Color} color Base color.
   * @param {object} [params] Parameters.
   * @param {number} [params.opacity] Opacity value assuming white background.
   * @returns {Color} Color with opacity figured in.
   */
  static getColor(color, params = {}) {
    if (
      typeof params.opacity === 'string' &&
      /^([0-9]|[1-8][0-9]|9[0-9]|100)(\.\d+)?\s?%$/.test(params.opacity)
    ) {
      params.opacity = parseInt(params.opacity) / 100;
    }

    if (
      typeof params.opacity !== 'number' ||
      params.opacity < 0 ||
      params.opacity > 1
    ) {
      return color;
    }

    const rgbBackground = Color('#ffffff').rgb().array();

    return Color.rgb(
      color.rgb().array().map((value, index) => {
        return params.opacity * value + (1 - params.opacity) * rgbBackground[index];
      })
    );
  }

  /**
   * Check whether color is default base color.
   * @param {string} color RGB color code in hex: #rrggbb.
   * @returns {boolean} True, if color is default base color, else false.
   */
  static isBaseColor(color) {
    return Color(color).hex() === Colors.colorBase.hex();
  }

  /**
   * Get CSS override for content type.
   * @param {string} machineName content types machine name.
   * @returns {string} CSS override for content type.
   */
  static getContentTypeCSS(machineName) {
    if (!Colors.COLOR_OVERRIDES[machineName]) {
      return '';
    }

    return Colors.COLOR_OVERRIDES[machineName].getCSS();
  }

  /**
   * Get CSS overrides.
   * Color values are set in SCSS including pseudo elements, so we need to
   * override CSS.
   * @returns {string} CSS overrides.
   */
  static getCSS() {
    const colorBackgroundActive = Colors.colorBase;
    const colorTextActive = (Colors.colorBase.luminosity() > .5) ?
      Colors.DEFAULT_COLOR_TEXT_DARK :
      Colors.DEFAULT_COLOR_TEXT_LIGHT;

    const colorBackgroundActiveHover = colorBackgroundActive.darken(0.05);
    const colorTextActiveHover = (colorBackgroundActiveHover.luminosity() > .5) ?
      Colors.DEFAULT_COLOR_TEXT_DARK :
      Colors.DEFAULT_COLOR_TEXT_LIGHT;

    const colorBackground = Colors.getColor(Colors.colorBase, { opacity: .2 });
    const colorText = (colorBackground.luminosity() > .5) ?
      Colors.DEFAULT_COLOR_TEXT_DARK :
      Colors.DEFAULT_COLOR_TEXT_LIGHT;

    const colorBackgroundHover = colorBackground.darken(0.05);
    const colorTextHover = (colorBackgroundHover.luminosity() > .5) ?
      Colors.DEFAULT_COLOR_TEXT_DARK :
      Colors.DEFAULT_COLOR_TEXT_LIGHT;

    const colorOverrideBase = colorBackgroundActive;
    const colorOverrideText = (colorOverrideBase.luminosity() > .5) ?
      Colors.DEFAULT_COLOR_TEXT_DARK :
      Colors.DEFAULT_COLOR_TEXT_LIGHT;

    const colorOverrideHoverFocus = Colors.getColor(colorOverrideBase, { opacity: .85 });
    const colorOverrideActive = Colors.getColor(colorOverrideBase, { opacity: .8 });
    const colorOverrideShadowLight = Colors.getColor(colorOverrideBase, { opacity: .75 });
    const colorOverrideShadowDark = Colors.getColor(colorOverrideBase, { opacity: .9 });

    return `:root{
      --color-base: ${Colors.colorBase.hex()};
      --color-tab-background: ${colorBackground.hex()};
      --color-tab-background-hover: ${colorBackgroundHover.hex()};
      --color-tab-background-active: ${colorBackgroundActive.hex()};
      --color-tab-background-active-hover: ${colorBackgroundActiveHover.hex()};
      --color-tab-text: ${colorText.hex()};
      --color-tab-text-hover: ${colorTextHover.hex()};
      --color-tab-text-active: ${colorTextActive.hex()};
      --color-tab-text-active-hover: ${colorTextActiveHover.hex()};
      --color-tab-override-base: ${colorOverrideBase.hex()};
      --color-tab-override-hover-focus: ${colorOverrideHoverFocus.hex()};
      --color-tab-override-active: ${colorOverrideActive.hex()};
      --color-tab-override-shadow-light: ${colorOverrideShadowLight.hex()};
      --color-tab-override-shadow-dark: ${colorOverrideShadowDark.hex()};
      --color-tab-override-text: ${colorOverrideText.hex()};
    }`;
  }
}

/** @constant {string} Preferred default color as defined in SCSS */
Colors.DEFAULT_COLOR_BASE = Color('#1a73d9');
Colors.DEFAULT_COLOR_TEXT_LIGHT = Color('#ffffff');
Colors.DEFAULT_COLOR_TEXT_DARK = Color('#2c2432');

// Relevant default colors defined in SCSS main class or derived from those
Colors.colorBase = Colors.DEFAULT_COLOR_BASE;
