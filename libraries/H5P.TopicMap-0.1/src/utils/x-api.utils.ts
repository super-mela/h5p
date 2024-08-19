import type { EventDispatcher, XAPIDefinition, XAPIVerb } from 'h5p-types';

/**
 * Get the xAPI definition for the xAPI object
 */
export const getxAPIDefinition = (): XAPIDefinition => {
  const definition: XAPIDefinition = {
    name: {
      'en-US': 'Name',
    },
    description: {
      'en-US': 'Description',
    },
    type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
    interactionType: 'fill-in',
    correctResponsesPattern: '.*',
  };

  return definition;
};

export const sendXAPIEvent = (
  verb: XAPIVerb,
  data: Record<string, unknown>,
  h5pInstance: EventDispatcher,
  contentId: string,
): void => {
  // eslint-disable-next-line no-param-reassign
  data.contentId = contentId;

  const xAPIEvent = h5pInstance.createXAPIEventTemplate(verb, data);
  xAPIEvent.getVerifiedStatementValue(['object', 'definition']);

  if (xAPIEvent.data) {
    xAPIEvent.data.statement.object.definition = {
      ...xAPIEvent.data.statement.object.definition,
      ...getxAPIDefinition(),
    };
  }

  h5pInstance.trigger(xAPIEvent);
};
