import * as React from 'react';
import { useSizeClassNames } from '../../hooks/useSizeClassNames';
import { NoteButtonIconState } from '../../types/NoteButtonIconState';
import { DoneIcon, EditIcon, IconProps, NoteIcon } from '../Icons/Icons';
import styles from './NoteButton.module.scss';

const icons: Record<NoteButtonIconState, React.FC<IconProps>> = {
  [NoteButtonIconState.Done]: DoneIcon,
  [NoteButtonIconState.Notes]: NoteIcon,
  [NoteButtonIconState.Text]: NoteIcon,
  [NoteButtonIconState.Default]: EditIcon,
  [NoteButtonIconState.None]: EditIcon,
};

const renderIcon = (
  state: NoteButtonIconState,
  iconColor: string,
  strokeWidth: number | undefined,
): JSX.Element => {
  const Icon = icons[state];
  const size = strokeWidth ? strokeWidth * 0.75 : undefined;
  return <Icon iconColor={iconColor} width={size} height={size} />;
};

type NoteButtonProps = {
  backgroundColor: string;
  borderColor: string;
  iconColor: string;
  buttonState: NoteButtonIconState;
  strokeWidth: number | undefined;
};

export const NoteButton: React.FC<NoteButtonProps> = ({
  backgroundColor,
  borderColor,
  iconColor,
  buttonState,
  strokeWidth,
}): JSX.Element => {
  const sizeClassNames = useSizeClassNames(styles);

  const classNames = `${styles.button} ${strokeWidth ? '' : styles.fixed_size}`;
  const minSize = strokeWidth ? strokeWidth * 1.5 : 0;

  const className = [classNames, sizeClassNames].join(' ');

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        backgroundColor,
        borderColor,
        minWidth: minSize,
        minHeight: minSize,
      }}
    >
      {renderIcon(buttonState, iconColor, strokeWidth)}
    </div>
  );
};
