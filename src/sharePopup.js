import windowPopup from "./windowPopup";

const shareUrls = {
  facebook: href => `https://facebook.com/sharer/sharer.php?u=${href}`,
  vkontakte: href => `https://vkontakte.ru/share.php?url=${href}`,
  twitter: href => `https://twitter.com/intent/tweet?url=${href}`,
  odnoklassniki: (href, text) =>
    `https://connect.ok.ru/offer?url=${href}&title=${text}`
};

const sharePopup = async ({ social, href, text }) => {
  if (!shareUrls[social]) return;

  let winWidth = Math.floor(window.outerWidth * 0.4);
  let winHeight = Math.floor(window.outerHeight * 0.4);
  let left = Math.floor(window.screenX + (window.outerWidth - winWidth) / 2);
  let top = Math.floor(window.screenY + (window.outerHeight - winHeight) / 2);

  const res = await windowPopup({
    url: shareUrls[social](href, text),
    options: `width=${winWidth},height=${winHeight},left=${left},top=${top},status=0,toolbar=0,resizable=1,location=1,menubar=0`,
    redirect: href
  });
};

export default sharePopup;
