import React from 'react'

import styles from './video.module.css'

function Video(props) {
  return (
    <div className={styles.root}>
      {props.url && <video src={props.url} autoPlay controls loop />}
      {props.caption && <span className={styles.caption}>{props.caption}</span>}
    </div>
  )
}

export default Video
