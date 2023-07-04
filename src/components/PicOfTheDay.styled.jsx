import { styled } from "styled-components";

export const StyledContainer = styled.section`
  position: relative;
  width: 100%;
  height: 120vh;
  background-image: url("./images/space.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledFadeEffectTop = styled.div`
  background: linear-gradient(
    to top,
    rgb(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  content: "";
  position: absolute;
  z-index: 1;
  height: 200px;
  width: 100%;
  transform: rotateZ(180deg);
  top: 0;
`;

export const StyledText = styled.div`
  width: 60%;
  margin: 0 auto 40px auto;
  background-color: rgb(250, 250, 250, 0.8);
  max-width: 700px;
  min-width: 300px;
  max-height: 300px;
  padding: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.9);
  border-radius: 20px;

  h1 {
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.secundaryColor};
    font-size: 2rem;
    text-align: center;
  }

  span {
    color: black;
    font-size: 0.9rem;
    text-align: justify;
  }
`;

export const StyledSection = styled.div`
  width: 95%;
  margin: 0 auto;

  h3 {
    color: white;
    text-align: center;
  }
  @media (max-width: 1000px) {
    h3 {
      font-size: 0.7rem;
    }
  }
`;

export const StyledFadeEffectBot = styled.div`
  background: linear-gradient(
    to top,
    rgb(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  content: "";
  position: absolute;
  z-index: 1;
  height: 200px;
  width: 100%;
  transform: rotateZ(360deg);
  bottom: 0;
`;
