/**
 * Метод для получения куки
 * @method hasCookie
 * @param  {[type]} cookie кука
 * @param  {[type]} name имя куки
 * @return {String|undefined} 
 */
export const hasCookie = (cookie, name) => {
  const matches = cookie && cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export default hasCookie
