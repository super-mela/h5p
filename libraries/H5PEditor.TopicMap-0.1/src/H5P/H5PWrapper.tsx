import type { H5PFieldGroup, IH5PWidget } from 'h5p-types';
import { H5PWidget } from 'h5p-utils';
import { createRoot } from 'react-dom/client';
import { App } from '../App';
import { Params } from '../types/Params';

export class H5PWrapper
  extends H5PWidget<H5PFieldGroup, Params>
  implements IH5PWidget {
  appendTo($container: JQuery<HTMLElement>): void {
    const containerElement = $container.get(0);
    if (!containerElement) {
      console.error(
        'Found no containing element to attach `h5p-editor-topic-map` to.',
      );
      return;
    }

    const { setValue, field, params, parent } = this;

    const root = createRoot(this.wrapper);
    root.render(
      <App
        setValue={(newParams) => setValue(field, newParams)}
        semantics={field}
        initialParams={params}
        parent={parent}
      />,
    );

    containerElement.appendChild(this.wrapper);
    containerElement.classList.add('h5p-editor-topic-map');
  }

  validate(): boolean {
    return true;
  }

  remove(): void {}
}
