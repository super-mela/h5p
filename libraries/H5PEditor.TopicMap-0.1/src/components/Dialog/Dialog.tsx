import {
  Close,
  Content,
  Description,
  Overlay,
  Root,
  Title,
} from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { FC, ReactElement } from 'react';
import { t } from '../../H5P/H5P.util';
import styles from './Dialog.module.scss';

type DialogSize = 'medium' | 'large';

export type DialogProps = {
  isOpen: boolean;
  title: string;
  description?: string | undefined;
  onOpenChange: (open: boolean) => void;
  size: DialogSize;
  children: ReactElement | null | Array<ReactElement | null>;
};

const maxWidths: Record<DialogSize, number> = {
  medium: 450,
  large: 750,
};

export const Dialog: FC<DialogProps> = ({
  isOpen,
  title,
  description,
  onOpenChange,
  children,
  size,
}) => {
  const closeButtonLabel = t('dialog_close');

  const maxWidth = maxWidths[size];

  return (
    <Root open={isOpen} onOpenChange={onOpenChange}>
      <Overlay className={styles.overlay} />
      <Content className={styles.content} style={{ maxWidth }}>
        <Title className={styles.title}>{title}</Title>
        {description ?
          <Description>{description}</Description> :
          <Description className={styles.visuallyHidden} aria-hidden="true" />
        }
        <Close className={styles.closeButton} aria-label={closeButtonLabel}>
          <Cross2Icon />
        </Close>
        {children}
      </Content>
    </Root>
  );
};
