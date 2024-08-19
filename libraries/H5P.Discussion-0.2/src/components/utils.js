import {escape, decode} from 'he';

export function ArgumentDataObject(initValues) {
  this.id = null;
  this.added = false;
  this.argumentText = null;
  this.editMode = false;
  this.prefix = 'argument';

  return Object.assign(this, initValues);
}

export function CategoryDataObject(initValues) {
  this.id = null;
  this.title = null;
  this.connectedArguments = [];
  this.isArgumentDefaultList = false;
  this.theme = 'h5p-discussion-category-default';
  this.useNoArgumentsPlaceholder = false;
  this.prefix = 'category';
  this.actionTargetContainer = false;

  return Object.assign(this, initValues);
}

export function ActionMenuDataObject(initValues) {
  this.id = null;
  this.title = null;
  this.activeCategory = null;
  this.onSelect = null;
  this.type = null;
  this.label = null;

  return Object.assign(this, initValues);
}

export function getDnDId(element) {
  return element.prefix + '-' + element.id;
}

export function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this, args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export function decodeHTML(html) {
  return html ? decode(html) : html;
}

export function escapeHTML(html) {
  return html ? escape(html) : html;
}

export function stripHTML(html) {
  const element = document.createElement('div');
  element.innerHTML = html;
  return element.innerText;
}

export function sanitizeParams(params) {
  const filterResourceList = (element) => Object.keys(element).length !== 0 && element.constructor === Object;
  const handleObject = (sourceObject) => {
    if ( sourceObject === undefined || sourceObject === null || !filterResourceList(sourceObject)) {
      return sourceObject;
    }
    return Object.keys(sourceObject).reduce((aggregated, current) => {
      aggregated[current] = decodeHTML(sourceObject[current]);
      return aggregated;
    }, {});
  };

  let {
    header,
    description,
    argumentsList,
    summary,
    summaryHeader,
    summaryInstruction,
    l10n,
    resourceReport,
    resources,
  } = params;

  if ( Array.isArray(argumentsList) ) {
    argumentsList = argumentsList.map((argument) => decodeHTML(argument));
  }

  if (resources.params.resourceList && resources.params.resourceList.filter(filterResourceList).length > 0) {
    resources.params = {
      ...resources.params,
      l10n: handleObject(resources.params.l10n),
      resourceList: resources.params.resourceList.filter(filterResourceList).map((resource) => {
        const {
          title,
          introduction,
        } = resource;
        return {
          ...resource,
          title: decodeHTML(title),
          introduction: decodeHTML(introduction),
        };
      })
    };
  }

  return {
    ...params,
    argumentsList,
    resources,
    header: decodeHTML(header),
    description: decodeHTML(description),
    summary: decodeHTML(summary),
    summaryHeader: decodeHTML(summaryHeader),
    summaryInstruction: decodeHTML(summaryInstruction),
    l10n: handleObject(l10n),
    resourceReport: handleObject(resourceReport),
  };
}
/**
 * CSS classnames and breakpoints for the content type
 *
 * @type {{largeTablet: string, large: string, mediumTablet: string}}
 */
const DiscussionClassnames = {
  'mediumTablet': 'h5p-medium-tablet-size',
  'largeTablet': 'h5p-large-tablet-size',
  'large': 'h5p-large-size',
};

/**
 * Get list of classname and conditions for when to add the classname to the content type
 *
 * @return {[{className: string, shouldAdd: (function(*): boolean)}, {className: string, shouldAdd: (function(*): boolean|boolean)}, {className: string, shouldAdd: (function(*): boolean)}]}
 */
export const breakpoints = () => {
  return [
    {
      'className': DiscussionClassnames.mediumTablet,
      'shouldAdd': (ratio) => ratio >= 22 && ratio < 40,
    },
    {
      'className': DiscussionClassnames.largeTablet,
      'shouldAdd': (ratio) => ratio >= 40 && ratio < 60,
    },
    {
      'className': DiscussionClassnames.large,
      'shouldAdd': (ratio) => ratio >= 60,
    },
  ];
};

/**
 * Get the ratio of the container
 *
 * @return {number}
 */
export function getRatio(container) {
  if ( !container) {
    return;
  }
  const computedStyles = window.getComputedStyle(container);
  return container.offsetWidth / parseFloat(computedStyles.getPropertyValue('font-size'));
}

/**
 * Check if a number is even
 * 
 * @param {number} number
 * @returns {boolean}
 */
export function isEven(number) {
  return number % 2 === 0;
}
