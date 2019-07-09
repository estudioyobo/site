import React from 'react'
import styled from 'styled-components'
import Scrollspy from 'react-scrollspy'

import styles from './landing-menu.module.css'

const Name = styled.span`
  display: none;
  padding-left: 10px;
`
const Emph = styled.span`
  display: none;
`

const Item = styled.a`
  margin-bottom: 1rem;
  color: black;
  text-decoration: none;
  display: block;
  mix-blend-mode: multiply;
  &.selected {
    font-weight: 800;
    margin-left: 0.2rem;
    transform: scale(1.3);
    transform-origin: left;
    ${Emph} {
      display: inline-block;
    }
  }
  & :hover {
    ${Name} {
      display: inline-block;
    }
  }
`

const LandingMenu = ({ sections }) => (
  <Scrollspy items={sections.map(s => s.id)} currentClassName='selected' className={styles.nav}>
    {sections.map((section, i) => (
      <Item key={section} href={`#${section.id}`}>
        <span>{i}</span>
        <Emph>.-</Emph>
        <Name>{section.name}</Name>
      </Item>
    ))}
  </Scrollspy>
)

export default LandingMenu
