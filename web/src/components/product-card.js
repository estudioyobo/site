import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  padding: '1rem',
  marginBottom: '1rem',
  boxShadow: '5px 5px 25px 0 rgba(46,61,73,.2)',
  backgroundColor: '#fff',
  borderRadius: '6px',
  maxWidth: '300px',
  textDecoration: 'none'
}

const Title = styled.h4`
  margin: 0;
  color: var(--color-black);
`
const Subtitle = styled.p`
  margin: 0;
  color: var(--color-black);
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
const SkuCard = ({ sku }) => {
  return (
    <Link style={cardStyles} to={`/product/${sku.id}`}>
      {sku.image && <img src={sku.image} alt='' width='100%' />}
      <Title>{sku.product.name}</Title>
      <Subtitle>Precio: {formatPrice(sku.price, sku.currency)}</Subtitle>
    </Link>
  )
}
export default SkuCard
