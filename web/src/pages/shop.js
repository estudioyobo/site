import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../containers/layout'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import ProductsGrid from '../components/products-grid'
import Cart from '../components/cart'

export const query = graphql`
  query ShopPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`

const Shop = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }
  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <ProductsGrid />
      <Cart />
    </Layout>
  )
}

export default Shop
