import React from 'react';
import { Position } from '../types/Position';
import { isMouseEvent } from './event.utils';
import { clamp } from './number.utils';

export const calculateClosestValidSizeComponent = (
  attemptedSize: number,
  gapSize: number,
  cellSize: number,
  gridSize: number,
): number => {
  const stepSize = cellSize + gapSize;
  const stepNumber = attemptedSize / stepSize;

  const smallerWidth = Math.floor(stepNumber) * stepSize - gapSize;
  const largerWidth = Math.ceil(stepNumber) * stepSize - gapSize;

  const smallerIsClosest =
    attemptedSize - smallerWidth < largerWidth - attemptedSize;
  const closestValidWidth = smallerIsClosest ? smallerWidth : largerWidth;

  const minimum = cellSize;
  const maximum = gridSize;

  return clamp(minimum, closestValidWidth, maximum);
};

export const calculateClosestValidPositionComponent = (
  position: number,
  gapSize: number,
  cellSize: number,
  gridSizeComponent: number,
  elementSizeComponent: number,
): number => {
  const stepSize = cellSize + gapSize;

  const closestInNegativeDirection = Math.floor(position / stepSize) * stepSize;
  const closestInPositiveDirection = Math.ceil(position / stepSize) * stepSize;

  const negativeIsClosest =
    Math.abs(position - closestInNegativeDirection) <
    Math.abs(position - closestInPositiveDirection);

  const closestValue = negativeIsClosest
    ? closestInNegativeDirection
    : closestInPositiveDirection;

  const minimum = 0;
  const maximum = gridSizeComponent - elementSizeComponent;

  return clamp(minimum, closestValue, maximum);
};

export const getPointerPositionFromEvent = (
  event: MouseEvent | TouchEvent | React.MouseEvent | React.TouchEvent,
): Position => {
  let pos: Position;
  if (isMouseEvent(event)) {
    const { clientX, clientY } = event;
    pos = { x: clientX, y: clientY };
  }
  else {
    const { clientX, clientY } = event.touches[0];
    pos = { x: clientX, y: clientY };
  }

  return pos;
};
