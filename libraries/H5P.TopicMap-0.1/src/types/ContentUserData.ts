import { DialogData } from './DialogData';

export type ContentUserData = {
  dialogs: {
    [dialogId: string]: DialogData;
  };
};
