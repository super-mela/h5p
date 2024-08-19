import { ArrowItemType } from '../types/ArrowItemType';
import { ArrowType } from '../types/ArrowType';
import { Cell } from '../types/Cell';
import { Element } from '../types/Element';
import { OccupiedCell } from '../types/OccupiedCell';
import { Position } from '../types/Position';
import { Size } from '../types/Size';
import { TopicMapItemType } from '../types/TopicMapItemType';
import { arraysHaveSomeOverlap } from './array.utils';

export const resizeItem = (
  item: TopicMapItemType,
  scaleFactor: number,
): TopicMapItemType => {
  const resizedItem = {
    ...item,
    heightPercentage: item.heightPercentage * scaleFactor,
    widthPercentage: item.widthPercentage * scaleFactor,
    xPercentagePosition: item.xPercentagePosition * scaleFactor,
    yPercentagePosition: item.yPercentagePosition * scaleFactor,
  };

  return resizedItem;
};

export const resizeItems = (
  items: Array<TopicMapItemType>,
  scaleFactor: number,
): Array<TopicMapItemType> => items.map((item) => resizeItem(item, scaleFactor));

export const calculateXPercentage = (xPx: number, width: number): number => {
  return (xPx / width) * 100;
};

export const calculateYPercentage = (yPx: number, height: number): number => {
  return (yPx / height) * 100;
};

export const updateItem = (
  items: Array<TopicMapItemType>,
  updatedItem: TopicMapItemType,
  width: number,
  height: number,
  { newPosition, newSize }: { newPosition?: Position; newSize?: Size },
): Array<TopicMapItemType> => {
  const newItems = items.map((item: TopicMapItemType) => {
    const isCorrectItem = item.id === updatedItem.id;

    if (!isCorrectItem) {
      return item;
    }

    const newItem: TopicMapItemType = {
      ...item,
    };

    if (newPosition) {
      newItem.xPercentagePosition = calculateXPercentage(newPosition.x, width);
      newItem.yPercentagePosition = calculateYPercentage(newPosition.y, height);
    }

    if (newSize) {
      newItem.widthPercentage = calculateXPercentage(newSize.width, width);
      newItem.heightPercentage = calculateYPercentage(newSize.height, height);
    }

    // Drag from TOP og LEFT har newPosition, from Right og bottom har undefined
    return newItem;
  });

  return newItems;
};

export const getAllCells = (
  gridWidth: number,
  gridHeight: number,
  gapSize: number,
  cellSize: number,
): Array<Cell> => {
  const cells: Array<Cell> = [];

  const stepSize = gapSize + cellSize;
  let currentIndex = 0;

  for (let y = 0; y < gridHeight; y += stepSize) {
    for (let x = 0; x < gridWidth; x += stepSize) {
      cells.push({
        x,
        y,
        index: currentIndex,
      });

      currentIndex += 1;
    }
  }

  return cells;
};

const marginOfErrorForPositioning = 5;

export const cellIsOccupiedByElement = (
  elementPosition: Position,
  elementSize: Size,
  cellPosition: Position,
): boolean =>
  cellPosition.x >= elementPosition.x - marginOfErrorForPositioning &&
  cellPosition.x <= elementPosition.x + elementSize.width &&
  cellPosition.y >= elementPosition.y - marginOfErrorForPositioning &&
  cellPosition.y <= elementPosition.y + elementSize.height;

export const findCellsElementOccupies = (
  { id, type, position, size }: Element,
  gridWidth: number,
  gridHeight: number,
  gapSize: number,
  cellSize: number,
): Array<OccupiedCell> => {
  const allCells = getAllCells(gridWidth, gridHeight, gapSize, cellSize);

  const occupiedCells = allCells
    .filter((cell) => cellIsOccupiedByElement(position, size, cell))
    .map(({ x, y, index }) => ({
      occupiedById: id,
      occupiedByType: type,
      x,
      y,
      index,
    }));

  return occupiedCells;
};

export const findOccupiedCells = (
  elements: Array<Element>,
  gridWidth: number,
  gridHeight: number,
  gapSize: number,
  cellSize: number,
): Array<OccupiedCell> => {
  const occupiedCells: Array<OccupiedCell> = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const element of elements) {
    occupiedCells.push(
      ...findCellsElementOccupies(
        element,
        gridWidth,
        gridHeight,
        gapSize,
        cellSize,
      ),
    );
  }

  return occupiedCells;
};

export const scaleItemLength = (
  percentage: number,
  length: number,
  cellSize: number,
): number => {
  const newL = (length * percentage) / 100;
  return newL > cellSize ? newL : cellSize;
};

export const calculatePosition = (
  percentage: number,
  length: number,
): number => {
  return (length * percentage) / 100;
};

export const minimumSizeReached = (
  xPercentage: number,
  gridWidth: number,
  yPercentage: number,
  gridHeight: number,
): boolean => {
  const newY = (gridHeight * yPercentage) / 100;
  const newX = (gridWidth * xPercentage) / 100;
  return newX < 0 || newY < 0;
};

export const mapTopicMapItemToElement = (
  item: TopicMapItemType,
  gridSize: Size,
  cellSize: number,
): Element => ({
  id: item.id,
  type: 'item',
  position: {
    x: calculatePosition(item.xPercentagePosition, gridSize.width),
    y: calculatePosition(item.yPercentagePosition, gridSize.height),
  },
  size: {
    width: scaleItemLength(item.widthPercentage, gridSize.width, cellSize),
    height: scaleItemLength(item.heightPercentage, gridSize.height, cellSize),
  },
});

