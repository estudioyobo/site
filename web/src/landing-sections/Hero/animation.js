import anime from 'animejs/lib/anime.es.js'

function animateSquares (svg) {
  const els = svg.querySelectorAll('.square')
  for (let i = 0; i < els.length; i++) {
    const el = els[i]
    var offset = anime.setDashoffset(el)
    const dasharray = offset / 5

    anime({
      targets: el,
      strokeDashoffset: [anime.setDashoffset, 0],
      strokeDasharray: [dasharray, dasharray],
      duration: anime.random(1000, 2000),
      delay: anime.random(0, 1000),
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
      autoplay: true
    })
  }
}

function animateDots (svg) {
  const els = svg.querySelectorAll('.dots circle')
  for (let i = 0; i < els.length; i++) {
    const el = els[i]
    anime({
      targets: el,
      duration: anime.random(600, 1000),
      delay: function (el, i) {
        return i * 100
      },
      translateY: 10,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
      autoplay: true
    })
  }
}
function animateClouds (svg) {
  const els = svg.querySelectorAll('.cloud')
  for (let i = 0; i < els.length; i++) {
    const el = els[i]
    anime({
      targets: el,
      duration: 1000,
      delay: anime.stagger(200),
      translateY: 10,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
      autoplay: true
    })
  }
}
function animateArrows (svg) {
  const arrows = svg.querySelectorAll('.arrow')
  for (let i = 0; i < arrows.length; i++) {
    const arrow = arrows[i]
    const body = arrow.querySelector('path')
    const head = arrow.querySelector('polygon')
    anime({
      targets: body,
      duration: 300,
      strokeDashoffset: [anime.setDashoffset, 0],
      delay: 500,
      easing: 'easeInOutSine',
      autoplay: true
    })
    anime({
      targets: head,
      duration: 150,
      fill: ['none', '#333333'],
      delay: 800,
      easing: 'easeInOutSine',
      autoplay: true
    })
  }
}
function animateCode (svg) {
  const els = svg.querySelectorAll('.code rect')
  for (let i = 0; i < els.length; i++) {
    const el = els[i]
    const width = anime.get(el, 'width')
    anime({
      targets: el,
      duration: anime.random(1000, 2000),
      delay: (el, i) => i * 100,
      width: [10, width],
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
      autoplay: true
    })
  }
}
function animateLine (svg) {
  const els = svg.querySelectorAll('.line')
  for (let i = 0; i < els.length; i++) {
    const el = els[i]
    const off = anime.setDashoffset(el)
    anime({
      targets: el,
      strokeDashoffset: [off, 0],
      strokeDasharray: [off / 4, off / 4],
      duration: 1500,
      loop: true,
      easing: 'easeInOutQuad',
      autoplay: true
    })
  }
}
function animateCircles (svg) {
  const els = svg.querySelectorAll('.circle')
  for (let i = 0; i < els.length; i++) {
    const el = els[i]
    return anime({
      targets: el,
      r: 10,
      easing: 'easeInOutSine',
      duration: anime.random(600, 1000),
      delay: anime.random(0, 200),
      loop: true,
      direction: 'alternate',
      autoplay: true
    })
  }
}

function animate (doc) {
  animateSquares(doc)
  animateDots(doc)
  animateClouds(doc)
  animateCode(doc)
  animateArrows(doc)
  animateLine(doc)
  animateCircles(doc)
}

function init (obj) {
  const hasSVG = obj.querySelector('svg')
  if (hasSVG) animate(obj.contentDocument)
  obj.addEventListener('load', () => {
    animate(obj.contentDocument)
  })
}

export default init
