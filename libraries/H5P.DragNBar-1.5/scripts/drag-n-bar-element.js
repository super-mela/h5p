/*global H5P*/

/**
 * Create Drag N Bar Element. Connects a DragNBar element to a context menu
 */
H5P.DragNBarElement = (function ($, ContextMenu, EventDispatcher) {

  /**
   * Constructor DragNBarElement
   *
   * @class
   * @param {H5P.DragNBar} dragNBar Parent dragNBar toolbar
   * @param {object} [clipboardData]
   * @param {Object} [options] Button object that the element is created from
   * @param {Boolean} [options.disableContextMenu] Decides if element should have editor functionality
   * @param {Function} [options.createElement] Function for creating element from button
   * @param {Function} [options.disableCopy] Copy button disabled or enabled?
   * @param {boolean} [options.hasCoordinates] Decides if element will display coordinates
   * @param {H5P.jQuery} [options.element] Element
   */
  function DragNBarElement(dragNBar, clipboardData, options) {
    var self = this;
    EventDispatcher.call(this);

    this.dnb = dragNBar;
    this.options = options || {};
    if (!this.options.disableContextMenu) {
      this.contextMenu = new ContextMenu(this.dnb.$dialogContainer, this, this.options.hasCoordinates, this.options.disableResize, this.options.disableCopy, this.options.directionLock);
    }
    this.params = { action: { library: '' } };
    this.ct = {};
    this.ct.params = {};

    // var library = new H5P.MyLibrary({
    //   params: {
    //     action: this.params.action,
    //     elementsOverride: {}
    //   }
    // });

    // // Ensure elementParams is defined
    // var elementParams = elementParams || { action: { library: '' } };

    // // if (library && library.library) {
    //   // var libraryName = library.library;
    //   // console.log("Library Name:", libraryName);
    // // }
    // // Check if the element is of type Continuous Text
    // var machineName;
    // if (this.params && this.params.action && this.params.action.library) {
    //   var machineName = H5P.libraryFromString(this.params.action.library).machineName;
    //   console.log('Library name:', machineName);
    // } else {
    //   console.log('Library name is not defined');
    // }

    this.focused = false;

    if (this.options.createElement) {
      this.$element = this.options.createElement().appendTo(dragNBar.$container);
      this.focus();
    }
    else {
      this.$element = this.options.element;
    }



    // Let dnb know element has been pressed
    if (this.$element) {
      if (this.dnb.isEditor) {
        this.$element.mousedown(function () {
          self.dnb.pressed = true;
        });
      }

      // Run custom focus function on element focus
      this.$element.focus(function () {
        self.focus();
      });
    }
    this.$element.attr('contenteditable', true);
    // Initialize CKEditor on click
    this.$element.on('click', function () {
      if (!CKEDITOR.instances[self.$element.attr('id')]) {
        if (self.$element && self.$element.length) {
          CKEDITOR.inline(self.$element.get(0));
          console.log('self element', self.$element);
          // Minimize the width and put the editor at the top
          // self.$element.css({
          //   'position': 'absolute',
          //   'top': '10px',
          //   'left': '10px'
          // });
        }
      }

      //   // // Check if H5P.ContinuousText.Editor is defined and is a function
      //   // if (typeof H5P.ContinuousText.Editor === 'function') {
      //   //   // Initialize cpEditor if not already initialized
      //   //   if (typeof cpEditor === 'undefined') {
      //   //     cpEditor = new H5P.ContinuousText(); // Placeholder for actual initialization
      //   //   }

      //   //   // Ensure cpEditor is defined and has the getCTs method
      //   //   if (typeof cpEditor !== 'undefined' && typeof cpEditor.getCTs === 'function') {
      //   //     H5P.ContinuousText.Engine.run(this);
      //   //   } else {
      //   //     console.error('cpEditor is not defined or does not have the getCTs method.');
      //   //   }
      //   // } else {
      //   //   console.error('H5P.ContinuousText.Editor is not a constructor.');
      //   // }
    });

    /**
     * Store element paramets in the local storage.
     */
    self.toClipboard = function (width, height) {
      if (clipboardData && localStorage) {
        clipboardData.width = width;
        clipboardData.height = height;
        H5P.setClipboard(clipboardData);
      }
    };
  }

  // Inheritance
  DragNBarElement.prototype = Object.create(EventDispatcher.prototype);
  DragNBarElement.prototype.constructor = DragNBarElement;

  /**
   * Add button to context menu.
   *
   * @param {string} name
   * @param {string} label
   */
  DragNBarElement.prototype.addButton = function (name, label) {
    this.contextMenu.addToMenu({ name: name, label: label });
  };

  /**
   * Get element
   * @returns {H5P.jQuery}
   */
  DragNBarElement.prototype.getElement = function () {
    return this.$element;
  };

  /**
   * Set element
   * @param {H5P.jQuery} $element
   */
  DragNBarElement.prototype.setElement = function ($element) {
    var self = this;
    this.$element = $element;

    // Register custom focus function on new element focus
    this.$element.focus(function () {
      self.focus();
    });
  };

  /**
   * Show context menu
   */
  DragNBarElement.prototype.showContextMenu = function () {
    if (this.contextMenu) {
      this.contextMenu.attach();
    }
  };

  /**
   * Hide context menu
   */
  DragNBarElement.prototype.hideContextMenu = function () {
    if (this.contextMenu) {
      this.contextMenu.detach();
    }
  };

  /**
   * Update coordinates in context menu to current location
   *
   * @param {Number} left Left position of context menu
   * @param {Number} top Top position of context menu
   * @param {Number} x X coordinate of context menu
   * @param {Number} y Y coordinate of context menu
   */
  DragNBarElement.prototype.updateCoordinates = function (left, top, x, y) {
    if (this.contextMenu) {
      this.contextMenu.updateCoordinates(left, top, x, y);
      this.resizeContextMenu(x);
    }
  };

  /**
   * Float context menu left if width exceeds parent container.
   *
   * @param {Number} [left] Left position of context menu.
   */
  DragNBarElement.prototype.resizeContextMenu = function (left) {
    if (this.options.disableContextMenu) {
      return;
    }

    // Need to take into account the left padding of the contextmenu's parent
    var paddingLeft = Number(this.contextMenu.$parent.css('padding-left').replace('px', ''));
    left = (left || this.$element.position().left) + paddingLeft;
    var containerWidth = this.dnb.$container.width();
    var $cm = this.contextMenu.$contextMenu;

    // Measure full outer width
    $cm.css({
      position: 'absolute',
      left: 0
    });
    var contextMenuWidth = $cm.outerWidth(true);

    // Reset to default
    $cm.css({
      position: '',
      left: left
    });

    var isTooWide = left + contextMenuWidth >= containerWidth;

    if (isTooWide) {
      var newLeft = left - contextMenuWidth;
      this.contextMenu.$contextMenu.css('left', newLeft + 'px');
      this.contextMenu.$contextMenu.addClass('left-aligned');
    }
    else {
      this.contextMenu.$contextMenu.removeClass('left-aligned');
    }
  };

  /**
   * Blur element and hide context menu.
   */
  DragNBarElement.prototype.blur = function () {
    if (this.$element) {
      this.$element.removeClass('focused');
      this.focused = false;

      if (!this.options.disableContextMenu) {
        // Hide transform panel
        this.contextMenu.trigger('contextMenuTransform', { showTransformPanel: false });
      }
    }
    this.hideContextMenu();
  };

  /**
   * Focus element
   */
  DragNBarElement.prototype.focus = function () {
    this.$element.addClass('focused');
    this.focused = true;
    if (this.contextMenu) {
      this.resizeContextMenu(this.$element.position().left);
    }
  };

  /**
   * Remove element and hide context menu
   */
  DragNBarElement.prototype.removeElement = function () {
    this.$element.detach();
    this.hideContextMenu();
  };

  return DragNBarElement;

})(H5P.jQuery, H5P.DragNBarContextMenu, H5P.EventDispatcher);