export const positionIsFree = (
  newPosition: Position,
  elementId: string,
  elementSize: Size,
  gridSize: Size,
  gapSize: number,
  cellSize: number,
  occupiedCells: Array<OccupiedCell>,
): boolean => {
  const cellsThisElementWillOccupy = findCellsElementOccupies(
    {
      id: elementId,
      type: 'item',
      position: newPosition,
      size: elementSize,
    },
    gridSize.width,
    gridSize.height,
    gapSize,
    cellSize,
  );

  const cellsOccupiedByOtherElements = occupiedCells.filter(
    (cell) => cell.occupiedById !== elementId,
  );

  const posIsFree = !arraysHaveSomeOverlap(
    cellsOccupiedByOtherElements,
    cellsThisElementWillOccupy,
  );

  return posIsFree;
};

export const coordinatePosToPx = (
  coordinate: number,
  gapSize: number,
  cellSize: number,
): number => {
  const stepSize = gapSize + cellSize;

  return coordinate * stepSize;
};

export const coordinateSizeToPx = (
  coordinate: number,
  gapSize: number,
  cellSize: number,
): number => {
  return coordinate * cellSize + (coordinate - 1) * gapSize;
};

export const isDraggingLeft = (
  indicatorIndex: number,
  boxStartPosition: number,
  numberOfColumns: number,
): boolean =>
  boxStartPosition % numberOfColumns >= indicatorIndex % numberOfColumns;

export const isDraggingUp = (
  indicatorIndex: number,
  boxStartPosition: number,
  numberOfColumns: number,
  numberOfRows: number,
): boolean =>
  (Math.floor(boxStartPosition / numberOfColumns) / numberOfRows) * 100 >=
  (Math.floor(indicatorIndex / numberOfColumns) / numberOfRows) * 100;

export const findWidthPercentage = (
  onlyScaleVertically: boolean,
  leftHandle: boolean,
  dragLeft: boolean,
  existingItem: TopicMapItemType,
  xPercentagePosition: number,
  xEndPercentagePosition: number,
): number => {
  if (onlyScaleVertically) {
    return existingItem.widthPercentage;
  }
  if (leftHandle && !dragLeft) {
    return (
      existingItem.widthPercentage -
      (xPercentagePosition - existingItem.xPercentagePosition)
    );
  }
  if (leftHandle && dragLeft) {
    return (
      existingItem.widthPercentage +
      (existingItem.xPercentagePosition - xPercentagePosition)
    );
  }
  return xEndPercentagePosition - xPercentagePosition;
};

export const findHeightPercentage = (
  onlyScaleHorizontally: boolean,
  topHandle: boolean,
  dragUp: boolean,
  existingItem: TopicMapItemType,
  yPercentagePosition: number,
  yEndPercentagePosition: number,
): number => {
  if (onlyScaleHorizontally) {
    return existingItem.heightPercentage;
  }
  if (topHandle && dragUp) {
    return (
      existingItem.heightPercentage +
      (existingItem.yPercentagePosition - yPercentagePosition)
    );
  }
  if (topHandle && !dragUp) {
    return (
      existingItem.heightPercentage -
      (yPercentagePosition - existingItem.yPercentagePosition)
    );
  }
  return yEndPercentagePosition - yPercentagePosition;
};

export const createTopicMapItem = (): TopicMapItemType => {
  const id = crypto.randomUUID();

  // backgroundImage is intentionally set to undefined here
  // to correctly make the image field empty on item creation
  const item: TopicMapItemType = {
    id,
    xPercentagePosition: 0,
    yPercentagePosition: 0,
    widthPercentage: 0,
    heightPercentage: 0,
    topicImage: undefined,
    label: '',
    description: '',
  };

  return item;
};

export const createArrowItem = (
  startId: string,
  endId: string,
  label: string,
  arrowType: ArrowType,
  startPosition: Position,
  endPosition: Position,
  startGridPosition: Position,
  endGridPosition: Position,
  breakpoints: Array<Position>,
  relativeBreakpoints: Array<Position>,
): ArrowItemType => {
  const id = crypto.randomUUID();

  const item: ArrowItemType = {
    id,
    label,
    arrowType,
    description: '',
    startElementId: startId,
    endElementId: endId,
    startPosition,
    endPosition,
    startGridPosition,
    endGridPosition,
    breakpoints,
    relativeBreakpoints,
  };

  return item;
};

export const findItem = (
  id: string,
  items: Array<TopicMapItemType>,
): TopicMapItemType | null => {
  if (!id) {
    return null;
  }

  return items.find((item) => item.id === id) ?? null;
};

export const checkIfRightSideOfGrid = (
  xPosition: number,
  gridWidth: number,
): boolean => xPosition > gridWidth / 2;

export const findConnectedArrows = (
  itemId: string,
  arrows: Array<ArrowItemType>,
): Array<ArrowItemType> => {
  return arrows.filter((arrow) =>
    [arrow.startElementId, arrow.endElementId].includes(itemId),
  );
};

export const asGridPosition = (
  position: Position,
  width: number,
  height: number,
): Position => {
  const xPercentagePosition = calculateXPercentage(position.x, width);
  const yPercentagePosition = calculateYPercentage(position.y, height);
  return {
    x: xPercentagePosition,
    y: yPercentagePosition,
  } as Position;
};

export const straightenArrowEnd = (
  start: Position,
  end: Position,
): Position => {
  if (Math.abs(start.x - end.x) >= Math.abs(start.y - end.y)) {
    return {
      x: end.x,
      y: start.y,
    } as Position;
  }
  return {
    x: start.x,
    y: end.y,
  } as Position;
};

export const gridToPercentage = (
  gridPosition: Position,
  numberOfColumns: number,
  numberOfRows: number,
): Position => {
  const xPercentage = (gridPosition.x / numberOfColumns) * 100;
  const yPercentage = (gridPosition.y / numberOfRows) * 100;

  return {
    x: xPercentage,
    y: yPercentage,
  };
};
