const keyBy = (arr = [], key) => {
  if (!Array.isArray(arr)) return null;

  return arr.reduce(
    (acc, el) => (el && el[key] ? { ...acc, [el[key]]: el } : acc),
    {}
  );
};

export default keyBy;
