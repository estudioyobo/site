import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import SectionHeader from '../../components/SectionHeader'
import ServiceHeader from './ServiceHeader'
import {
  Grid,
  Title,
  Description,
  Services,
  ServiceCol1,
  ServiceCol2,
  ServiceItem,
  Fill,
  Image,
  Picture,
  Space
} from './Grid'

import keyboardIMG from './keyboard.png'
import keyboardIMG_small from './keyboard-s.png'
import pencilIMG from './pencil.png'

const ServicesSection = ({ services }) => {
  const design = services.find(s => s._id === 'design')
  const development = services.find(s => s._id === 'development')
  return (
    // <StaticQuery
    //   query={query}
    //   render={({ pencilIMG }) => (
    <section id='services' className='padding'>
      <SectionHeader title='Servicios' dividerColor='#56EF98' />
      <div className='section-design'>
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
      </div>
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
            <source media='(max-width: 800px)' srcSet={keyboardIMG_small} />
            <source media='(min-width: 801px)' srcSet={keyboardIMG} />
            <img src={keyboardIMG} alt='A keyboard' />
          </Picture>
        </Grid>
      </div>
    </section>
    //   )}
    // />
  )
}

// const query = graphql`
//   {
//     pencilIMG: imageSharp(fluid: { originalName: { eq: "pencil.png" } }) {
//       fluid {
//         ...GatsbyImageSharpFluid_withWebp
//       }
//     }
//   }
// `;

export default ServicesSection
