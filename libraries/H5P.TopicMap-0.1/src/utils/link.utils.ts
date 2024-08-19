const linkRegex = /(http(s)?:\/\/)?[-a-zA-Z0-9:%._\+~=]{2,256}\.[a-z]{2,63}([-a-zA-Z0-9@:%_\+~#?&//=]*)(\.[a-z0-9]{1,4})?/g;

// This function replaces '<' and '>' characters with their HTML entities.
const replaceCharacters = (text: string) => {
  return text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

export const normalizeLinkPath = (linkPath: string): string => {
  const pathAlreadyAbsolute =
    linkPath.startsWith('http://') || linkPath.startsWith('https://');

  return pathAlreadyAbsolute ? linkPath : `https://${linkPath}`;
};

export const createLinksFromString = (text: string | null | undefined) => {
  if (!text) {
    return '';
  }
  const sanitizedText = replaceCharacters(text);
  
  return sanitizedText.replace(linkRegex, (url) => {
    const normalizedUrl = normalizeLinkPath(url);
    return `<a href="${normalizedUrl}" target="_blank" rel="noreferrer noopener">${url}</a>`;
  });
};

