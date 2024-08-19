/**
 * Initialize Three Sixty content from parameters.
 * @param {HTMLElement} container Container element.
 * @param {object} params Parameters.
 * @param {object} l10n Localization strings.
 * @returns {object|null} H5P library instance.
 */
export const initializeThreeSixtyPreview = (container, params, l10n) => {
  const library = Object.keys(H5PEditor.libraryLoaded)
    .filter((library) => {
      return library.split(' ')[0] === 'H5P.EscapeRoom';
    })[0];

  return H5P.newRunnable(
    {
      library: library,
      params: params
    },
    H5PEditor.contentId,
    H5P.jQuery(container),
    undefined,
    {
      isEditor: true,
      l10n
    }
  );
};

/**
 * Show confirmation dialog.
 * @param {object} dialogOptions Options.
 * @param {function} confirm Confirmation callback.
 * @param {function} cancel Cancel callback.
 */
export const showConfirmationDialog = (dialogOptions, confirm, cancel) => {
  const deleteDialog = new H5P.ConfirmationDialog(dialogOptions)
    .appendTo(document.body);

  deleteDialog.on('confirmed', () => {
    confirm?.();
  });

  deleteDialog.on('canceled', () => {
    cancel?.();
  });

  deleteDialog.show();
};
