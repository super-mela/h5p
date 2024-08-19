import { FC } from 'react';
import { Position } from '../../types/Position';

export type ArrowIndicatorProps = {
  position: Position;
  cellSize: number;
  gapSize: number;
};

export const ArrowIndicator: FC<ArrowIndicatorProps> = ({
  position,
  cellSize,
  gapSize,
}) => {
  const placement = {
    x: (position.x - 0.5) * (cellSize + gapSize),
    y: (position.y - 0.5) * (cellSize + gapSize),
  };

  return (
    <circle
      cx={placement.x}
      cy={placement.y}
      r={cellSize / 3}
      strokeWidth="2"
      stroke="var(--theme-color-4)"
      fill="var(--theme-color-3)"
    />
  );
};
