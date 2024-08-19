import type { H5PImage } from 'h5p-types';
import * as React from 'react';
import { ArrowItemType } from '../../types/ArrowItemType';
import { TopicMapItemType } from '../../types/TopicMapItemType';
import { Arrow } from '../Arrow/Arrow';
import { TopicMapItem } from '../TopicMapItem/TopicMapItem';
import styles from './Grid.module.scss';
import { H5P } from '../../h5p/H5P.util';
import { getDescriptiveText } from '../../utils/arrow.utils';
import { useTranslation } from '../../hooks/useTranslation';

export type GridDimensions = {
  numberOfColumns: number;
  numberOfRows: number;
};

export type GridProps = {
  items: Array<TopicMapItemType>;
  arrowItems: Array<ArrowItemType>;
  backgroundImage: H5PImage | undefined;
  grid?: GridDimensions;
};

export const Grid: React.FC<GridProps> = ({
  items,
  arrowItems,
  backgroundImage,
  grid,
}) => {
  const { t } = useTranslation();
  const gridContainerRef = React.createRef<HTMLDivElement>();

  const isArrow = (
    item: ArrowItemType | TopicMapItemType,
  ): item is ArrowItemType => (item as ArrowItemType).arrowType != null;

  const getFirstArrowPosition = (
    arrow: ArrowItemType,
    xORy: 'x' | 'y',
  ): number => {
    return arrow.startPosition?.[xORy] < arrow.endPosition?.[xORy]
      ? arrow.startPosition?.[xORy]
      : arrow.endPosition?.[xORy];
  };

  const sortItems = (a: TopicMapItemType, b: TopicMapItemType): number => {
    // Sort after index first
    if (a.index != null && b.index != null) {
      return a.index < b.index ? -1 : 1;
    }
    if (a.index != null && b.index == null) {
      return -1;
    }
    if (a.index == null && b.index != null) {
      return 1;
    }
    // Then sort after position
    if (a.xPercentagePosition === b.xPercentagePosition) {
      return a.yPercentagePosition < b.yPercentagePosition ? -1 : 1;
    }

    return a.xPercentagePosition < b.xPercentagePosition ? -1 : 1;
  };

  const sortArrowItems = React.useCallback(
    (a: ArrowItemType, b: ArrowItemType): number => {
      const arrowAx = getFirstArrowPosition(a, 'x');
      const arrowBx = getFirstArrowPosition(b, 'x');
      const arrowAy = getFirstArrowPosition(a, 'y');
      const arrowBy = getFirstArrowPosition(b, 'y');

      if (arrowAx === arrowBx) {
        return arrowAy < arrowBy ? 1 : -1;
      }

      return arrowAx < arrowBx ? 1 : -1;
    },
    [],
  );

  const addArrow = (
    array: Array<ArrowItemType | TopicMapItemType>,
    index: number,
    newItem: ArrowItemType,
  ): Array<ArrowItemType | TopicMapItemType> => {
    return [...array.slice(0, index), newItem, ...array.slice(index)];
  };

  const allMapItems = React.useMemo(() => {
    const sortedItems = items.concat().sort((a, b) => sortItems(a, b));
    let allItems: Array<TopicMapItemType | ArrowItemType> = sortedItems;

    arrowItems
      .concat()
      .sort((a, b) => sortArrowItems(a, b))
      .forEach((arrowItem) => {
        allItems.forEach((mapItem, index) => {
          if (mapItem.id === arrowItem.startElementId) {
            allItems = addArrow(allItems, index + 1, arrowItem);
          }
        });
      });

    return allItems.map((item) => {
      if (isArrow(item)) {
        return (
          <Arrow
            key={item.id}
            item={item}
            grid={grid}
            descriptiveText={getDescriptiveText(item, items, t)}
          />
        );
      }

      return (
        <div
          key={item.id}
          id={item.id}
          className={styles.itemWrapper}
          style={{
            left: `${item.xPercentagePosition}%`,
            top: `${item.yPercentagePosition}%`,
            height: `${item.heightPercentage}%`,
            width: `${item.widthPercentage}%`,
          }}
        >
          <TopicMapItem
            item={item}
            grid={grid}
            gridRef={gridContainerRef}
          />
        </div>
      );
    });
  }, [
    arrowItems,
    grid,
    items,
    sortArrowItems,
    gridContainerRef,
  ]);

  const bgImageStyle: string | undefined = backgroundImage?.path
    ? `url(${backgroundImage.path})`
    : undefined;

  const gridWrapperClasses = React.useCallback(
    () =>
      [
        styles.gridWrapper,
        H5P.isFullscreen ? styles.gridWrapperFullscreen : undefined,
      ]
        .filter(Boolean)
        .join(' '),
    [],
  );

  return (
    <div
      className={gridWrapperClasses()}
      style={{
        backgroundImage: bgImageStyle,
      }}
    >
      <div className={styles.grid} ref={gridContainerRef}>
        {allMapItems}
      </div>
    </div>
  );
};
