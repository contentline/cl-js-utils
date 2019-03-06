import q from "query-string";
import fetch from "node-fetch";
import md5 from "js-md5";

const request = async (url, options = {}) => {
  const res = await fetch(url, options);
  const json = await res.json();
  return json;
};

const fetchUrls = {
  vkontakte: async ({ access_token }) => {
    const query = {
      access_token,
      fields: "photo_100",
      v: "5.92"
    };

    const req = await request(
      `https://api.vk.com/method/users.get?${q.stringify(query)}`
    );

    const { first_name, last_name, photo_100 } = req.response[0];

    return {
      name: `${first_name} ${last_name}`,
      image: photo_100
    };
  },
  facebook: async ({ access_token }) => {
    const query = {
      access_token,
      fields: "name,picture{url}"
    };

    const { name, picture } = await request(
      `https://graph.facebook.com/v3.2/me?${q.stringify(query)}`
    );

    return {
      name,
      image: picture.data.url
    };
  },
  odnoklassniki: async ({
    access_token,
    application_key,
    session_secret_key
  }) => {
    const sigStr = `application_key=${application_key}fields=name,pic_2format=jsonmethod=users.getCurrentUser${session_secret_key}`;

    const query = {
      sig: md5(sigStr),
      access_token,
      application_key,
      format: "json",
      fields: "name,pic_2",
      method: "users.getCurrentUser"
    };

    const { pic_2, name } = await request(
      `https://api.ok.ru/fb.do?${q.stringify(query)}`
    );

    return {
      name,
      image: pic_2
    };
  }
};

const getUserInfo = async (query = {}) => {
  try {
    const data = await fetchUrls[query.name](query);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default getUserInfo;
