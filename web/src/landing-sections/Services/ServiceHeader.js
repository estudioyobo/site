import React from 'react'
import styled from 'styled-components'

const Line = styled.div`
  height: 1.67vw;
  width: 100%;
  background: var(--color-grey);
  display: inline-block;
  transform: translateX(${({ left }) => (left ? -6 : 3)}rem);
  z-index: -1;
  @media (max-width: 800px) {
    height: 2.67vw;
    transform: translateX(${({ left }) => (left ? -3 : 1.5)}rem);
  }
`

const Title = styled.h3`
  font-size: 5vw;
  margin: 0 0 -1.67vw 0;
  text-transform: uppercase;
  font-weight: 800;
  position: relative;
  z-index: 2;
  @media (max-width: 800px) {
    margin-bottom: -4.67vw;
    font-size: 8vw;
  }
`

const Wrapper = styled.div`
  display: inline-block;
  grid-column: ${({ left }) => (left ? '7 / 14' : '2 / 6')};
  justify-self: ${({ left }) => (left ? 'end' : 'start')};
  margin: 0 0 2.5vw 0;

  @media (max-width: 800px) {
    margin: 5vw;
  }
`

const Header = ({ title, left }) => (
  <Wrapper left={left}>
    <Title>{title}</Title>
    <Line left={left} />
  </Wrapper>
)

export default Header
