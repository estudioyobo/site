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
  margin-bottom: -4vw;
  @media (max-width: 800px) {
    margin-bottom: -8vw;
    width: 30%;
    height: 12px;
  }
`

const Title = styled.h1`
  display: block;
  color: ${({ color }) => color};
  transform-origin: bottom;
  opacity: 0;
  font-weight: 500;
  text-transform: lowercase;
  margin: ${({ small }) => (small ? '0.67em 0' : '0 0 0px 50px')};
  font-size: ${({ small }) => (small ? '2.7vw' : '4.7vw')};
  line-height: ${({ small }) => (small ? '2.2vw' : '4.2vw')};
  z-index: 1;

  @media (max-width: 800px) {
    font-size: 8.7vw;
    line-height: 8.2vw;
  }
`

const Wrapper = styled.div`
  margin-top: ${({ small }) => (small ? '0' : '20px')};
  padding: ${({ small }) => (small ? '4vw 0 0' : '8vw 0 0')};
  overflow: hidden;
  @media (max-width: 800px) {
    padding: 4vw 0 0;
  }
  &.animated {
    ${Divider} {
      animation: ${widthAnim} 0.6s ease-in-out 0s forwards;
    }
    ${Title} {
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

function SectionHeader ({ title, subtitle, color, dividerColor, small, styles = {} }) {
  const [ref] = useHookWithRefCallback()
  return (
    <Wrapper ref={ref} style={styles.container} small={small}>
      <Divider color={dividerColor} style={styles.divider} small={small} />
      <Title color={color} style={styles.title} small={small}>
        {title}
      </Title>
    </Wrapper>
  )
}

export default SectionHeader
