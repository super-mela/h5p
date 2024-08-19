import { ArrowType } from './ArrowType';
import { CommonItemType } from './CommonItemType';
import { Position } from './Position';

export type ArrowItemType = CommonItemType & {
  /** The arrow type */
  arrowType: ArrowType;

  startElementId: string;
  endElementId: string;

  startPosition: Position;
  endPosition: Position;

  breakpoints: Position[] | null;
  relativeBreakpoints: Position[] | null;
};
