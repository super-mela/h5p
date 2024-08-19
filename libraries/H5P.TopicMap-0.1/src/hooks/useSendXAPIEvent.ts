import type { XAPIVerb } from 'h5p-types';
import { sendXAPIEvent } from '../utils/x-api.utils';
import { useContentId } from './useContentId';
import { useH5PInstance } from './useH5PInstance';

export const useSendXAPIEvent = (): {
  sendXAPIEvent: (verb: XAPIVerb, data: Record<string, unknown>) => void;
} => {
  const h5pInstance = useH5PInstance();
  const contentId = useContentId();

  return {
    sendXAPIEvent: (verb: XAPIVerb, data: Record<string, unknown>): void => {
      if (!h5pInstance) {
        console.error('H5P instance not set. Aborting sending XAPI data', {
          verb,
          data,
        });
        return;
      }

      sendXAPIEvent(verb, data, h5pInstance, contentId);
    },
  };
};
