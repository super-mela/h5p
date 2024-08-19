/* eslint-disable no-nested-ternary */
import { H5P } from 'h5p-utils';
import { FC, useCallback, useMemo, useState } from 'react';
import { t } from '../../H5P/H5P.util';
import { ArrowItemType } from '../../types/ArrowItemType';
import { ArrowType } from '../../types/ArrowType';
import { ContextMenuAction } from '../../types/ContextMenuAction';
import { Position } from '../../types/Position';
import {
  xAdjustmentEnd,
  xAdjustmentStart,
  yAdjustmentEnd,
  yAdjustmentStart,
} from '../../utils/arrow.utils';
import { checkIfRightSideOfGrid } from '../../utils/grid.utils';
import { ContextMenu, ContextMenuButtonType } from '../ContextMenu/ContextMenu';
import { Dialog } from '../Dialog/Dialog';
import styles from './Arrow.module.scss';

export type ArrowProps = {
  cellSize: number;
  gapSize: number;
  item: ArrowItemType;
  editItem: (itemId: string) => void;
  deleteItem: (itemId: string) => void;
  selectedItemId: string | null;
  setSelectedItemId: (itemId: string) => void;
  updateArrowType: (type: ArrowType, itemId: string) => void;
  gridWidth: number;
  arrowStartId: string | null;
};

