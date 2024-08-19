import { BreakpointSize } from '../types/BreakpointSize';

export const getSizeClassNames = (
  styles: Record<string, string>,
  size: BreakpointSize,
): string => {
  const sizeClassname = {
    [BreakpointSize.Large]: `${styles.large} ${styles.largeUp} ${styles.mediumUp} ${styles.smallUp} ${styles.xSmallUp} ${styles.xxSmallUp}`,
    [BreakpointSize.Medium]: `${styles.medium} ${styles.mediumUp} ${styles.smallUp} ${styles.xSmallUp} ${styles.xxSmallUp}`,
    [BreakpointSize.Small]: `${styles.small} ${styles.smallUp} ${styles.xSmallUp} ${styles.xxSmallUp}`,
    [BreakpointSize.XSmall]: `${styles.xSmall} ${styles.xSmallUp} ${styles.xxSmallUp}`,
    [BreakpointSize.XXSmall]: `${styles.xxSmall} ${styles.xxSmallUp}`,
  };

  return sizeClassname[size];
};
