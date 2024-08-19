import * as React from 'react';
import { useContentId } from '../../../hooks/useContentId';
import { useLocalStorageUserData } from '../../../hooks/useLocalStorageUserData';
import { useSendXAPIEvent } from '../../../hooks/useSendXAPIEvent';
import { useTranslation } from '../../../hooks/useTranslation';
import { useH5PInstance } from '../../../hooks/useH5PInstance';
import { createLinksFromString } from '../../../utils/link.utils';
import styles from './DialogNote.module.scss';

export type NoteProps = {
  maxLength: number | undefined;
  id: string;
  smallScreen?: boolean;
};

export const DialogNote: React.FC<NoteProps> = ({
  maxLength,
  id,
  smallScreen,
}) => {
  const contentId = useContentId();
  const h5pInstance = useH5PInstance();
  const [userData, setUserData] = useLocalStorageUserData();
  const { t } = useTranslation();

  const [note, setNote] = React.useState(
    userData[contentId]?.dialogs[id]?.note ?? '',
  );
  const [dynamicSavingText, setDynamicSavingText] = React.useState('');
  const [savingTextTimeout, setSavingTextTimeout] = React.useState<number>();
  const [noteDone, setMarkedAsDone] = React.useState(
    userData[contentId]?.dialogs[id]?.noteDone ?? false,
  );
  const [characterCount, setCharacterCount] = React.useState(0);
  const maxLengthExceeded = maxLength ? characterCount > maxLength : false;
  const characterCountText =
    t('noteCharacterCountDescriptiveText')
      .replace('@count', characterCount.toString())
      .replace('@max', maxLength?.toString() ?? ''); // We only show this text when `maxLength` is set.

  const { sendXAPIEvent } = useSendXAPIEvent();

  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
  const mirroredTextareaRef = React.useRef<HTMLDivElement>(null);
  const mirroredTextareaWrapperRef = React.useRef<HTMLDivElement>(null);

  const noteTextareaID = `note-textarea_${id}`;
  const noteCheckboxID = `note-checkbox_${id}`;
  const noteTextareaDescriptionID = `note-textarea-description_${id}`;
  const textareaDescription = t('noteTextareaDescriptiveText').replace('@max', maxLength?.toString() ?? '');

  const handleNoteDone = (): void => {
    if (!userData[contentId]) {
      userData[contentId] = { dialogs: {} };
    }

    if (!userData[contentId]?.dialogs[id]) {
      userData[contentId].dialogs[id] = {};
    }

    userData[contentId].dialogs[id].noteDone = !noteDone;

    setMarkedAsDone(!noteDone);
    setUserData(userData);

    sendXAPIEvent('completed', {
      itemId: id,
      note,
      completed: userData[contentId]?.dialogs[id].noteDone ?? false,
    });
  };

  const setSavingText = (): void => {
    setDynamicSavingText(t('dialogNoteSaving'));
    setSavingTextTimeout(
      window.setTimeout(() => {
        const timestamp = new Date();
        const localTime = timestamp.toLocaleTimeString(
          window.navigator.language,
          {
            hour: '2-digit',
            minute: '2-digit',
          },
        );
        setDynamicSavingText(`${t('dialogNoteSaved')} ${localTime}`);

        sendXAPIEvent('answered', {
          itemId: id,
          note,
        });
      }, 650),
    );
  };

  const countCharacters = React.useCallback((): void => {
    const count = note.valueOf().length;
    setCharacterCount(count);
  }, [maxLength, note, savingTextTimeout]);

  const handleSetUserData = (note: string): void => {
    if (!userData[contentId]) {
      userData[contentId] = { dialogs: {} };
    }
    if (!userData[contentId]?.dialogs[id]) {
      userData[contentId].dialogs[id] = {};
    }

    userData[contentId].dialogs[id].note = note;
    setUserData(userData);
  };

  const resizeMirroredTextarea = (): void => {
    if (!textAreaRef.current || !mirroredTextareaWrapperRef.current || !mirroredTextareaRef.current) {
      return;
    }
    const textArea = textAreaRef.current;
    const mirroredTextarea = mirroredTextareaRef.current;
    const mirroredTextareaWrapper = mirroredTextareaWrapperRef.current;

    mirroredTextarea.style.height = `${textArea.scrollHeight}px`;
    mirroredTextareaWrapper.style.width = `${textArea.clientWidth}px`;
    mirroredTextareaWrapper.style.height = `${textArea.clientHeight}px`;
  };

  const updateMirroredTextarea = (): void => {
    if (!textAreaRef.current || !mirroredTextareaRef.current) {
      return;
    }
    const textArea = textAreaRef.current;
    const mirroredTextarea = mirroredTextareaRef.current;

    mirroredTextarea.innerHTML = createLinksFromString(textArea.value);

    resizeMirroredTextarea();
  };

  const onChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const newValue = target.value;

    updateMirroredTextarea();
    setSavingText();
    setNote(newValue);
    handleSetUserData(newValue);

    if (maxLength) {
      countCharacters();
    }
  };

  const onScroll = (): void => {
    if (!textAreaRef.current || !mirroredTextareaWrapperRef.current) {
      return;
    }
    const textArea = textAreaRef.current;
    const mirroredTextareaWrapper = mirroredTextareaWrapperRef.current;

    mirroredTextareaWrapper.scrollTop = textArea.scrollTop;
    mirroredTextareaWrapper.scrollLeft = textArea.scrollLeft;
  };

  React.useEffect(() => {
    if (textAreaRef.current) {
      updateMirroredTextarea();
    }
  }, [textAreaRef]);

  h5pInstance?.on('resize', () => {
    window.requestAnimationFrame(() => {
      resizeMirroredTextarea();
    });
  });

  return (
    <form>
      <div className={styles.topGroup}>
        <label htmlFor={noteTextareaID}>
          <p className={!smallScreen ? styles.noteLabel : styles.visuallyHidden}>{t('dialogNoteLabel')}</p>
        </label>
        <p className={styles.dynamicSavingText}>{dynamicSavingText}</p>
      </div>
      <div className={`${styles.textAreaWrapper} ${maxLengthExceeded ? styles.lengthExceeded : ''}`}>
        <textarea
          className={styles.textArea}
          id={noteTextareaID}
          ref={textAreaRef}
          aria-describedby={maxLength ? noteTextareaDescriptionID : undefined}
          placeholder={t('dialogNotePlaceholder')}
          onChange={(event) => onChange(event)}
          onScroll={onScroll}
          defaultValue={note}
          maxLength={maxLength}
        />
        <div
          ref={mirroredTextareaWrapperRef}
          className={styles.textareaMirrorWrapper}
        >
          <div
            ref={mirroredTextareaRef}
            className={styles.textareaMirror}
          />
        </div>
        {maxLength && (
          <span id={noteTextareaDescriptionID} className={styles.visuallyHidden}>{textareaDescription}</span>
        )}
        <div className={styles.bottomGroup}>
          <div className={styles.markAsDoneCheckbox}>
            <label htmlFor={noteCheckboxID}>
              <input
                id={noteCheckboxID}
                type="checkbox"
                checked={noteDone}
                onChange={handleNoteDone}
              />
              {t('dialogNoteMarkAsDone')}
            </label>
          </div>
          {maxLength && (
            <div className={`${styles.counter} ${maxLengthExceeded ? styles.redText : ''}`}>
              <span data-testid={`testId-note-characterCount_${id}`} aria-hidden="true">{characterCount}</span>
              <span aria-hidden="true"> / </span>
              <span data-testid={`testId-note-maximum_${id}`} aria-hidden="true">{maxLength}</span>
              <span className={styles.visuallyHidden}>{characterCountText}</span>
            </div>
          )}
        </div>
        <div aria-live="polite" className={styles.visuallyHidden}>
          {maxLengthExceeded ? t('dialogNoteLimitExceeded') : ''}
        </div>
      </div>
    </form>
  );
};