// TODO: Share code with h5p-topic-map instead of duplicating
export const Arrow: FC<ArrowProps> = ({
  item,
  cellSize,
  gapSize,
  editItem,
  deleteItem,
  selectedItemId,
  setSelectedItemId,
  updateArrowType,
  gridWidth,
  arrowStartId,
}) => {
  const arrowHeadID = H5P.createUUID();
  const arrowTailID = H5P.createUUID();

  const [showDeleteConfirmationDialog, setShowDeleteConfirmationDialog] = useState(false);

  const confirmDeletion = useCallback(() => {
    deleteItem(item.id);
    setShowDeleteConfirmationDialog(false);
  }, [deleteItem, item.id]);

  const denyDeletion = useCallback(() => {
    setShowDeleteConfirmationDialog(false);
  }, []);

  const contextMenuActions: Array<ContextMenuAction> = useMemo(() => {
    const editAction: ContextMenuAction = {
      icon: ContextMenuButtonType.Edit,
      label: t('context-menu_edit'),
      onClick: () => editItem(item.id),
    };
    const deleteAction: ContextMenuAction = {
      icon: ContextMenuButtonType.Delete,
      label: t('context-menu_delete'),
      onClick: () => setShowDeleteConfirmationDialog(true),
    };

    const changeToDirectionalArrowAction: ContextMenuAction = {
      icon: ContextMenuButtonType.ArrowDirectional,
      label: t('context-menu_arrow-directional'),
      onClick: () => updateArrowType(ArrowType.Directional, item.id),
    };

    const changeToBiDirectionalArrowAction: ContextMenuAction = {
      icon: ContextMenuButtonType.ArrowBiDirectional,
      label: t('context-menu_arrow-bi-directional'),
      onClick: () => updateArrowType(ArrowType.BiDirectional, item.id),
    };

    const changeToNonDirectionalArrowAction: ContextMenuAction = {
      icon: ContextMenuButtonType.ArrowNonDirectional,
      label: t('context-menu_arrow-non-directional'),
      onClick: () => updateArrowType(ArrowType.NonDirectional, item.id),
    };

    return [
      editAction,
      changeToDirectionalArrowAction,
      changeToBiDirectionalArrowAction,
      changeToNonDirectionalArrowAction,
      deleteAction,
    ];
  }, [editItem, item.id, updateArrowType]);

  const isHorizontal =
    item.startPosition != null && item.endPosition != null
      ? Math.abs(item.startPosition.x - item.endPosition.x) >
      Math.abs(item.startPosition.y - item.endPosition.y)
      : true;

  let startPos = {
    x: 0.5 * (cellSize + gapSize),
    y: 1.5 * (cellSize + gapSize),
  };

  let endPos = {
    x: 6.5 * (cellSize + gapSize),
    y: 1.5 * (cellSize + gapSize),
  };

  if (item.startGridPosition != null && item.endGridPosition != null) {
    const xAdjustStart = xAdjustmentStart(item, isHorizontal);
    const yAdjustStart = yAdjustmentStart(item, isHorizontal);

    const xAdjust = xAdjustmentEnd(item);
    const yAdjust = yAdjustmentEnd(item);

    startPos = {
      x: (item.startGridPosition.x + xAdjustStart) * (cellSize + gapSize),
      y: (item.startGridPosition.y + yAdjustStart) * (cellSize + gapSize),
    };

    endPos = {
      x: (item.endGridPosition.x + xAdjust) * (cellSize + gapSize),
      y: (item.endGridPosition.y + yAdjust) * (cellSize + gapSize),
    };
  }

  const toPathElement = (position: Position): string => {
    return `L ${(position.x - 0.5) * (cellSize + gapSize)} ${(position.y - 0.5) * (cellSize + gapSize)
    }`;
  };

  const pathDef = `M ${startPos.x} ${startPos.y} ${item.breakpoints?.map(toPathElement).join(' ') ?? ''
  } L ${endPos.x} ${endPos.y}`;

  const contextMenuPosition: Position = {
    x: isHorizontal
      ? (startPos.x + endPos.x) / 2
      : endPos.x - 2 * (cellSize + gapSize),
    y: isHorizontal
      ? endPos.y - 1 * (cellSize + gapSize)
      : (startPos.y + endPos.y) / 2,
  };

  return (
    <div className={styles.arrow}>
      <svg className={styles.arrowSvg}>
        <defs>
          <marker
            id={arrowHeadID}
            markerWidth="10"
            markerHeight="10"
            refX="0.7"
            refY="1"
            orient="auto"
          >
            <path
              d="M0,0 L0,2 L1.5,1 z"
              fill="var(--theme-color-4)"
              className={styles.arrowPath}
              onClick={() => setSelectedItemId(item.id)}
            />
          </marker>
          <marker
            id={arrowTailID}
            markerWidth="10"
            markerHeight="10"
            refX="0.7"
            refY="1"
            orient="auto-start-reverse"
          >
            <path
              d="M0,0 L0,2 L1.5,1 z"
              fill="var(--theme-color-4)"
              className={styles.arrowPath}
              onClick={() => setSelectedItemId(item.id)}
            />
          </marker>
        </defs>
        <path
          className={`${selectedItemId === null ? styles.path : styles.pathSelected
          } ${arrowStartId === null ? styles.selectable : ''}`}
          d={pathDef}
          fill="transparent"
          stroke="var(--theme-color-4)"
          strokeWidth={cellSize * 0.66}
          markerEnd={
            item.arrowType === ArrowType.BiDirectional ||
              item.arrowType === ArrowType.Directional
              ? `url(#${arrowHeadID})`
              : ''
          }
          markerStart={
            item.arrowType === ArrowType.BiDirectional ? `url(#${arrowTailID})` : ''
          }
          onClick={() => setSelectedItemId(item.id)}
          onDoubleClick={() => editItem(item.id)}
        />
      </svg>

      <ContextMenu
        actions={contextMenuActions}
        show={selectedItemId === item.id}
        turnLeft={checkIfRightSideOfGrid(contextMenuPosition.x, gridWidth)}
        x={contextMenuPosition.x}
        y={contextMenuPosition.y}
        gridWidth={gridWidth}
      />

      <Dialog
        isOpen={showDeleteConfirmationDialog}
        title={t('draggable_delete-confirmation')}
        onOpenChange={setShowDeleteConfirmationDialog}
        size="medium"
      >
        <div className={styles.deleteConfirmationButtons}>
          <button
            type="button"
            className={styles.deleteConfirmationPositive}
            onClick={confirmDeletion}
          >
            {t('draggable_delete-positive')}
          </button>
          <button
            type="button"
            className={styles.deleteConfirmationNegative}
            onClick={denyDeletion}
          >
            {t('draggable_delete-negative')}
          </button>
        </div>
      </Dialog>
    </div>
  );
};
