import React, { useRef } from 'react'
import Slider from 'react-slick'

import styles from './hero.module.css'
import animate from './animation'

const Hero = ({ carousel }) => {
  const initAnimations = useRef([])
  return (
    <section id='start' className={styles.hero}>
      <h1>
        DISEÑO Y<br /> DESARROLLO
      </h1>
      <div className={styles.description}>
        <p>
          Somos Yobo, un estudio especializado en el diseño, comunicación y desarrollo de
          aplicaciones móvil y web.
        </p>
      </div>
      <a href='#contact' className={styles.contact}>
        CONTACTO
      </a>
      <Slider
        className={styles.carousel}
        autoplay
        autoplaySpeed={4000}
        dots={false}
        arrows={false}
        onReInit={() => {
          const objects = document.querySelectorAll('object')
          for (let i = 0; i < objects.length; i++) {
            const obj = objects[i]
            if (!initAnimations.current.includes(obj)) {
              initAnimations.current.push(obj)
              animate(obj)
            }
          }
        }}
      >
        {carousel.map((image, i) => (
          <object
            key={i}
            data={image}
            alt='decorative landing'
            className={styles.carousel__image}
          />
        ))}
      </Slider>
    </section>
  )
}

export default Hero
