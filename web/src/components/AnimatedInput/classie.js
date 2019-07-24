function hasClass (elem, c) {
  return elem.classList.contains(c)
}
function addClass (elem, c) {
  elem.classList.add(c)
}
function removeClass (elem, c) {
  elem.classList.remove(c)
}

function toggleClass (elem, c) {
  var fn = hasClass(elem, c) ? removeClass : addClass
  fn(elem, c)
}

export default {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
}
