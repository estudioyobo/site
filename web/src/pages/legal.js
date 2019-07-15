import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '../components/block-content'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import { responsiveTitle1 } from '../components/typography.module.css'

export const query = graphql`
  query LegalPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)legal/" }) {
      title
      _rawBody
    }
  }
`

const LegalPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data.page

  if (!page) {
    throw new Error(
      'Missing "Legal" page data. Open the studio at http://localhost:3333 and add "Legal" page data and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={page.title} />
      <Container>
        <h1 className={responsiveTitle1}>{page.title}</h1>
        <BlockContent blocks={page._rawBody || []} />
      </Container>
    </Layout>
  )
}
LegalPage.defaultProps = {
  data: {
    page: {
      title: 'No title'
    }
  }
}
export default LegalPage
