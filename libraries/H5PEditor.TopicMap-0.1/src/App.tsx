import useResizeObserver from '@react-hook/resize-observer';
import type { H5PFieldGroup, H5PForm } from 'h5p-types';
import { FC, useCallback, useLayoutEffect, useRef, useState } from 'react';
import { MapEditorView } from './components/MapEditorView/MapEditorView';
import { AppWidthContext } from './contexts/AppWidthContext';
import { Params } from './types/Params';
import {
  fillInMissingParamsProperties,
  getEmptyParams,
} from './utils/H5P/form.utils';
import { defaultTheme } from './utils/theme.utils';

export type AppProps = {
  setValue: (params: Params) => void;
  semantics: H5PFieldGroup;
  initialParams: Partial<Params> | undefined;
  parent: H5PForm;
};

export const App: FC<AppProps> = ({
  setValue,
  semantics,
  initialParams,
  parent,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const initialWidth =
      containerRef.current?.getBoundingClientRect().width ?? 0;
    setWidth(initialWidth);
  }, []);

  useResizeObserver(containerRef, ({ contentRect }) => {
    setWidth(contentRect.width);
  });

  const [params, setParams] = useState<Params>(
    initialParams
      ? fillInMissingParamsProperties(initialParams)
      : getEmptyParams(),
  );

  const updateParams = useCallback(
    (updatedParams: Partial<Params>) => {
      const newParams: Params = {
        ...params,
        ...updatedParams,
      };

      setParams(newParams);
      setValue(newParams);
    },
    [params, setValue],
  );

  return (
    <AppWidthContext.Provider value={width}>
      <div
        className={`h5p-editor-topic-map theme-${
          params.colorTheme ?? defaultTheme
        }`}
        ref={containerRef}
      >
        <MapEditorView
          setParams={updateParams}
          semantics={semantics}
          params={params}
          parent={parent}
        />
      </div>
    </AppWidthContext.Provider>
  );
};
