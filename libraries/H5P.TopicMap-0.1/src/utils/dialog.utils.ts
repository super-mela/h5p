import type { H5PCopyright } from 'h5p-types';

export const formatCopyright = (
  copyrightTitle: string,
  { author, title, license }: H5PCopyright,
): string => {
  const showTitleAuthorDivider = title && author;

  return `${copyrightTitle}: ${title ?? ''} ${
    showTitleAuthorDivider ? '/' : ''
  } ${author ? ` ${author}` : ''} (${license})`;
};
