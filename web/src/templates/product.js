import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Product from '../components/product'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query ProductTemplateQuery($id: String!) {
    product: stripeSku(id: { eq: $id }) {
      id
      price
      currency
      product {
        name
        description
        images
      }
    }
  }
`

const ProductTemplate = props => {
  const { data, errors } = props
  const product = data && data.product
  return (
    <Layout showNav>
      {errors && <SEO title='GraphQL Error' />}
      {product && <SEO title={product.product.name || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {product && <Product {...product} />}
    </Layout>
  )
}

export default ProductTemplate
