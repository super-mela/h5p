import type { IH5PContentType } from 'h5p-types';
import { ContentUserData } from '../types/ContentUserData';
import { UserData } from '../types/UserData';
import { sendXAPIEvent } from './x-api.utils';

export const userDataLocalStorageKey = 'h5p-topic-map-userdata';

const getUserData = (): UserData => {
  return JSON.parse(localStorage.getItem(userDataLocalStorageKey) ?? '{}');
};

const getContentUserData = (contentId: string): ContentUserData => {
  const storedUserData = getUserData();

  if (!(contentId in storedUserData)) {
    storedUserData[contentId] = {
      dialogs: {},
    };
  }

  return storedUserData[contentId];
};

export const exportAllUserData = (
  contentId: string,
  h5pInstance: IH5PContentType,
): void => {
  const contentUserData = getContentUserData(contentId);
  sendXAPIEvent(
    'completed',
    { type: 'ALL_USER_DATA', ...contentUserData },
    h5pInstance,
    contentId,
  );
};
