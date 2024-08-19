import Color from 'color';

/** Class for color utility functions */
export default class UtilColor {

  /**
   * Create Color gradient.
   * @param {string} color Background color in common CSS format.
   * @returns {string} CSS background value for gradient.
   */
  static createColorGradient(color) {
    const baseColor = Color(color);
    const darker1 = baseColor.darken(0.17);
    const darker2 = baseColor.darken(0.28);
    const darker3 = baseColor.darken(0.52);

    return `linear-gradient(to bottom, ${darker3.hex()} 0%, ${darker2.hex()} 9%, ${darker1.hex()} 18%, ${baseColor.hex()} 55%, ${darker1.hex()} 82%, ${darker2.hex()} 91%, ${darker3.hex()} 100%)`;
  }

  /**
   * Get text color for given background color.
   * @param {string} backgroundColor Background color in common CSS format.
   * @returns {string} CSS color value for text color.
   */
  static getColorText(backgroundColor) {
    return Color(backgroundColor).isLight() ? '#0f0f0f' : '#f0f0f0';
  }
}
