export const decodeBase64 = (value: string, useMask: boolean = false) => {
  if (!value) return null;

  const decoded = Buffer.from(value, 'base64').toString('utf-8');
  if (useMask) {
    return decoded;
  }
  const regex = /!\[image]\((https:\/\/[^\s)]+)/;
  const match = RegExp(regex).exec(decoded)?.[1];

  return match || null;
};
