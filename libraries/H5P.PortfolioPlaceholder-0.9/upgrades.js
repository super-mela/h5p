/** @namespace H5PUpgrades */
var H5PUpgrades = H5PUpgrades || {};

H5PUpgrades['H5P.PortfolioPlaceholder'] = (function () {
  return {
    0: {
      /**
       * Asynchronous content upgrade hook.
       * Fix potentially missing subContentId.
       * @param {object} parameters Parameters.
       * @param {function} finished Callback.
       * @param {object} extras Extra parameters.
       */
      5: function (parameters, finished, extras) {
        if (parameters && parameters.placeholder &&
          Array.isArray(parameters.placeholder.fields)
        ) {
          parameters.placeholder.fields = parameters.placeholder.fields
            .map((field) => {
              if (field.content && !field.content.subContentId) {
                /*
                 * NOTE: We avoid using H5P.createUUID since this is an upgrade
                 * script and H5P function may change in the future
                 */
                field.content.subContentId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {
                  const random = Math.random() * 16 | 0, newChar = char === 'x' ? random : (random & 0x3 | 0x8);
                  return newChar.toString(16);
                });
              }

              return field;
            });
        }

        // Done
        finished(null, parameters, extras);
      }
    }
  };
})();
