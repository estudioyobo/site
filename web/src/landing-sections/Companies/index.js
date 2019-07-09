import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Company from "./company";

import "slick-carousel/slick/slick.css";

const SectionWrapper = styled.section`
  background: #333;
  color: #56ef98;
  padding: 50px 100px;
  text-align: center;
  @media (max-width: 800px) {
    padding: 50px;
  }
`;

const Companies = ({ companies }) => (
  <SectionWrapper id="companies">
    <h1>Hemos trabajado para...</h1>
    <Slider
      dots={false}
      infinite
      autoplay
      autoplaySpeed={2300}
      centerMode
      slidesToShow={3}
      arrows={false}
    >
      {companies.map(company => (
        <Company key={company.name} {...company} />
      ))}
    </Slider>
  </SectionWrapper>
);

export default Companies;
