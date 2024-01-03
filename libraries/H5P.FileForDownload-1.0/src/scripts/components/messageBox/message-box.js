import './message-box.scss';

export default class MessageBox {

  /**
   * General purpose message box.
   * @class
   * @param {object} [params] Parameters.
   * @param {string} [params.text] Text.
   */
  constructor(params = {}) {
    this.dom = document.createElement('div');
    this.dom.classList.add('h5p-file-for-download-message-box');

    const message = document.createElement('p');
    message.classList.add('h5p-file-for-download-message-box-message');
    message.innerText = params.text || MessageBox.DEFAULT_TEXT;
    this.dom.append(message);
  }

  /**
   * Get DOM.
   * @returns {HTMLElement} DOM.
   */
  getDOM() {
    return this.dom;
  }
}

/** @constant {string} DEFAULT_TEXT Default message text*/
MessageBox.DEFAULT_TEXT = 'Something important was supposed to be here.';
