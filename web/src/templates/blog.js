import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import SectionHeader from '../components/SectionHeader'
import Pagination from '../components/Pagination'

export const query = graphql`
  query BlogPageQuery($skip: Int, $limit: Int) {
    posts: allSanityPost(skip: $skip, limit: $limit, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
          cover {
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const BlogPage = props => {
  const { data, errors, pageContext } = props
  console.log('props', props)
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    <Layout>
      <SEO
        title="Blog"
        description="Tutoriales para Desarrollo, artículos de Diseño y de las últimas tecnologías, Lenguajes de Programación, trucos para Diseñadores... Mantente informado suscribiéndote a la Newsletter."
      />
      <SectionHeader title="blog" dividerColor="#56EF98" />
      <Container>
        {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}
        <Pagination
          path="/blog"
          currentPage={pageContext.currentPage}
          numPages={pageContext.numPages}
        />
      </Container>
    </Layout>
  )
}

export default BlogPage
