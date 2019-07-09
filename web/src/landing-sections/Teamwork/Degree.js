import React from "react";
import styled from "styled-components";

const DegreeWrapper = styled.div`
  grid-column: 2 / 6;
  margin: 2rem 0;
  @media (max-width: 800px) {
    margin: 0.8rem 0;
  }
`;
const DegreeUniversity = styled.div`
  color: #56ef98;
  text-transform: uppercase;
`;
const DegreeTitle = styled.div`
  font-family: "Crimson Text";
`;

const Degree = ({ title, university }) => (
  <DegreeWrapper>
    <DegreeTitle>{title}</DegreeTitle>
    <DegreeUniversity>{university}</DegreeUniversity>
  </DegreeWrapper>
);

export default Degree;
