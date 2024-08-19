/**
 * Get focusable elements within container.
 * @param {HTMLElement} container Container to look in.
 * @returns {HTMLElement[]} Focusable elements within container.
 */
export const getFocussableElements = (container) => {
  if (!container) {
    return [];
  }

  const focusableElementsString = [
    'a[href]:not([disabled])',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'video',
    'audio',
    '[tabindex]:not([tabindex="-1"])'
  ].join(', ');

  return []
    .slice
    .call(container.querySelectorAll(focusableElementsString))
    .filter((element) => {
      return element.getAttribute('disabled') !== 'true' &&
        element.getAttribute('disabled') !== true;
    });
};
