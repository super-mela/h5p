import { getPlaylistField, areChildrenValid } from '@h5phelpers/editorForms.js';

/**
 * Creates playlist form and appends it to wrapper
 * @param {object} field Field of semantics.
 * @param {object} params Parameters for field.
 * @param {HTMLElement} wrapper Element to attach form to.
 * @param {object} parent Parent field instance.
 */
export const createPlaylistForm = (field, params, wrapper, parent) => {
  const playlistField = getPlaylistField(field);

  H5PEditor.processSemanticsChunk(
    playlistField.field.fields,
    params,
    wrapper,
    parent,
  );
};

/**
 * Check if playlist form is valid and mark invalid fields.
 * @param {object} children Children to validate.
 * @returns {boolean} True if valid, else false.
 */
export const validatePlaylistForm = (children) => {
  H5PEditor.Html.removeWysiwyg();
  return areChildrenValid(children);
};

/**
 * Get unique ID for a playlist.
 * @returns {number} New id.
 */
const getUniquePlaylistId = () => H5P.createUUID();

/**
 * Get initial parameters for empty playlist.
 * @returns {object} Playlist parameters.
 */
export const getDefaultPlaylistParams = () => ({
  playlistId: getUniquePlaylistId(),
});
