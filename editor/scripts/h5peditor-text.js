/* global ns */
/**
 * Create a text field for the form.
 *
 * @param {mixed} parent
 * @param {Object} field
 * @param {mixed} params
 * @param {function} setValue
 * @returns {ns.Text}
 */
ns.Text = function (parent, field, params, setValue) {
  this.field = field;
  this.value = params;
  this.setValue = setValue;
  this.changeCallbacks = [];
};

/**
 * Append field to wrapper.
 *
 * @param {type} $wrapper
 * @returns {undefined}
 */
ns.Text.prototype.appendTo = function ($wrapper) {
  var that = this;

  this.$item = ns.$(this.createHtml()).appendTo($wrapper);
  this.$input = this.$item.find('input');
  this.$errors = this.$item.children('.h5p-errors');

  this.$input.change(function () {
    // Validate
    var value = that.validate();

    if (value !== false) {
      // Set param
      if (H5P.trim(value) === '') {
        // Avoid storing empty strings. (will be valid if field is optional)
        delete that.value;
        that.setValue(that.field);
      }
      else {
        that.value = value;
        that.setValue(that.field, ns.htmlspecialchars(value));
      }

      for (var i = 0; i < that.changeCallbacks.length; i++) {
        that.changeCallbacks[i](value);
      }
    }
  });
};

/**
 * Run callback when value changes.
 *
 * @param {function} callback
 * @returns {Number|@pro;length@this.changeCallbacks}
 */
ns.Text.prototype.change = function (callback) {
  this.changeCallbacks.push(callback);
  callback();

  return this.changeCallbacks.length - 1;
};

/**
 * Create HTML for the text field.
 */
ns.Text.prototype.createHtml = function () {
  const id = ns.getNextFieldId(this.field);
  const descriptionId = (this.field.description !== undefined ? ns.getDescriptionId(id) : undefined)
  var input = ns.createText(this.value, this.field.maxLength, this.field.placeholder, id, descriptionId);
  return ns.createFieldMarkup(this.field, input, id);
};

/**
 * Validate the current text field.
 */
ns.Text.prototype.validate = function () {
  var that = this;

  var value = H5P.trim(this.$input.val());
  var valid = true;

  // Clear errors before showing new ones
  this.$errors.html('');

  if ((that.field.optional === undefined || !that.field.optional) && !value.length) {
    this.$errors.append(ns.createError(ns.t('core', 'requiredProperty', { ':property': ns.t('core', 'textField') })));
    valid = false;
  }
  else if (value.length > this.field.maxLength) {
    this.$errors.append(ns.createError(ns.t('core', 'tooLong', { ':max': this.field.maxLength })));
    valid = false;
  }
  else if (this.field.regexp !== undefined && value.length && !value.match(new RegExp(this.field.regexp.pattern, this.field.regexp.modifiers))) {
    this.$errors.append(ns.createError(ns.t('core', 'invalidFormat')));
    valid = false;
  }

  this.$input.toggleClass('error', !valid);

  return ns.checkErrors(this.$errors, this.$input, value);
};

/**
 * Remove this item.
 */
ns.Text.prototype.remove = function () {
  this.$item.remove();
};

/**
 * When someone from the outside wants to set a value.
 *
 * @param {string} value
 */
ns.Text.prototype.forceValue = function (value) {
  this.$input.val(value).change();
};

// Tell the editor what widget we are.
ns.widgets.text = ns.Text;
