import React from 'react'
import styled from 'styled-components'
import { Button } from './newsletter'
import useStripe from '../lib/useStripe'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);
  background-color: #fff;
  border-radius: 6px;
  max-width: 300px;
  text-decoration: none;
`

const Title = styled.h4`
  margin: 0;
  color: var(--color-black);
`
const Subtitle = styled.p`
  margin: 0;
  color: var(--color-black);
`

const Img = styled.img`
  width: 100%;
  object-fit: cover;
`
const Intervals = {
  month: 'mes'
}

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(['es-ES'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol'
  })
  return numberFormat.format(price)
}

const SubscriptionCard = ({ plan }) => {
  const stripe = useStripe()
  return (
    <Container>
      <Title>{plan.nickname}</Title>
      <Subtitle>Precio: {formatPrice(plan.amount, plan.currency)}</Subtitle>
      <Subtitle>{`Cada: ${plan.interval_count} ${Intervals[plan.interval]}`}</Subtitle>
      <Button
        small
        onClick={async () => {
          await stripe.redirectToCheckout({
            lineItems: [{ price: plan.id, quantity: 1 }],
            successUrl: `https://www.estudioyobo.com/success?session_id={CHECKOUT_SESSION_ID}`,
            cancelUrl: `https://www.estudioyobo.com/404`,
            mode: 'subscription'
          })
        }}
      >
        Suscribirse
      </Button>
    </Container>
  )
}
export default SubscriptionCard
