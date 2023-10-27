export const decodeBase64 = (value: string, useMask: boolean = false) => {
  if (!value) return null;

  const decoded = atob(value);
  if (useMask) {
    return decoded;
  }
  const regex = /!\[image]\((https:\/\/[^\s)]+)/;
  const match = decoded.match(regex);

  if (match && match[1]) {
    return match[1];
  }

  return null;
};