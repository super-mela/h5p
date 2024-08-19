import * as React from 'react';
import { FC } from 'react';
import { useContentId } from '../../hooks/useContentId';
import { useLocalStorageUserData } from '../../hooks/useLocalStorageUserData';
import { ArrowItemType } from '../../types/ArrowItemType';
import { ArrowType } from '../../types/ArrowType';
import { NoteButtonIconState } from '../../types/NoteButtonIconState';
import { Position } from '../../types/Position';
import { GridDimensions } from '../Grid/Grid';
import styles from './Arrow.module.scss';
import { ArrowNoteButton } from './ArrowNoteButton';
import { getNoteStateText } from '../../utils/note.utils';
import { useTranslation } from '../../hooks/useTranslation';
import { H5P } from '../../h5p/H5P.util';
import { Portal, Root, Trigger } from '@radix-ui/react-dialog';
import { DialogWindow } from '../Dialog-Window/DialogWindow';
import { useH5PInstance } from '../../hooks/useH5PInstance';

export type ArrowProps = {
  item: ArrowItemType;
  grid?: GridDimensions;
  descriptiveText: string;
};

const calculateIsHorizontal = (
  startPosition: Position,
  endPosition: Position,
): boolean => {
  return (
    Math.abs(startPosition.x - endPosition.x) >
    Math.abs(startPosition.y - endPosition.y)
  );
};

