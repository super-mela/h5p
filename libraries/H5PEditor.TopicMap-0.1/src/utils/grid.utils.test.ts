import fc from 'fast-check';
import { Cell } from '../types/Cell';
import { Element } from '../types/Element';
import { OccupiedCell } from '../types/OccupiedCell';
import { Position } from '../types/Position';
import { Size } from '../types/Size';
import { TopicMapItemType } from '../types/TopicMapItemType';
import {
  calculateXPercentage,
  calculateYPercentage,
  cellIsOccupiedByElement,
  coordinatePosToPx,
  findCellsElementOccupies,
  getAllCells,
  positionIsFree,
  resizeItem,
  updateItem,
} from './grid.utils';

describe(resizeItem.name, () => {
  it('should scale the item down if the scale factor is lower than 1', () => {
    const item: TopicMapItemType = {
      id: 'test',
      xPercentagePosition: 10,
      yPercentagePosition: 10,
      widthPercentage: 20,
      heightPercentage: 20,
      topicImage: { path: '', alt: '' },
      label: 'Label',
      description: '',
    };

    const scaleFactor = 0.5;

    const expectedItem: TopicMapItemType = {
      id: 'test',
      xPercentagePosition: 5,
      yPercentagePosition: 5,
      widthPercentage: 10,
      heightPercentage: 10,
      topicImage: { path: '', alt: '' },
      label: 'Label',
      description: '',
    };

    const actualItem = resizeItem(item, scaleFactor);

    expect(actualItem).toEqual(expectedItem);
  });

  it('should scale the item down if the scale factor is greater than 1', () => {
    const item: TopicMapItemType = {
      id: 'test',
      xPercentagePosition: 10,
      yPercentagePosition: 10,
      widthPercentage: 20,
      heightPercentage: 20,
      topicImage: { path: '', alt: '' },
      label: 'Label',
      description: '',
    };

    const scaleFactor = 2;

    const expectedItem: TopicMapItemType = {
      id: 'test',
      xPercentagePosition: 20,
      yPercentagePosition: 20,
      widthPercentage: 40,
      heightPercentage: 40,
      topicImage: { path: '', alt: '' },
      label: 'Label',
      description: '',
    };

    const actualItem = resizeItem(item, scaleFactor);

    expect(actualItem).toEqual(expectedItem);
  });

  it('should do nothing if the scale factor is 1', () => {
    const item: TopicMapItemType = {
      id: 'test',
      xPercentagePosition: 10,
      yPercentagePosition: 10,
      widthPercentage: 20,
      heightPercentage: 20,
      topicImage: { path: '', alt: '' },
      label: 'Label',
      description: '',
    };

    const scaleFactor = 1;

    const expectedItem: TopicMapItemType = {
      id: 'test',
      xPercentagePosition: 10,
      yPercentagePosition: 10,
      widthPercentage: 20,
      heightPercentage: 20,
      topicImage: { path: '', alt: '' },
      label: 'Label',
      description: '',
    };

    const actualItem = resizeItem(item, scaleFactor);

    expect(actualItem).toEqual(expectedItem);
  });

  it('should handle any number', () =>
    fc.assert(
      fc.property(fc.double(), (scaleFactor) => {
        const item: TopicMapItemType = {
          id: 'test',
          xPercentagePosition: 10,
          yPercentagePosition: 10,
          widthPercentage: 20,
          heightPercentage: 20,
          topicImage: { path: '', alt: '' },
          label: 'Label',
          dialog: {
            hasNote: true,
            links: [],
          },
          description: '',
        };

        const expectedItem: TopicMapItemType = {
          id: 'test',
          xPercentagePosition: 10 * scaleFactor,
          yPercentagePosition: 10 * scaleFactor,
          widthPercentage: 20 * scaleFactor,
          heightPercentage: 20 * scaleFactor,
          topicImage: { path: '', alt: '' },
          label: 'Label',
          dialog: {
            hasNote: true,
            links: [],
          },
          description: '',
        };

        const actualItem = resizeItem(item, scaleFactor);

        expect(actualItem).toEqual(expectedItem);
      }),
      { verbose: true },
    ));
});

describe(calculateXPercentage.name, () => {
  it('should calculate the x value\'s percentage of the total width', () => {
    const xValue = 10;
    const width = 100;

    const expectedPercentage = 10;
    const actualPercentage = calculateXPercentage(xValue, width);

    expect(actualPercentage).toBe(expectedPercentage);
  });
});

