const getUrl = {
  vkontakte: ({ client_id, redirect_uri }) => ({
    authUrl: "https://oauth.vk.com/oauth/authorize",
    query: {
      client_id,
      redirect_uri,
      // display: 'popup',
      response_type: "token",
      scope: "email,groups,offline",
      v: "5.92"
    },
    width: 655,
    height: 372
  }),
  facebook: ({ client_id, redirect_uri, csrf }) => ({
    authUrl: "https://www.facebook.com/v3.2/dialog/oauth",
    query: {
      client_id,
      redirect_uri,
      state: csrf,
      // display: 'popup',
      response_type: "token",
      scope: "email,user_photos,groups_access_member_info,manage_pages"
    },
    width: 1000,
    height: 650
  }),
  odnoklassniki: ({ client_id, redirect_uri }) => ({
    authUrl: "https://connect.ok.ru/oauth/authorize",
    query: {
      client_id,
      redirect_uri,
      // display: 'popup',
      response_type: "token",
      scope: "VALUABLE_ACCESS;LONG_ACCESS_TOKEN;GROUP_CONTENT;GET_EMAIL"
    },
    width: 588,
    height: 480
  })
};

export default getUrl;
