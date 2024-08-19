import { useTranslation as useH5PTranslation } from 'use-h5p';
import { TranslationKey } from '../types/TranslationKey';

export const useTranslation = () => {
  const { t } = useH5PTranslation();

  return {
    ...useH5PTranslation,
    t: (key: TranslationKey) => t(key),
  };
};
