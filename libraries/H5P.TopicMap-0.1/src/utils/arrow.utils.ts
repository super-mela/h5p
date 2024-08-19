import { ArrowItemType } from '../types/ArrowItemType';
import { ArrowType } from '../types/ArrowType';
import { TopicMapItemType } from '../types/TopicMapItemType';
import { TranslationKey } from '../types/TranslationKey';

export const findItem = (
  id: string,
  items: Array<TopicMapItemType>,
): TopicMapItemType | null => {
  if (!id) {
    return null;
  }

  return items.find((item) => item.id === id) ?? null;
};

export const getDescriptiveText = (
  arrowItem: ArrowItemType,
  items: Array<TopicMapItemType>,
  t: (key: TranslationKey) => string,
): string => {
  const { startElementId, endElementId, arrowType } = arrowItem;

  const startItem = findItem(startElementId, items);
  const endItem = findItem(endElementId, items);

  const directionalLabel = t('directionalArrowDescriptiveText');
  const biDirectionalLabel = t('biDirectionalArrowDescriptiveText');

  if (!startItem) {
    throw new Error('Start item not found');
  }
  if (!endItem) {
    throw new Error('End item not found');
  }

  if (arrowType === ArrowType.Directional) {
    return directionalLabel.replace('@startItem', startItem.label).replace('@endItem', endItem.label);
  }

  return biDirectionalLabel.replace('@startItem', startItem.label).replace('@endItem', endItem.label);
};