describe(calculateYPercentage.name, () => {
  it('should calculate the y value\'s percentage of the total height', () => {
    const xValue = 10;
    const height = 100;

    const expectedPercentage = 10;
    const actualPercentage = calculateYPercentage(xValue, height);

    expect(actualPercentage).toBe(expectedPercentage);
  });
});

describe(updateItem.name, () => {
  it('should find the item in the items list and update the position and size based on the grid\'s width and height', () => {
    const item: TopicMapItemType = {
      id: '1',
      xPercentagePosition: 25,
      yPercentagePosition: 20,
      widthPercentage: 10,
      heightPercentage: 10,
      topicImage: { path: '', alt: '' },
      label: 'Label',
      description: '',
    };

    const items: Array<TopicMapItemType> = [
      item,
      {
        id: '2',
        xPercentagePosition: 25,
        yPercentagePosition: 60,
        widthPercentage: 65,
        heightPercentage: 32,
        topicImage: { path: '', alt: '' },
        label: 'Label',
        description: '',
      },
    ];

    const newPosition: Position = {
      x: 50,
      y: 100,
    };

    const newSize: Size = {
      width: 200,
      height: 200,
    };

    const width = 1000;
    const height = 1000;

    const expectedItem: TopicMapItemType = {
      id: '1',
      xPercentagePosition: 5,
      yPercentagePosition: 10,
      widthPercentage: 20,
      heightPercentage: 20,
      topicImage: { path: '', alt: '' },
      label: 'Label',
      description: '',
    };

    const actualItems = updateItem(items, item, width, height, {
      newPosition,
      newSize,
    });

    expect(actualItems).toEqual<Array<TopicMapItemType>>([
      expectedItem,
      {
        id: '2',
        xPercentagePosition: 25,
        yPercentagePosition: 60,
        widthPercentage: 65,
        heightPercentage: 32,
        topicImage: { path: '', alt: '' },
        label: 'Label',
        description: '',
      },
    ]);
  });

  it('should update without changing the list, and without changing the item object itself', () => {
    const item: TopicMapItemType = {
      id: '1',
      xPercentagePosition: 25,
      yPercentagePosition: 20,
      widthPercentage: 10,
      heightPercentage: 10,
      topicImage: { path: '', alt: '' },
      label: 'Label',
      description: '',
    };

    const items: Array<TopicMapItemType> = [
      item,
      {
        id: '2',
        xPercentagePosition: 25,
        yPercentagePosition: 60,
        widthPercentage: 65,
        heightPercentage: 32,
        topicImage: { path: '', alt: '' },
        label: 'Label',
        description: '',
      },
    ];

    const newPosition: Position = {
      x: 50,
      y: 100,
    };

    const newSize: Size = {
      width: 200,
      height: 200,
    };

    const width = 1000;
    const height = 1000;

    updateItem(items, item, width, height, { newPosition, newSize });

    expect(item).toEqual<TopicMapItemType>({
      id: '1',
      xPercentagePosition: 25,
      yPercentagePosition: 20,
      widthPercentage: 10,
      heightPercentage: 10,
      topicImage: { path: '', alt: '' },
      label: 'Label',
      description: '',
    });

    expect(items[0]).toEqual<TopicMapItemType>({
      id: '1',
      xPercentagePosition: 25,
      yPercentagePosition: 20,
      widthPercentage: 10,
      heightPercentage: 10,
      topicImage: { path: '', alt: '' },
      label: 'Label',
      description: '',
    });

    expect(items[1]).toEqual<TopicMapItemType>({
      id: '2',
      xPercentagePosition: 25,
      yPercentagePosition: 60,
      widthPercentage: 65,
      heightPercentage: 32,
      topicImage: { path: '', alt: '' },
      label: 'Label',
      description: '',
    });
  });

  it('should be able to update only the size', () => {
    const item: TopicMapItemType = {
      id: '1',
      xPercentagePosition: 25,
      yPercentagePosition: 20,
      widthPercentage: 10,
      heightPercentage: 10,
      topicImage: { path: '', alt: '' },
      label: 'Label',
      description: '',
    };

    const items: Array<TopicMapItemType> = [
      item,
      {
        id: '2',
        xPercentagePosition: 25,
        yPercentagePosition: 60,
        widthPercentage: 65,
        heightPercentage: 32,
        topicImage: { path: '', alt: '' },
        label: 'Label',
        dialog: {
          hasNote: true,
          links: [],
        },
        description: '',
      },
    ];

    const newSize: Size = {
      width: 200,
      height: 200,
    };

    const width = 1000;
    const height = 1000;

    const expectedItem: TopicMapItemType = {
      id: '1',
      xPercentagePosition: 25,
      yPercentagePosition: 20,
      widthPercentage: 20,
      heightPercentage: 20,
      topicImage: { path: '', alt: '' },
      label: 'Label',
      description: '',
    };

    const actualItems = updateItem(items, item, width, height, {
      newSize,
    });

    expect(actualItems).toEqual<Array<TopicMapItemType>>([
      expectedItem,
      {
        id: '2',
        xPercentagePosition: 25,
        yPercentagePosition: 60,
        widthPercentage: 65,
        heightPercentage: 32,
        topicImage: { path: '', alt: '' },
        label: 'Label',
        dialog: {
          hasNote: true,
          links: [],
        },
        description: '',
      },
    ]);
  });

  it('should be able to update only the position', () => {
    const item: TopicMapItemType = {
      id: '1',
      xPercentagePosition: 25,
      yPercentagePosition: 20,
      widthPercentage: 10,
      heightPercentage: 10,
      topicImage: { path: '', alt: '' },
      label: 'Label',
      description: '',
    };

    const items: Array<TopicMapItemType> = [
      item,
      {
        id: '2',
        xPercentagePosition: 25,
        yPercentagePosition: 60,
        widthPercentage: 65,
        heightPercentage: 32,
        topicImage: { path: '', alt: '' },
        label: 'Label',
        dialog: {
          hasNote: true,
          links: [],
        },
        description: '',
      },
    ];

    const newPosition: Position = {
      x: 50,
      y: 100,
    };

    const width = 1000;
    const height = 1000;

    const expectedItem: TopicMapItemType = {
      id: '1',
      xPercentagePosition: 5,
      yPercentagePosition: 10,
      widthPercentage: 10,
      heightPercentage: 10,
      topicImage: { path: '', alt: '' },
      label: 'Label',
      description: '',
    };

    const actualItems = updateItem(items, item, width, height, {
      newPosition,
    });

    expect(actualItems).toEqual<Array<TopicMapItemType>>([
      expectedItem,
      {
        id: '2',
        xPercentagePosition: 25,
        yPercentagePosition: 60,
        widthPercentage: 65,
        heightPercentage: 32,
        topicImage: { path: '', alt: '' },
        label: 'Label',
        dialog: {
          hasNote: true,
          links: [],
        },
        description: '',
      },
    ]);
  });
});

