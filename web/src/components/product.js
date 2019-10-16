import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Grid = styled.article`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: auto auto auto 1fr 100px;
  max-width: 960px;
  margin: 2rem auto;
  grid-gap: 1rem;
`

const Title = styled.h1`
  grid-row: 1 / 2;
  grid-column: 2;
  margin: 0;
`

const Price = styled.h2`
  grid-row: 2 / 3;
  grid-column: 2;
  margin: 0;
`

const Button = styled.button`
  grid-row: 1 / 3;
  grid-column: 2;
  justify-self: flex-end;
  align-self: flex-end;
  color: var(--color-white);
  background: var(--color-black);
  padding: 0.7rem 2rem;
  border: none;
  cursor: pointer;

  &:hover {
    background: #111;
  }
`

const Qty = styled.div`
  grid-row: 3 / 4;
  grid-column: 2;
`
const Image = styled.img`
  grid-row: 1 / 5;
  grid-column: 1;
  width: 100%;
`
const Thumnails = styled.div`
  grid-row: 5 / 6;
  grid-column: 1 / 3;
`
const Thumb = styled.img`
  height: 100%;
  margin-right: 10px;
  border: ${({ selected }) => (selected ? 'solid 2px var(--color-accent)' : 'none')};
`
const Description = styled.p`
  grid-row: 4 / 6;
  grid-column: 2 / 3;
`

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(['es-ES'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol'
  })
  return numberFormat.format(price)
}

function useStripe () {
  const [stripe, setStripe] = useState(null)
  useEffect(() => {
    const stripe = window.Stripe(process.env.GATSBY_STRIPE_PUBLIC_KEY)
    setStripe(stripe)
  }, [])

  return stripe
}

const Product = props => {
  const stripe = useStripe()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  async function redirectToCheckout (event) {
    event.preventDefault()
    const { error } = await stripe.redirectToCheckout({
      items: [{ sku: props.id, quantity: Number(quantity) }],
      billingAddressCollection: 'required',
      successUrl: `https://www.estudioyobo.com/success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `https://www.estudioyobo.com/404`
    })
    if (error) {
      console.warn('Error:', error)
    }
  }
  return (
    <Grid>
      <Title>{props.product.name}</Title>
      <Price>{formatPrice(props.price, props.currency)}</Price>
      <Qty>
        <span>Cantidad: </span>
        <input
          type='number'
          value={quantity}
          onChange={({ target: { value } }) => setQuantity(value)}
        />
      </Qty>
      <Description>{props.product.description}</Description>
      <Button onClick={redirectToCheckout}>Comprar</Button>
      <Image src={props.product.images[selectedImage]} />
      <Thumnails>
        {props.product.images.map((image, i) => (
          <Thumb
            selected={selectedImage === i}
            key={i}
            src={image}
            onClick={() => setSelectedImage(i)}
          />
        ))}
      </Thumnails>
    </Grid>
  )
}

export default Product
