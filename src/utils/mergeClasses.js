export const mergeClasses = (...args) => {
  return args
    .reduce((acc, el) => {
      if (!el || typeof el !== "string") {
        return acc;
      }
      acc = acc + " " + el;
      return acc;
    }, "")
    .trim();
};
