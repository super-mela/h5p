import { GridDimensions } from '../components/Grid/Grid';
import { ArrowItemType } from '../types/ArrowItemType';
import { ArrowType } from '../types/ArrowType';
import { OccupiedCell } from '../types/OccupiedCell';
import { Position } from '../types/Position';
import { TopicMapItemType } from '../types/TopicMapItemType';
import { findItem, gridToPercentage } from './grid.utils';

const arrowLabelJoins: Record<ArrowType, string> = {
  [ArrowType.BiDirectional]: '↔',
  [ArrowType.Directional]: '⟶',
  [ArrowType.NonDirectional]: '―',
} as const;

export const getLabel = (
  startItemId: string,
  endItemId: string,
  arrowType: ArrowType,
  items: Array<TopicMapItemType>,
): string => {
  const startItem = findItem(startItemId, items);
  const endItem = findItem(endItemId, items);

  if (!startItem) {
    throw new Error('Start item not found');
  }
  if (!endItem) {
    throw new Error('End item not found');
  }

  return `${startItem.label} ${arrowLabelJoins[arrowType]} ${endItem.label}`;
};

export const updateArrowLabels = (
  items: Array<ArrowItemType>,
  topicMapItems: Array<TopicMapItemType>,
): Array<ArrowItemType> => {
  const newItems = items.map((item: ArrowItemType) => {
    const startItem = findItem(item.startElementId, topicMapItems);
    const endItem = findItem(item.endElementId, topicMapItems);

    if (!startItem || !endItem) {
      return item;
    }

    const label = getLabel(
      startItem.id,
      endItem.id,
      item.arrowType,
      topicMapItems,
    );

    const newItem: ArrowItemType = {
      ...item,
      label,
    };

    return newItem;
  });

  return newItems;
};

export const calculateIsHorizontal = (
  startPosition: Position,
  endPosition: Position,
): boolean => {
  return (
    Math.abs(startPosition.x - endPosition.x) >
    Math.abs(startPosition.y - endPosition.y)
  );
};

export const xAdjustmentStart = (
  item: {
    arrowType: ArrowType;
    startGridPosition: Position;
    endGridPosition: Position;
  },
  isHorizontal: boolean,
): number => {
  if (item.arrowType === ArrowType.BiDirectional) {
    if (isHorizontal && item.startGridPosition.x <= item.endGridPosition.x) {
      return 0.5;
    }

    if (isHorizontal) {
      return -1.5;
    }
  }
  return -0.5;
};

export const yAdjustmentStart = (
  item: {
    arrowType: ArrowType;
    startGridPosition: Position;
    endGridPosition: Position;
  },
  isHorizontal: boolean,
): number => {
  if (item.arrowType === ArrowType.BiDirectional) {
    if (!isHorizontal && item.startGridPosition.y <= item.endGridPosition.y) {
      return 0.5;
    }
    if (!isHorizontal) {
      return -1.75;
    }
  }
  return -0.5;
};

export const xAdjustmentEnd = (item: {
  arrowType: ArrowType;
  startGridPosition: Position;
  endGridPosition: Position;
  breakpoints: Array<Position> | undefined;
}): number => {
  const sourcePosition =
    item.breakpoints?.slice(-1)[0] ?? item.startGridPosition;
  const isHorizontal = calculateIsHorizontal(
    sourcePosition,
    item.endGridPosition,
  );
  if (
    item.arrowType === ArrowType.Directional ||
    item.arrowType === ArrowType.BiDirectional
  ) {
    if (isHorizontal && sourcePosition.x <= item.endGridPosition.x) {
      return -1.75;
    }

    if (isHorizontal) {
      return 0.5;
    }

    return -0.5;
  }

  if (item.arrowType === ArrowType.NonDirectional) {
    if (isHorizontal && sourcePosition.x <= item.endGridPosition.x) {
      return -0.5;
    }

    if (isHorizontal) {
      return -0.5;
    }

    return -0.5;
  }
  return 0;
};

export const yAdjustmentEnd = (item: {
  arrowType: ArrowType;
  startGridPosition: Position;
  endGridPosition: Position;
  breakpoints: Array<Position> | undefined;
}): number => {
  const sourcePosition =
    item.breakpoints?.slice(-1)[0] ?? item.startGridPosition;
  const isHorizontal = calculateIsHorizontal(
    sourcePosition,
    item.endGridPosition,
  );
  if (
    item.arrowType === ArrowType.Directional ||
    item.arrowType === ArrowType.BiDirectional
  ) {
    if (isHorizontal) {
      return -0.5;
    }
    if (sourcePosition.y <= item.endGridPosition.y) {
      return -1.75;
    }
    return 0.5;
  }

  if (item.arrowType === ArrowType.NonDirectional) {
    if (!isHorizontal && sourcePosition.y <= item.endGridPosition.y) {
      return -0.5;
    }

    if (!isHorizontal) {
      return -0.5;
    }

    return -0.5;
  }
  return 0;
};

