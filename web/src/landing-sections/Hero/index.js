import React from 'react'
import Slider from 'react-slick'

import './hero.css'
import 'slick-carousel/slick/slick.css'

const Hero = ({ carousel }) => {
  return (
    <section id='start' className='hero'>
      <h1>
        DISEÑO Y<br /> DESARROLLO
      </h1>
      <div className='hero--description'>
        <p>
          Somos Yobo, un estudio especializado en el diseño, comunicación y desarrollo de
          aplicaciones móvil y web.
        </p>
      </div>
      <a href='#contact' className='hero--contact'>
        CONTACTO
      </a>
      <Slider className='hero--caroussel' autoplay autoplaySpeed={4000}>
        {carousel.map(image => (
          <object data={image} alt='decorative landing' className='hero--caroussel-image' />
        ))}
      </Slider>
    </section>
  )
}

export default Hero
