import React from 'react'
// import SEO from '../components/seo'
// import Container from '../components/layout'
import Layout from '../containers/layout'

import './404.css'

const Video = () => (
  <div className='not-found'>
    <video autoPlay muted loop className='not-found__video'>
      <source src='/videos/error-404.mp4' type='video/mp4' />
    </video>
  </div>
)

const Lost = () => <div className='not-found__svg' />

const NotFoundPage = () => (
  <Layout showNav>
    <div className='not-found__wrapper'>
      {new Date().getSeconds() % 2 === 0 ? <Video /> : <Lost />}
    </div>
  </Layout>
)

export default NotFoundPage
