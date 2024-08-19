/**
 * Helper class with various methods for checking if a DOM element overflows
 * another.
 */
export class OverflowHelper {
  /**
   * Create an instance of OverflowHelper.
   * @class
   * @param  {number} height Element height.
   * @param  {number} top Element top position.
   * @param  {number} left Element left position
   * @param  {number} containerHeight Container height.
   */
  constructor(height, top, left, containerHeight) {
    this.height = height;

    this.top = top;
    this.left = left;

    this.containerHeight = containerHeight;
  }

  /**
   * Check whether DOM element is overflowing container's top edge.
   * @returns {boolean} True if overflowing, else false.
   */
  overflowsTop() {
    return this.height > this.top;
  }


  /**
   * Check whether DOM element is overflowing container's bottom edge.
   * @returns {boolean} True if overflowing, else false.
   */
  overflowsBottom() {
    return this.height + this.top > this.containerHeight;
  }
}

/**
 * Calculate correct alignment and expand direction for element.
 * @param  {string} position Position of [top|right|bottom|left].
 * @param  {number} height Height.
 * @param  {number} top Top position.
 * @param  {number} left Left position.
 * @param  {number} wrapperHeight Wrapper Height.
 * @returns {object} {expandirection, alignment}
 */
export const willOverflow = (position, height, top, left, wrapperHeight) => {
  const overflowHelper = new OverflowHelper(height, top, left, wrapperHeight);
  let expandDirection = null;
  let alignment = null;

  switch (position) {
    case 'left':
      // Intentional fallthrough
    case 'right':
      if (overflowHelper.overflowsBottom()) {
        expandDirection = 'up';
      }
      break;

    case 'top':
      if (overflowHelper.overflowsTop()) {
        alignment = 'bottom';
      }
      break;

    case 'bottom':
      if (overflowHelper.overflowsBottom()) {
        alignment = 'top';
      }
      break;
  }

  return { expandDirection: expandDirection, alignment: alignment };
};
