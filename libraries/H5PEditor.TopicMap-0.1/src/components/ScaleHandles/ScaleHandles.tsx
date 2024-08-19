import { FC } from 'react';
import { ResizeDirection } from '../../types/ResizeDirection';
import { ScaleHandle } from '../ScaleHandle/ScaleHandle';

export type ScaleHandlesProps = {
  setIsResizing: (isResizing: boolean) => void;
  startResize: (handlePosition: ResizeDirection) => void;
  stopResize: () => void;
  verticalScaleHandleLabelText: string;
  horizontalScaleHandleLabelText: string;
};

export const ScaleHandles: FC<ScaleHandlesProps> = ({
  setIsResizing,
  startResize,
  stopResize,
  verticalScaleHandleLabelText,
  horizontalScaleHandleLabelText,
}) => {
  return (
    <>
      <ScaleHandle
        position="top"
        onScaleStart={() => {
          setIsResizing(true);
          startResize('horizontal-top');
        }}
        onScaleStop={() => stopResize()}
        labelText={verticalScaleHandleLabelText}
      />

      <ScaleHandle
        position="top-right"
        onScaleStart={() => {
          setIsResizing(true);
          startResize('top');
        }}
        onScaleStop={() => stopResize()}
        labelText={verticalScaleHandleLabelText}
      />
      <ScaleHandle
        position="right"
        onScaleStart={() => {
          setIsResizing(true);
          startResize('vertical');
        }}
        onScaleStop={() => stopResize()}
        labelText={horizontalScaleHandleLabelText}
      />
      <ScaleHandle
        position="bottom-right"
        onScaleStart={() => {
          setIsResizing(true);
          startResize('none');
        }}
        onScaleStop={() => stopResize()}
        labelText={horizontalScaleHandleLabelText}
      />

      <ScaleHandle
        position="bottom"
        onScaleStart={() => {
          setIsResizing(true);
          startResize('horizontal');
        }}
        onScaleStop={() => stopResize()}
        labelText={verticalScaleHandleLabelText}
      />

      <ScaleHandle
        position="bottom-left"
        onScaleStart={() => {
          setIsResizing(true);
          startResize('left');
        }}
        onScaleStop={() => stopResize()}
        labelText={verticalScaleHandleLabelText}
      />

      <ScaleHandle
        position="left"
        onScaleStart={() => {
          setIsResizing(true);
          startResize('vertical-left');
        }}
        onScaleStop={() => stopResize()}
        labelText={horizontalScaleHandleLabelText}
      />

      <ScaleHandle
        position="top-left"
        onScaleStart={() => {
          setIsResizing(true);
          startResize('top-left');
        }}
        onScaleStop={() => stopResize()}
        labelText={horizontalScaleHandleLabelText}
      />
    </>
  );
};
