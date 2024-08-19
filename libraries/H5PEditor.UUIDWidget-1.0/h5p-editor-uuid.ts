import type { H5PFieldText, IH5PWidget } from 'h5p-types';
import { H5P, H5PWidget, registerWidget } from 'h5p-utils';

class UUIDWidget extends H5PWidget<H5PFieldText> implements IH5PWidget {
  appendTo() {
    const { field, params, setValue } = this;

    const isTextField = field.type === 'text';
    if (!isTextField) {
      console.warn(
        `The field \`${field.name}\` has the widget \`uuid\` set, but is of type \`${field.type}\`, not \`text\``,
      );
    }

    const needsID = !params;
    if (needsID) {
      setValue(field, H5P.createUUID());
    }
  }

  validate() {
    return true;
  }

  remove() {}
}

registerWidget('UUIDWidget', 'uuid', UUIDWidget);
