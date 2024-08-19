import { Close, Content, Overlay, Portal, Root, Title, Trigger } from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import * as React from 'react';
import { FC, ReactNode } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import styles from './ConfirmWindow.module.scss';
import { useH5PInstance } from '../../hooks/useH5PInstance';

export type ConfirmWindowProps = {
  title: string;
  confirmWindow: {
    confirmAction: () => void;
    confirmText: string;
    denyText: string;
  };
  button: {
    className: string;
    label: string;
  };
} & { children?: ReactNode };

export const ConfirmWindow: FC<ConfirmWindowProps> = ({
  title,
  confirmWindow,
  button,
  children,
}) => {
  const { t } = useTranslation();
  const h5pInstance = useH5PInstance();
  const ariaLabel = t('closeDialog');

  const [windowOpen, setWindowOpen] = React.useState(false);

  const handleConfirm = () => {
    confirmWindow.confirmAction();
    setWindowOpen(false);
  };

  return (
    <Root open={windowOpen} onOpenChange={setWindowOpen}>
      <Trigger asChild>
        <button type="button" className={button.className} onClick={() => setWindowOpen(true)}>
          {button.label}
        </button>
      </Trigger>
      <Portal container={h5pInstance?.containerElement}>
        <Overlay className={styles.overlay} />
        <Content aria-modal="true" className={styles.confirmWindowContent}>
          <div className={styles.contentWrapper}>
            <Title className={styles.dialogTitle}>{title}</Title>
            {children}
            <div className={styles.confirmationButtons}>
              <button
                type="button"
                className={styles.confirmButton}
                onClick={handleConfirm}
              >
                {confirmWindow.confirmText}
              </button>
              <button
                type="button"
                className={styles.denyButton}
                onClick={() => setWindowOpen(false)}
              >
                {confirmWindow.denyText}
              </button>
            </div>
          </div>
          <Close className={styles.closeButton} aria-label={ariaLabel}>
            <Cross2Icon />
          </Close>
        </Content>
      </Portal>
    </Root>
  );
};
