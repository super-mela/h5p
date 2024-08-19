import type { CommonItemType } from './CommonItemType';

export type TopicMapItemType = CommonItemType & {
  /** The x position as a percentage of the container's width */
  xPercentagePosition: number;

  /** The y position as a percentage of the container's height */
  yPercentagePosition: number;

  /** The width as a percentage of the container's width */
  widthPercentage: number;

  /** The height as a percentage of the container's height */
  heightPercentage: number;
};
