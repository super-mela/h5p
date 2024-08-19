import type { H5PVideo } from 'h5p-types';
import * as React from 'react';
import { H5P } from '../../../h5p/H5P.util';
import { useContentId } from '../../../hooks/useContentId';
import { useTranslation } from '../../../hooks/useTranslation';
import { formatCopyright } from '../../../utils/dialog.utils';
import styles from './DialogVideo.module.scss';

export type DialogVideoProps = {
  sources: Array<H5PVideo>;
};

export const DialogVideo: React.FC<DialogVideoProps> = ({ sources }) => {
  const contentId = useContentId();
  const { t } = useTranslation();
  const videoWrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!videoWrapperRef.current) {
      return;
    }

    const $wrapper: JQuery = H5P.jQuery(videoWrapperRef.current);
    const videoLibraryName = 'H5P.Video 1.6';

    H5P.newRunnable(
      {
        library: videoLibraryName,
        params: {
          sources: [sources[0]],
          visuals: {
            controls: true,
          },
        },
      },
      contentId,
      $wrapper,
    );
  }, [contentId, sources]);

  return (
    <div className={styles.dialogVideo}>
      <div className={styles.videoWrapper} ref={videoWrapperRef} />

      {sources[0]?.copyright ? (
        <p
          className={styles.copyright}
          dangerouslySetInnerHTML={{
            __html: formatCopyright(t('copyrightVideo'), sources[0].copyright),
          }}
        />
      ) : null}
    </div>
  );
};
