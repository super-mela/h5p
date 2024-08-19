import type { H5PFieldGroup, H5PForm } from 'h5p-types';
import { getImageUrl } from 'h5p-utils';
import { FC, useCallback, useMemo, useRef, useState } from 'react';
import { t } from '../../H5P/H5P.util';
import { ArrowItemType } from '../../types/ArrowItemType';
import { Params } from '../../types/Params';
import { TopicMapItemType } from '../../types/TopicMapItemType';
import { getBackgroundImageField } from '../../utils/H5P/form.utils';
import { updateArrowLabels } from '../../utils/arrow.utils';
import { findConnectedArrows } from '../../utils/grid.utils';
import { ArrowItemForm } from '../ArrowItemForm/ArrowItemForm';
import { Dialog } from '../Dialog/Dialog';
import { Grid, GridDimensions } from '../Grid/Grid';
import { Toolbar, ToolbarButtonType } from '../Toolbar/Toolbar';
import { TopicMapItemForm } from '../TopicMapItemForm/TopicMapItemForm';
import styles from './MapEditorView.module.scss';

export type MapEditorViewProps = {
  gapSize?: number;
  numberOfColumns?: number;
  numberOfRows?: number;
  params: Params;
  parent: H5PForm;
  semantics: H5PFieldGroup;
  setParams: (updatedParams: Partial<Params>) => void;
};

export const MapEditorView: FC<MapEditorViewProps> = ({
  gapSize,
  numberOfColumns,
  numberOfRows,
  params,
  parent,
  semantics,
  setParams,
}) => {
  const columns = numberOfColumns ?? 31;
  const rows = numberOfRows ?? 19;
  const defaultGapSize = 4;

  const [activeTool, setActiveTool] = useState<ToolbarButtonType | null>(null);
  const [gridItems, setGridItems] = useState(params.topicMapItems ?? []);
  const [arrowItems, setArrowItems] = useState<Array<ArrowItemType>>(
    params.arrowItems ?? [],
  );

  const [editedItem, setEditedItem] = useState<string | null>(null);
  const [deletedItem, setDeletedItem] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [currentItemsLength, setCurrentItemsLength] = useState(
    gridItems.length,
  );
  const [editedArrow, setEditedArrow] = useState<string | null>(null);
  const [showDeleteConfirmationDialog, setShowDeleteConfirmationDialog] =
    useState(false);
  const updateGrid = useRef((newItems: TopicMapItemType[]): void =>
    updateGrid.current(newItems),
  );

  const setActive = (newValue: ToolbarButtonType | null): void => {
    setActiveTool(newValue);
  };

  const updateGridDimensions = useCallback(
    (newGrid: GridDimensions): void => {
      setParams({ grid: newGrid });
    },
    [setParams],
  );

  const updateArrows = useCallback(
    (items: Array<ArrowItemType>) => {
      setParams({ arrowItems: items });
      setArrowItems(items);
    },
    [setParams],
  );

  const updateItems = useCallback(
    (items: Array<TopicMapItemType>) => {
      // Update arrow labels to match mapItem labels
      if (arrowItems.length > 0) {
        const updatedArrows = updateArrowLabels(arrowItems, items);

        updateArrows(updatedArrows);
        setArrowItems(updatedArrows);
      }
      setParams({ topicMapItems: items });
      setGridItems(items);
      updateGrid.current(items);
    },
    [arrowItems, setParams, updateArrows],
  );

  const openDeleteDialogue = useCallback((itemId: string) => {
    setDeletedItem(itemId);
    setShowDeleteConfirmationDialog(true);
  }, []);

  const deleteArrow = useCallback(
    (id: string) => {
      const newItems = arrowItems.filter((item) => item.id !== id);

      updateArrows(newItems);
      setArrowItems(newItems);
    },
    [arrowItems, updateArrows],
  );

  const deleteItem = useCallback(() => {
    const newItems = gridItems.filter((item) => item.id !== deletedItem);

    const connectedArrows = findConnectedArrows(deletedItem ?? '', arrowItems);
    connectedArrows.forEach((item) => deleteArrow(item.id));

    updateItems(newItems);
    setGridItems(newItems);
    updateGrid.current(newItems);
    setShowDeleteConfirmationDialog(false);
    setSelectedItem(null);
    setCurrentItemsLength(newItems.length);
  }, [arrowItems, deleteArrow, deletedItem, gridItems, updateItems]);

  const denyDeletion = useCallback(() => {
    setShowDeleteConfirmationDialog(false);
    setSelectedItem(null);
  }, []);

  const topicMapItemFormDialogTitle = t('map-editor-view_item-dialog-title');
  const backgroundImageField = useMemo(() => {
    const bgImgField = getBackgroundImageField(semantics);

    if (!bgImgField) {
      throw new Error(
        'Background image field not found. Was it removed from semantics, or did its name change?',
      );
    }

    return bgImgField;
  }, [semantics]);

  const backgroundImage: string | undefined = params.gridBackgroundImage?.path
    ? `url(${getImageUrl(params.gridBackgroundImage?.path)})`
    : undefined;

  return (
    <div className={styles.mapEditorView}>
      <Toolbar
        setActiveTool={setActive}
        activeTool={activeTool}
        isArrowButtonDisabled={gridItems.length < 2}
        setParams={setParams}
        params={params}
        parent={parent}
        backgroundImageField={backgroundImageField}
      />
      <div
        className={`${styles.gridBorder} ${
          backgroundImage ? styles.backgroundImage : ''
        }`}
        style={{ backgroundImage }}
      >
        <Grid
          numberOfColumns={columns}
          numberOfRows={rows}
          initialItems={gridItems}
          updateItems={updateItems}
          initialArrowItems={arrowItems}
          updateArrowItems={updateArrows}
          updateGridDimensions={updateGridDimensions}
          gapSize={gapSize ?? defaultGapSize}
          setActiveTool={setActive}
          activeTool={activeTool}
          setEditedItem={setEditedItem}
          setEditedArrow={setEditedArrow}
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItem}
          openDeleteDialogue={openDeleteDialogue}
          updateGrid={updateGrid}
          currentItemsLength={currentItemsLength}
          setCurrentItemsLength={setCurrentItemsLength}
        />
        <Dialog
          isOpen={showDeleteConfirmationDialog}
          title={t('draggable_delete-confirmation')}
          onOpenChange={(isOpen) => {
            if (!isOpen) {
              setDeletedItem(null);
              denyDeletion();
            }
          }}
          size="medium"
        >
          <div className={styles.deleteConfirmationButtons}>
            <button
              type="button"
              className={styles.deleteConfirmationPositive}
              onClick={deleteItem}
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
        <Dialog
          isOpen={Boolean(semantics && (editedItem || editedArrow))}
          title={topicMapItemFormDialogTitle}
          size="large"
          onOpenChange={(isOpen) => {
            if (!isOpen) {
              setEditedItem(null);
              setEditedArrow(null);
            }
          }}
        >
          {editedItem ? (
            <TopicMapItemForm
              itemId={editedItem}
              semantics={semantics}
              params={params}
              parent={parent}
              onSave={(newParams) => {
                updateItems(newParams.topicMapItems ?? []);
                updateArrows(newParams.arrowItems ?? []);
                setEditedItem(null);
              }}
            />
          ) : null}

          {editedArrow ? (
            <ArrowItemForm
              itemId={editedArrow}
              semantics={semantics}
              params={params}
              parent={parent}
              onSave={(newParams) => {
                updateArrows(newParams.arrowItems ?? []);
                setEditedArrow(null);
              }}
            />
          ) : null}
        </Dialog>
      </div>
    </div>
  );
};
