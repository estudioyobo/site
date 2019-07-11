import React from 'react'
import Slider from 'react-slick'

import styles from './hero.module.css'

const Hero = ({ carousel }) => {
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
      <Slider className={styles.carousel} autoplay autoplaySpeed={4000} dots={false} arrows={false}>
        {carousel.map(image => (
          <object data={image} alt='decorative landing' className={styles.carousel__image} />
        ))}
      </Slider>
    </section>
  )
}

export default Hero
