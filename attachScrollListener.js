import checkPassiveEvent from './checkPassiveEvent'

/**
 * Метод для добавления scroll-listener для элемента
 * @method atttachScrollListener
 * @param  {Element} elem DOM - элемент
 * @param  {Function} fn
 */
const attachScrollListener = (elem, fn) => {
  const passiveEventParam = checkPassiveEvent()

  if (elem.addEventListener) {
    if ('onscroll' in document) {
      elem.addEventListener('scroll', fn, passiveEventParam)
    } else if ('onwheel' in document) {
      elem.addEventListener('wheel', fn, passiveEventParam)
    } else if ('onmousewheel' in document) {
      elem.addEventListener('mousewheel', fn, passiveEventParam)
    } else {
      elem.addEventListener('MozMousePixelScroll', fn, passiveEventParam)
    }
  } else {
    elem.attachEvent('onmousewheel', fn, passiveEventParam)
  }
}

export default attachScrollListener
