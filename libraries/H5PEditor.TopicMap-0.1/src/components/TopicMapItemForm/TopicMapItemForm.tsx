import type { H5PField, H5PFieldGroup, H5PForm } from 'h5p-types';
import { FC, useCallback, useEffect, useState } from 'react';
import { Params } from '../../types/Params';
import { getTopicMapItemsField } from '../../utils/H5P/form.utils';
import { getLabel } from '../../utils/arrow.utils';
import { SemanticsForm } from '../SemanticsForm/SemanticsForm';
import './TopicMapItemForm.scss';

export type TopicMapItemFormProps = {
  semantics: H5PFieldGroup;
  params: Params;
  parent: H5PForm;
  itemId: string;
  onSave: (params: Params) => void;
};

export const TopicMapItemForm: FC<TopicMapItemFormProps> = ({
  semantics,
  params,
  parent,
  itemId,
  onSave,
}) => {
  const [topicMapItemsField, setTopicMapItemsField] = useState<H5PField | null>();
  const [formParams, setFormParams] = useState<Params>();

  useEffect(() => {
    const field = getTopicMapItemsField(semantics);
    setTopicMapItemsField(field);

    if (!params.topicMapItems) {
      return;
    }

    setFormParams({
      ...params,
      topicMapItems: params.topicMapItems.filter((item) => item.id === itemId),
    });
  }, [itemId, params, semantics]);

  const onUpdate = useCallback(
    (newParams: Params) => {
      if (!newParams.topicMapItems) {
        return;
      }

      const updatedItem = newParams.topicMapItems[0];
      const updatedItems =
        params.topicMapItems?.map((item) =>
          item.id === updatedItem.id ? updatedItem : item,
        ) ?? [];

      const unaffectedArrows =
        params.arrowItems?.filter((arrow) => {
          return (
            arrow.startElementId !== updatedItem.id &&
            arrow.endElementId !== updatedItem.id
          );
        }) || [];

      const affectedArrows =
        params.arrowItems
          ?.filter((arrow) => {
            return (
              arrow.startElementId === updatedItem.id ||
              arrow.endElementId === updatedItem.id
            );
          })
          .map((arrow) => {
            return {
              ...arrow,
              label: getLabel(
                arrow.startElementId,
                arrow.endElementId,
                arrow.arrowType,
                updatedItems,
              ),
            };
          }) || [];

      const updatedArrows = [...unaffectedArrows, ...affectedArrows];

      onSave({
        ...newParams,
        topicMapItems: updatedItems,
        arrowItems: updatedArrows,
      });
    },
    [onSave, params.arrowItems, params.topicMapItems],
  );

  return formParams && topicMapItemsField ? (
    <SemanticsForm
      fields={[topicMapItemsField]}
      params={formParams}
      parent={parent}
      onSave={onUpdate}
      formClassName="topic-map-item-form"
    />
  ) : null;
};
