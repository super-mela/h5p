import { ContentUserData } from './ContentUserData';

export type UserData = {
  [contentId: string]: ContentUserData;
};
