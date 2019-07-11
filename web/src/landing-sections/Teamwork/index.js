import React, { Component } from 'react'
import styled from 'styled-components'
import ScrollMagic from 'scrollmagic'
import SectionHeader from '../../components/SectionHeader/index'
import Person, { Person1, Person2, Person3 } from './Person'
import Degree from './Degree'

import jesusIMG from './jesus.png'
import alexIMG from './alex.png'
import antoniIMG from './antoni.png'

const Us = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: auto 50px auto;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  @media (max-width: 800px) {
    margin-top: -70px;
  }
`

const Description = styled.div`
  background: var(--color-black);
  color: var(--color-white);
  grid-column: 9 / 15;
  grid-row: 3 / 4;
  display: none;
  grid-template-columns: repeat(6, 1fr);
  padding: 2rem;
  & > p {
    grid-column: 3 / 6;
    text-align: right;
    @media (max-width: 800px) {
      grid-column: 2 / 6;
      font-size: 0.8rem;
    }
  }
  &.active {
    display: grid;
  }
  @media (max-width: 800px) {
    grid-column: 1 / 15;
    grid-row: 3 / 4;
    padding: 0;
  }
`

const People = styled.div`
  grid-column: 1 / 9;
  grid-row: 2 / 4;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  @media (max-width: 800px) {
    grid-column: 2 / 14;
    grid-row: 1 / 2;
  }
`

const PersonTitle = styled.h3`
  grid-column: 9 / 15;
  grid-row: 2 / 3;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  display: none;
  font-size: 2em;
  margin: 0;

  &.active {
    display: block;
  }
  @media (max-width: 800px) {
    grid-column: 1 / 15;
    grid-row: 2 / 3;
  }
`

const Order = styled.div`
  font-size: 15em;
  text-align: right;
  font-weight: 800;
  color: var(--color-accent);
  grid-column: 12 / 15;
  grid-row: 1 / 2;
  display: none;
  &.active {
    display: block;
  }
  @media (max-width: 800px) {
    grid-column: 11 / 15;
    grid-row: 1 / 2;
    font-size: 100px;
  }
`

const Magic = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 50px;
  height: 100vh;
`

class TeamWork extends Component {
  componentDidMount () {
    this.controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave'
      }
    })

    // Team scenes
    new ScrollMagic.Scene({
      duration: 1200,
      triggerElement: '#team'
    })
      .setPin('#team')
      .addTo(this.controller)

    new ScrollMagic.Scene({
      triggerElement: '#team',
      duration: 400
    })
      .setClassToggle('.p1', 'active')
      .addTo(this.controller)

    new ScrollMagic.Scene({
      triggerElement: '#team',
      duration: 400,
      offset: 400
    })
      .setClassToggle('.p2', 'active')
      .addTo(this.controller)
    new ScrollMagic.Scene({
      triggerElement: '#team',
      duration: 400,
      offset: 800
    })
      .setClassToggle('.p3', 'active')
      .addTo(this.controller)
  }

  render () {
    return (
      <Magic id='team'>
        <SectionHeader title='Equipo' dividerColor='#56EF98' />
        <Us>
          <People>
            <Person
              className='p1'
              Wrapper={Person1}
              image={jesusIMG}
              name='Jesús'
              surname='Gallego'
            />
            <Person
              className='p2'
              Wrapper={Person2}
              image={antoniIMG}
              name='Antoni'
              surname='Boix'
            />
            <Person
              className='p3'
              Wrapper={Person3}
              image={alexIMG}
              name='Alejandro'
              surname='Almira'
            />
          </People>
          <Order className='p1'>01</Order>
          <PersonTitle className='p1'>Ingeniero Informático</PersonTitle>
          <Description className='p1'>
            <Degree title='Grado en Ingeniería Informática' university='Universidad de Alicante' />
            <Degree
              title='Máster en Desarrollo de Software para Dispositivos Móviles'
              university='Universidad de Alicante'
            />
            <p>
              Especializado en Software, con interés en el desarrollo Móvil y Web, que cuenta con
              experiencia en tecnologías emergentes como React y GraphQL.
            </p>
          </Description>
          <Order className='p2'>02</Order>
          <PersonTitle className='p2'>Diseñador gráfico</PersonTitle>
          <Description className='p2'>
            <Degree
              title='Grado en Diseño Gráfico'
              university='Escuela de Arte y Superior de Diseño de Alicante'
            />
            <p>
              Creativo de naturaleza, especializado en branding e ilustraciones vectoriales. Capaz
              de encontrar el alma de la idea y explotarla al máximo.
            </p>
          </Description>
          <Order className='p3'>03</Order>
          <PersonTitle className='p3'>Ingeniero Informático</PersonTitle>
          <Description className='p3'>
            <Degree title='Grado en Ingeniería Informática' university='Universidad de Alicante' />
            <Degree title='Máster en Automática y Robótica' university='Universidad de Alicante' />
            <p>
              Devorador de conocimiento. Especializado en automática y robótica, apasionado por el
              software libre, la automatización de tareas y todo lo que sea mejorar el mundo
              tecnológicamente.
            </p>
          </Description>
        </Us>
      </Magic>
    )
  }
}

export default TeamWork
