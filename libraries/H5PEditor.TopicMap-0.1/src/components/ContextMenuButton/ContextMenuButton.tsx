import styles from './ContextMenuButton.module.scss';
import { Icon } from '../Icons/Icons';
import { ContextMenuButtonType } from '../ContextMenu/ContextMenu';
import { FC, MouseEventHandler } from 'react';

export type ContextMenuButtonProps = {
  icon: ContextMenuButtonType;
  label: string;
  onClick: MouseEventHandler;
};

export const ContextMenuButton: FC<ContextMenuButtonProps> = ({
  icon,
  label,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={styles.contextMenuButton}
      onClick={onClick}
      aria-label={label}
    >
      <Icon icon={icon} className={styles.icon} />
      <div className={styles.tooltip}>{label}</div>
    </button>
  );
};
