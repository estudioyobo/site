import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import BlockContent from '../block-content'

import styles from './portfolio-item.module.css'

const PortfolioItem = ({ image, title, description, tags, date, slug, ...rest }) => {
  return (
    <div key={title} className={styles.grid}>
      <Link to={`/project/${slug}`} className={styles.img}>
        <Img fluid={image.asset.fluid} alt={image.alt} />
      </Link>
      <div className={styles.title}>
        <h2>{title}</h2>
        <h3>
          {date.split('-')[0]} - {tags.join(', ')}
        </h3>
      </div>
      <div className={styles.info}>
        <BlockContent blocks={description} />
        <Link to={`/project/${slug}`}>Ver más</Link>
      </div>
    </div>
  )
}

export default PortfolioItem
