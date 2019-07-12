import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import ServiceHeader from './ServiceHeader'
import {
  Grid,
  Description,
  Services,
  ServiceItem,
  Fill,
  Image,
  Picture,
  Space,
  Wrapper
} from './Grid'

import keyboardIMG from './keyboard.png'
import keyboardIMGsmall from './keyboard-s.png'
import pencilIMG from './pencil.png'

const ServicesSection = ({ services }) => {
  const design = services.find(s => s._id === 'design')
  const development = services.find(s => s._id === 'development')
  return (
    <section id='services'>
      <SectionHeader title='Servicios' dividerColor='#56EF98' />
      <Wrapper className='section-design'>
        <Grid>
          <ServiceHeader title='Diseño' />
          <Description>
            <p>{design.description}</p>
          </Description>
          <Services>
            {design.elements.map(element => (
              <ServiceItem>
                {element.title}
                <ul>
                  <li>{element.description}</li>
                </ul>
              </ServiceItem>
            ))}
          </Services>
          <Fill />
          <Image src={pencilIMG} alt='A pencil' />
        </Grid>
      </Wrapper>
      <div className='section-develop'>
        <Grid right>
          <ServiceHeader title='Desarrollo' left />
          <Description right>
            <p>{development.description}</p>
          </Description>
          <Services right>
            {development.elements.map(element => (
              <ServiceItem>
                {element.title}
                <ul>
                  <li>{element.description}</li>
                </ul>
              </ServiceItem>
            ))}
          </Services>
          <Space rowStart={6} rowEnd={7} height={100} />
          <Fill right />
          <Picture>
            <source media='(max-width: 800px)' srcSet={keyboardIMGsmall} />
            <source media='(min-width: 801px)' srcSet={keyboardIMG} />
            <img src={keyboardIMG} alt='A keyboard' />
          </Picture>
        </Grid>
      </div>
    </section>
  )
}

export default ServicesSection
