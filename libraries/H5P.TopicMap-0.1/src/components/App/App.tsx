import * as React from 'react';
import { useState } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import type { IH5PContentType } from 'h5p-types';
import { AppWidthContext } from '../../contexts/AppWidthContext';
import { useH5PInstance } from '../../hooks/useH5PInstance';
import { Params } from '../../types/Params';
import { defaultTheme } from '../../utils/semantics.utils';
import { Navbar } from '../Navbar/Navbar';
import styles from './App.module.scss';

export type AppProps = {
  params: Params;
  title: string | undefined;
  toggleIPhoneFullscreen: () => void;
  instance: IH5PContentType;
};

export const App: React.FC<AppProps> = ({
  params,
  title,
  toggleIPhoneFullscreen,
  instance,
}) => {
  const fullscreenHandle = useFullScreenHandle();
  const [isIPhoneFullscreenActive, setIsIPhoneFullscreenActive] =
    useState(false);

  const handleToggleIPhoneFullscreen = (): void => {
    setIsIPhoneFullscreenActive(!isIPhoneFullscreenActive);
    toggleIPhoneFullscreen();
  };

  const containerRef = React.useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const initialWidth =
      containerRef.current?.getBoundingClientRect().width ?? 0;
    setWidth(initialWidth);
  }, []);

  const themeClassName = React.useMemo(
    () => `theme-${params.topicMap?.colorTheme ?? defaultTheme}`,
    [params.topicMap?.colorTheme],
  );

  // Make sure theme is applied to the root element
  const h5pInstance = useH5PInstance();
  h5pInstance?.containerElement?.classList.add(themeClassName);

  /*
   * React supplies useResizeObserver hook, but H5P may trigger `resize` not
   * only when the window resizes
   */
  instance.on('resize', () => {
    window.requestAnimationFrame(() => {
      if (!containerRef.current) {
        return;
      }

      setWidth(containerRef.current.getBoundingClientRect().width);
    });
  });

  return (
    <div
      className={
        isIPhoneFullscreenActive ? styles.iPhoneFullscreenStyle : undefined
      }
    >
      <AppWidthContext.Provider value={width}>
        <div
          className={isIPhoneFullscreenActive ? styles.iPhoneFullscreenThemeStyle : ''}
        >
          <FullScreen
            className={styles.fullscreenStyle}
            handle={fullscreenHandle}
          >
            <div className={styles.navbarWrapper} ref={containerRef}>
              <Navbar
                navbarTitle={title ?? ''}
                params={params}
                toggleIPhoneFullscreen={handleToggleIPhoneFullscreen}
                isIPhoneFullscreenActive={isIPhoneFullscreenActive}
              />
            </div>
          </FullScreen>
        </div>
      </AppWidthContext.Provider>
    </div>
  );
};
