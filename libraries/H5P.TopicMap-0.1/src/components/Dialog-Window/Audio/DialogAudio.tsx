import type { H5PAudio } from 'h5p-types';
import * as React from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import { formatCopyright } from '../../../utils/dialog.utils';
import styles from './DialogAudio.module.scss';

export type DialogAudioProps = {
  audioTrack: H5PAudio;
  subtext?: string;
};

export const DialogAudio: React.FC<DialogAudioProps> = ({
  audioTrack,
  subtext,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <audio className={styles.audioPlayer} src={audioTrack.path} controls />

      {audioTrack.copyright ? (
        <p
          className={styles.copyright}
          dangerouslySetInnerHTML={{
            __html: formatCopyright(t('copyrightAudio'), audioTrack.copyright),
          }}
        />
      ) : null}

      {subtext ? (
        <div
          className={styles.subtext}
          dangerouslySetInnerHTML={{ __html: subtext }}
        />
      ) : null}
    </>
  );
};