export const adjustArrowStartPosition = (
  startPosition: Position,
  endPosition: Position,
  arrowType: ArrowType,
): Position => {
  const isHorizontal = calculateIsHorizontal(startPosition, endPosition);

  return {
    x:
      startPosition.x +
      xAdjustmentStart(
        {
          arrowType,
          startGridPosition: startPosition,
          endGridPosition: endPosition,
        },
        isHorizontal,
      ),
    y:
      startPosition.y +
      yAdjustmentStart(
        {
          arrowType,
          startGridPosition: startPosition,
          endGridPosition: endPosition,
        },
        isHorizontal,
      ),
  } as Position;
};

export const adjustArrowEndPosition = (
  startPosition: Position,
  endPosition: Position,
  arrowType: ArrowType,
): Position => {
  return {
    x:
      endPosition.x +
      xAdjustmentEnd({
        arrowType,
        startGridPosition: startPosition,
        endGridPosition: endPosition,
        breakpoints: [],
      }),
    y:
      endPosition.y +
      yAdjustmentEnd({
        arrowType,
        startGridPosition: startPosition,
        endGridPosition: endPosition,
        breakpoints: [],
      }),
  } as Position;
};

export const updateArrowType = (
  items: Array<ArrowItemType>,
  updatedItem: ArrowItemType,
  arrowType: ArrowType,
  topicMapItems: Array<TopicMapItemType>,
  dimensions: GridDimensions,
): Array<ArrowItemType> => {
  const newItems = items.map((item: ArrowItemType) => {
    const isCorrectItem = item.id === updatedItem.id;

    if (!isCorrectItem) {
      return item;
    }

    const label = getLabel(
      item.startElementId,
      item.endElementId,
      arrowType,
      topicMapItems,
    );

    const newItem: ArrowItemType = {
      ...item,
      arrowType,
      label,
      startPosition: gridToPercentage(
        adjustArrowStartPosition(
          item.startGridPosition,
          item.endGridPosition,
          arrowType,
        ),
        dimensions.numberOfColumns,
        dimensions.numberOfRows,
      ),
      endPosition: gridToPercentage(
        adjustArrowEndPosition(
          item.startGridPosition,
          item.endGridPosition,
          arrowType,
        ),
        dimensions.numberOfColumns,
        dimensions.numberOfRows,
      ),
    };

    return newItem;
  });

  return newItems;
};

export const findBoxEdgePosition = (
  sourcePosition: Position,
  gridPosition: Position,
  cellsOfItem: OccupiedCell[],
  numberOfColumns: number,
): Position => {
  if (calculateIsHorizontal(sourcePosition as Position, gridPosition)) {
    if (sourcePosition.x < gridPosition.x) {
      // arrow is trending to right
      const cells = cellsOfItem.sort((a, b) => a.x - b.x);
      const newx = cells[0];

      const newPosition = {
        y: gridPosition.y,
        x: (newx.index % numberOfColumns) + 1,
      };
      return newPosition;
    }
    // arrow is trending to left
    const newx = cellsOfItem.sort((a, b) => b.x - a.x)[0];

    const newxPosition = {
      y: Math.floor(newx.index / numberOfColumns) + 1,
      x: (newx.index % numberOfColumns) + 1,
    };
    return { y: gridPosition.y, x: newxPosition.x };
  }

  if (sourcePosition.y < gridPosition.y) {
    // arrow is trending downwards
    const newy = cellsOfItem.sort((a, b) => a.y - b.y)[0];

    const newyPosition = {
      y: Math.floor(newy.index / numberOfColumns) + 1,
      x: (newy.index % numberOfColumns) + 1,
    };

    return { x: gridPosition.x, y: newyPosition.y };
  }
  // arrow is trending upwards
  const newy = cellsOfItem.sort((a, b) => b.y - a.y)[0];

  const newyPosition = {
    y: Math.floor(newy.index / numberOfColumns) + 1,
    x: (newy.index % numberOfColumns) + 1,
  };
  return { x: gridPosition.x, y: newyPosition.y };
};
