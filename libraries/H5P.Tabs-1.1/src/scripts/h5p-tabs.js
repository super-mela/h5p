import Colors from '@services/colors';
import Dictionary from '@services/dictionary.js';
import Util from '@services/util.js';
import Content from '@components/content.js';
import Tab from '@components/tab.js';
import '@styles/h5p-tabs.scss';

export default class Tabs extends H5P.EventDispatcher {
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
      tabs: [],
      behaviour: {
        tabPlacement: 'dynamic',
        tabSpread: 70,
        colorBase: '#1a73d9',
        colorBackground: 'rgba(255, 255, 255, 0)'
      },
      l10n: {
        tab: 'tab',
        noContent: 'There is no content to be displayed.'
      },
      a11y: {
        tabList: 'Choose a tab.'
      }
    }, params);

    this.contentId = contentId;
    this.extras = extras;

    // Fill dictionary
    this.dictionary = new Dictionary();
    this.dictionary.fill({ l10n: this.params.l10n, a11y: this.params.a11y });

    // Apply dynamic color values
    Colors.setBase(this.params.behaviour.colorBase);
    const style = document.createElement('style');
    if (style.styleSheet) {
      style.styleSheet.cssText = Colors.getCSS();
    }
    else {
      style.appendChild(document.createTextNode(Colors.getCSS()));
    }
    document.head.appendChild(style);

    // Sanitize params
    this.params.tabs = this.params.tabs.filter((tab) => {
      return tab.params?.content;
    });

    this.previousState = Util.extend({
      activeTab: 0,
      doneTabs: Array.from(Array(this.params.tabs.length)),
      contents: Array.from(Array(this.params.tabs.length))
    }, extras?.previousState || {});

    const defaultLanguage = extras?.metadata?.defaultLanguage || 'en';
    this.languageTag = Util.formatLanguageCode(defaultLanguage);

    this.contentUUID = H5P.createUUID();

    this.tabs = [];
    this.contents = [];

    this.activeTab = this.previousState.activeTab;
    this.focusTab = this.activeTab;

    this.setCustomCSS();

    this.createContent();

    this.dom = this.buildDOM();
  }

  /**
   * Attach library to wrapper.
   * @param {H5P.jQuery} $wrapper Content's container.
   */
  attach($wrapper) {
    const wrapper = $wrapper.get(0);

    wrapper.classList.add('h5p-tabs');
    wrapper.classList.add(`tab-placement-${this.params.behaviour.tabPlacement}`);
    wrapper.setAttribute('id', this.contentUUID);
    wrapper.appendChild(this.dom);

    if (this.isRoot()) {
      // trigger xAPI attempted
      this.setActivityStarted();
    }

    this.activate(this.previousState.activeTab);
  }

  /**
   * Create content.
   */
  createContent() {
    this.params.tabs
      .map((tabParams, index) => {
        const uuid = H5P.createUUID();

        const content = new Content(
          {
            content: tabParams,
            contentId: this.contentId,
            uuid: uuid,
            previousState: this.previousState.contents[index]
          },
          {
            onInstantiated: () => {
              content.setDoneState(
                this.previousState.doneTabs[index] ||
                content.getInstance().getMaxScore() === 0
              );

              content.getInstance().on('xAPI', (event) => {
                this.trackScoring(event, index);
              });

              // Resize instance to fit inside parent and vice versa
              this.bubbleDown(
                this,
                'resize',
                [content.getInstance()]
              );

              this.bubbleUp(content.getInstance(), 'resize', this);

              window.requestAnimationFrame(() => {
                this.trigger('resize');
              });
            }
          }
        );

        this.contents.push(content);

        const tab = new Tab(
          {
            id: index,
            label: Util.purifyHTML(tabParams.metadata?.title || `Tab ${index}`),
            uuid: uuid
          },
          {
            onClicked: (id) => {
              this.activate(id);
            },
            onMove: (code) => {
              this.moveFocus(code);
            }
          }
        );
        this.tabs.push(tab);
      })
      .filter((content) => content !== null);
  }

  /**
   * Build DOM.
   * @returns {HTMLElement} DOM.
   */
  buildDOM() {
    const dom = document.createElement('div');
    dom.classList.add('h5p-tabs-container');

    if (!this.tabs.length) {
      dom.classList.add('h5p-tabs-message');
      dom.innerHTML = this.dictionary.get('l10n.noContent');
      return dom;
    }

    const labelUUID = H5P.createUUID();
    const label = document.createElement('div');
    label.classList.add('h5p-tabs-tabs-label');
    label.setAttribute('id', labelUUID);
    label.innerText = this.dictionary.get('a11y.tabList');
    dom.appendChild(label);

    const tabs = document.createElement('div');
    tabs.classList.add('h5p-tabs-tabs');
    tabs.setAttribute('role', 'tablist');
    tabs.setAttribute('aria-labelledby', labelUUID);

    this.tabs.forEach((button) => {
      tabs.appendChild(button.getDOM());
    });

    const contents = document.createElement('div');
    contents.classList.add('h5p-tabs-content');

    this.contents.forEach((content) => {
      contents.appendChild(content.getDOM());
    });

    dom.appendChild(tabs);

    dom.appendChild(contents);

    return dom;
  }

  /**
   * Set custom CSS.
   */
  setCustomCSS() {
    const css = `.h5p-tabs[id="${this.contentUUID}"]{\
      --color-background: ${this.params.behaviour.colorBackground};\
      --tab-spread: ${this.params.behaviour.tabSpread}%;\
    }`;

    const style = document.createElement('style');
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    }
    else {
      style.appendChild(document.createTextNode(css));
    }
    document.head.appendChild(style);
  }

  /**
   * Get task title.
   * @returns {string} Title.
   */
  getTitle() {
    return H5P.createTitle(
      this.extras?.metadata?.title || Tabs.DEFAULT_DESCRIPTION
    );
  }

  /**
   * Get description.
   * @returns {string} Description.
   */
  getDescription() {
    return Tabs.DEFAULT_DESCRIPTION;
  }

  /**
   * Get current state.
   * @returns {object|undefined} Current state.
   */
  getCurrentState() {
    if (!this.getAnswerGiven()) {
      // Ensure previous state is cleared in DB after reset
      return this.wasReset ? {} : undefined;
    }

    return {
      activeTab: this.activeTab,
      doneTabs: this.contents.map((content) => content.getDoneState()),
      contents: this.contents.map((content) => {
        return content.getInstance().getCurrentState();
      })
    };
  }

  /**
   * Get context data.
   * Contract used for confusion report.
   * @returns {object} Context data.
   */
  getContext() {
    return {
      type: this.dictionary.get('l10n.tab'),
      value: this.activeTab + 1
    };
  }

  /**
   * Track scoring of contents.
   * @param {Event} event Event.
   * @param {number} [index] Index.
   */
  trackScoring(event, index = -1) {
    if (!event || event.getScore() === null) {
      return; // Not relevant
    }

    if (index < 0 || index > this.contents.length - 1) {
      return; // Not valid
    }

    this.contents[index].setDoneState(true);
    if (this.contents.every((content) => content.getDoneState())) {
      this.handleAllContentsDone();
    }
  }

  /**
   * Handle all contents done.
   */
  handleAllContentsDone() {
    // Ensure subcontent's xAPI statement is triggered beforehand
    window.requestAnimationFrame(() => {
      const xAPIEvent = this.createXAPIEvent('completed');

      xAPIEvent.setScoredResult(this.getScore(),
        this.getMaxScore(),
        this,
        true,
        this.getScore() === this.getMaxScore()
      );

      this.trigger(xAPIEvent);
    });
  }

  /**
   * Check if result has been submitted or input has been given.
   * Column treats instances without questions as answered by default (!)
   * @returns {boolean} True, if answer was given.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-1}
   */
  getAnswerGiven() {
    return this.contents.some((content) =>
      content.getInstance().getAnswerGiven?.() || false
    );
  }

  /**
   * Get score.
   * @returns {number} Score.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-2}
   */
  getScore() {
    return this.contents.reduce((sum, content) => {
      return sum + content.getInstance().getScore?.() || 0;
    }, 0);
  }

  /**
   * Get maximum possible score.
   * @returns {number} Maximum possible score.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-3}
   */
  getMaxScore() {
    return this.contents.reduce((sum, content) => {
      return sum + content.getInstance().getMaxScore?.() || 0;
    }, 0);
  }

  /**
   * Show solutions.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-4}
   */
  showSolutions() {
    this.contents.forEach((content) => {
      content.getInstance().showSolutions?.();
    });

    this.trigger('resize');
  }

  /**
   * Reset task.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-5}
   */
  resetTask() {
    this.activate(0);

    this.wasReset = true;

    this.contents.forEach((content) => {
      content.setDoneState(content.getInstance().getMaxScore() === 0);
      content.getInstance().resetTask?.();
    });

    this.trigger('resize');
  }

  /**
   * Get xAPI data.
   * @returns {object} XAPI statement.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-6}
   */
  getXAPIData() {
    const xAPIEvent = this.createXAPIEvent('answered');

    // Not a valid xAPI value (!), but H5P uses it for reporting
    xAPIEvent.data.statement.definition.interactionType = 'compound';

    xAPIEvent.setScoredResult(this.getScore(),
      this.getMaxScore(),
      this,
      true,
      this.getScore() === this.getMaxScore()
    );

    return {
      statement: xAPIEvent.data.statement,
      children: this.getXAPIDataFromChildren(this.contents)
    };
  }

  /**
   * Create an xAPI event.
   * @param {string} verb Short id of the verb we want to trigger.
   * @returns {H5P.XAPIEvent} Event template.
   */
  createXAPIEvent(verb) {
    const xAPIEvent = this.createXAPIEventTemplate(verb);
    Util.extend(
      xAPIEvent.getVerifiedStatementValue(['object', 'definition']),
      this.getXAPIDefinition());

    return xAPIEvent;
  }

  /**
   * Get the xAPI definition for the xAPI object.
   * @returns {object} XAPI definition.
   */
  getXAPIDefinition() {
    const definition = {};

    definition.name = {};
    definition.name[this.languageTag] = this.getTitle();
    // Fallback for h5p-php-reporting, expects en-US
    definition.name['en-US'] = definition.name[this.languageTag];

    definition.description = {};
    definition.description[this.languageTag] =
      Util.stripHTML(this.getDescription());
    // Fallback for h5p-php-reporting, expects en-US
    definition.description['en-US'] = definition.description[this.languageTag];

    definition.type = 'http://adlnet.gov/expapi/activities/cmi.interaction';
    definition.interactionType = 'other';

    return definition;
  }

  /**
   * Get xAPI data from sub content types.
   * @param {H5P.ContentType[]} children H5P instances.
   * @returns {object[]} xAPI data objects used to build a report.
   */
  getXAPIDataFromChildren(children) {
    return children.map(function (child) {
      if (typeof child.getXAPIData == 'function') {
        return child.getXAPIData();
      }
    }).filter(function (data) {
      return !!data;
    });
  }

  /**
   * Bubble events from parent to children.
   * @param {object} origin Origin of Event.
   * @param {string} eventName Name of Event.
   * @param {object[]} targets Targets to trigger event on.
   */
  bubbleDown(origin, eventName, targets) {
    origin.on(eventName, function (event) {
      if (origin.bubblingUpwards) {
        return; // Prevent send event back down.
      }

      for (let i = 0; i < targets.length; i++) {
        targets[i].trigger(eventName, event);
      }
    });
  }

  /**
   * Bubble events from child to parent.
   * @param {object} origin Origin of Event.
   * @param {string} eventName Name of Event.
   * @param {object} target Target to trigger event on.
   */
  bubbleUp(origin, eventName, target) {
    origin.on(eventName, function (event) {
      // Prevent target from sending event back down
      target.bubblingUpwards = true;

      // Trigger event
      target.trigger(eventName, event);

      // Reset
      target.bubblingUpwards = false;
    });
  }

  /**
   * Move focus to different tab.
   * @param {number} id Id of tab/content to be opened.
   */
  moveFocus(id) {
    // Translate negative ids to index
    if (id < 0) {
      if (id === Tab.PREVIOUS) {
        id = (this.focusTab + this.tabs.length - 1) % this.tabs.length;
      }
      else if (id === Tab.NEXT) {
        id = (this.focusTab + 1) % this.tabs.length;
      }
      else if (id === Tab.FIRST) {
        id = 0;
      }
      else if (id === Tab.LAST) {
        id = (2 * this.tabs.length - 1) % this.tabs.length;
      }
    }

    this.focusTab = id;
    this.tabs[id].focus();
  }

  /**
   * Activate tab and content.
   * @param {number} id Id of tab/content to be opened.
   */
  activate(id) {
    // Show/hide tabs/contents as required
    for (let i = 0; i < this.tabs.length; i++) {
      if (i === id) {
        this.tabs[i].activate();
        this.contents[i].show();
      }
      else {
        this.tabs[i].deactivate();
        this.contents[i].hide();
      }
    }

    this.activeTab = id;
    this.focusTab = id;

    const xAPIEvent = this.createXAPIEvent('progressed');
    xAPIEvent.data.statement.object.definition.extensions['http://id.tincanapi.com/extension/ending-point'] = id + 1;
    this.trigger(xAPIEvent);

    this.trigger('resize');
  }
}

/** @constant {string} Default description */
Tabs.DEFAULT_DESCRIPTION = 'Tabs';
