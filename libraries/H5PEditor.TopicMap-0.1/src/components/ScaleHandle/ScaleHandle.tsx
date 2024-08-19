import { FC, useCallback, useEffect, useRef, useState, MouseEvent, TouchEvent } from 'react';
import { capitalize } from '../../utils/string.utils';
import styles from './ScaleHandle.module.scss';

export type ScaleHandleProps = {
  labelText: string;
  position:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-right'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-left';
  onScaleStop: () => void;
  onScaleStart: () => void;
};

export const ScaleHandle: FC<ScaleHandleProps> = ({
  labelText,
  position,
  onScaleStop,
  onScaleStart,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const className =
    styles[`scaleHandle${position.split('-').map(capitalize).join('')}`];

  const startDrag = useCallback(
    (event: MouseEvent | TouchEvent) => {
      setIsDragging(true);
      onScaleStart();

      event.stopPropagation();
    },
    [onScaleStart],
  );

  const stopDrag = useCallback(() => {
    if (!isDragging) {
      return;
    }

    setIsDragging(false);
    onScaleStop();
  }, [isDragging, onScaleStop]);

  useEffect(() => {
    /* 
      These are tied to `window`, because the
      cursor might not be on top of the element
      when the drag action ends.
    */
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('touchend', stopDrag);

    return () => {
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('touchend', stopDrag);
    };
  }, [stopDrag]);

  return (
    <div
      ref={elementRef}
      role="button"
      tabIndex={0}
      className={`${styles.scaleHandle} ${className} scaleHandle`}
      aria-label={labelText}
      onMouseDown={startDrag}
      onTouchStart={startDrag}
    />
  );
};
