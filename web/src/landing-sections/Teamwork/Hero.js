import styled from "styled-components";

const TeamworkHero = styled.div`
  height: 100vh;
  color: #56ef98;
  padding: 10rem;
  text-align: center;
  position: relative;
  margin-bottom: 50px;

  @media (max-width: 800px) {
    padding: 10rem 0;
  }
  & ::before {
    content: "";
    background-size: cover;
    background-image: url("/images/teamwork-us.jpg");
    filter: grayscale(100%);
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  & h1 {
    font-size: 6rem;
    @media (max-width: 800px) {
      font-size: 18vw;
    }
  }
`;

export default TeamworkHero;
