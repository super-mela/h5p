import type { H5PImage } from 'h5p-types';
import { DialogContent } from './DialogContent';

export type CommonItemType = {
  id: string;
  label: string;

  description?: string;
  topicImage?: H5PImage;
  topicImageAltText?: string;

  dialog?: DialogContent;
};
