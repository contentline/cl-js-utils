/**
 * Метод определения поддерживаются ли пассивные эвенты
 * @method checkPassiveEvent
 * @return {Object|undefined}
 */
const checkPassiveEvent = () => {
  let supportsPassive = false

  try {
    const opts = Object.defineProperty({}, 'passive', {
      get: () => {
        supportsPassive = true
      }
    })
    window.addEventListener('testPassive', null, opts)
    window.removeEventListener('testPassive', null, opts)
  } catch (e) {}

  return supportsPassive && { passive: true }
}

export default checkPassiveEvent
