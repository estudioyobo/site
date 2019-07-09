import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Slider from 'react-slick'

import SectionHeader from '../../components/SectionHeader'
import { Slideshow } from './reveal'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './portfolio.css'
import './revealer.css'

import PortfolioItem from '../../components/PortfolioItem'

class Portfolio extends Component {
  constructor (props) {
    super(props)
    this.gridElems = []
  }
  componentDidMount () {
    if (true) {
      new Slideshow(this.gridElems, {
        filledColor: '#EECA46'
      })
    }
  }
  render () {
    const { posts } = this.props
    return (
      <section id='portfolio'>
        <SectionHeader title='portfolio' dividerColor='#56EF98' />
        <Slider className='grid-wrapper' slidesToShow={2} arrows dots centerMode>
          {posts.map((post, i) => {
            const { id, thumbnail, _rawExcerpt, slug, publishedAt, categories, title } = post
            return (
              <PortfolioItem
                key={id}
                title={title}
                image={thumbnail}
                description={_rawExcerpt}
                slug={slug.current}
                date={publishedAt}
                tags={categories.map(c => c.title)}
              />
            )
          })}
        </Slider>
      </section>
    )
  }
}

export default Portfolio
