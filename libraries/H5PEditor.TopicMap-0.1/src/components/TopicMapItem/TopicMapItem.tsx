import { getImageUrl } from 'h5p-utils';
import { FC, useMemo } from 'react';
import { useAppWidth } from '../../hooks/useAppWidth';
import { BreakpointSize } from '../../types/BreakpointSize';
import { TopicMapItemType } from '../../types/TopicMapItemType';
import styles from './TopicMapItem.module.scss';

type TopicMapItemTypeWithoutPositions = Omit<
  TopicMapItemType,
  | 'xPercentagePosition'
  | 'yPercentagePosition'
  | 'widthPercentage'
  | 'heightPercentage'
>;

const sizeClassname = {
  [BreakpointSize.Large]: styles.large,
  [BreakpointSize.Medium]: styles.medium,
  [BreakpointSize.Small]: styles.small,
};

export type TopicMapItemProps = {
  item: TopicMapItemTypeWithoutPositions;
};

export const TopicMapItem: FC<TopicMapItemProps> = ({ item }) => {
  const imageUrl = getImageUrl(item.topicImage?.path);
  const AppWidth = useAppWidth();

  const className = useMemo(
    () => [styles.topicMapItem, sizeClassname[AppWidth]].join(' '),
    [AppWidth],
  );

  return (
    <div className={className}>
      {item.topicImage && imageUrl && (
        <img
          className={styles.image}
          src={imageUrl}
          alt={item.topicImageAltText ?? ''}
          width={item.topicImage.width}
          height={item.topicImage.height}
        />
      )}

      <div
        className={`${styles.inner} ${
          item.topicImage?.path ? '' : styles.noImage
        }`}
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
      </div>
    </div>
  );
};