describe(findCellsElementOccupies.name, () => {
  /*
    The grid looks like this:
    ([ ] = cell)

    [ ] [ ] [ ] [ ]
    [ ] [ ] [ ] [ ]
    [ ] [ ] [ ] [ ]
    [ ] [ ] [ ] [ ]
  */

  const gapSize = 5;
  const cellSize = 10;
  const gridWidth = 55;
  const gridHeight = 55;

  it('should return an array of all the cells that the element occupies (1*1)', () => {
    const element: Element = {
      id: '1',
      type: 'item',
      position: { x: 0, y: 0 },
      size: { width: 10, height: 10 },
    };

    const expectedCells: Array<OccupiedCell> = [
      {
        occupiedById: '1',
        occupiedByType: 'item',
        x: 0,
        y: 0,
        index: 0,
      },
    ];

    const actualCells = findCellsElementOccupies(
      element,
      gridWidth,
      gridHeight,
      gapSize,
      cellSize,
    );

    expect(actualCells).toEqual(expectedCells);
  });

  it('should return an array of all the cells that the element occupies (2*2)', () => {
    const element: Element = {
      id: '1',
      type: 'item',
      position: { x: 0, y: 0 },
      size: { width: 25, height: 25 },
    };

    const expectedCells: Array<OccupiedCell> = [
      {
        occupiedById: '1',
        occupiedByType: 'item',
        x: 0,
        y: 0,
        index: 0,
      },
      {
        occupiedById: '1',
        occupiedByType: 'item',
        x: 15,
        y: 0,
        index: 1,
      },
      {
        occupiedById: '1',
        occupiedByType: 'item',
        x: 0,
        y: 15,
        index: 4,
      },
      {
        occupiedById: '1',
        occupiedByType: 'item',
        x: 15,
        y: 15,
        index: 5,
      },
    ];

    const actualCells = findCellsElementOccupies(
      element,
      gridWidth,
      gridHeight,
      gapSize,
      cellSize,
    );

    expect(actualCells).toEqual(expectedCells);
  });

  it('should return an array of all the cells that the element occupies (2*1 translated)', () => {
    const element: Element = {
      id: '1',
      type: 'item',
      position: { x: 30, y: 45 },
      size: { width: 25, height: 10 },
    };

    const expectedCells: Array<OccupiedCell> = [
      {
        occupiedById: '1',
        occupiedByType: 'item',
        x: 30,
        y: 45,
        index: 14,
      },
      {
        occupiedById: '1',
        occupiedByType: 'item',
        x: 45,
        y: 45,
        index: 15,
      },
    ];

    const actualCells = findCellsElementOccupies(
      element,
      gridWidth,
      gridHeight,
      gapSize,
      cellSize,
    );

    expect(actualCells).toEqual(expectedCells);
  });
});

