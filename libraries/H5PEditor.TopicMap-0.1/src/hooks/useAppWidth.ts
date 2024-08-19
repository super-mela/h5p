import { useContext } from 'react';
import { AppWidthContext } from '../contexts/AppWidthContext';
import { BreakpointSize } from '../types/BreakpointSize';

const breakpointSize = {
  [BreakpointSize.Large]: 1440,
  [BreakpointSize.Medium]: 1024,
  [BreakpointSize.Small]: 512,
};

export const useAppWidth = (): BreakpointSize => {
  const appWidth = useContext(AppWidthContext);

  const isLarge = appWidth > breakpointSize[BreakpointSize.Large];
  const isMedium = appWidth > breakpointSize[BreakpointSize.Medium];

  if (isLarge) {
    return BreakpointSize.Large;
  }

  if (isMedium) {
    return BreakpointSize.Medium;
  }

  return BreakpointSize.Small;
};
