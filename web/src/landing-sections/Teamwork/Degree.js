import React from 'react'
import styled from 'styled-components'

const DegreeWrapper = styled.div`
  grid-column: 2 / 6;
  margin: 2rem 0;
  @media (max-width: 800px) {
    margin: 0.8rem 0;
  }
`
const DegreeUniversity = styled.div`
  color: var(--color-accent);
  font-family: 'Crimson Text';
  font-size: 1.4em;
  min-height: 1.4em;
`
const DegreeTitle = styled.div`
  font-size: 1.2em;
  min-height: 1.2em;
`

const Degree = ({ title, university }) => (
  <DegreeWrapper>
    <DegreeTitle>{title}</DegreeTitle>
    <DegreeUniversity>{university}</DegreeUniversity>
  </DegreeWrapper>
)

export default Degree
