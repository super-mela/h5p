import type { H5PImage } from 'h5p-types';
import * as React from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import { formatCopyright } from '../../../utils/dialog.utils';
import styles from './DialogText.module.scss';

export type DialogTextProps = {
  topicImage: H5PImage | undefined;
  introduction: string | undefined;
  bodyText: string | undefined;
  topicImageAltText: string | undefined;
};

export const DialogText: React.FC<DialogTextProps> = ({
  topicImage,
  introduction,
  bodyText,
  topicImageAltText,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.dialogText}>
      {introduction ? (
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: introduction }}
        />
      ) : null}
      {topicImage ? (
        <>
          <img
            className={styles.topicImage}
            src={topicImage.path}
            alt={topicImageAltText ?? ''}
            width={topicImage.width}
            height={topicImage.height}
          />
          {topicImage?.copyright ? (
            <div
              className={styles.copyright}
              dangerouslySetInnerHTML={{
                __html: formatCopyright(
                  t('copyrightPhoto'),
                  topicImage.copyright,
                ),
              }}
            />
          ) : null}
        </>
      ) : null}

      {bodyText ? (
        <div
          className={styles.bodyText}
          dangerouslySetInnerHTML={{ __html: bodyText }}
        />
      ) : null}
    </div>
  );
};
