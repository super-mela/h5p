/**
 * Determine new size for an element that is being resized.
 * @param {number} clientX Current mouse x position.
 * @param {number} clientY Current mouse y position.
 * @param {boolean} is3DScene True if in 3D scene, false if in 2D scene.
 * @param {boolean} isHorizontalDrag True if dragging horizontally, else false.
 * @param {DOMRect} elementRect Position/size of element.
 * @param {number} startMousePos Start position of mouse.
 * @param {number} startMidPoint Start center point of element.
 * @returns {number|undefined} New size.
 */
export const scaleOpenContentElement = (
  clientX,
  clientY,
  is3DScene,
  isHorizontalDrag,
  elementRect,
  startMousePos,
  startMidPoint
) => {
  if (!elementRect) {
    return;
  }

  let newSize;

  if (is3DScene) {
    // Record current mouse position for everytime the mouse moves
    const currentMousePosition = isHorizontalDrag ? clientX : clientY;

    /* divStartWidth is the start mouse position subtracted by the midpoint, technically this
    half the size of the actual div, this is used for keeping the original width of the div
    everytime we drag */
    const divStartWidth = startMousePos - startMidPoint;
    newSize = (currentMousePosition - divStartWidth) * 2;
  }
  else {
    const { x: elementX, y: elementY } = elementRect;

    // We record the currentMouseposition for everytime the mouse moves
    newSize = isHorizontalDrag ?
      clientX - elementX :
      clientY - elementY;
  }

  return newSize;
};
