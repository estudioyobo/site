import React from "react";
import styled from "styled-components";

const Body = styled.span`
  position: relative;
  transform: translate3d(-0.5em, 0, 0);
  transition: transform 0.5s, color 0.5s;
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  &::before {
    content: "";
    position: absolute;
    top: calc(100% + 0.1em);
    left: 2em;
    width: 100%;
    height: 4px;
    opacity: 0.8;
    transform: scale3d(0, 1, 1);
    transform-origin: 100% 50%;
    transition: transform 0.5s;
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    background: ${({ highlightColor }) => highlightColor};
  }
`;

const Link = styled.a`
  color: ${({ color }) => color};
  text-decoration: none;
  &:hover {
    ${Body} {
      transform: translate3d(0, 0, 0);
      &::before {
        transform: scale3d(1, 1, 1);
        transform-origin: 0% 50%;
        transition-timing-function: ease;
      }
    }
  }
`;

const AnimatedLink = ({
  children,
  href,
  className,
  color = "#f3f4f0",
  highlightColor = "#f3f4f0"
}) => (
  <Link href={href} className={className} color={color}>
    <Body highlightColor={highlightColor}>{children}</Body>
  </Link>
);

export default AnimatedLink;
