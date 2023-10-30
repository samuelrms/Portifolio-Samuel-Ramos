export const removeCharacter = (value: string) => {
  if (!value) return null;

  return value.replace(/-/g, ' ').toLowerCase().trim();
};
