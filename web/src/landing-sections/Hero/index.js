import React from 'react'
import Img from 'gatsby-image'

import './hero.css'

const Hero = ({ carousel }) => {
  return (
    <section id='start' className='hero'>
      <object data={carousel[0]} className='hero--caroussel' alt='decorative landing' />
      <h1>
        Diseño y<br /> Desarrollo
      </h1>
      <div className='hero--description'>
        <p>
          Somos Yobo, un estudio especializado en el diseño, comunicación y desarrollo de
          aplicaciones móvil y web.
        </p>
      </div>
      <a href='#contact' className='hero--contact'>
        Contacto
      </a>
    </section>
  )
}

export default Hero
