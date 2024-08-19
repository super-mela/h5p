import '@styles/h5peditor-datetime.scss';
import Util from './util.js';

export default class DateTime {

  /**
   * Uses the DatePicker provided by H5P core in order to keep visual style
   * consistent and to save ressources. Could as well be installed from npm:
   * https://www.npmjs.com/package/zebra_datepicker Mind the GPL though.
   *
   * Uses a text field only. JavaScript's `Date` function seems to work well
   * enough, so we do not need to either store the format string, the language
   * code or the timestamp.
   *
   * TODO: Improve Zebra DataPicker to support timezones.
   * @class
   * @param {object} parent Parent element in semantics.
   * @param {object} field Semantics field properties.
   * @param {object} params Parameters entered in editor form.
   * @param {function} setValue Callback to set parameters.
   */
  constructor(parent, field = {}, params, setValue) {
    this.parent = parent;
    this.field = field;
    this.params = params;
    this.setValue = setValue;

    if (this.field?.type !== 'text') {
      console.warn('The DateTime widget needs to be used with a text field');
      return;
    }

    // Callbacks to call when parameters change
    this.changes = [];

    // Let parent handle ready callbacks of children
    this.passReadies = true;

    // DOM
    this.$container = H5P.jQuery('<div>', { class: 'h5peditor-datetime' });

    // Instantiate original field (or create your own and call setValue)
    this.fieldInstance = new H5PEditor.widgets[this.field.type](this.parent, this.field, this.params, this.setValue);
    this.fieldInstance.appendTo(this.$container);

    this.inputField = this.fieldInstance.$input.get(0);

    // Get browser language dependent strings for months, weekdays, etc.
    this.localization = this.getLocalization(navigator.language);

    // Zebra date picker could be customized in semantics.json
    this.field.datetime = Util.extend({
      zebraOptions: {
        direction: true, // Only today and future dates
        days: this.localization.weekdays,
        months: this.localization.months,
        show_select_today: H5PEditor.t('H5PEditor.DateTime', 'today'),
        lang_clear_date: H5PEditor.t('H5PEditor.DateTime', 'clearDate'),
        format: this.localization.dateTimePattern,
        onClose: () => {
          this.handleDateChanged();
        },
        onSelect: () => {
          this.handleDateChanged();
        },
        onClear: () => {
          this.handleDateChanged();
        }
      }
    }, this.field.datetime || {});

    // Convert stored ISO8601 value to local format for date picker
    this.inputField.value = this.toLocalFormat(this.params);

    // Instantiate date picker
    if ((H5P.jQuery(this.inputField)).Zebra_DatePicker) {
      this.initZebraDatePicker();
    }
    else {
      this.loadDatePickerLib(() => {
        this.initZebraDatePicker();
      });
    }

    // Relay changes
    if (this.fieldInstance.changes) {
      this.fieldInstance.changes.push(() => {
        this.handleFieldChange();
      });
    }

    // Errors (or add your own)
    this.$errors = this.$container.find('.h5p-errors');
  }

  /**
   * Append field to wrapper. Invoked by H5P core.
   * @param {H5P.jQuery} $wrapper Wrapper.
   */
  appendTo($wrapper) {
    this.$container.appendTo($wrapper);
  }

  /**
   * Validate current values. Invoked by H5P core.
   * @returns {boolean} True, if current value is valid, else false.
   */
  validate() {
    const isoValue = (this.inputField?.value ?? '') === '' ?
      '' :
      this.toISOString(this.inputField.value);

    this.setValue(this.field, isoValue);

    return this.fieldInstance.validate();
  }

  /**
   * Remove self. Invoked by H5P core.
   */
  remove() {
    this.$container.remove();
  }

  /**
   * Handle change of field.
   */
  handleFieldChange() {
    this.params = this.fieldInstance.params;
    this.changes.forEach((change) => {
      change(this.params);
    });
  }

  /**
   * Handle date from Zebre date picker changed.
   */
  handleDateChanged() {
    const isoValue = (this.inputField?.value ?? '') === '' ?
      '' :
      this.toISOString(this.inputField.value);

    this.setValue(this.field, isoValue);

    // Trigger storing the value
    H5P.jQuery(this.inputField).change();
  }

  /**
   * Load datepicker library from H5P editor core.
   * @param {function} callback Callback.
   */
  loadDatePickerLib(callback) {
    H5P.jQuery.ajax({
      url: `${H5PEditor.basePath}libs/zebra_datepicker.min.js`,
      dataType: 'script',
      success: callback,
      error: (response, error) => {
        console.warn(`${this.getTitle()}: error loading libraries. ${error}`);
      },
      async: true
    });
  }

