import React, { useEffect } from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import parseQueryStrings from '../lib/querystrings'

const Success = ({ location }) => {
  const params = parseQueryStrings(location.search)
  useEffect(() => {
    global.fbq('track', 'Purchase', {
      value: 15.0,
      currency: 'EUR',
      contents: [
        {
          id: 'Comprar'
        }
      ]
    })
  }, [])
  return (
    <Layout>
      <Container>
        <h1>Enhorabuena</h1>
        {params && params.session_id && <div>{params.session_id}</div>}
      </Container>
    </Layout>
  )
}

export default Success
