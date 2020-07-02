const { format } = require('date-fns')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createBlogPostPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  const postsPerPage = 9
  const numPages = Math.ceil(postEdges.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: require.resolve('./src/templates/blog.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
      }
    })
  })

  postEdges.forEach((edge, index) => {
    const { id, slug = {}, publishedAt } = edge.node
    const dateSegment = format(publishedAt, 'YYYY/MM')
    const path = `/blog/${dateSegment}/${slug.current}/`

    reporter.info(`Creating blog post page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/blog-post.js'),
      context: { id }
    })
  })
}

async function createProjectPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityProject(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const projectEdges = (result.data.allSanityProject || {}).edges || []

  projectEdges.forEach(edge => {
    const id = edge.node.id
    const slug = edge.node.slug.current
    const path = `/project/${slug}/`

    reporter.info(`Creating project page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/project.js'),
      context: { id }
    })
  })
}

async function createSubscriptionPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allStripePlan {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const subscriptionEdges = (result.data.allStripePlan || {}).edges || []

  subscriptionEdges.forEach(edge => {
    const id = edge.node.id
    const path = `/subscription/${id}/`

    reporter.info(`Creating subscription page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/subscription.js'),
      context: { id }
    })
  })
}

async function createProductPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allStripeSku(filter: { image: { ne: null } }) {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const productEdges = (result.data.allStripeSku || {}).edges || []

  productEdges.forEach(edge => {
    const id = edge.node.id
    // const slug = edge.node.slug.current
    const path = `/product/${id}/`

    reporter.info(`Creating product page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/product.js'),
      context: { id }
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages(graphql, actions, reporter)
  await createProjectPages(graphql, actions, reporter)
  await createProductPages(graphql, actions, reporter)
  await createSubscriptionPages(graphql, actions, reporter)
}
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /scrollmagic/,
            use: loaders.null()
          }
        ]
      }
    })
  }
}