describe(getAllCells.name, () => {
  it('should return exactly as many cells as there should be', () => {
    /*
      The grid looks like this:
      ([ ] = cell)

      [ ] [ ]
      [ ] [ ]
    */
    const gapSize = 5;
    const cellSize = 10;
    const gridWidth = 25;
    const gridHeight = 25;

    const expectedCells: Array<Cell> = [
      { x: 0, y: 0, index: 0 },
      { x: 15, y: 0, index: 1 },
      { x: 0, y: 15, index: 2 },
      { x: 15, y: 15, index: 3 },
    ];
    const actualCells = getAllCells(gridWidth, gridHeight, gapSize, cellSize);

    expect(actualCells).toEqual(expectedCells);
  });
});

describe(cellIsOccupiedByElement.name, () => {
  /*
      We have placed an element in (1, 1) with the dimensions w: 3, h: 3.

      The grid looks like this:
      ([ ] = cell)
      ([x] = our 3*3 element)

      [ ] [ ] [ ] [ ] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [ ] [ ] [ ] [ ]
    */

  const gapSize = 5;
  const cellSize = 10;

  const elementPosition: Position = {
    x: 1 * gapSize + 1 * cellSize,
    y: 1 * gapSize + 1 * cellSize,
  };
  const elementSize: Size = {
    width: 2 * gapSize + 3 * cellSize,
    height: 2 * gapSize + 3 * cellSize,
  };

  it('should return true if the cell is in the top left corner of the element', () => {
    /*
      Current cell: C

      [ ] [ ] [ ] [ ] [ ]
      [ ] [C] [x] [x] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [ ] [ ] [ ] [ ]
    */

    const cellPosition: Position = {
      x: 1 * gapSize + 1 * cellSize,
      y: 1 * gapSize + 1 * cellSize,
    };

    const expected = true;
    const actual = cellIsOccupiedByElement(
      elementPosition,
      elementSize,
      cellPosition,
    );

    expect(actual).toBe(expected);
  });

  it('should return true if the cell is at the top edge of the element', () => {
    /*
      Current cell: C

      [ ] [ ] [ ] [ ] [ ]
      [ ] [x] [C] [x] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [ ] [ ] [ ] [ ]
    */

    const cellPosition: Position = {
      x: 2 * gapSize + 2 * cellSize,
      y: 1 * gapSize + 1 * cellSize,
    };

    const expected = true;
    const actual = cellIsOccupiedByElement(
      elementPosition,
      elementSize,
      cellPosition,
    );

    expect(actual).toBe(expected);
  });

  it('should return true if the cell is in the top right corner of the element', () => {
    /*
      Current cell: C

      [ ] [ ] [ ] [ ] [ ]
      [ ] [x] [x] [C] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [ ] [ ] [ ] [ ]
    */

    const cellPosition: Position = {
      x: 3 * gapSize + 3 * cellSize,
      y: 1 * gapSize + 1 * cellSize,
    };

    const expected = true;
    const actual = cellIsOccupiedByElement(
      elementPosition,
      elementSize,
      cellPosition,
    );

    expect(actual).toBe(expected);
  });

  it('should return true if the cell is at the right edge of the element', () => {
    /*
      Current cell: C

      [ ] [ ] [ ] [ ] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [x] [x] [C] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [ ] [ ] [ ] [ ]
    */

    const cellPosition: Position = {
      x: 3 * gapSize + 3 * cellSize,
      y: 2 * gapSize + 2 * cellSize,
    };

    const expected = true;
    const actual = cellIsOccupiedByElement(
      elementPosition,
      elementSize,
      cellPosition,
    );

    expect(actual).toBe(expected);
  });

  it('should return true if the cell is in the lower right corner of the element', () => {
    /*
      Current cell: C

      [ ] [ ] [ ] [ ] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [x] [x] [C] [ ]
      [ ] [ ] [ ] [ ] [ ]
    */

    const cellPosition: Position = {
      x: 3 * gapSize + 3 * cellSize,
      y: 3 * gapSize + 3 * cellSize,
    };

    const expected = true;
    const actual = cellIsOccupiedByElement(
      elementPosition,
      elementSize,
      cellPosition,
    );

    expect(actual).toBe(expected);
  });

  it('should return true if the cell is at the lower edge of the element', () => {
    /*
      Current cell: C

      [ ] [ ] [ ] [ ] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [x] [C] [x] [ ]
      [ ] [ ] [ ] [ ] [ ]
    */

    const cellPosition: Position = {
      x: 2 * gapSize + 2 * cellSize,
      y: 3 * gapSize + 3 * cellSize,
    };

    const expected = true;
    const actual = cellIsOccupiedByElement(
      elementPosition,
      elementSize,
      cellPosition,
    );

    expect(actual).toBe(expected);
  });

  it('should return true if the cell is in the lower left corner of the element', () => {
    /*
      Current cell: C

      [ ] [ ] [ ] [ ] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [C] [x] [x] [ ]
      [ ] [ ] [ ] [ ] [ ]
    */

    const cellPosition: Position = {
      x: 1 * gapSize + 1 * cellSize,
      y: 3 * gapSize + 3 * cellSize,
    };

    const expected = true;
    const actual = cellIsOccupiedByElement(
      elementPosition,
      elementSize,
      cellPosition,
    );

    expect(actual).toBe(expected);
  });

  it('should return true if the cell is at the left edge of the element', () => {
    /*
      Current cell: C

      [ ] [ ] [ ] [ ] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [C] [x] [x] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [ ] [ ] [ ] [ ]
    */

    const cellPosition: Position = {
      x: 1 * gapSize + 1 * cellSize,
      y: 2 * gapSize + 2 * cellSize,
    };

    const expected = true;
    const actual = cellIsOccupiedByElement(
      elementPosition,
      elementSize,
      cellPosition,
    );

    expect(actual).toBe(expected);
  });

  it('should return true if the cell is in the middle of the element', () => {
    /*
      Current cell: C

      [ ] [ ] [ ] [ ] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [x] [X] [x] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [ ] [ ] [ ] [ ]
    */

    const cellPosition: Position = {
      x: 2 * gapSize + 2 * cellSize,
      y: 2 * gapSize + 2 * cellSize,
    };

    const expected = true;
    const actual = cellIsOccupiedByElement(
      elementPosition,
      elementSize,
      cellPosition,
    );

    expect(actual).toBe(expected);
  });

  it('should return false if the cell is above the element', () => {
    /*
      Current cell: C

      [ ] [ ] [C] [ ] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [ ] [ ] [ ] [ ]
    */

    const cellPosition: Position = {
      x: 2 * gapSize + 2 * cellSize,
      y: 0 * gapSize + 0 * cellSize,
    };

    const expected = false;
    const actual = cellIsOccupiedByElement(
      elementPosition,
      elementSize,
      cellPosition,
    );

    expect(actual).toBe(expected);
  });

  it('should return false if the cell is to the right of the element', () => {
    /*
      Current cell: C

      [ ] [ ] [ ] [ ] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [x] [x] [x] [C]
      [ ] [x] [x] [x] [ ]
      [ ] [ ] [ ] [ ] [ ]
    */

    const cellPosition: Position = {
      x: 4 * gapSize + 4 * cellSize,
      y: 2 * gapSize + 2 * cellSize,
    };

    const expected = false;
    const actual = cellIsOccupiedByElement(
      elementPosition,
      elementSize,
      cellPosition,
    );

    expect(actual).toBe(expected);
  });

  it('should return false if the cell is below the element', () => {
    /*
      Current cell: C

      [ ] [ ] [ ] [ ] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [ ] [C] [ ] [ ]
    */

    const cellPosition: Position = {
      x: 4 * gapSize + 4 * cellSize,
      y: 2 * gapSize + 2 * cellSize,
    };

    const expected = false;
    const actual = cellIsOccupiedByElement(
      elementPosition,
      elementSize,
      cellPosition,
    );

    expect(actual).toBe(expected);
  });

  it('should return false if the cell is to the left of the element', () => {
    /*
      Current cell: C

      [ ] [ ] [ ] [ ] [ ]
      [ ] [x] [x] [x] [ ]
      [C] [x] [x] [x] [ ]
      [ ] [x] [x] [x] [ ]
      [ ] [ ] [ ] [ ] [ ]
    */

    const cellPosition: Position = {
      x: 0 * gapSize + 0 * cellSize,
      y: 2 * gapSize + 2 * cellSize,
    };

    const expected = false;
    const actual = cellIsOccupiedByElement(
      elementPosition,
      elementSize,
      cellPosition,
    );

    expect(actual).toBe(expected);
  });
});

