import { useState, useEffect } from 'react'

function useStripe () {
  const [stripe, setStripe] = useState(null)
  useEffect(() => {
    const stripe = window.Stripe(process.env.GATSBY_STRIPE_PUBLIC_KEY)
    setStripe(stripe)
  }, [])

  return stripe
}

export default useStripe
