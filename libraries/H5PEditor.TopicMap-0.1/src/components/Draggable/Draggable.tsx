import { FC,  useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { t } from '../../H5P/H5P.util';
import { ContextMenuAction } from '../../types/ContextMenuAction';
import { OccupiedCell } from '../../types/OccupiedCell';
import { Position } from '../../types/Position';
import { ResizeDirection } from '../../types/ResizeDirection';
import { Size } from '../../types/Size';
import { TranslationKey } from '../../types/TranslationKey';
import {
  calculateClosestValidPositionComponent,
  calculateClosestValidSizeComponent,
  getPointerPositionFromEvent,
} from '../../utils/draggable.utils';
import { checkIfRightSideOfGrid, positionIsFree } from '../../utils/grid.utils';
import { ContextMenu, ContextMenuButtonType } from '../ContextMenu/ContextMenu';
import { ScaleHandles } from '../ScaleHandles/ScaleHandles';
import { ToolbarButtonType } from '../Toolbar/Toolbar';
import styles from './Draggable.module.scss';

const labelTextKeys: Record<string, TranslationKey> = {
  selected: 'draggable_selected',
  notSelected: 'draggable_not-selected',
};

export type DraggableProps = {
  id: string;
  initialXPosition: number;
  initialYPosition: number;
  updatePosition: (newPosition: Position) => void;
  initialWidth: number;
  initialHeight: number;
  gapSize: number;
  cellSize: number;
  gridSize: Size;
  occupiedCells: Array<OccupiedCell>;
  isPreview: boolean;
  openDeleteDialogue: (id: string) => void;
  setSelectedItem: (newItem: string | null) => void;
  selectedItem: string | null;
  startResize: (directionLock: ResizeDirection) => void;
  mouseOutsideGrid: boolean;
  editItem: (id: string) => void;
  showScaleHandles: boolean;
  onPointerDown: (pointerPosition: Position) => void;
  activeTool: ToolbarButtonType | null;
  children: React.ReactElement | Array<React.ReactElement>;
};

export const Draggable: FC<DraggableProps> = ({
  id,
  initialXPosition,
  initialYPosition,
  updatePosition,
  initialWidth,
  initialHeight,
  gapSize,
  cellSize,
  gridSize,
  occupiedCells,
  isPreview,
  openDeleteDialogue,
  setSelectedItem,
  selectedItem,
  startResize,
  children,
  mouseOutsideGrid,
  editItem,
  showScaleHandles,
  onPointerDown,
  activeTool,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isSelected, setIsSelected] = useState(selectedItem === id);
  const [labelText, setLabelText] = useState(t(labelTextKeys.notSelected));
  const [pointerStartPosition, setPointerStartPosition] =
    useState<Position | null>(null);
  const [{ width, height }, setSize] = useState<Size>({
    width: calculateClosestValidSizeComponent(initialWidth, gapSize, cellSize, gridSize.width),
    height: calculateClosestValidSizeComponent(initialHeight, gapSize, cellSize, gridSize.height),
  });
  const [position, setPosition] = useState<Position>({
    x: calculateClosestValidPositionComponent(initialXPosition, gapSize, cellSize, gridSize.width, width),
    y: calculateClosestValidPositionComponent(initialYPosition, gapSize, cellSize, gridSize.height, height),
  });
  const [previousPosition, setPreviousPosition] = useState(position);
  const [isResizing, setIsResizing] = useState(false);

  // Update Draggable's size whenever the container's size changes
  useEffect(
    () =>
      setSize({
        width: calculateClosestValidSizeComponent(initialWidth, gapSize, cellSize, gridSize.width),
        height: calculateClosestValidSizeComponent(initialHeight, gapSize, cellSize, gridSize.height),
      }),
    [
      gapSize,
      cellSize,
      gridSize.height,
      gridSize.width,
      initialHeight,
      initialWidth,
    ],
  );
  // Update Draggable's position whenever the container's size changes
  useEffect(() => {
    setPosition({
      x: calculateClosestValidPositionComponent(initialXPosition, gapSize, cellSize, gridSize.width, width),
      y: calculateClosestValidPositionComponent(initialYPosition, gapSize, cellSize, gridSize.height, height),
    });
  }, [
    gapSize,
    cellSize,
    gridSize.height,
    gridSize.width,
    height,
    initialXPosition,
    initialYPosition,
    width,
  ]);

  const elementRef = useRef<HTMLDivElement>(null);

  const startDrag = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      onPointerDown(getPointerPositionFromEvent(event));
      const aToolIsActive = activeTool !== null;
      const createBoxToolIsActive = activeTool === ToolbarButtonType.CreateBox;
      if (aToolIsActive && !createBoxToolIsActive) {
        return;
      }

      setIsDragging(true);
      setIsSelected(true);
      setSelectedItem(id);

      const { x, y } = getPointerPositionFromEvent(event);

      setPointerStartPosition({
        x: x - position.x,
        y: y - position.y,
      });
    },
    [onPointerDown, activeTool, setSelectedItem, id, position.x, position.y],
  );

  const getNewPosition = useCallback((x: number, y: number) => ({ x, y }), []);

  const getClosestValidXPosition = useCallback(
    (pointerX: number) =>
      calculateClosestValidPositionComponent(
        pointerX,
        gapSize,
        cellSize,
        gridSize.width,
        width,
      ),
    [gapSize, cellSize, gridSize.width, width],
  );

  const getClosestValidYPosition = useCallback(
    (pointerY: number) =>
      calculateClosestValidPositionComponent(
        pointerY,
        gapSize,
        cellSize,
        gridSize.height,
        height,
      ),
    [gapSize, cellSize, gridSize.height, height],
  );

  const checkIfPositionIsFree = useCallback(
    (newPosition: Position): boolean =>
      positionIsFree(
        newPosition,
        id,
        { width, height },
        gridSize,
        gapSize,
        cellSize,
        occupiedCells,
      ),
    [gapSize, cellSize, gridSize, height, id, occupiedCells, width],
  );

  const stopDrag = useCallback(() => {
    const { x, y } = position;

    const closestValidXPosition = getClosestValidXPosition(x);
    const closestValidYPosition = getClosestValidYPosition(y);

    if (closestValidXPosition != null && closestValidYPosition != null) {
      const newPosition = getNewPosition(
        closestValidXPosition,
        closestValidYPosition,
      );

      if (checkIfPositionIsFree(newPosition)) {
        setPosition(newPosition);
        updatePosition(newPosition);
        setPreviousPosition(newPosition);
      }
      else {
        setPosition(previousPosition);
      }
    }

    setPointerStartPosition(null);
    setIsDragging(false);
  }, [
    position,
    getClosestValidXPosition,
    getClosestValidYPosition,
    getNewPosition,
    checkIfPositionIsFree,
    updatePosition,
    previousPosition,
  ]);

  const drag = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!isDragging || !pointerStartPosition) {
        return;
      }

      if (mouseOutsideGrid) {
        stopDrag();
        return;
      }

      const { x, y } = getPointerPositionFromEvent(event);

      const newPosition = getNewPosition(
        x - pointerStartPosition.x,
        y - pointerStartPosition.y,
      );

      setPosition(newPosition);
    },
    [
      isDragging,
      pointerStartPosition,
      mouseOutsideGrid,
      getNewPosition,
      stopDrag,
    ],
  );

  const preventDefault = useCallback((event: React.DragEvent) => {
    event.preventDefault();
  }, []);

  useEffect(() => {
    setLabelText(
      isSelected ? t(labelTextKeys.selected) : t(labelTextKeys.notSelected),
    );
  }, [isSelected]);

  const horizontalScaleHandleLabelText = '';
  const verticalScaleHandleLabelText = '';

  useEffect(() => {
    /* 
      These are tied to `window`, because the
      cursor might not be on top of the element
      when the drag action ends.
    */
    window.addEventListener('mousemove', drag);
    window.addEventListener('touchmove', drag);

    return () => {
      window.removeEventListener('mousemove', drag);
      window.removeEventListener('touchmove', drag);
    };
  }, [drag]);

  const stopResize = useCallback(() => {
    stopDrag();
    setIsResizing(false);
  }, [stopDrag]);

  const contextMenuActions: Array<ContextMenuAction> = useMemo(() => {
    const editAction: ContextMenuAction = {
      icon: ContextMenuButtonType.Edit,
      label: t('context-menu_edit'),
      onClick: () => editItem(id),
    };

    const deleteAction: ContextMenuAction = {
      icon: ContextMenuButtonType.Delete,
      label: t('context-menu_delete'),
      onClick: () => openDeleteDialogue(id),
    };

    return [editAction, deleteAction];
  }, [editItem, id, openDeleteDialogue]);

  /**
   * This offset is used to fix some of the floating point errors
   * that are placing items a few pixels off the grid.
   */
  const offset = 2;

  return (
    <div
      id={id}
      ref={elementRef}
      role="button"
      tabIndex={0}
      /* Use draggable="true" to benefit from screen readers' understanding of the property */
      draggable="true"
      /* Prevent default because we implement drag ourselves */
      onDragStart={preventDefault}
      aria-grabbed={isDragging}
      className={`${styles.draggable} ${
        isPreview && styles.preview
      } draggable ${
        activeTool === ToolbarButtonType.CreateArrow && styles.arrow_mode
      }`}
      onMouseDown={startDrag}
      onTouchStart={startDrag}
      style={{
        transform: `translateX(${position.x}px) translateY(${position.y}px)`,
        width: width + offset,
        height: height + offset,
        zIndex: isDragging || selectedItem === id ? 2 : undefined,
        pointerEvents: isPreview || isResizing ? 'none' : undefined,
        transition: isPreview || isResizing ? 'none' : undefined,
      }}
      aria-label={labelText}
      onMouseUp={stopDrag}
      onTouchEnd={stopDrag}
      onDoubleClick={() => editItem(id)}
      data-draggable
    >
      <div className={styles.inner} tabIndex={-1}>
        {children}
      </div>

      {activeTool !== ToolbarButtonType.CreateArrow && showScaleHandles && (
        <ScaleHandles
          setIsResizing={setIsResizing}
          startResize={startResize}
          stopResize={stopResize}
          verticalScaleHandleLabelText={verticalScaleHandleLabelText}
          horizontalScaleHandleLabelText={horizontalScaleHandleLabelText}
        />
      )}
      <ContextMenu
        actions={contextMenuActions}
        show={selectedItem === id}
        turnLeft={checkIfRightSideOfGrid(position.x, gridSize.width)}
      />
    </div>
  );
};
