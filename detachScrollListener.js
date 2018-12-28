/**
 * Метод для удаления scroll-listener от элемента
 * @method detachScrollListener
 * @param  {Element} elem
 * @param  {Function} fn
 */
const detachScrollListener = (elem, fn) => {
  if (elem.addEventListener) {
    if ('onscroll' in document) {
      elem.removeEventListener('scroll', fn)
    } else if ('onwheel' in document) {
      elem.removeEventListener('wheel', fn)
    } else if ('onmousewheel' in document) {
      elem.removeEventListener('mousewheel', fn)
    } else {
      elem.removeEventListener('MozMousePixelScroll', fn)
    }
  } else {
    elem.detachEvent('onmousewheel', fn)
  }
}

export default detachScrollListener
