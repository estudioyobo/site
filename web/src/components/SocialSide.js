import React from 'react'
import styled from 'styled-components'
import Social from './Social'

const Container = styled.div`
  position: fixed;
  right: 10px;
  top: 40%;
  z-index: 30;

  @media (max-width: 800px) {
    display: none;
  }
`

const SocialSide = ({ social }) => (
  <Container>
    {social.map((e, i) => (
      <Social invert key={i} {...e} />
    ))}
  </Container>
)

export default SocialSide