  // Initialize Zebra date picker.
  initZebraDatePicker() {
    /*
     * The icon position will be computed by Zebra date picker before the
     * input field is attached to the DOM, so the height would be off.
     */
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio === 1) {
        this.observer.unobserve(this.inputField); // Only need instantiate once.

        const wrapper = this.inputField?.parentNode;
        if (!wrapper) {
          return;
        }

        const icon = wrapper.querySelector('.Zebra_DatePicker_Icon');
        if (!icon) {
          return;
        }

        wrapper.style.display = 'inline-block';
        wrapper.style.position = 'relative';
        wrapper.style.float = 'none';

        icon.style.top = `${(this.inputField.offsetHeight - icon.offsetHeight) / 2}px`;
        icon.style.right = '10px';
      }
    }, {
      root: document.documentElement,
      threshold: [1]
    });
    this.observer.observe(this.inputField);

    // Instantiate Zebra date picker
    H5P.jQuery(this.inputField).Zebra_DatePicker(
      this.field.datetime.zebraOptions
    );
  }

  /**
   * Get simplified date pattern for language code.
   * @param {string} [languageCode] Language code.
   * @returns {string} Date pattern for language code.
   */
  getDatePattern(languageCode = navigator.language) {
    var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formatter = new Intl.DateTimeFormat(languageCode, options)
      .formatToParts();

    return formatter.map((entry) => {
      if (entry.type === 'month') {
        return 'm';
      }
      else if (entry.type === 'day') {
        return 'd';
      }
      else if (entry.type === 'year') {
        return 'Y';
      }
      else {
        return entry.value;
      }
    }).join('');
  }

  /**
   * Convert date string from date picker to ISO string.
   * @param {string} timeString Time string.
   * @returns {string} ISO8601 string.
   */
  toISOString(timeString) {
    if (typeof timeString !== 'string') {
      return timeString; // No string we can work with
    }

    const yearPattern = this.localization.dateTimePattern
      .replace('d', '\\d+').replace('Y', '(\\d+)').replace('m', '\\d+')
      .replace('H', '\\d+').replace('i', '\\d+').replace('s', '\\d+');

    const monthPattern = this.localization.dateTimePattern
      .replace('d', '\\d+').replace('Y', '\\d+').replace('m', '(\\d+)')
      .replace('H', '\\d+').replace('i', '\\d+').replace('s', '\\d+');

    const dayPattern = this.localization.dateTimePattern
      .replace('d', '(\\d+)').replace('Y', '\\d+').replace('m', '\\d+')
      .replace('H', '\\d+').replace('i', '\\d+').replace('s', '\\d+');

    const hoursPattern = this.localization.dateTimePattern
      .replace('d', '\\d+').replace('Y', '\\d+').replace('m', '\\d+')
      .replace('H', '(\\d+)').replace('i', '\\d+').replace('s', '\\d+');

    const minutesPattern = this.localization.dateTimePattern
      .replace('d', '\\d+').replace('Y', '\\d+').replace('m', '\\d+')
      .replace('H', '\\d+').replace('i', '(\\d+)').replace('s', '\\d+');

    const secondsPattern = this.localization.dateTimePattern
      .replace('d', '\\d+').replace('Y', '\\d+').replace('m', '\\d+')
      .replace('H', '\\d+').replace('i', '\\d+').replace('s', '(\\d+)');

    const date = new Date(
      parseInt(timeString.match(new RegExp(yearPattern))[1]),
      parseInt(timeString.match(new RegExp(monthPattern))[1]) - 1,
      parseInt(timeString.match(new RegExp(dayPattern))[1]),
      parseInt(timeString.match(new RegExp(hoursPattern))[1]),
      parseInt(timeString.match(new RegExp(minutesPattern))[1]),
      parseInt(timeString.match(new RegExp(secondsPattern))[1])
    );

    if (date.toString() === 'Invalid Date') {
      return timeString; // No string we can work with
    }

    return date.toISOString();
  }

  /**
   * Get local names of months and weekdays plus format string.
   * Language strings could as well be set in translation file, but this way
   * we can support them out of the box :-)
   * @param {string} [languageCode] Language code.
   * @returns {object} Months and weekdays.
   */
  getLocalization(languageCode = navigator.language) {
    const months = [];
    const intlMonths = new Intl.DateTimeFormat(
      languageCode, { month: 'long' });
    for (let i = 0; i < 12; i++) {
      months.push(intlMonths.format(new Date(2000, i, 1)));
    }

    const weekdays = [];
    const intlWeekdays = new Intl.DateTimeFormat(
      languageCode, { weekday: 'long' });
    for (let i = 2; i < 9; i++) {
      weekdays.push(intlWeekdays.format(new Date(2000, 0, i)));
    }

    const datePattern = this.getDatePattern(languageCode);

    return {
      months: months,
      weekdays: weekdays,
      datePattern: datePattern,
      dateTimePattern: `${datePattern} H:i:s`
    };
  }

  /**
   * Convert ISO8601 to local string.
   * @param {string} isoValue Date in ISO8601 format.
   * @returns {string} Local string for date picker.
   */
  toLocalFormat(isoValue) {
    if ((isoValue ?? '') === '') {
      return '';
    }

    const date = new Date(isoValue);

    return this.localization.dateTimePattern
      .replace('Y', `${date.getFullYear()}`.padStart(4, '0'))
      .replace('m', `${date.getMonth() + 1}`.padStart(2, '0'))
      .replace('d', `${date.getDate()}`.padStart(2, '0'))
      .replace('H', `${date.getHours()}`.padStart(2, '0'))
      .replace('i', `${date.getMinutes()}`.padStart(2, '0'))
      .replace('s', `${date.getSeconds()}`.padStart(2, '0'));
  }
}
