import React from 'react'
import styled from 'styled-components'

const BasePerson = styled.div`
  grid-row: 2 / 4;
  transition: all 0.3s ease-in-out;
  align-self: end;
  position: relative;
  display: grid;
  grid-template-rows: 1fr 9fr;
  grid-template-columns: 6fr 4fr;
  &.active {
    transform: scale(1.3);
    transform-origin: bottom left;
    z-index: 2;
    & div,
    span {
      display: block;
    }
    @media (max-width: 800px) {
      transform: scale(1);
      opacity: 1;
    }
  }

  & div {
    background: #56ef98;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    display: none;
  }
  & span {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    display: none;
    z-index: 3;
    color: white;
    font-size: 69px;
    font-weight: 600;
    line-height: 60px;
    place-self: end;
    @media (max-width: 800px) {
      font-size: 40px;
      line-height: 40px;
    }
    @supports (writing-mode: sideways-lr) {
      writing-mode: sideways-lr;
    }
    @supports not (writing-mode: sideways-lr) {
      writing-mode: vertical-rl;
      transform: rotate(180deg);
    }
  }
  & img {
    grid-row: 1 / 3;
    grid-column: 1 / 3;
    z-index: 2;
    margin: 0;
    width: 100%;
  }
  @media (max-width: 800px) {
    opacity: 0;
  }
`

export const Person1 = styled(BasePerson)`
  grid-column: 1 / 4;
  @media (max-width: 800px) {
    grid-column: 2 / 14;
  }
`
export const Person2 = styled(BasePerson)`
  grid-column: 3 / 6;
  @media (max-width: 800px) {
    grid-column: 2 / 14;
  }
`
export const Person3 = styled(BasePerson)`
  grid-column: 5 / 8;
  @media (max-width: 800px) {
    grid-column: 2 / 14;
  }
`

const Person = ({ className, Wrapper, image, name, surname }) => {
  return (
    <Wrapper className={className}>
      <img src={image} alt='name' />
      <div />
      <span>
        {name}
        <br />
        {surname}
      </span>
    </Wrapper>
  )
}

export default Person
