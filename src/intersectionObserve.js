const intersectionObserve = (node, callback) => {
  try {
    const observer = new IntersectionObserver(entries => {
      for (let i = 0; i < entries.length; i += 1) {
        const entry = entries[i];
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          callback && callback();
        }
      }
    });

    observer.observe(node);
  } catch (e) {
    console.log("intersectionObserve error", e);
    callback && callback();
  }
};

export default intersectionObserve;
