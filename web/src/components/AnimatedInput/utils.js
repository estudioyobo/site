import { useEffect, useState } from 'react'
import charming from 'charming'
import { TweenMax } from 'gsap/TweenMax'

export const lineEq = (y2, y1, x2, x1, currentVal) => {
  // y = mx + b
  var m = (y2 - y1) / (x2 - x1)
  var b = y1 - m * x1
  return m * currentVal + b
}

export const shuffleArray = arr => arr.sort(() => Math.random() - 0.5)

/**
 * nearby.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2018, Codrops
 * http://www.codrops.com
 */

/**
 * Distance between two points P1 (x1,y1) and P2 (x2,y2).
 */
const distancePoints = (x1, y1, x2, y2) => Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2))

// from http://www.quirksmode.org/js/events_properties.html#position
const getMousePos = e => {
  var posx = 0
  var posy = 0
  if (!e) e = window.event
  if (e.pageX || e.pageY) {
    posx = e.pageX
    posy = e.pageY
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
    posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop
  }
  return { x: posx, y: posy }
}

export class Nearby {
  constructor (el, options) {
    this.DOM = { el: el }
    this.options = options
    this.init()
  }
  init () {
    this.mousemoveFn = ev =>
      requestAnimationFrame(() => {
        const mousepos = getMousePos(ev)
        const docScrolls = {
          left: document.body.scrollLeft + document.documentElement.scrollLeft,
          top: document.body.scrollTop + document.documentElement.scrollTop
        }
        const elRect = this.DOM.el.getBoundingClientRect()
        const elCoords = {
          x1: elRect.left + docScrolls.left,
          x2: elRect.width + elRect.left + docScrolls.left,
          y1: elRect.top + docScrolls.top,
          y2: elRect.height + elRect.top + docScrolls.top
        }
        const closestPoint = { x: mousepos.x, y: mousepos.y }

        if (mousepos.x < elCoords.x1) {
          closestPoint.x = elCoords.x1
        } else if (mousepos.x > elCoords.x2) {
          closestPoint.x = elCoords.x2
        }
        if (mousepos.y < elCoords.y1) {
          closestPoint.y = elCoords.y1
        } else if (mousepos.y > elCoords.y2) {
          closestPoint.y = elCoords.y2
        }
        if (this.options.onProgress) {
          this.options.onProgress(
            distancePoints(mousepos.x, mousepos.y, closestPoint.x, closestPoint.y)
          )
        }
      })

    window.addEventListener('mousemove', this.mousemoveFn)
  }
}

export const useCharming = () => {
  const [input, setInput] = useState(null)
  const [label, setLabel] = useState(null)
  const [placeholder, setPlaceholder] = useState(null)
  useEffect(() => {
    if (input && label && placeholder) {
      charming(label)
      const labelLetters = Array.from(label.querySelectorAll('span'))
      charming(placeholder)
      const placeholderLetters = Array.from(placeholder.querySelectorAll('span'))

      const lettersTotal = placeholderLetters.length
      const lettersPosArr = shuffleArray(Array.from(Array(lettersTotal).keys()))
      let currentVisible = lettersTotal

      // whatever we do, start at [distanceThreshold.max]px from the element and end at [distanceThreshold.min]px from the element.
      const distanceThreshold = { min: 0, max: 50 }

      new Nearby(input, {
        onProgress: distance => {
          const point = lineEq(
            lettersTotal,
            0,
            distanceThreshold.max,
            distanceThreshold.min,
            distance
          )
          const visible = Math.max(0, Math.min(lettersTotal, Math.floor(point)))
          if (currentVisible !== visible) {
            // hide placeholder and show label.
            if (visible < currentVisible) {
              for (let i = 0, len = lettersPosArr.length - visible; i < len; ++i) {
                const letter = placeholderLetters[lettersPosArr[i]]
                if (letter.dataset.state !== 'hidden') {
                  letter.dataset.state = 'hidden'
                  TweenMax.to(letter, 0.5, {
                    // ease: 'Back.easeIn',
                    ease: 'Expo.easeOut',
                    y: '-200%',
                    opacity: 0
                  })

                  TweenMax.to(labelLetters[lettersPosArr[i]], 0.5, {
                    // ease: 'Back.easeOut',
                    // delay: 0.4,
                    ease: 'Expo.easeOut',
                    y: '0%',
                    startAt: { y: '200%' },
                    opacity: 1
                  })
                }
              }
            }
            // hide label and show placeholder. (only if input doesn't have a value).
            else if (input.value.length === 0) {
              for (
                let i = lettersTotal - 1, len = lettersTotal - (lettersPosArr.length - visible);
                i >= lettersTotal - len;
                --i
              ) {
                const letter = placeholderLetters[lettersPosArr[i]]
                if (letter.dataset.state === 'hidden') {
                  letter.dataset.state = ''
                  TweenMax.to(letter, 0.2, {
                    ease: 'Circ.easeOut',
                    y: '0%',
                    // overwrite: 'all',
                    opacity: 1
                  })

                  TweenMax.to(labelLetters[lettersPosArr[i]], 1, {
                    ease: 'Circ.easeOut',
                    y: '200%',
                    opacity: 0
                  })
                }
              }
            }

            if (visible <= 0) {
              input.focus()
            }

            currentVisible = visible
          }
        }
      })
    }
  }, [input, label, placeholder])

  return {
    input: setInput,
    label: setLabel,
    placeholder: setPlaceholder
  }
}
