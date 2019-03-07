const getClosest = (el, ...targets) => {
  if (!el || !targets) return null;

  return (
    (el.parentNode && targets.find(t => el.parentNode === t)) ||
    getClosest(el.parentNode, ...targets)
  );
};

export default getClosest;
