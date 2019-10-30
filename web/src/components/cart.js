import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import anime from 'animejs'
import styled from 'styled-components'
import useStripe from '../lib/useStripe'
import { useCartContext } from '../lib/cart'

import './cart.css'

const Button = styled.button`
  color: var(--color-white);
  background: var(--color-black);
  padding: 0.7rem 2rem;
  margin: 1rem;
  font-size: 1.7rem;
  border: none;
  cursor: pointer;

  &:hover {
    background: #111;
  }
`

const Cart = () => {
  const stripe = useStripe()
  const root = useRef()
  const larc = useRef()
  const rarc = useRef()
  const icon = useRef()
  const count = useRef()
  const container = useRef()
  useEffect(() => {
    const portal = document.createElement('div')
    portal.id = 'cart'
    root.current = portal
    document.body.appendChild(portal)
  }, [])
  useEffect(() => {
    const cnt = document.getElementById('___gatsby')
    if (cnt) {
      cnt.classList.add('container')
      container.current = cnt
    }
    return () => {
      container.current.classList.remove('pushed')
      btn.current.classList.remove('active')
    }
  }, [container])
  const isExpanded = useRef(false)
  const content = useRef(false)
  const btn = useRef()
  const { products, removeProduct, total } = useCartContext()
  const [totalProducts, setTotalProducts] = useState(total)
  useEffect(() => {
    setTimeout(() => setTotalProducts(total), 275)
    anime({
      duration: 400,
      easing: 'easeInExpo',
      update: animation => {
        const dashArray = (483.805269 / 2) * (animation.progress / 100)
        larc.current.setAttribute('stroke-dasharray', `${dashArray} 483.805269`)
        rarc.current.setAttribute('stroke-dasharray', `${dashArray} 483.805269`)
        const dashOffset = -(483.805269 / 2) * (animation.progress / 100)
        larc.current.setAttribute('stroke-dashoffset', dashOffset)
        rarc.current.setAttribute('stroke-dashoffset', dashOffset)
      }
    })
    anime
      .timeline({
        targets: icon.current,
        duration: 90
      })
      .add({
        scale: 0.8,
        delay: 275,
        easing: 'easeInQuad'
      })
      .add({
        scale: 1,
        easing: 'easeOutQuad'
      })

    const countTL = anime.timeline({
      targets: count.current,
      duration: 90
    })

    if (count <= 0) {
      countTL.add({
        scale: 0,
        duration: 0
      })
    }
    countTL
      .add({
        scale: 1.2,
        delay: 275,
        easing: 'easeInQuad'
      })
      .add({
        scale: 1,
        easing: 'easeOutQuad'
      })
  }, [products])
  function toggle () {
    // if (isAnimating.current) return false;
    // isAnimating.current = true;
    if (!isExpanded.current) {
      btn.current.classList.add('active')
    }
    // btn.current.classList.toggle('open')
    container.current.classList.toggle('pushed')

    isExpanded.current = !isExpanded.current

    const buttonPos = btn.current.getBoundingClientRect()
    const buttonOffset = window.innerWidth - buttonPos.right
    // need to reset
    content.current.classList.add('no-transition')
    content.current.style.left = 'auto'
    content.current.style.right = 'auto'
    content.current.style.top = 'auto'

    // add/remove class "open" to the button wraper
    setTimeout(function () {
      // var buttonPos2 = btn.current.getBoundingClientRect()
      // console.log('bp2', buttonPos2)
      content.current.style.right = buttonOffset + 'px'
      content.current.style.top = buttonPos.top + 'px'

      if (!isExpanded.current) {
        content.current.classList.remove('no-transition')
        btn.current.classList.remove('open')
      } else {
        setTimeout(function () {
          content.current.classList.remove('no-transition')
          btn.current.classList.add('open')
        }, 25)
      }
    }, 25)
  }
  async function redirectToCheckout (event) {
    event.preventDefault()
    const items = [
      ...products.map(({ sku, quantity }) => ({ sku, quantity })),
      { sku: 'sku_G5Pe2VpveWgJJu', quantity: 1 }
    ]
    console.log('items', items)
    const { error } = await stripe.redirectToCheckout({
      items,
      billingAddressCollection: 'required',
      successUrl: `https://www.estudioyobo.com/success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `https://www.estudioyobo.com/404`
    })
    if (error) {
      console.warn('Error:', error)
    }
  }
  if (!root.current) return null
  const subtotal = products.reduce((prev, next) => prev + next.quantity * next.price, 0)
  const shipping = 5
  return ReactDOM.createPortal(
    <div ref={btn} className='morph-button morph-button-sidebar morph-button-fixed'>
      <div type='button' onClick={toggle}>
        {totalProducts > 0 && (
          <span ref={count} className='items-count'>
            {totalProducts}
          </span>
        )}
        <img ref={icon} className='cart-icon' src='/images/shopping-cart.svg' alt='shopping cart' />
        <svg className='arc' viewBox='0 0 160 160'>
          <path
            ref={larc}
            d='M 41.5 146.683956 A 77 77 0 1 1 118.5 13.3160439'
            strokeDasharray='0 483.805269'
          />
          <path
            ref={rarc}
            d='M 41.5 146.683956 A 77 77 0 1 0 118.5 13.3160439'
            strokeDasharray='0 483.805269'
          />
        </svg>
      </div>
      <div className='morph-content' ref={content}>
        <div className='content-style-sidebar'>
          <span className='icon icon-close' onClick={toggle} />
          <h2>Carrito</h2>
          <ul>
            {products.map(p => (
              <li key={p.sku}>
                <span>
                  {p.name} {p.quantity > 1 && `(${p.quantity})`}
                  <img src='/images/close.svg' width='10' onClick={() => removeProduct(p.sku)} />
                </span>
              </li>
            ))}
          </ul>
          {subtotal > 0 && (
            <>
              <table>
                <tbody>
                  <tr>
                    <td>Subtotal</td>
                    <td>{subtotal}€</td>
                  </tr>
                  <tr>
                    <td>Gastos de envío</td>
                    <td>{shipping}€</td>
                  </tr>
                  <tr className='total'>
                    <td>TOTAL</td>
                    <td>{subtotal + shipping}€</td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
          {subtotal > 0 && <Button onClick={redirectToCheckout}>Comprar</Button>}
        </div>
      </div>
    </div>,
    root.current
  )
}

export default Cart
