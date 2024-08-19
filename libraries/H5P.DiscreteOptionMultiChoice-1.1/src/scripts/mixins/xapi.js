import Util from '@services/util.js';

/**
 * Mixin containing methods for xapi stuff.
 */
export default class XAPI {
  /**
   * Trigger xAPI event.
   * @param {string} verb Short id of the verb we want to trigger.
   */
  triggerXAPIEvent(verb) {
    const xAPIEvent = this.createXAPIEvent(verb);
    this.trigger(xAPIEvent);
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
      this.getXAPIDefinition()
    );

    if (verb === 'completed' || verb === 'answered') {
      xAPIEvent.setScoredResult(
        this.getScore(),
        this.getMaxScore(),
        this,
        true,
        this.getScore() === this.getMaxScore()
      );

      xAPIEvent.data.statement.result.response = this.content.getXAPIResponse();
    }
    else if (verb === 'progressed') {
      xAPIEvent.data.statement.object.definition
        .extensions['http://id.tincanapi.com/extension/ending-point'] =
          this.currentAnswerIndex;
    }

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
    definition.description[this.languageTag] = this.getDescription();
    // Fallback for h5p-php-reporting, expects en-US
    definition.description['en-US'] = definition.description[this.languageTag];

    definition.type = 'http://adlnet.gov/expapi/activities/cmi.interaction';
    definition.interactionType = 'choice';

    definition.choices = this.content.getXAPIChoices();

    if (this.languageTag !== 'en-US') {
      definition.choices = definition.choices.map((choice) => {
        choice.description[this.languageTag] = choice.description['en-US'];

        choice.description['en-US'] =
          choice.description['en-US']
            .replace(/@correct/, 'correct')
            .replace(/@incorrect/, 'incorrect');

        choice.description[this.languageTag] =
          choice.description[this.languageTag]
            .replace(/@correct/, this.dictionary.get('a11y.correct'))
            .replace(/@incorrect/, this.dictionary.get('a11y.incorrect'));

        return choice;
      });
    }

    definition.correctResponsesPattern =
       this.content.getXAPICorrectResponsesPattern();

    return definition;
  }

  /**
   * Get task title.
   * @returns {string} Title.
   */
  getTitle() {
    return H5P.createTitle(
      this.extras?.metadata?.title ||
      XAPI.DEFAULT_DESCRIPTION
    );
  }

  /**
   * Get description.
   * @returns {string} Description.
   */
  getDescription() {
    return XAPI.DEFAULT_DESCRIPTION;
  }
}

/** @constant {string} DEFAULT_DESCRIPTION Default description */
XAPI.DEFAULT_DESCRIPTION = 'Discrete Option Multiple Choice';
