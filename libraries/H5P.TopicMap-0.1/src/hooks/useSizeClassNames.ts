import { useMemo } from 'react';
import { getSizeClassNames } from '../utils/style.utils';
import { useAppWidth } from './useAppWidth';

export const useSizeClassNames = (styles: Record<string, string>): string => {
  const appWidth = useAppWidth();

  const sizeClassNames = useMemo(
    () => getSizeClassNames(styles, appWidth),
    [appWidth, styles],
  );

  return sizeClassNames;
};
