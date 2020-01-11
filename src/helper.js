export const IS_MOBILE = window ? 'ontouchstart' in window || window.navigator.msMaxTouchPoints : false

export const s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
}
