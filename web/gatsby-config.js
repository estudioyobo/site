require('dotenv').config()
const {
  api: { projectId, dataset }
} = requireConfig('../studio/sanity.json')

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Montserrat:200,400,500,600,800', 'Crimson Text:400i,600i']
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-123277798-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true
        // Avoids sending pageview hits from custom paths
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '2338144273144620'
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://estudioyobo.us19.list-manage.com/subscribe/post?u=87bf200f30b4de8d5a6b1b0cf&amp;id=925e8af270'
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId,
        dataset,
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        watchMode: true,
        token: process.env.SANITY_TOKEN,
        overlayDrafts: true
      }
    },
    'gatsby-plugin-stripe',
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Product', 'Sku', 'Plan'],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true
      }
    }
  ]
}

/**
 * We're requiring a file in the studio folder to make the monorepo
 * work "out-of-the-box". Sometimes you would to run this web frontend
 * in isolation (e.g. on codesandbox). This will give you an error message
 * with directions to enter the info manually or in the environment.
 */

function requireConfig(path) {
  try {
    return require(path)
  } catch (e) {
    console.error(
      'Failed to require sanity.json. Fill in projectId and dataset name manually in gatsby-config.js'
    )
    return {
      api: {
        projectId: process.env.SANITY_PROJECT_ID || '',
        dataset: process.env.SANITY_DATASET || ''
      }
    }
  }
}