export const Arrow: FC<ArrowProps> = ({
  item,
  grid,
  descriptiveText,
}) => {
  const { t } = useTranslation();
  const h5pInstance = useH5PInstance();
  const contentId = useContentId();
  const [userData] = useLocalStorageUserData();

  const arrowHeadID = H5P.createUUID();
  const arrowTailID = H5P.createUUID();

  const [pathDef, setPathDef] = React.useState<string>('');
  const [strokeWidth, setStrokeWidth] = React.useState<number>(4);
  const [buttonState, setButtonState] = React.useState<NoteButtonIconState>(
    NoteButtonIconState.None,
  );
  const [middleX, setMiddleX] = React.useState(2);
  const [middleY, setMiddleY] = React.useState(2);
  const arrowContainerRef = React.createRef<HTMLDivElement>();
  const isHorizontal = calculateIsHorizontal(
    item.startPosition,
    item.endPosition,
  );

  const [dialogOpen, setDialogOpen] = React.useState(false);

  React.useEffect(() => {
    const dialogData = userData[contentId]?.dialogs[item.id];

    switch (true) {
      case dialogData?.noteDone:
        setButtonState(NoteButtonIconState.Done);
        break;
      case dialogData?.note && dialogData?.note?.trim().length > 0:
        setButtonState(NoteButtonIconState.Text);
        break;
      case item.dialog?.hasNote:
        setButtonState(NoteButtonIconState.Default);
        break;
      default:
        setButtonState(NoteButtonIconState.None);
    }
  }, [item, buttonState, setButtonState, userData, contentId]);

  const findMiddlePosition = (
    startx: number,
    starty: number,
    breakpoints: Position[] | null,
    endx: number,
    endy: number,
    asAbsolutePosition: (position: Position) => Position,
  ): Position => {
    if (breakpoints && breakpoints.length % 2 === 1) {
      // icon should be placed on the middle breakpoint
      return asAbsolutePosition(
        breakpoints[Math.floor(breakpoints.length / 2)],
      );
    }

    if (breakpoints && breakpoints.length > 1) {
      // icon should be placed on the middle linesegment
      const endIndex = breakpoints.length / 2;
      const startIndex = endIndex - 1;
      const start = asAbsolutePosition(breakpoints[startIndex]);
      const end = asAbsolutePosition(breakpoints[endIndex]);
      return { x: (start.x + end.x) / 2, y: (start.y + end.y) / 2 };
    }

    // icon should be place on the middle of the only line
    return { x: (startx + endx) / 2, y: (starty + endy) / 2 };
  };

  React.useEffect(() => {
    if (arrowContainerRef.current) {
      const gridElement = arrowContainerRef.current;

      if (grid) {
        if (isHorizontal) {
          setStrokeWidth((gridElement.clientHeight / grid.numberOfRows) * 0.66);
        }
        else {
          setStrokeWidth(
            (gridElement.clientWidth / grid.numberOfColumns) * 0.66,
          );
        }
      }

      const startx = (item.startPosition.x / 100) * gridElement.clientWidth;
      const starty = (item.startPosition.y / 100) * gridElement.clientHeight;
      const endx = (item.endPosition.x / 100) * gridElement.clientWidth;
      const endy = (item.endPosition.y / 100) * gridElement.clientHeight;

      const asAabolutePosition = (position: Position): Position => {
        return {
          x: (position.x / 100) * gridElement.clientWidth,
          y: (position.y / 100) * gridElement.clientHeight,
        };
      };
      const asPoint = (position: Position): string =>
        `${(position.x / 100) * gridElement.clientWidth},${(position.y / 100) * gridElement.clientHeight
        }`;
      const path = `${startx},${starty} ${item.relativeBreakpoints?.map(asPoint).join(' ') ?? ''
      } ${endx},${endy}`;

      const middlePoint = findMiddlePosition(
        startx,
        starty,
        item.relativeBreakpoints,
        endx,
        endy,
        asAabolutePosition,
      );
      setMiddleX(middlePoint.x);
      setMiddleY(middlePoint.y);
      setPathDef(path);
    }
  }, [arrowContainerRef, item, grid, buttonState, isHorizontal]);

  return (
    <div className={styles.arrow}>
      <Root open={dialogOpen} onOpenChange={setDialogOpen}>
        <div
          ref={arrowContainerRef}
          className={`arrow-item ${styles.arrow}`}
        >
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
                <path d="M0,0 L0,2 L1.5,1 z" fill="var(--theme-color-4)" className={styles.path} />
              </marker>
              <marker
                id={arrowTailID}
                markerWidth="10"
                markerHeight="10"
                refX="0.7"
                refY="1"
                orient="auto-start-reverse"
              >
                <path d="M0,0 L0,2 L1.5,1 z" fill="var(--theme-color-4)" className={styles.path} />
              </marker>
            </defs>
            <Trigger asChild>
              <polyline
                aria-label={`${descriptiveText} ${getNoteStateText(buttonState, t)}`}
                className={`${item.dialog ? styles.polyline : ''}`}
                points={pathDef}
                fill="transparent"
                stroke="var(--theme-color-4)"
                strokeWidth={strokeWidth}
                markerEnd={
                  item.arrowType === ArrowType.BiDirectional ||
                    item.arrowType === ArrowType.Directional
                    ? `url(#${arrowHeadID})`
                    : ''
                }
                markerStart={
                  item.arrowType === ArrowType.BiDirectional
                    ? `url(#${arrowTailID})`
                    : ''
                }
                role="button"
                tabIndex={0}
                onPointerDown={() => setDialogOpen(true)}
                onKeyUp={(event) => {
                  // Space will move to the bottom of the content if onKeyDown is used
                  if (event.key === ' ' && !dialogOpen) {
                    setDialogOpen(true);
                  }
                }}
                onKeyDown={(event) => {
                  // Enter will open the dialog on 'close' if onKeyUp is used
                  if (event.key === 'Enter' && !dialogOpen) {
                    setDialogOpen(true);
                  }
                }}
              />
            </Trigger>
          </svg>
        </div>
        <ArrowNoteButton
          position={{ x: middleX, y: middleY }}
          buttonState={buttonState}
          strokeWidth={strokeWidth}
        />
        <Portal container={h5pInstance?.containerElement}>
          <DialogWindow item={item} />
        </Portal>
      </Root>
    </div>
  );
};
