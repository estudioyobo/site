import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 5em;
  @media (max-width: 800px) {
    margin-top: 2em;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: repeat(6, auto) minmax(0, 1fr);
`

export const Title = styled.h4`
  grid-row: 2;
  font-family: 'Crimson Text';
  font-weight: 400;
  font-style: italic;
  font-size: 3vw;
  line-height: 3vw;
  margin: 0;
  grid-column: ${({ right }) => (right ? '10 / 13' : '3 / 6')};
  color: ${({ color }) => color};
  @media (max-width: 800px) {
    grid-column: ${({ right }) => (right ? '2 / 8' : '5 / 11')};
    line-height: 6vw;
    font-size: 6vw;
  }
`

export const Description = styled.div`
  grid-row: 3;
  grid-column: ${({ right }) => (right ? '10 / 13' : '3 / 6')};
  margin-top: 10px;
  font-size: 1.3em;

  @media (max-width: 800px) {
    grid-column: ${({ right }) => (right ? '2 / 11' : '5 / 14')};
    grid-row: 3 / 5;
  }
`

export const Services = styled.ul`
  grid-row: 3 / 6;
  grid-column: ${({ right }) => (right ? '1 / 9' : '7 / 15')};
  background: var(--color-black);
  color: var(--color-white);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 80px 80px 40px;
  margin: 0;

  @media (max-width: 800px) {
    grid-column: 1 / 15;
    grid-row: 7;
    padding: 40px 40px 0;
    grid-template-columns: 1fr;
  }
`

export const ServiceItem = styled.li`
  margin: 0 40px 40px 0;
  font-weight: bold;
  font-size: 1.6em;

  & > ul {
    font-size: 0.65em;
    font-weight: 400;
    color: var(--color-white);
    list-style: none;
    margin: 10px 0;
  }
`

export const Image = styled.img`
  width: 100%;
  grid-row: 5 / 8;
  grid-column: 1 / 7;
  align-self: end;
  @media (max-width: 800px) {
    grid-row: 5 / 7;
    grid-column: 1 / 12;
  }
`
export const Picture = styled.picture`
  grid-row: 5 / 8;
  grid-column: 7 / 15;
  align-self: end;
  @media (max-width: 800px) {
    grid-row: 5 / 7;
  }
`
export const Space = styled.div`
  height: ${({ height }) => height}px;
  grid-row: ${({ rowStart, rowEnd }) => `${rowStart} / ${rowEnd}`};
`

export const Fill = styled.div`
  grid-row: ${({ right }) => (right ? '7 / 8' : '6 / 7')};
  grid-column: ${({ right }) => (right ? '6 / 10' : '2 / 7')};
  background: var(--color-grey);
  height: 200px;

  @media (max-width: 800px) {
    grid-row: ${({ right }) => (right ? '6 / 7' : '5 / 6')};
    grid-column: ${({ right }) => (right ? '6 / 13' : '1 / 8')};
    height: 70px;
  }
`
