export const capitalizeFirstLetter = (name) => {
  if (typeof name !== "string") {
    return null;
  }
  const nameWithFirstCapitalLetter =
    name.slice(0, 1).toUpperCase() + name.slice(1);
  return nameWithFirstCapitalLetter;
};
