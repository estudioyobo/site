import { Link } from 'gatsby'
import React from 'react'
import { buildImageObj, cn, getBlogUrl } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'

import styles from './blog-post-preview.module.css'
import { responsiveTitle3 } from './typography.module.css'

function BlogPostPreview (props) {
  return (
    <Link className={styles.root} to={getBlogUrl(props.publishedAt, props.slug.current)}>
      <div className={styles.leadMediaThumb}>
        {props.cover && props.cover.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.cover))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.cover.alt}
          />
        )}
      </div>
      <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
      {props._rawExcerpt && (
        <div className={styles.excerpt}>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )}
    </Link>
  )
}

export default BlogPostPreview
