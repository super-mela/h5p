import * as React from 'react';
import { FC } from 'react';
import { useAppWidth } from '../../hooks/useAppWidth';
import { useContentId } from '../../hooks/useContentId';
import { useLocalStorageUserData } from '../../hooks/useLocalStorageUserData';
import { useSizeClassNames } from '../../hooks/useSizeClassNames';
import { NoteButtonIconState } from '../../types/NoteButtonIconState';
import { TopicMapItemType } from '../../types/TopicMapItemType';
import { GridDimensions } from '../Grid/Grid';
import { NoteButton } from '../NoteButton/NoteButton';
import styles from './TopicMapItem.module.scss';
import { getNoteStateText } from '../../utils/note.utils';
import { useTranslation } from '../../hooks/useTranslation';
import { Portal, Root, Trigger } from '@radix-ui/react-dialog';
import { DialogWindow } from '../Dialog-Window/DialogWindow';
import { useH5PInstance } from '../../hooks/useH5PInstance';

export type TopicMapItemProps = {
  item: TopicMapItemType;
  grid?: GridDimensions;
  gridRef?: React.RefObject<HTMLDivElement>;
};

export const TopicMapItem: FC<TopicMapItemProps> = ({
  item,
  grid,
  gridRef,
}) => {
  const { t } = useTranslation();
  const h5pInstance = useH5PInstance();
  const contentId = useContentId();
  const [userData] = useLocalStorageUserData();

  const appWidth = useAppWidth();
  const buttonElement = React.useRef<HTMLButtonElement>(null);
  const [strokeWidth, setStrokeWidth] = React.useState(4);

  const sizeClassNames = useSizeClassNames(styles);
  const className = [styles.topicMapItem, sizeClassNames].join(' ');

  const [dialogOpen, setDialogOpen] = React.useState(false);

  React.useEffect(() => {
    if (gridRef) {
      const gridElement = gridRef.current;
      if (grid && gridElement) {
        setStrokeWidth((gridElement.clientWidth / grid.numberOfColumns) * 0.66);
      }
    }
  }, [appWidth, grid, gridRef, buttonElement]);

  let btnState: NoteButtonIconState = NoteButtonIconState.Default;
  if (item.dialog?.hasNote) {
    const dialogData = userData[contentId]?.dialogs[item.id];

    switch (true) {
      case dialogData?.noteDone:
        btnState = NoteButtonIconState.Done;
        break;
      case dialogData?.note && dialogData?.note?.length > 0:
        btnState = NoteButtonIconState.Notes;
        break;
      default:
        btnState = NoteButtonIconState.Default;
    }
  }

  return (
    <div className={styles.topicMapItemContainer}>
      <Root open={dialogOpen} onOpenChange={setDialogOpen}>
        <Trigger asChild>
          <button
            type="button"
            className={className}
            onClick={() => setDialogOpen(true)}
            ref={buttonElement}
          >
            {item.topicImage?.path && (
              <img
                className={styles.image}
                src={item.topicImage.path}
                alt={item.topicImageAltText ?? ''}
                width={item.topicImage.width}
                height={item.topicImage.height}
              />
            )}

            <div
              className={`${styles.inner} ${item.topicImage?.path ? '' : styles.noImage
              } ${item.dialog?.hasNote ? styles.withNote : ''}`}
              style={{ paddingTop: strokeWidth * 0.66 }}
            >
              <div
                className={styles.label}
                dangerouslySetInnerHTML={{ __html: item.label }}
              />
              {item.description && (
                <div
                  className={styles.description}
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              )}
              {item.dialog?.hasNote && <span className={styles.visuallyHidden}>{getNoteStateText(btnState, t)}</span>}
            </div>
          </button>
        </Trigger>

        {item.dialog?.hasNote ? (
          <div className={styles.topicMapItemIconEdit}>
            <div className={styles.icon}>
              <NoteButton
                backgroundColor="var(--theme-color-3)"
                borderColor="white"
                iconColor="white"
                buttonState={btnState}
                strokeWidth={strokeWidth}
              />
            </div>
          </div>
        ) : (
          ''
        )}
        <Portal container={h5pInstance?.containerElement}>
          <DialogWindow item={item} />
        </Portal>
      </Root>
    </div>
  );
};
