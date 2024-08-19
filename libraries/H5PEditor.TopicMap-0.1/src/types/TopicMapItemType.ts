import type { CommonItemType } from './CommonItemType';

export type TopicMapItemType = CommonItemType & {
  /*
   * This index is used for manually sort the items' tab order
   * Topic map item indices will be set manually by the user
   */
  index?: number;

  /** The x position as a percentage of the container's width */
  xPercentagePosition: number;

  /** The y position as a percentage of the container's height */
  yPercentagePosition: number;

  /** The width as a percentage of the container's width */
  widthPercentage: number;

  /** The height as a percentage of the container's height */
  heightPercentage: number;
};
