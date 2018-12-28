/**
 * Get path safety
 * @method getPath
 * @param {*} obj - исходный объект, массив или строка
 * @param {String|Array} path - путь до назначения
 * @param {*} miss - значение по умолчанию если не найдено
 */
const getPath = (obj = {}, path = [], miss) => {
  try {
    const keys = typeof path === 'string' ? path.split('.') : Array.isArray(path) && path

    const search = keys && keys.length && keys.reduce((lv, key) => lv && lv[key], obj)

    return (search !== undefined && search !== null) ? search : miss
  } catch (error) {
    console.error('getPath error!', error)
  }
}

export const getPath
