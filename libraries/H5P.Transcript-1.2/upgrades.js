var H5PUpgrades = H5PUpgrades || {};

H5PUpgrades['H5P.Transcript'] = (function () {
  return {
    1: {
      /**
       * Asynchronous content upgrade hook.
       *
       * Move parameters of webvtt file to new files list
       *
       * @param {object} parameters Parameters.
       * @param {function} finished Finished callback.
       * @param {object} extras Extra parameters.
       */
      1: function (parameters, finished, extras) {
        if (parameters) {
          parameters.transcriptFiles = [
            {
              transcriptFile: {},
              label: 'Unnamed option'
            }
          ];
        }

        if (parameters.transcriptFile) {
          parameters.transcriptFiles[0].transcriptFile = parameters.transcriptFile;
        }

        delete parameters.transcriptFile;

        finished(null, parameters, extras);
      }
    }
  };
})();
