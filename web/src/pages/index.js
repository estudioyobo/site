import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import Modal from 'react-modal'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import Top from '../components/Top'
import GraphQLErrorList from '../components/graphql-error-list'
import Newsletter from '../components/newsletter'
import SEO from '../components/seo'
import LandingMenu from '../components/LandingMenu'
import Portfolio from '../landing-sections/Portfolio'
import ServicesSection from '../landing-sections/Services'
import Companies from '../landing-sections/Companies'
import TeamWork from '../landing-sections/Teamwork'
import Contact from '../landing-sections/Contact'
import Hero from '../landing-sections/Hero'
import Layout from '../containers/layout'
import SocialSide from '../components/SocialSide'

import './index.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

Modal.setAppElement("#___gatsby")

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }

    companyInfo: sanityCompanyInfo(_id: { regex: "/(drafts.|)companyInfo/" }) {
      id
      social {
        name
        icon {
          asset {
            _id
          }
        }
        link
      }
    }

    clients: allSanityClient {
      edges {
        node {
          id
          name
          icon {
            asset {
              _id
            }
          }
        }
      }
    }

    services: allSanityService {
      edges {
        node {
          _id
          description
          elements {
            title
            description
          }
        }
      }
    }

    projects: allSanityProject(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          thumbnail {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
            alt
          }
          title
          categories {
            title
          }
          _rawExcerpt
          publishedAt
          slug {
            current
          }
        }
      }
    }
  }
`

const sections = [
  {
    id: 'start',
    name: 'Inicio'
  },
  {
    id: 'services',
    name: 'Servicios'
  },
  {
    id: 'portfolio',
    name: 'Portfolio'
  },
  {
    id: 'team',
    name: 'Equipo'
  },
  {
    id: 'contact',
    name: 'Contacto'
  }
]

const heroImages = ['/images/home-1.svg', '/images/home-2.svg', '/images/home-3.svg']

const IndexPage = props => {
  const { data, errors } = props
  const [newsletter, setNewsletter] = useState(false)

  function showNewsletter (e) {
    if (
      e.clientY <= 0 ||
      e.clientX <= 0 ||
      e.clientX >= window.innerWidth ||
      e.clientY >= window.innerHeight
    ) {
      setNewsletter(true)
    }
  }

  useEffect(() => {
    document.addEventListener('mouseout', showNewsletter)
    return () => {
      document.removeEventListener('mouseout', showNewsletter)
    }
  }, [showNewsletter])

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const companyInfo = (data || {}).companyInfo
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
    : []
  const clientNodes = (data || {}).clients ? mapEdgesToNodes(data.clients) : []
  const servicesNodes = (data || {}).services ? mapEdgesToNodes(data.services) : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout showNav>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />

      <Top />
      <SocialSide social={companyInfo.social} />
      <LandingMenu sections={sections} />
      <Hero carousel={heroImages} />
      <ServicesSection services={servicesNodes} />
      <Portfolio posts={projectNodes} />
      <Companies companies={clientNodes} />
      <TeamWork />
      <Contact />
      <Modal isOpen={newsletter} onRequestClose={() => setNewsletter(false)} closeTimeoutMS={300}>
        <Newsletter title="Suscríbete a la newsletter" subtitle='y entérate de noticias del mundo del diseño y desarrollo del mundo digital' path='popup' />
      </Modal>
    </Layout>
  )
}

export default IndexPage
