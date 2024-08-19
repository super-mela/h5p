import he from 'he';

/**
 * Decode HTML from text
 * @param {string} html HTML to decode.
 * @returns {string} Plain text.
 */
const decodeHTML = (html) => {
  return html ? he.decode(html) : '';
};

/**
 * Trap keys so that the user can't tab outside the container.
 * @param {KeyboardEvent} event The keyboard event.
 * @param {HTMLElement} firstTabElement The first tab element.
 * @param {HTMLElement} lastTabElement The last tab element.
 * @param {() => void} onClose Close callback when pressing escape.
 */
export const trapKeys = (event, firstTabElement, lastTabElement, onClose) => {
  if (event.key === 'Tab') {
    if (event.shiftKey) {
      if (document.activeElement === firstTabElement) {
        event.preventDefault();
        lastTabElement.focus();
      }
    }
    else {
      if (document.activeElement === lastTabElement) {
        event.preventDefault();
        firstTabElement.focus();
      }
    }
  }
  if (event.key === 'Escape') {
    onClose();
  }
};

/**
 * Make sure that parameters are valid.
 * @param {object} params Parameters.
 * @returns {object} Sanitized params.
 */
export const sanitizeParams = (params) => {
  const handleObject = (sourceObject) => {
    return Object.keys(sourceObject).reduce((aggregated, current) => {
      aggregated[current] = decodeHTML(sourceObject[current]);
      return aggregated;
    }, {});
  };

  const {
    l10n,
    resourceList,
  } = params;

  return {
    ...params,
    l10n: handleObject(l10n),
    resourceList: (resourceList ?? [])
      .filter((resource) => {
        return typeof resource === 'object' && Object.keys(resource).length;
      })
      .map((resource) => {
        const {
          title,
          introduction,
        } = resource;

        return {
          ...resource,
          title: decodeHTML(title),
          introduction: decodeHTML(introduction),
        };
      }),
  };
};
