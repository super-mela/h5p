import { ColorTheme } from '../types/ColorTheme';
import { TranslationKey } from '../types/TranslationKey';

export const themes: Array<{ value: ColorTheme; labelKey: TranslationKey }> =
  Object.values(ColorTheme).map((value) => ({
    value,
    labelKey: `global_theme-${value}`,
  }));

export const defaultTheme = ColorTheme.Blue;
