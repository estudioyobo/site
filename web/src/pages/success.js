import React from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import parseQueryStrings from '../lib/querystrings'

const Success = ({ location }) => {
  const params = parseQueryStrings(location.search)
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
