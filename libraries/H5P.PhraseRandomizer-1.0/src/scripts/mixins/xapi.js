import Util from '@services/util';

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
   * @param {object} [options] Options.
   * @param {boolean} [options.addResponse] If true, add response to statement.
   * @param {boolean} [options.addResult] If true, add result to statement.
   * @param {boolean} [options.addScore] If true, add score to statement.
   * @returns {H5P.XAPIEvent} Event template.
   */
  createXAPIEvent(verb, options = {}) {
    const xAPIEvent = this.createXAPIEventTemplate(verb);

    Util.extend(
      xAPIEvent.getVerifiedStatementValue(['object', 'definition']),
      this.getXAPIDefinition({ addCrp: verb === 'answered' }));

    if (verb === 'answered') {
      options.addResponse = true;
      options.addScore = true;
      options.addResult = true;
    }

    /*
     * 'responded' feels like a good verb. Used for when the user has checked
     * the answer for correctness, so this should be tracked, but when
     * 'answered' would trigger other stuff in common H5P integrations.
     */
    if (verb === 'responded') {
      options.addResponse = true;
      options.addResult = true;
    }

    if (options.addResult) {
      // Completed if all attempts used or all solutions found.
      const completion = this.attemptsLeft === 0 ||
        this.getFoundScore() === this.getFoundMaxScore();

      // Always true in free mode
      const success = this.getScore() === this.getMaxScore();

      xAPIEvent.setScoredResult(
        this.getScore(), // Question Type Contract mixin
        this.getMaxScore(), // Question Type Contract mixin
        this,
        completion,
        success
      );

      if (!options.addScore) {
        delete xAPIEvent.data.statement.result.score;
      }
    }

    if (options.addResponse) {
      let response;
      if (verb === 'responded') {
        response = this.randomizer.getResponse().join(' ');
      }
      else if (verb === 'answered') {
        const wrongAnswers = this.wrongAnswers.map((wrongAnswer) => {
          return ({
            style: 'found',
            labels: [wrongAnswer]
          });
        });

        response = [...this.foundSolutions, ...wrongAnswers]
          .map((solution) => {
            return solution.style === 'found' ?
              solution.labels.join(' ') :
              '';
          })
          .join('[,]');
      }

      xAPIEvent.data.statement.result = Util.extend(
        { response: response },
        xAPIEvent.data.statement.result || {}
      );
    }

    return xAPIEvent;
  }

  /**
   * Get the xAPI definition for the xAPI object.
   * @param {object} [options] Options.
   * @param {boolean} [options.addCrp] If true, add correct responses pattern.
   * @returns {object} XAPI definition.
   */
  getXAPIDefinition(options = {}) {
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
    // Yes. strictly, this is a 'choice' interaction
    definition.interactionType = 'fill-in';

    if (options.addCrp) {
      const wrongAnswerSlots = new Array(this.wrongAnswers.length).fill(['']);
      definition.correctResponsesPattern = [
        [...this.params.solutions, ...wrongAnswerSlots]
          .map((solution) => solution.join(' '))
          .join('[,]')
      ];
    }

    return definition;
  }

  /**
   * Get task title.
   * @returns {string} Title.
   */
  getTitle() {
    // H5P Core function: createTitle
    return H5P.createTitle(
      this.extras?.metadata?.title || XAPI.DEFAULT_DESCRIPTION
    );
  }

  /**
   * Get description.
   * Uses XAPI_PLACEHOLDER as defined by H5P Group for their reporting module.
   * @returns {string} Description.
   */
  getDescription() {
    const description = (Util.stripHTML(this.params.introduction) !== '') ?
      this.params.introduction :
      `<p>${XAPI.DEFAULT_DESCRIPTION}</p>`;

    const placeholders = this.params.solutions
      .map(() => `<li>${XAPI.RESPONSE_PLACEHOLDER}</li>`)
      .join('');

    return `${description}\n<ol>${placeholders}</ol>`;
  }
}

/** @constant {string} DEFAULT_DESCRIPTION Default description */
XAPI.DEFAULT_DESCRIPTION = 'Phrase Randomizer';

/** @constant {string} RESPONSE_PLACEHOLDER Placholder for description */
XAPI.RESPONSE_PLACEHOLDER = '__________';
