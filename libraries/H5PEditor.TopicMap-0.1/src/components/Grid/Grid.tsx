import { H5P } from 'h5p-utils';
import { FC, useCallback, useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';
import { useEffectOnce } from 'react-use';
import { t } from '../../H5P/H5P.util';
import { ArrowItemType } from '../../types/ArrowItemType';
import { ArrowType } from '../../types/ArrowType';
import { Element } from '../../types/Element';
import { OccupiedCell } from '../../types/OccupiedCell';
import { Position } from '../../types/Position';
import { ResizeDirection } from '../../types/ResizeDirection';
import { Size } from '../../types/Size';
import { TopicMapItemType } from '../../types/TopicMapItemType';
import {
  adjustArrowEndPosition,
  adjustArrowStartPosition,
  findBoxEdgePosition,
  getLabel,
  updateArrowType,
} from '../../utils/arrow.utils';
import {
  calculatePosition,
  createArrowItem,
  createTopicMapItem,
  findHeightPercentage,
  findItem,
  findOccupiedCells,
  findWidthPercentage,
  gridToPercentage,
  isDraggingLeft,
  isDraggingUp,
  mapTopicMapItemToElement,
  minimumSizeReached,
  positionIsFree,
  resizeItems,
  scaleItemLength,
  updateItem,
} from '../../utils/grid.utils';
import { Arrow } from '../Arrow/Arrow';
import { ArrowIndicator } from '../ArrowIndicator/ArrowIndicator';
import { ArrowIndicatorContainer } from '../ArrowIndicator/ArrowIndicatorContainer';
import { Draggable } from '../Draggable/Draggable';
import { GridIndicator } from '../GridIndicator/GridIndicator';
import { ToolbarButtonType } from '../Toolbar/Toolbar';
import { TopicMapItem } from '../TopicMapItem/TopicMapItem';
import styles from './Grid.module.scss';

export type GridDimensions = {
  numberOfColumns: number;
  numberOfRows: number;
};

export type GridProps = {
  numberOfColumns: number;
  numberOfRows: number;
  initialItems: Array<TopicMapItemType>;
  updateItems: (items: Array<TopicMapItemType>) => void;
  initialArrowItems?: Array<ArrowItemType>;
  updateArrowItems: (items: Array<ArrowItemType>) => void;
  updateGridDimensions: (dimensions: GridDimensions) => void;
  gapSize: number;
  children?: never;
  setActiveTool: (newValue: ToolbarButtonType | null) => void;
  activeTool: ToolbarButtonType | null;
  setEditedItem: (itemId: string) => void;
  setEditedArrow: (itemId: string) => void;
  setSelectedItem: (itemId: string | null) => void;
  selectedItem: string | null;
  openDeleteDialogue: (itemId: string) => void;
  updateGrid: React.MutableRefObject<(newItems: TopicMapItemType[]) => void>;
  currentItemsLength: number;
  setCurrentItemsLength: (itemsLength: number) => void;
};

export const Grid: FC<GridProps> = ({
  numberOfColumns,
  numberOfRows,
  initialItems,
  updateItems,
  initialArrowItems,
  updateArrowItems,
  updateGridDimensions,
  gapSize,
  setActiveTool,
  activeTool,
  setEditedItem,
  setEditedArrow,
  setSelectedItem,
  selectedItem,
  openDeleteDialogue,
  updateGrid,
  currentItemsLength,
  setCurrentItemsLength,
}) => {
  const [size, setSize] = useState<Size | null>(null);
  const [items, setItems] = useState(initialItems);
  const [arrowItems, setArrowItems] = useState<Array<ArrowItemType>>(
    initialArrowItems ?? [],
  );
  const [occupiedCells, setOccupiedCells] = useState<Array<OccupiedCell>>([]);
  const [boxStartIndex, setBoxStartIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [resizedItemId, setResizedItemId] = useState<string | null>(null);
  const [resizeDirectionLock, setResizeDirectionLock] =
    useState<ResizeDirection>('none');
  const [mouseOutsideGrid, setMouseOutsideGrid] = useState(false);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [arrowIndicators, setArrowIndicators] = useState<Array<Position>>([]);
  const [arrowStartId, setArrowStartId] = useState<string | null>(null);
  const [ahPreviewGridPosition, setAhPreviewGridPosition] =
    useState<Position | null>(null);

  const updateLocalGrid = (newItems: TopicMapItemType[]): void => {
    setItems(newItems);
  };
  const [currentMousePosition, setCurrentMousePosition] =
    useState<Position | null>(null);

  useEffectOnce(() => {
    // eslint-disable-next-line no-param-reassign
    updateGrid.current = updateLocalGrid;
    updateGridDimensions({ numberOfColumns, numberOfRows });
  });

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setAhPreviewGridPosition(null);
    setArrowStartId(null);
    setArrowIndicators([]);
    setCurrentMousePosition(null);
  }, [activeTool]);

  const getCellSize = useCallback(() => {
    if (!elementRef.current) {
      return 0;
    }

    const gridIndicator = elementRef.current.querySelector('.grid-indicator');
    if (!gridIndicator) {
      throw new Error('No grid indicators were rendered.');
    }

    const { width } = gridIndicator.getBoundingClientRect();

    /**
     * This number might differ from browser to browser, but it's hopefully (😬) ok.
     * We use it to counteract floating point number errors.
     */
    const numberOfSignificantDigits = 4;

    return (
      Math.round(width * 10 ** numberOfSignificantDigits) /
      10 ** numberOfSignificantDigits
    );

    // The grid's size is updated by external factors,
    // but still affects the grid indicator size
  }, [size]);

  const cellSize = useMemo(getCellSize, [
    gapSize,
    getCellSize,
    elementRef.current,
  ]);

  const updateItemSize = useCallback(
    (updatedItem: TopicMapItemType, newSize: Size) => {
      if (!size) {
        throw new Error('Grid has no size.');
      }

      const newItems = updateItem(items, updatedItem, size.width, size.height, {
        newSize,
      });

      updateItems(newItems);
      setItems(newItems);

      setOccupiedCells(
        findOccupiedCells(
          items.map((item) => mapTopicMapItemToElement(item, size, cellSize)),
          size.width,
          size.height,
          gapSize,
          cellSize,
        ),
      );
    },
    [gapSize, cellSize, items, size, updateItems],
  );

  const createArrow = useCallback(
    (elementId: string, pointerPosition: Position) => {
      const isCreatingArrow = activeTool === ToolbarButtonType.CreateArrow;
      if (isCreatingArrow) {
        const gridIndicator = document
          .elementsFromPoint(pointerPosition.x, pointerPosition.y)
          .find((element) =>
            element.classList.contains('grid-indicator'),
          ) as HTMLElement;

        const gridPosition: Position = {
          x: parseInt(gridIndicator.dataset.x as string, 10),
          y: parseInt(gridIndicator.dataset.y as string, 10),
        };

        const hasStartElementId = !!arrowStartId;
        if (!hasStartElementId) {
          setArrowStartId(elementId);

          setAhPreviewGridPosition(gridPosition);
          setArrowIndicators([gridPosition]);
          return;
        }

        const startsAndEndsAtSameElement = arrowStartId === elementId;

        const shouldCreateArrow = !startsAndEndsAtSameElement && arrowStartId;
        if (shouldCreateArrow && ahPreviewGridPosition !== null) {
          const arrowType = ArrowType.Directional;
          const label = getLabel(arrowStartId, elementId, arrowType, items);
          const adjustedStartGridPosition = adjustArrowStartPosition(
            ahPreviewGridPosition as Position,
            gridPosition,
            arrowType,
          );

          const cellsOfItem = occupiedCells.filter(
            (c) => c.occupiedById === elementId,
          );
          const endPosition = findBoxEdgePosition(
            arrowIndicators.slice(-1)[0],
            gridPosition,
            cellsOfItem,
            numberOfColumns,
          );

          const adjustedEndGridPosition = adjustArrowEndPosition(
            arrowIndicators.slice(-1)[0],
            endPosition,
            arrowType,
          );
          const newItem = createArrowItem(
            arrowStartId,
            elementId,
            label,
            arrowType,
            gridToPercentage(
              adjustedStartGridPosition,
              numberOfColumns,
              numberOfRows,
            ),
            gridToPercentage(
              adjustedEndGridPosition,
              numberOfColumns,
              numberOfRows,
            ),
            ahPreviewGridPosition as Position,
            endPosition,
            arrowIndicators.slice(1),
            arrowIndicators.slice(1).map((breakpointPosition) => {
              return gridToPercentage(
                {
                  x: breakpointPosition.x - 0.5,
                  y: breakpointPosition.y - 0.5,
                },
                numberOfColumns,
                numberOfRows,
              );
            }),
          );
          const newItems = [...arrowItems, newItem];

          updateArrowItems(newItems);
          setArrowItems(newItems);
        }
        else {
          setArrowStartId(null);
          setAhPreviewGridPosition(null);
          setArrowIndicators([]);
        }
        setArrowIndicators([]);
        setArrowStartId(null);
        setAhPreviewGridPosition(null);
      }
    },
    [
      activeTool,
      arrowStartId,
      ahPreviewGridPosition,
      items,
      occupiedCells,
      numberOfColumns,
      arrowIndicators,
      numberOfRows,
      arrowItems,
      updateArrowItems,
    ],
  );

  const createBoxStart = useCallback(
    (index: number) => {
      if (activeTool === ToolbarButtonType.CreateBox) {
        setBoxStartIndex(index);
        setIsDragging(true);
      }
    },
    [activeTool],
  );

  const createBoxEnd = useCallback(() => {
    if (activeTool === ToolbarButtonType.CreateBox) {
      setIsDragging(false);
      setBoxStartIndex(null);
      setCurrentItemsLength(items.length);
    }
  }, [activeTool, items.length, setCurrentItemsLength]);

  const indicatorClicked = useCallback(
    (index: number) => {
      if (activeTool === ToolbarButtonType.CreateBox) {
        createBoxStart(index);
      }
      if (
        activeTool === ToolbarButtonType.CreateArrow &&
        arrowStartId !== null
      ) {
        const newArrowIndicators = [
          ...arrowIndicators,
          {
            y: Math.floor(index / numberOfColumns) + 1,
            x: (index % numberOfColumns) + 1,
          },
        ];
        setArrowIndicators(newArrowIndicators);
      }
    },
    [
      activeTool,
      arrowIndicators,
      arrowStartId,
      createBoxStart,
      numberOfColumns,
    ],
  );

  const resizeBoxEnd = useCallback(() => {
    setPrevIndex(null);
    setResizedItemId(null);
    setBoxStartIndex(null);
    setResizeDirectionLock('none');
  }, []);

  const createBoxEnter = useCallback(
    (indicatorIndex: number) => {
      const isCreatingNewBox =
        activeTool === ToolbarButtonType.CreateBox && isDragging;
      if (!isCreatingNewBox) {
        return;
      }

      if (boxStartIndex == null) {
        throw new Error('Box start position is not defined.');
      }

      if (!size) {
        throw new Error('Grid has no size.');
      }

      const dragLeft = isDraggingLeft(
        indicatorIndex,
        boxStartIndex,
        numberOfColumns,
      );
      const dragUp = isDraggingUp(
        indicatorIndex,
        boxStartIndex,
        numberOfColumns,
        numberOfRows,
      );

      // Get x and y percentage position
      const x = dragLeft
        ? indicatorIndex % numberOfColumns
        : boxStartIndex % numberOfColumns;
      const y = dragUp
        ? Math.floor(indicatorIndex / numberOfColumns)
        : Math.floor(boxStartIndex / numberOfColumns);

      const xPercentagePosition = (x / numberOfColumns) * 100;
      const yPercentagePosition = (y / numberOfRows) * 100;

      // Get height percentage
      const yEnd = dragUp
        ? Math.floor(boxStartIndex / numberOfColumns)
        : Math.floor(indicatorIndex / numberOfColumns);
      const yEndPercentagePosition = ((yEnd + 1) / numberOfRows) * 100;

      const heightPercentage = yEndPercentagePosition - yPercentagePosition;

      // Get width percentage
      const indicatorValue = dragLeft ? boxStartIndex + 1 : indicatorIndex + 1;
      const lastIndexOnColumn = indicatorValue % numberOfColumns === 0;

      const xEnd = indicatorValue % numberOfColumns;
      const xEndPercentagePosition = lastIndexOnColumn
        ? 100
        : (xEnd / numberOfColumns) * 100;

      const widthPercentage = xEndPercentagePosition - xPercentagePosition;

      // Create box
      const alreadyAdded =
        items.length !== currentItemsLength &&
        items[currentItemsLength] != null;

      const newItem = createTopicMapItem();
      newItem.xPercentagePosition = xPercentagePosition;
      newItem.widthPercentage = widthPercentage;
      newItem.yPercentagePosition = yPercentagePosition;
      newItem.heightPercentage = heightPercentage;

      const newPosition = {
        x: calculatePosition(xPercentagePosition, size.width),
        y: calculatePosition(yPercentagePosition, size.height),
      };
      const newSize = {
        width: scaleItemLength(widthPercentage, size.width, cellSize),
        height: scaleItemLength(heightPercentage, size.height, cellSize),
      };

      const lastItem = items[currentItemsLength];
      const posIsFree = positionIsFree(
        newPosition,
        alreadyAdded ? lastItem.id : newItem.id,
        newSize,
        size,
        gapSize,
        cellSize,
        occupiedCells,
      );

      if (posIsFree && !alreadyAdded) {
        const newItems = [...items, newItem];

        updateItems(newItems);
        setItems(newItems);
      }

      if (posIsFree && alreadyAdded) {
        if (dragLeft || dragUp) {
          const newItems = updateItem(
            items,
            lastItem,
            size.width,
            size.height,
            { newPosition, newSize },
          );

          updateItems(newItems);
          setItems(newItems);
        }
        else {
          updateItemSize(lastItem, newSize);
        }
      }
    },
    [
      activeTool,
      isDragging,
      boxStartIndex,
      size,
      numberOfColumns,
      numberOfRows,
      currentItemsLength,
      items,
      gapSize,
      cellSize,
      occupiedCells,
      updateItems,
      updateItemSize,
    ],
  );

  const resizeBoxEnter = useCallback(
    (indicatorIndex: number) => {
      const isResizing = resizedItemId != null;
      if (!isResizing) {
        return;
      }

      if (boxStartIndex == null) {
        throw new Error('Box start position is not defined.');
      }

      if (!size) {
        throw new Error('Grid has no size.');
      }

      const existingItem = findItem(resizedItemId, items);
      if (!existingItem) {
        throw new Error(
          `Resized item with id "${resizedItemId}" does not exist`,
        );
      }

      const dragLeft =
        indicatorIndex % numberOfColumns <
        (prevIndex ?? indicatorIndex) % numberOfColumns;
      const dragUp = (prevIndex ?? indicatorIndex) >= indicatorIndex;

      const onlyScaleVertically = resizeDirectionLock.includes('horizontal');
      const onlyScaleHorizontally = resizeDirectionLock.includes('vertical');

      const leftHandle = resizeDirectionLock.includes('left');
      const topHandle = resizeDirectionLock.includes('top');

      // Get x and y percentage position
      const x = leftHandle
        ? indicatorIndex % numberOfColumns
        : boxStartIndex % numberOfColumns;

      const y = topHandle
        ? Math.floor(indicatorIndex / numberOfColumns)
        : Math.floor(boxStartIndex / numberOfColumns);

      const xPercentagePosition = onlyScaleVertically
        ? existingItem.xPercentagePosition
        : (x / numberOfColumns) * 100;
      const yPercentagePosition = onlyScaleHorizontally
        ? existingItem.yPercentagePosition
        : (y / numberOfRows) * 100;

      // Get height percentage
      const yEnd = topHandle
        ? Math.floor(
          (boxStartIndex + existingItem.widthPercentage) / numberOfColumns,
        )
        : Math.floor(indicatorIndex / numberOfColumns);
      const yEndPercentagePosition = ((yEnd + 1) / numberOfRows) * 100;

      const heightPercentage = findHeightPercentage(
        onlyScaleHorizontally,
        topHandle,
        dragUp,
        existingItem,
        yPercentagePosition,
        yEndPercentagePosition,
      );

      // Get width percentage
      const indicatorValue = indicatorIndex + 1;
      const lastIndexOnColumn = indicatorValue % numberOfColumns === 0;

      const xEnd = indicatorValue % numberOfColumns;
      const xEndPercentagePosition = lastIndexOnColumn
        ? 100
        : (xEnd / numberOfColumns) * 100;

      const widthPercentage = findWidthPercentage(
        onlyScaleVertically,
        leftHandle,
        dragLeft,
        existingItem,
        xPercentagePosition,
        xEndPercentagePosition,
      );

      let newPosition = {
        x: calculatePosition(xPercentagePosition, size.width),
        y: calculatePosition(yPercentagePosition, size.height),
      };
      const newSize = {
        width: scaleItemLength(widthPercentage, size.width, cellSize),
        height: scaleItemLength(heightPercentage, size.height, cellSize),
      };

      if (
        minimumSizeReached(
          widthPercentage,
          size.width,
          heightPercentage,
          size.height,
        )
      ) {
        newPosition = {
          x: calculatePosition(existingItem.xPercentagePosition, size.width),
          y: calculatePosition(existingItem.yPercentagePosition, size.height),
        };
      }

      setPrevIndex(indicatorIndex);

      const posIsFree = positionIsFree(
        newPosition,
        existingItem.id,
        newSize,
        size,
        gapSize,
        cellSize,
        occupiedCells,
      );

      if (posIsFree && isResizing) {
        if (leftHandle || topHandle) {
          const newItems = updateItem(
            items,
            existingItem,
            size.width,
            size.height,
            { newPosition, newSize },
          );

          updateItems(newItems);
          setItems(newItems);
        }
        else {
          updateItemSize(existingItem, newSize);
        }
      }
    },
    [
      resizedItemId,
      boxStartIndex,
      size,
      numberOfColumns,
      numberOfRows,
      items,
      gapSize,
      cellSize,
      occupiedCells,
      updateItems,
      resizeDirectionLock,
      updateItemSize,
      prevIndex,
    ],
  );

  const cancelActions = useCallback(() => {
    const isCreatingNewBox =
      activeTool === ToolbarButtonType.CreateBox && isDragging;
    const isResizing = resizedItemId != null;

    if (isCreatingNewBox) {
      createBoxEnd();
    }

    if (isResizing) {
      resizeBoxEnd();
    }
    if (!mouseOutsideGrid) {
      setMouseOutsideGrid(true);
    }
  }, [
    activeTool,
    isDragging,
    resizedItemId,
    createBoxEnd,
    resizeBoxEnd,
    mouseOutsideGrid,
  ]);

  const activeHoverOnGrid = useMemo(
    () => activeTool === ToolbarButtonType.CreateBox,
    [activeTool],
  );

  const onGridIndicatorMouseEnter = useCallback(
    (indicatorIndex: number) => {
      const isResizing = resizedItemId != null;
      if (isResizing) {
        resizeBoxEnter(indicatorIndex);
      }
      if (activeTool === ToolbarButtonType.CreateBox) {
        createBoxEnter(indicatorIndex);
      }
      if (
        activeTool === ToolbarButtonType.CreateArrow &&
        arrowStartId != null
      ) {
        setCurrentMousePosition({
          y: Math.floor(indicatorIndex / numberOfColumns) + 1,
          x: (indicatorIndex % numberOfColumns) + 1,
        });
      }
    },
    [
      activeTool,
      arrowStartId,
      createBoxEnter,
      numberOfColumns,
      resizeBoxEnter,
      resizedItemId,
    ],
  );

  const gridIndicators = useMemo(() => {
    const label = t('grid-indicator_label');

    return Array(numberOfColumns * numberOfRows)
      .fill(null)
      .map((_, index) => ({
        id: H5P.createUUID(),
        label,
        index,
      }));
  }, [numberOfColumns, numberOfRows]);

  const gridIndicatorElements = useMemo(
    () =>
      gridIndicators.map(({ id, index, label }) => (
        <GridIndicator
          key={id}
          onMouseDown={() => indicatorClicked(index)}
          onMouseEnter={() => onGridIndicatorMouseEnter(index)}
          label={label}
          position={{
            y: Math.floor(index / numberOfColumns) + 1,
            x: (index % numberOfColumns) + 1,
          }}
        />
      )),
    [
      gridIndicators,
      numberOfColumns,
      indicatorClicked,
      onGridIndicatorMouseEnter,
    ],
  );
  const deferredGridIndicatorElements = useDeferredValue(gridIndicatorElements);

  const updateItemPosition = useCallback(
    (updatedItem: TopicMapItemType, newPosition: Position) => {
      if (!size) {
        throw new Error('Grid has no size.');
      }
      if (activeTool === ToolbarButtonType.CreateArrow) {
        return;
      }
      const newItems = updateItem(items, updatedItem, size.width, size.height, {
        newPosition,
      });

      updateItems(newItems);
      setItems(newItems);

      const elements: Array<Element> = items.map((item) =>
        mapTopicMapItemToElement(item, size, cellSize),
      );

      const newOccupiedCells = findOccupiedCells(
        elements,
        size.width,
        size.height,
        gapSize,
        cellSize,
      );
      setOccupiedCells(newOccupiedCells);
    },
    [size, activeTool, items, updateItems, gapSize, cellSize],
  );

  const editItem = useCallback(
    (id: string) => {
      if (activeTool) {
        setActiveTool(null);
      }
      setEditedItem(id);
    },
    [activeTool, setActiveTool, setEditedItem],
  );

  const editArrow = useCallback(
    (id: string) => {
      if (activeTool) {
        setActiveTool(null);
      }
      setEditedArrow(id);
    },
    [activeTool, setActiveTool, setEditedArrow],
  );

  const deleteArrow = useCallback(
    (id: string) => {
      const newArrowItems = arrowItems.filter((item) => item.id !== id);
      updateArrowItems(newArrowItems);
      setArrowItems(newArrowItems);
    },
    [arrowItems, updateArrowItems],
  );

  const startResize = useCallback(
    (item: TopicMapItemType, directionLock: ResizeDirection) => {
      const x = Math.floor((item.xPercentagePosition / 100) * numberOfColumns);
      const y = Math.floor((item.yPercentagePosition / 100) * numberOfRows);
      const cellIndex = x + y * numberOfColumns;

      setBoxStartIndex(cellIndex);
      setResizedItemId(item.id);
      setResizeDirectionLock(directionLock);
      updateGridDimensions({ numberOfColumns, numberOfRows });
    },
    [numberOfColumns, numberOfRows, updateGridDimensions],
  );

  const setArrowType = useCallback(
    (type: ArrowType, id: string) => {
      const updatedItem = arrowItems.find((item) => item.id === id);
      if (!updatedItem) {
        throw new Error(`Updated arrow with id "${id}" does not exist`);
      }

      if (updatedItem) {
        const newItem = updateArrowType(arrowItems, updatedItem, type, items, {
          numberOfColumns,
          numberOfRows,
        });
        updateArrowItems(newItem);
        setArrowItems(newItem);
      }
    },
    [arrowItems, items, updateArrowItems, numberOfColumns, numberOfRows],
  );

  const children = useMemo(() => {
    if (size == null) {
      return null;
    }

    return items.map((item) => (
      <Draggable
        key={item.id}
        id={item.id}
        initialXPosition={calculatePosition(
          item.xPercentagePosition,
          size.width,
        )}
        initialYPosition={calculatePosition(
          item.yPercentagePosition,
          size.height,
        )}
        updatePosition={(newPosition) => updateItemPosition(item, newPosition)}
        initialWidth={Math.abs(
          calculatePosition(item.widthPercentage, size.width),
        )}
        initialHeight={Math.abs(
          calculatePosition(item.heightPercentage, size.height),
        )}
        gapSize={gapSize}
        cellSize={cellSize}
        gridSize={size}
        occupiedCells={occupiedCells}
        isPreview={isDragging}
        editItem={editItem}
        openDeleteDialogue={openDeleteDialogue}
        setSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
        startResize={(directionLock) => startResize(item, directionLock)}
        mouseOutsideGrid={mouseOutsideGrid}
        showScaleHandles
        onPointerDown={(pointerPosition) => createArrow(item.id, pointerPosition)}
        activeTool={activeTool}
      >
        <TopicMapItem item={item} />
      </Draggable>
    ));
  }, [
    size,
    items,
    gapSize,
    cellSize,
    occupiedCells,
    isDragging,
    editItem,
    openDeleteDialogue,
    setSelectedItem,
    selectedItem,
    mouseOutsideGrid,
    activeTool,
    updateItemPosition,
    startResize,
    createArrow,
  ]);

  const renderArrow = useCallback(
    (item: ArrowItemType) => {
      if (!size) {
        return null;
      }

      return (
        <Arrow
          key={item.id}
          cellSize={cellSize}
          gapSize={gapSize}
          item={item}
          editItem={editArrow}
          deleteItem={deleteArrow}
          selectedItemId={selectedItem}
          setSelectedItemId={setSelectedItem}
          updateArrowType={setArrowType}
          gridWidth={size.width}
          arrowStartId={arrowStartId}
        />
      );
    },
    [
      cellSize,
      deleteArrow,
      editArrow,
      gapSize,
      selectedItem,
      setArrowType,
      setSelectedItem,
      size,
      arrowStartId,
    ],
  );

  const childrenArrows = useMemo(
    () => arrowItems.map((item) => renderArrow(item)),
    [arrowItems, renderArrow],
  );

  const childrenArrowIndicators = useMemo(
    () =>
      arrowIndicators.map((position) => {
        return (
          <ArrowIndicator
            key={`${position.x}-${position.y}`}
            position={position}
            cellSize={cellSize}
            gapSize={gapSize}
          />
        );
      }),
    [arrowIndicators, cellSize, gapSize],
  );

  const resize = useCallback(() => {
    window.requestAnimationFrame(() => {
      if (!elementRef.current) {
        return;
      }

      const { width, height } = elementRef.current.getBoundingClientRect();

      const isFirstRender = size == null;
      if (!isFirstRender) {
        const scaleFactor = size.width / width;

        if (scaleFactor !== 1) {
          setItems(resizeItems(items, scaleFactor));
        }
      }

      setSize({ width, height });
    });
  }, [items, size]);

  useEffectOnce(() => {
    const windowClickListener = (event: MouseEvent | TouchEvent): void => {
      const draggableWasClicked = !!(event.target as HTMLElement).closest(
        '.draggable, .arrow-item, .context-menu-button, .scaleHandle',
      );

      if (!draggableWasClicked) {
        setSelectedItem(null);
      }
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousedown', windowClickListener);
    window.addEventListener('touchstart', windowClickListener);

    // Resize once on first render
    resize();
  });

  useEffect(() => {
    resize();

    // The grid's number of rows/columns might be updated by external factors,
    // but still affects the cell size
  }, [numberOfColumns, numberOfRows]);

  useEffect(() => {
    if (!size) {
      return;
    }

    setOccupiedCells(
      findOccupiedCells(
        items.map((item) => mapTopicMapItemToElement(item, size, cellSize)),
        size.width,
        size.height,
        gapSize,
        cellSize,
      ),
    );
  }, [gapSize, cellSize, items, size]);

  let className = styles.grid;

  if (activeHoverOnGrid) {
    className += ` ${styles.gridIndicatorsActive}`;
  }

  const isCreatingArrow = activeTool === ToolbarButtonType.CreateArrow;
  if (isCreatingArrow) {
    className += ` ${styles.isCreatingArrow}`;
  }

  useEffect(() => {
    if (!selectedItem) {
      setMouseOutsideGrid(false);
    }
  }, [selectedItem]);

  return (
    <div
      ref={elementRef}
      role="application" /* https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Application_Role */
      className={className}
      style={{
        // @ts-expect-error Custom properties should be allowed
        '--gap-size': `${gapSize}px`,
        gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`,
        gridTemplateRows: `repeat(${numberOfRows}, 1fr)`,
        cursor: isDragging ? 'pointer' : 'auto',
        inset: 0
      }}
      onMouseUp={() => {
        createBoxEnd();
        resizeBoxEnd();
      }}
      onMouseLeave={() => cancelActions()}
      onMouseEnter={() => {
        if (mouseOutsideGrid) {
          setMouseOutsideGrid(false);
        }
      }}
    >
      {childrenArrows}
      {children}
      {deferredGridIndicatorElements}
      <ArrowIndicatorContainer
        arrowIndicators={childrenArrowIndicators}
        cellSize={cellSize}
        gapSize={gapSize}
        breakpoints={arrowIndicators}
        currentMousePosition={currentMousePosition}
      />
    </div>
  );
};
