import type { H5PField, H5PFieldGroup, H5PForm } from 'h5p-types';
import { FC, useCallback, useEffect, useState } from 'react';
import { Params } from '../../types/Params';
import { getArrowItemsField } from '../../utils/H5P/form.utils';
import { SemanticsForm } from '../SemanticsForm/SemanticsForm';
import './ArrowItemForm.scss';

export type ArrowItemFormProps = {
  semantics: H5PFieldGroup;
  params: Params;
  parent: H5PForm;
  itemId: string;
  onSave: (params: Params) => void;
};

export const ArrowItemForm: FC<ArrowItemFormProps> = ({
  semantics,
  params,
  parent,
  itemId,
  onSave,
}) => {
  const [arrowItemField, setArrowItemField] = useState<H5PField | null>();
  const [formParams, setFormParams] = useState<Params>();

  useEffect(() => {
    const field = getArrowItemsField(semantics);
    setArrowItemField(field);

    if (!params.arrowItems) {
      return;
    }

    setFormParams({
      ...params,
      arrowItems: params.arrowItems.filter((item) => item.id === itemId),
    });
  }, [itemId, params, semantics]);

  const onUpdate = useCallback(
    (newParams: Params) => {
      if (!newParams.arrowItems) {
        return;
      }

      const updatedItem = newParams.arrowItems[0];
      const updatedItems =
        params.arrowItems?.map((item) =>
          item.id === updatedItem.id ? updatedItem : item,
        ) ?? [];

      onSave({
        ...newParams,
        arrowItems: updatedItems,
      });
    },
    [onSave, params.arrowItems],
  );

  return formParams && arrowItemField ? (
    <SemanticsForm
      fields={[arrowItemField]}
      params={formParams}
      parent={parent}
      onSave={onUpdate}
      formClassName="arrow-item-form"
    />
  ) : null;
};
