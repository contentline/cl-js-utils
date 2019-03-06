import q from "query-string";
import getUrl from "./getUrl";
import getPath from "../getPath";
import windowPopup from "../windowPopup";

class Auth0 {
  getParamsBySocial(social, opts = {}) {
    try {
      const { client_id } = opts;

      if (!client_id) throw new Error("Отсутствует appId!");

      const redirect_uri = window.location.origin;

      const { authUrl, query, width, height } = getUrl[social]({
        client_id,
        redirect_uri
      });

      const url = `${authUrl}?${q.stringify(query)}`;

      if (!url)
        throw new Error(`Ошибка при получения url для соцсети ${social}!`);

      return { url, redirect_uri, width, height };
    } catch (err) {
      console.error(err);
    }
  }

  getPopupOptions({ width, height }) {
    let winWidth = width || Math.floor(window.outerWidth * 0.6);
    let winHeight = height || Math.floor(window.outerHeight * 0.4);
    let left = Math.floor(window.screenX + (window.outerWidth - winWidth) / 2);
    let top = Math.floor(window.screenY + (window.outerHeight - winHeight) / 2);

    let optionsStr = `width=${winWidth},height=${winHeight},left=${left},top=${top},status=0,toolbar=0,resizable=1,location=1,menubar=0`;

    return optionsStr;
  }

  async open(social, options) {
    const { url, redirect_uri, width, height } = this.getParamsBySocial(
      social,
      options
    );

    const authUrl = await windowPopup({
      url,
      name: "Authorization",
      options: this.getPopupOptions({ width, height }),
      redirect: redirect_uri
    });

    if (authUrl) {
      const split = authUrl.split("/");
      const queryStr = getPath(split, [split.length - 1], "").replace(/#/, "");
      const query = q.parse(queryStr);
      return query.access_token && query;
    }
  }
}

export default Auth0;
