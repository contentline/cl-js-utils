const windowPopup = ({ url = "", name = "", options = "", redirect = "" }) =>
  new Promise((res, rej) => {
    const popup = window.open(url, name, options);

    const uriRegex = new RegExp(redirect);

    let interval = setInterval(() => {
      try {
        if (!popup || popup.closed) {
          clearInterval(interval);
          res();
        }

        const { href } = popup.location;

        if (uriRegex.test(href)) {
          clearInterval(interval);
          res(href);
          popup.close();
        }
      } catch (err) {
        console.error("Ошибка!", err);
      }
    }, 100);
  });

export default windowPopup;
