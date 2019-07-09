import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import ScrollMagic from 'scrollmagic'

const widthAnim = keyframes`
	0% {
    opacity: 0.1;
    transform: scaleX(0);
  }
  100% {
    opacity: 1;
    transform: scaleX(1);
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0.1;
    transform: translateY(4.2vw);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const Divider = styled.div`
  width: 15%;
  height: 18px;
  background: ${({ color }) => color || '#333'};
  opacity: 0;
  display: block;
  transform-origin: left;
  margin-right: 10px;
  margin-bottom: -60px;
`

const Title = styled.h1`
  display: block;
  color: ${({ color }) => color};
  transform-origin: bottom;
  opacity: 0;
  font-weight: 500;
  text-transform: lowercase;
  margin: 0 0 0px 50px;
  font-size: 4.7vw;
  line-height: 4.2vw;
  z-index: 1;

  @media (max-width: 800px) {
    font-size: 8.7vw;
    line-height: 8.2vw;
  }
`
const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  display: inline-block;

  transform-origin: bottom;
  opacity: 0;
  text-transform: uppercase;
  @media (max-width: 500px) {
    font-size: 16px;
  }
`

const Wrapper = styled.div`
  margin-top: 20px;
  padding: 40px 0 0;
  overflow: hidden;
  &.animated {
    ${Divider} {
      animation: ${widthAnim} 0.6s ease-in-out 0s forwards;
    }
    ${Title} {
      animation: ${fadeIn} 0.5s ease-in 0.6s forwards;
    }
    ${Subtitle} {
      animation: ${fadeIn} 0.5s ease-in 0.6s forwards;
    }
  }
`

function useHookWithRefCallback () {
  const [node, setRef] = useState(null)
  useEffect(() => {
    if (node) {
      const controller = new ScrollMagic.Controller()
      new ScrollMagic.Scene({
        triggerElement: node,
        triggerHook: 'onEnter'
      })
        .setClassToggle(node, 'animated')
        .addTo(controller)
    }
  }, [node])

  return [setRef]
}

function SectionHeader ({ title, subtitle, color, dividerColor }) {
  const [ref] = useHookWithRefCallback()
  return (
    <Wrapper ref={ref}>
      <Divider color={dividerColor} />
      <Title color={color}>{title}</Title>
    </Wrapper>
  )
}

export default SectionHeader
