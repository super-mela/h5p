import type { H5PImage } from 'h5p-types';
import { GridDimensions } from '../components/Grid/Grid';
import { ArrowItemType } from './ArrowItemType';
import { ColorTheme } from './ColorTheme';
import { TopicMapItemType } from './TopicMapItemType';

export type Params = {
  topicMapItems?: Array<TopicMapItemType>;
  arrowItems?: Array<ArrowItemType>;
  ArrowItems?: Array<ArrowItemType>;
  gridBackgroundImage?: H5PImage;
  colorTheme?: ColorTheme;
  grid?: GridDimensions;
};
