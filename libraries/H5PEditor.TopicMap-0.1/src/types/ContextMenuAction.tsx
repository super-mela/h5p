import { ContextMenuButtonType } from '../components/ContextMenu/ContextMenu';

export type ContextMenuAction = {
  icon: ContextMenuButtonType;
  onClick: React.MouseEventHandler;
  label: string;
};
