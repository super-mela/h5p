import { Content, List, Root, Trigger } from '@radix-ui/react-tabs';
import * as React from 'react';
import { useMedia } from 'react-use';
import { useTranslation } from '../../../hooks/useTranslation';
import { CommonItemType } from '../../../types/CommonItemType';
import { DialogAudio } from '../Audio/DialogAudio';
import { DialogNote } from '../Notes/DialogNote';
import { DialogResources } from '../Resources/DialogResources';
import { DialogText } from '../Text/DialogText';
import { DialogVideo } from '../Video/DialogVideo';
import styles from './DialogTabs.module.scss';

export type TabProps = {
  item: CommonItemType;
};

type Translation = {
  audio: string;
  video: string;
  links: string;
  text: string;
};

type DialogContentInfo = {
  hasText: boolean;
  hasLinks: boolean;
  hasVideo: boolean;
  hasAudio: boolean;
};

const defaultTabValue = (item: CommonItemType) => {
  const { description, topicImage, dialog } = item;
  switch (true) {
    case dialog?.text !== '' || topicImage !== undefined || description !== '':
      return 'Text';
    case (dialog?.links &&
      dialog?.links?.filter((link) => Boolean(link.url)).length > 0) ||
      dialog?.showAddLinks:
      return 'Resources';
    case dialog?.video !== undefined:
      return 'Video';
    case dialog?.audio?.audioFile !== undefined:
      return 'Audio';
    default:
      return '';
  }
};

const tabLabelItems = (
  dialogContentInfo: DialogContentInfo,
  translation: Translation,
): JSX.Element[] => {
  const { hasText, hasLinks, hasVideo, hasAudio } = dialogContentInfo;
  const items = [];

  hasText
    ? items.push(
      <Trigger key="Text" value="Text" className={styles.trigger}>
        {translation.text}
      </Trigger>,
    )
    : null;
  hasLinks
    ? items.push(
      <Trigger key="links" className={styles.trigger} value="Resources">
        {translation.links}
      </Trigger>,
    )
    : null;
  hasVideo
    ? items.push(
      <Trigger key="video" className={styles.trigger} value="Video">
        {translation.video}
      </Trigger>,
    )
    : null;
  hasAudio
    ? items.push(
      <Trigger key="audio" className={styles.trigger} value="Audio">
        {translation.audio}
      </Trigger>,
    )
    : null;
  return items;
};

const dialogContent = (
  dialogContentInfo: DialogContentInfo,
  item: CommonItemType,
  showTabs: boolean
): JSX.Element[] | JSX.Element => {
  const { id, description, topicImage, topicImageAltText, dialog } = item;
  const { hasText, hasLinks, hasVideo, hasAudio } = dialogContentInfo;
  const items: JSX.Element[] = [];

  // Dialog text
  if (hasText) {
    const dialogText = (
      <DialogText
        topicImage={topicImage}
        topicImageAltText={topicImageAltText}
        introduction={description}
        bodyText={dialog?.text}
      />
    );

    if (showTabs) {
      items.push(
        <Content key="text" value="Text">
          {dialogText}
        </Content>
      );
    }
    else {
      return dialogText;
    }
  }

  // Dialog links
  if (hasLinks && dialog) {
    const dialogLinks = (
      <DialogResources
        relevantLinks={dialog.links}
        showAddLinks={dialog.showAddLinks}
        id={id}
      />
    );

    if (showTabs) {
      items.push(
        <Content key="links" value="Resources">
          {dialogLinks}
        </Content>
      );
    }
    else {
      return dialogLinks;
    }
  }

  // Dialog video
  if (hasVideo && dialog?.video) {
    const dialogVideo = (
      <DialogVideo sources={dialog.video} />
    );

    if (showTabs) {
      items.push(
        <Content key="video" value="Video">
          {dialogVideo}
        </Content>
      );
    }
    else {
      return dialogVideo;
    }
  }

  // Dialog audio
  if (hasAudio && dialog?.audio?.audioFile) {
    const dialogAudio = (
      <DialogAudio
        audioTrack={dialog.audio.audioFile[0]}
        subtext={dialog.audio.subtext}
      />
    );

    if (showTabs) {
      items.push(
        <Content key="audio" value="Audio">
          {dialogAudio}
        </Content>
      );
    }
    else {
      return dialogAudio;
    }
  }

  return items;
};

export const DialogTabs: React.FC<TabProps> = ({ item }) => {
  const { description, dialog, topicImage } = item;
  const smallScreen = useMedia('(max-width: 768px)');
  const { t } = useTranslation();

  const translation: Translation = {
    audio: t('copyrightAudio'),
    video: t('copyrightVideo'),
    links: t('dialogResourcesLabel'),
    text: t('dialogTextLabel'),
  };

  const showNote = dialog?.hasNote && smallScreen;

  const dialogContentInfo: DialogContentInfo = {
    hasText: !!(dialog?.text || topicImage || description),
    hasLinks:
      !!((dialog?.links &&
        dialog.links?.filter((link) => Boolean(link.url)).length > 0) ||
        dialog?.showAddLinks),
    hasVideo: !!(dialog?.video?.[0]?.path),
    hasAudio: !!(dialog?.audio?.audioFile?.[0]?.path),
  };

  // Only show tabs if there is more than one item to choose from
  const numberOfContentItems = [
    dialogContentInfo.hasText,
    dialogContentInfo.hasLinks,
    dialogContentInfo.hasVideo,
    dialogContentInfo.hasAudio,
    showNote
  ].filter(Boolean).length;
  const showTabs = numberOfContentItems > 1;

  const dialogNote = (
    <DialogNote
      maxLength={item.dialog?.maxLength}
      id={item.id}
      smallScreen
    />
  );

  return (
    <Root
      className={styles.tabs}
      defaultValue={defaultTabValue(item)}
      orientation="horizontal"
    >
      {showTabs && (
        <List
          className={styles.list}
          aria-label={t('dialogTabListAriaLabel')}
        >
          {tabLabelItems(dialogContentInfo, translation)}
          {showNote ? (
            <Trigger key="notes" className={styles.trigger} value="notes">
              {t('dialogNoteLabel')}
            </Trigger>
          ) : null}
        </List>
      )}
      <div
        className={`${styles.tabItemWrapper} ${!showTabs ? styles.marginTop : ''
        }`}
      >
        {dialogContent(dialogContentInfo, item, showTabs)}
        {showNote && (showTabs ? (
          <Content key="notes" value="notes" className={styles.noteWrapper}>
            {dialogNote}
          </Content>) : (
          dialogNote
        ))}
      </div>
    </Root>
  );
};
