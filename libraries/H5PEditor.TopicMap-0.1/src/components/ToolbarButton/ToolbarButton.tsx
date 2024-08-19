import { FC } from 'react';
import { Icon } from '../Icons/Icons';
import { ToolbarButtonType } from '../Toolbar/Toolbar';
import styles from './ToolbarButton.module.scss';

export type ToolbarButtonProps = {
  icon: ToolbarButtonType;
  label: string;
  onClick: React.MouseEventHandler;
  showActive: boolean;
  active: boolean;
  isDisabled: boolean;
};

export const ToolbarButton: FC<ToolbarButtonProps> = ({
  icon,
  label,
  onClick,
  showActive,
  active,
  isDisabled,
}) => {
  return (
    <button
      type="button"
      className={
        active && showActive
          ? `${styles.toolbarButton} ${styles.active}`
          : styles.toolbarButton
      }
      disabled={isDisabled}
      onClick={onClick}
      aria-label={label}
    >
      <Icon icon={icon} className={styles.icon} />
      <div className={styles.tooltip}>{label}</div>
    </button>
  );
};