describe(positionIsFree.name, () => {
  /*
    We have placed an element in (2, 1) with the dimensions w: 2, h: 3.

    The grid looks like this:
    ([ ] = cell)
    ([x] = our 2*3 element)

        0  15  30  45
     0 [ ] [ ] [ ] [ ]
    15 [ ] [ ] [x] [x]
    30 [ ] [ ] [x] [x]
    45 [ ] [ ] [x] [x]
  */

  const gapSize = 5;
  const cellSize = 10;

  const occupiedCells: Array<OccupiedCell> = [
    {
      index: 6,
      occupiedById: '1',
      occupiedByType: 'item',
      x: coordinatePosToPx(2, gapSize, cellSize),
      y: coordinatePosToPx(1, gapSize, cellSize),
    },
    {
      index: 7,
      occupiedById: '1',
      occupiedByType: 'item',
      x: coordinatePosToPx(3, gapSize, cellSize),
      y: coordinatePosToPx(1, gapSize, cellSize),
    },
    {
      index: 10,
      occupiedById: '1',
      occupiedByType: 'item',
      x: coordinatePosToPx(2, gapSize, cellSize),
      y: coordinatePosToPx(2, gapSize, cellSize),
    },
    {
      index: 11,
      occupiedById: '1',
      occupiedByType: 'item',
      x: coordinatePosToPx(3, gapSize, cellSize),
      y: coordinatePosToPx(2, gapSize, cellSize),
    },
    {
      index: 14,
      occupiedById: '1',
      occupiedByType: 'item',
      x: coordinatePosToPx(2, gapSize, cellSize),
      y: coordinatePosToPx(3, gapSize, cellSize),
    },
    {
      index: 15,
      occupiedById: '1',
      occupiedByType: 'item',
      x: coordinatePosToPx(3, gapSize, cellSize),
      y: coordinatePosToPx(3, gapSize, cellSize),
    },
  ];

  const gridSize: Size = { width: 55, height: 55 };
  const elementId = '2';

  it('should return true if the element fits in the proposed location', () => {
    /*
      New element: 2

          0  15  30  45
       0 [2] [2] [ ] [ ]
      15 [2] [2] [x] [x]
      30 [2] [2] [x] [x]
      45 [2] [2] [x] [x]
    */
    const elementSize: Size = { width: 25, height: 55 };
    const newPosition: Position = { x: 0, y: 0 };

    const expected = true;
    const actual = positionIsFree(
      newPosition,
      elementId,
      elementSize,
      gridSize,
      gapSize,
      cellSize,
      occupiedCells,
    );

    expect(actual).toBe(expected);
  });

  it('should return false if the element does not fit in the proposed location', () => {
    /*
      New element: 2

          0  15  30  45
       0 [ ] [ ] [ ] [ ]
      15 [ ] [ ] [x] [x]
      30 [ ] [ ] [x] [x]
      45 [2] [2] [x2] [x]
    */
    const elementSize: Size = { width: 40, height: 10 };
    const newPosition: Position = { x: 0, y: 45 };

    const expected = false;
    const actual = positionIsFree(
      newPosition,
      elementId,
      elementSize,
      gridSize,
      gapSize,
      cellSize,
      occupiedCells,
    );

    expect(actual).toBe(expected);
  });
});
