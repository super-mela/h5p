import { FC } from 'react';
import { BiDirectionalArrow } from '../../icons/BiDirectionalArrow';
import { CreateArrow } from '../../icons/CreateArrow';
import { CreateBox } from '../../icons/CreateBox';
import { Delete } from '../../icons/Delete';
import { Edit } from '../../icons/Edit';
import { MapAppearance } from '../../icons/MapAppearance';
import { SingleLine } from '../../icons/SingleLine';
import { ContextMenuButtonType } from '../ContextMenu/ContextMenu';
import { ToolbarButtonType } from '../Toolbar/Toolbar';

export type IconProps = {
  icon: ToolbarButtonType | ContextMenuButtonType;
  className: string;
};

export const Icon: FC<IconProps> = ({ icon, className }) => {
  const icons = {
    [ToolbarButtonType.MapAppearance]: MapAppearance,
    [ToolbarButtonType.CreateBox]: CreateBox,
    [ToolbarButtonType.CreateArrow]: CreateArrow,
    [ContextMenuButtonType.Edit]: Edit,
    [ContextMenuButtonType.Delete]: Delete,
    [ContextMenuButtonType.ArrowDirectional]: CreateArrow,
    [ContextMenuButtonType.ArrowBiDirectional]: BiDirectionalArrow,
    [ContextMenuButtonType.ArrowNonDirectional]: SingleLine,
  };

  const defaultIcon = MapAppearance;
  const CurrentIcon = icons[icon] ?? defaultIcon;

  return <CurrentIcon className={className} />;
};
