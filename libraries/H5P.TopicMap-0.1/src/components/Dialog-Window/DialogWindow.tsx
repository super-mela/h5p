import { Close, Content, Overlay, Title } from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import * as React from 'react';
import { FC } from 'react';
import { useMedia } from 'react-use';
import { useTranslation } from '../../hooks/useTranslation';
import { CommonItemType } from '../../types/CommonItemType';
import styles from './DialogWindow.module.scss';
import { DialogNote } from './Notes/DialogNote';
import { DialogTabs } from './Tabs/DialogTabs';

export type DialogWindowProps = {
  item: CommonItemType;
};

export const DialogWindow: FC<DialogWindowProps> = React.forwardRef<HTMLDivElement, DialogWindowProps>((
  { item }, forwardedRef
) => {
  const { t } = useTranslation();
  const smallScreen = useMedia('(max-width: 768px)');

  const ariaLabel = t('closeDialog');

  if (!item.dialog) {
    return null;
  }

  const noTabItems =
    !item.description &&
    !item.topicImage &&
    !item.dialog.audio?.audioFile &&
    (!item.dialog.links ||
      item.dialog.links?.filter((link) => Boolean(link.url)).length === 0) &&
    !item.dialog.showAddLinks &&
    !item.dialog.text &&
    !item.dialog.video;

  const hasNote = item.dialog?.hasNote;

  let content = smallScreen ? (
    <Content aria-modal="true" className={styles.dialogContentSmallScreen}>
      <div className={styles.contentWrapperSmallScreen}>
        <Title className={styles.dialogTitle}>{item.label}</Title>
        {!noTabItems && <DialogTabs item={item} />}
        {noTabItems && hasNote && (
          <div className={`${styles.noteWrapper} ${styles.fullWidth}`}>
            <DialogNote
              maxLength={item.dialog.maxLength}
              id={item.id}
            />
          </div>
        )}
      </div>
      <Close className={styles.closeButton} aria-label={ariaLabel}>
        <Cross2Icon />
      </Close>
    </Content>
  ) : (
    <Content aria-modal="true" className={styles.dialogContent}>
      <div className={styles.contentWrapper}>
        <Title
          className={styles.dialogTitle}
          dangerouslySetInnerHTML={{ __html: item.label }}
        />
        {!noTabItems && <DialogTabs item={item} />}
      </div>
      <Close className={styles.closeButton} aria-label={ariaLabel}>
        <Cross2Icon />
      </Close>
    </Content>
  );

  if (hasNote && !smallScreen) {
    content = (
      <Content
        aria-modal="true"
        className={noTabItems ? styles.dialogContent : styles.dialogContentWide}
      >
        <div className={styles.contentWrapper}>
          <Title
            className={styles.dialogTitle}
            dangerouslySetInnerHTML={{ __html: item.label }}
          />
          {!noTabItems && (
            <div className={styles.tabWrapper}>
              <DialogTabs item={item} />
            </div>
          )}
          <div
            className={`${styles.noteWrapper} ${noTabItems ? styles.fullWidth : ''
            }`}
          >
            <DialogNote
              maxLength={item.dialog.maxLength}
              id={item.id}
            />
          </div>
        </div>
        <Close className={styles.closeButton} aria-label={ariaLabel}>
          <Cross2Icon />
        </Close>
      </Content>
    );
  }

  return (
    <div ref={forwardedRef}>
      <Overlay className={styles.overlay} />
      {content}
    </div>
  );
});
