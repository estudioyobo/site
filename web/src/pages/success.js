import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Container from '../components/container'
import parseQueryStrings from '../lib/querystrings'

const Success = ({ location }) => {
  const params = parseQueryStrings(location.search)
  return (
    <>
      <script>
        {`
          fbq("track", "Purchase", {
            value: 15.00,
            currency: "EUR",
            contents: [
                {
                    id: "Comprar"
                }
            ],
          });
          `}
      </script>
      <Layout>
        <Container>
          <h1>Enhorabuena</h1>
          {params && params.session_id && <div>{params.session_id}</div>}
        </Container>
      </Layout>
    </>
  )
}

export default Success
