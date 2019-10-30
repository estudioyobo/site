import React, { useState } from 'react'
import styled from 'styled-components'
import { useCartContext } from '../lib/cart'

const Grid = styled.article`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: auto auto auto 1fr 100px;
  grid-template-areas: 'image title' 'image price' 'image qty' 'image description' 'thumbs .';
  max-width: 960px;
  margin: 2rem auto;
  grid-gap: 1rem;

  .mobile-margins {
    margin: 0;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 10vh auto auto auto auto auto;
    grid-template-areas: 'image' 'thumbs' 'title' 'price' 'description' 'qty' 'btn';
    .mobile-margins {
      margin: 0 10px;
    }
  }
`

const Title = styled.h1`
  grid-area: title;
  margin: 0;
  @media (max-width: 400px) {
    margin: 0 10px;
  }
`

const Price = styled.h2`
  grid-area: price;
  margin: 0;
`

const Button = styled.button`
  grid-area: price;
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
  @media (max-width: 400px) {
    grid-area: btn;
    justify-self: auto;
    font-size: 1rem;
  }
`

const Qty = styled.div`
  grid-area: qty;
`
const Image = styled.img`
  grid-area: image;
  width: 100%;
`
const Thumbnails = styled.div`
  grid-area: thumbs;
  overflow-x: auto;
  overflow-y: hidden;
  box-sizing: border-box;
`
const Thumb = styled.img`
  height: 100%;
  margin-right: 10px;
  box-sizing: border-box;
  border: ${({ selected }) => (selected ? 'solid 2px var(--color-accent)' : 'none')};
`
const Description = styled.p`
  grid-area: description;
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

const Product = props => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { addProduct } = useCartContext()
  async function addToCart (event) {
    event.preventDefault()
    addProduct({
      sku: props.id,
      quantity: Number(quantity),
      name: props.product.name,
      price: Number((props.price / 100).toFixed(2))
    })
  }

  return (
    <Grid>
      <Image src={props.product.images[selectedImage]} />
      <Thumbnails>
        {props.product.images.map((image, i) => (
          <Thumb
            selected={selectedImage === i}
            key={i}
            src={image}
            onClick={() => setSelectedImage(i)}
          />
        ))}
      </Thumbnails>
      <Title className='mobile-margins'>{props.product.name}</Title>
      <Price className='mobile-margins'>{formatPrice(props.price, props.currency)}</Price>
      <Description className='mobile-margins'>{props.product.description}</Description>
      <Qty className='mobile-margins'>
        <span>Cantidad: </span>
        <input
          type='number'
          value={quantity}
          onChange={({ target: { value } }) => setQuantity(value)}
        />
      </Qty>
      <Button className='mobile-margins' onClick={addToCart}>
        Añadir al carrito
      </Button>
    </Grid>
  )
}

export default Product
