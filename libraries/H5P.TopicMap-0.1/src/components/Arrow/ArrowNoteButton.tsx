import * as React from 'react';
import { FC } from 'react';
import { NoteButtonIconState } from '../../types/NoteButtonIconState';
import { Position } from '../../types/Position';
import { NoteButton } from '../NoteButton/NoteButton';

export type ArrowNoteButtonProps = {
  buttonState: NoteButtonIconState;
  position: Position;
  strokeWidth: number;
};

export const ArrowNoteButton: FC<ArrowNoteButtonProps> = ({
  buttonState,
  position,
  strokeWidth,
}) => {
  const buttonElement = React.useRef<HTMLDivElement>(null);

  const [offsetX, setOffsetX] = React.useState(strokeWidth * 0.75);
  const [offsetY, setOffsetY] = React.useState(strokeWidth * 0.75);

  React.useEffect(() => {
    if (buttonElement.current) {
      setOffsetX(strokeWidth * 0.75);
      setOffsetY(strokeWidth * 0.75);
    }
  }, [strokeWidth]);

  return (
    <div
      style={{
        position: 'absolute',
        top: position.y - offsetY,
        left: position.x - offsetX,
      }}
    >
      {buttonState !== NoteButtonIconState.None && (
        <div ref={buttonElement}>
          <NoteButton
            backgroundColor="var(--theme-color-3)"
            borderColor="white"
            iconColor="white"
            buttonState={buttonState}
            strokeWidth={strokeWidth}
          />
        </div>
      )}
    </div>
  );
};
