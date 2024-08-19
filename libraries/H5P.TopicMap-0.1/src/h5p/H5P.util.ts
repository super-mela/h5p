import type { H5PAudio, H5PIntegrationObject, H5PObject } from 'h5p-types';
import { ArrowItemType } from '../types/ArrowItemType';
import { Params } from '../types/Params';
import { TopicMapItemType } from '../types/TopicMapItemType';

export const H5P = (window as any).H5P as H5PObject;
export const H5PIntegration = (window as any).H5P as H5PIntegrationObject;

export const normalizeAssetPath = (path: string, contentId: string): string => {
  const pathAlreadyAbsolute =
    path.startsWith('http://') || path.startsWith('https://');

  if (pathAlreadyAbsolute) {
    return path;
  }
  return H5P.getPath(path, contentId);
};

/**
 * Replace relative paths to image(s) in Topic Map Item(s) with absolute paths
 *
 * @param items An array with Topic Map Items being used in the current H5P
 * @param contentId Content id of the H5P being shown
 */
export const makeBackgroundImagePathsAbsolute = (
  items: Array<TopicMapItemType> | undefined,
  contentId: string,
): Array<TopicMapItemType> | undefined => {
  if (!items) return undefined;

  return items.map((item) => {
    if (!item.topicImage) return item;

    return {
      ...item,
      topicImage: {
        ...item.topicImage,
        path: normalizeAssetPath(item.topicImage.path, contentId),
      },
    };
  });
};

/**
 * Replace relative paths to image(s) in Arrow Item(s) with absolute paths
 *
 * @param items An array with Arrow Items being used in the current H5P
 * @param contentId Content id of the H5P being shown
 */
export const makeArrowImagePathsAbsolute = (
  items: Array<ArrowItemType> | undefined,
  contentId: string,
): Array<ArrowItemType> | undefined => {
  if (!items) return undefined;

  return items.map((item) => {
    if (!item.topicImage) return item;

    return {
      ...item,
      topicImage: {
        ...item.topicImage,
        path: normalizeAssetPath(item.topicImage.path, contentId),
      },
    };
  });
};

export const normalizeArrowItemPaths = <Type extends Params>(
  params: Type,
  contentId: string,
): Type => {
  let arrowItems: ArrowItemType[] | undefined;
  if (params.topicMap) {
    arrowItems = makeArrowImagePathsAbsolute(
      params.topicMap.arrowItems,
      contentId,
    );
  }

  return {
    ...params,
    topicMap: {
      ...(params.topicMap ?? {}),
      arrowItems,
    },
  };
};

export const normalizeTopicMapItemPaths = <Type extends Params>(
  params: Type,
  contentId: string,
): Type => {
  let topicMapItems: TopicMapItemType[] | undefined;
  if (params.topicMap) {
    topicMapItems = makeBackgroundImagePathsAbsolute(
      params.topicMap.topicMapItems,
      contentId,
    );
  }

  return {
    ...params,
    topicMap: {
      ...(params.topicMap ?? {}),
      topicMapItems,
    },
  };
};

export const normalizeGridBackgroundImagePath = <Type extends Params>(
  params: Type,
  contentId: string,
): Type => {
  if (!params.topicMap?.gridBackgroundImage?.path) {
    return params;
  }

  const path = normalizeAssetPath(
    params.topicMap.gridBackgroundImage.path,
    contentId,
  );

  return {
    ...params,
    topicMap: {
      ...(params.topicMap ?? {}),
      gridBackgroundImage: {
        ...(params.topicMap?.gridBackgroundImage ?? {}),
        path,
      },
    },
  };
};

/**
 * It is in the nature of the grid to create sizes that doesn't
 * necessarily fit. Therefore, this function changes the sizes of
 * elements touching the positive edges to fit a 100*100
 * normalized grid.
 */
export const normalizeSizes = (params: Required<Params>): Required<Params> => {
  const topicMapItems: Array<TopicMapItemType> | undefined =
    params.topicMap?.topicMapItems?.map((item) => {
      const tooWide = item.xPercentagePosition + item.widthPercentage > 100;
      const tooTall = item.yPercentagePosition + item.heightPercentage > 100;

      let { widthPercentage, heightPercentage } = item;
      if (tooWide) {
        widthPercentage = 100 - item.xPercentagePosition;
      }

      if (tooTall) {
        heightPercentage = 100 - item.yPercentagePosition;
      }

      return {
        ...item,
        widthPercentage,
        heightPercentage,
      };
    });

  return {
    ...params,
    topicMap: {
      ...(params.topicMap ?? {}),
      topicMapItems,
    },
  };
};

/**
 * Replace relative paths to audio(s) in Dialog(s) with absolute paths
 *
 * @param items An array with Audio Items being used in the current H5P
 * @param contentId Content id of the H5P being shown
 */
export const makeAudioPathsAbsolute = (
  items: Array<H5PAudio> | undefined,
  contentId: string,
): Array<H5PAudio> | undefined => {
  if (!items) return undefined;

  return items.map((item) => {
    if (!item.path) return item;

    return {
      ...item,
      path: normalizeAssetPath(item.path, contentId),
    };
  });
};

/**
 * Replace relative paths to audio(s) in Topic Map Item(s) with absolute paths
 *
 * @param items An array with Topic Map Items being used in the current H5P
 * @param contentId Content id of the H5P being shown
 */
export const makeDialogAudioPathsAbsolute = (
  items: Array<TopicMapItemType> | undefined,
  contentId: string,
): Array<TopicMapItemType> | undefined => {
  if (!items) return undefined;

  return items.map((item) => {
    if (!item.dialog?.audio?.audioFile) return item;

    const audioFile = makeAudioPathsAbsolute(
      item.dialog?.audio.audioFile,
      contentId,
    );

    return {
      ...item,
      dialog: {
        ...item.dialog,
        audio: {
          ...item.dialog.audio,
          audioFile,
        },
      },
    };
  });
};

export const normalizeDialogAudioPaths = <Type extends Params>(
  params: Type,
  contentId: string,
): Type => {
  let topicMapItems: TopicMapItemType[] | undefined;
  if (params.topicMap) {
    topicMapItems = makeDialogAudioPathsAbsolute(
      params.topicMap.topicMapItems,
      contentId,
    );
  }

  return {
    ...params,
    topicMap: {
      ...(params.topicMap ?? {}),
      topicMapItems,
    },
  };
};

/**
 * Replace relative paths to audio(s) in Arrow Item(s) with absolute paths
 *
 * @param items An array with Arrow Items being used in the current H5P
 * @param contentId Content id of the H5P being shown
 */
export const makeArrowDialogAudioPathsAbsolute = (
  items: Array<ArrowItemType> | undefined,
  contentId: string,
): Array<ArrowItemType> | undefined => {
  if (!items) return undefined;

  return items.map((item) => {
    if (!item.dialog?.audio?.audioFile) return item;

    const audioFile = makeAudioPathsAbsolute(
      item.dialog?.audio.audioFile,
      contentId,
    );

    return {
      ...item,
      dialog: {
        ...item.dialog,
        audio: {
          ...item.dialog.audio,
          audioFile,
        },
      },
    };
  });
};

export const normalizeArrowDialogAudioPaths = <Type extends Params>(
  params: Type,
  contentId: string,
): Type => {
  let arrowItems: ArrowItemType[] | undefined;
  if (params.topicMap) {
    arrowItems = makeArrowDialogAudioPathsAbsolute(
      params.topicMap.arrowItems,
      contentId,
    );
  }

  return {
    ...params,
    topicMap: {
      ...(params.topicMap ?? {}),
      arrowItems,
    },
  };
};
