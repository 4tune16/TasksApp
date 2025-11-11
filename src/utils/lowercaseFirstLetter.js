export const lowercaseFirstLetter = (name) => {
  if (typeof name !== "string") {
    return null;
  }
  const nameWithFirstLowercasseLetter =
    name.slice(0, 1).toLowerCase() + name.slice(1);
  return nameWithFirstLowercasseLetter;
};
