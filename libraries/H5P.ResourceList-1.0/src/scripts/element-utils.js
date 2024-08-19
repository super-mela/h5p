/**
 * Create the header for the list.
 * @param {object} l10n Localization object.
 * @param {string} labelId Id of label.
 * @param {function} toggleResources Toggle resources callback.
 * @returns {HTMLDivElement} Header element,
 */
export const createHeader = (l10n, labelId, toggleResources) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('h5p-resource-list-header');

  const headerIcon = document.createElement('span');
  headerIcon.className = 'h5p-resource-list-header-icon';
  headerIcon.setAttribute('aria-hidden', 'true');
  wrapper.appendChild(headerIcon);

  const header = document.createElement('div');
  header.classList.add('h5p-resource-list-header-text');
  header.id = labelId;
  header.innerText = l10n.resources;
  wrapper.appendChild(header);

  const hideContainer = document.createElement('button');
  hideContainer.addEventListener('click', toggleResources);
  hideContainer.classList.add('h5p-resource-list-hide');
  hideContainer.setAttribute('aria-label', l10n.hide);

  const hideIcon = document.createElement('span');
  hideIcon.className = 'fa fa-close';
  hideIcon.setAttribute('aria-hidden', 'true');
  hideContainer.appendChild(hideIcon);

  wrapper.appendChild(hideContainer);
  return wrapper;
};

/**
 * Create background to make a modal look of the list.
 * @param {function} toggleResources Toggle resources callback.
 * @returns {HTMLDivElement} Background element.
 */
export const createBackground = (toggleResources) => {
  const listBackground = document.createElement('div');
  listBackground.classList.add('h5p-resource-list-bg');
  listBackground.addEventListener('click', toggleResources);

  return listBackground;
};

/**
 * Create the resource list.
 * @param {number} contentId H5P content id.
 * @param {object} l10n Localization strings.
 * @param {object[]} resources Resources.
 * @returns {HTMLUListElement} List of resources as HTML element.
 */
export const createList = (contentId, l10n, resources) => {
  const resourceList = document.createElement('ul');
  resourceList.classList.add('h5p-resource-list');

  resources.map((resource, index) => {
    if (!resource.title || resource.title.length === 0) {
      return;
    }

    const resourceId = H5P.createUUID();

    const listElement = document.createElement('li');
    listElement.classList.add('h5p-resource-list-element');

    let listElementWrapper = listElement;

    if (resource.url) {
      const link = document.createElement('a');
      link.classList.add('h5p-resource-list-link');
      link.target = '_blank';
      link.href = resource.url;
      listElement.classList.add('h5p-resource-list-element-with-link');
      listElement.appendChild(link);
      listElementWrapper = link;
    }

    const title = document.createElement('div');
    title.classList.add('h5p-resource-list-title');
    let labelAnchor = resourceId + '-title_' + index;
    title.id = labelAnchor;
    title.textContent = resource.title;
    listElementWrapper.appendChild(title);

    const contentContainer = document.createElement('div');
    contentContainer.className = 'h5p-resource-list-content';

    if (resource.introduction) {
      const introduction = document.createElement('p');
      labelAnchor = resourceId + '-intro_' + index;
      introduction.className = 'h5p-resource-list-introduction';
      introduction.innerHTML = resource.introduction;
      introduction.id = labelAnchor;
      contentContainer.appendChild(introduction);
    }

    if (resource.introductionImage) {
      const image = document.createElement('img');
      image.classList.add('h5p-resource-list-introduction-image');
      image.alt = ''; // Merely decorational
      image.src = H5P.getPath(resource.introductionImage.path, contentId);
      contentContainer.appendChild(image);
    }

    if (resource.introduction || resource.introductionImage) {
      listElementWrapper.appendChild(contentContainer);
    }

    resourceList.appendChild(listElement);
  });

  return resourceList;
};
