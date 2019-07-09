import React from "react";
import styled, { keyframes } from "styled-components";

const move = keyframes`
from {transform: translateX(0); opacity: 1}
to {transform: translate(90px); opacity: 1}
`;

const Wrapper = styled.div`
  width: 90px;
  transform: rotate(-90deg);
  position: fixed;
  bottom: 40px;
  right: -20px;
  color: black;
  z-index: 800;
  cursor: pointer;
  & :hover {
    div {
      animation: ${move} 1s ease-in-out forwards;
    }
  }
  & hr {
    height: 2px;
    background: black;
  }
`;

function scrollTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

const Top = () => (
  <Wrapper onClick={scrollTop}>
    <div>top</div>
    <hr />
  </Wrapper>
);

export default Top;
