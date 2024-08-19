import { FC } from 'react';
import { ContextMenuAction } from '../../types/ContextMenuAction';
import { ContextMenuButton } from '../ContextMenuButton/ContextMenuButton';
import styles from './ContextMenu.module.scss';

/*
  Name of svg icon should be similar to this,
  specify the svg icon in icons.tsx
*/
export enum ContextMenuButtonType {
  Edit = 'edit',
  Delete = 'delete',
  ArrowDirectional = 'directional',
  ArrowBiDirectional = 'biDirectional',
  ArrowNonDirectional = 'nonDirectional',
}

export type ContextMenuProps = {
  show: boolean;
  turnLeft: boolean;
  actions: Array<ContextMenuAction>;
  x?: number;
  y?: number;
  gridWidth?: number;
};

export const ContextMenu: FC<ContextMenuProps> = ({
  show,
  turnLeft,
  actions,
  x,
  y,
  gridWidth,
}) => {
  const className = turnLeft ? styles.left : styles.right;

  let rightPosition: number | undefined;
  let leftPosition: number | undefined;

  const isDynamicallyPositioned = x && gridWidth;
  if (isDynamicallyPositioned) {
    if (turnLeft) {
      const horizontalOffset = gridWidth / 14;
      rightPosition = gridWidth - x - horizontalOffset;
    }
    else {
      leftPosition = Math.max(x, 0);
    }
  }

  return (
    <div
      className={`${styles.contextMenu} ${className} ${
        show && styles.show
      } context-menu-button`}
      style={
        x && y
          ? { left: leftPosition, right: rightPosition, top: y }
          : undefined
      }
    >
      {actions.map(({ icon, label, onClick }) => (
        <ContextMenuButton
          key={label}
          icon={icon}
          label={label}
          onClick={onClick}
        />
      ))}
    </div>
  );
};
