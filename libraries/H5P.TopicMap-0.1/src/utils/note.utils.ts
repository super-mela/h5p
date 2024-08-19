import { NoteButtonIconState } from '../types/NoteButtonIconState';
import { TranslationKey } from '../types/TranslationKey';

export const getNoteStateText = (
  state: NoteButtonIconState, 
  t: (key: TranslationKey) => string,
): string => {
  // We add a punctuation mark at the start of the string, to make sure there's
  // a reading pause before the note status text is read.
  switch (state) {
    case NoteButtonIconState.Done:
      return `. ${t('noteStatusDoneDescriptiveText')}`;
    case NoteButtonIconState.Notes:
    case NoteButtonIconState.Text:
      return `. ${t('noteStatusStartedDescriptiveText')}`;
    case NoteButtonIconState.Default:
      return `. ${t('noteStatusDefaultDescriptiveText')}`;
    case NoteButtonIconState.None:
      return '';
  }
};
