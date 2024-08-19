import { FC } from 'react';
import styles from './ArrowParts.module.scss';

const bodySizePercentage = 38;
const bodyPositionPercentage = (100 - bodySizePercentage) / 2;

export const ArrowBody: FC = (): JSX.Element => {
  return (
    <svg
      className={styles.bodyHorizontal}
      viewBox="0 0 1 40"
      preserveAspectRatio="none"
    >
      <rect
        x="0"
        y={`${bodyPositionPercentage}%`}
        width="100%"
        height={`${bodySizePercentage}%`}
      />
    </svg>
  );
};

export const ArrowBodyVertical: FC = (): JSX.Element => {
  return (
    <svg
      className={styles.bodyVertical}
      viewBox="0 0 1 40"
      preserveAspectRatio="none"
    >
      <rect
        x={`${bodyPositionPercentage}%`}
        y="0"
        width={`${bodySizePercentage}%`}
        height="100%"
      />
    </svg>
  );
};

export const ArrowHead: FC = (): JSX.Element => {
  return (
    <svg
      className={styles.headHorizontal}
      viewBox="0 0 20 40"
      preserveAspectRatio="xMidYMid"
    >
      <polygon points="0,0 0,40 20,20" />
    </svg>
  );
};

export const ArrowHeadVertical: FC = (): JSX.Element => {
  return (
    <svg
      className={styles.headVertical}
      viewBox="0 0 40 20"
      preserveAspectRatio="xMidYMid"
    >
      <polygon points="0,0 40,0 20,20" />
    </svg>
  );
};

export const MirroredArrowHead: FC = (): JSX.Element => {
  return (
    <svg
      className={`${styles.headHorizontal} ${styles.mirrorX}`}
      viewBox="0 0 20 40"
      preserveAspectRatio="xMidYMid"
    >
      <polygon points="0,0 0,40 20,20" />
    </svg>
  );
};

export const MirroredArrowHeadVertical: FC = (): JSX.Element => {
  return (
    <svg
      className={`${styles.headVertical} ${styles.mirrorY}`}
      viewBox="0 0 40 20"
      preserveAspectRatio="xMidYMid"
    >
      <polygon points="0,0 40,0 20,20" />
    </svg>
  );
};
