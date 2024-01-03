import Util from '@services/util';
import Dictionary from '@services/dictionary';
import MessageBox from '@components/messageBox/message-box';
import './h5p-file-for-download.scss';

export default class FileForDownload extends H5P.EventDispatcher {
  /**
   * @class
   * @param {object} params Parameters passed by the editor.
   * @param {number} contentId Content's id.
   * @param {object} [extras] Saved state, metadata, etc.
   */
  constructor(params, contentId, extras = {}) {
    super();

    // Sanitize parameters
    this.params = Util.extend({
      content: {}
    }, params);

    this.contentId = contentId;
    this.extras = extras;

    // Fill dictionary
    this.dictionary = new Dictionary();
    this.dictionary.fill({ l10n: this.params.l10n });

    this.params.content.downloadName =
      this.params.content.downloadName ??
      this.dictionary.get('l10n.unnamedFile') ??
      'Unnamed file';

    this.params.content.displayName =
      this.params.content.displayName ?? this.params.content.downloadName;

    this.dom = this.buildDOM();
  }

  /**
   * Attach library to wrapper.
   * @param {H5P.jQuery} $wrapper Content's container.
   */
  attach($wrapper) {
    $wrapper.get(0).classList.add('h5p-file-for-download');
    $wrapper.get(0).appendChild(this.dom);
  }

  /**
   * Build main DOM.
   * @returns {HTMLElement} Main DOM.
   */
  buildDOM() {
    const dom = document.createElement('div');
    dom.classList.add('h5p-file-for-download-main');

    // Show message if no file was provided
    if (!this.params.content.file) {
      const message = new MessageBox({
        text: this.dictionary.get('l10n.noFile')
      });
      dom.append(message.getDOM());

      return dom;
    }

    // Show optional display name
    if (this.params.content.displayName) {
      const fileName = document.createElement('div');
      fileName.classList.add('h5p-file-for-download-file-name');
      fileName.innerText = this.params.content.displayName;
      dom.append(fileName);
    }

    // Show download button
    const downloadButton = H5P.JoubelUI.createButton({
      type: 'button',
      html: this.dictionary.get('l10n.download'),
      class: 'h5p-button h5p-file-for-download-button'
    }).get(0);

    downloadButton.addEventListener('click', () => {
      this.handleDownload();
    });

    dom.append(downloadButton);

    return dom;
  }

  // Handle download
  handleDownload() {
    const anchor = document.createElement('a');
    H5P.setSource(anchor, this.params.content.file, this.contentId);
    anchor.href = anchor.src;

    anchor.download = this.params.content.downloadName ||
      anchor.href.split('/').pop();

    document.body.append(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  /**
   * Get task title.
   * @returns {string} Title.
   */
  getTitle() {
    // H5P Core function: createTitle
    return H5P.createTitle(
      this.extras?.metadata?.title || FileForDownload.DEFAULT_DESCRIPTION
    );
  }

  /**
   * Get description.
   * @returns {string} Description.
   */
  getDescription() {
    return FileForDownload.DEFAULT_DESCRIPTION;
  }
}

/** @constant {string} Default description */
FileForDownload.DEFAULT_DESCRIPTION = 'File for download';
