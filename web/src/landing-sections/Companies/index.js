import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import Company from './company'

const SectionWrapper = styled.section`
  background: #333;
  color: var(--color-accent);
  padding: 50px 100px;
  text-align: center;
  @media (max-width: 800px) {
    padding: 50px;
  }
  h1 {
    font-size: 2.5em;
  }
`

const Companies = ({ companies }) => (
  <SectionWrapper id='companies'>
    <h1>Hemos trabajado con:</h1>
    <Slider
      dots={false}
      infinite
      autoplay
      autoplaySpeed={2300}
      centerMode
      slidesToShow={3}
      arrows={false}
      responsive={[
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1
          }
        }
      ]}
    >
      {companies.map(company => (
        <Company key={company.name} {...company} />
      ))}
    </Slider>
  </SectionWrapper>
)

export default Companies
