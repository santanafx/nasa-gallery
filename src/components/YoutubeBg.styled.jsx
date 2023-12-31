import styled from "styled-components";

export const YoutubeContainer = styled.div`
  position: relative;
  height: 100vh;

  iframe {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    z-index: 1;
  }
`;

export const DarkBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  z-index: 2;
  background-color: rgb(0, 0, 0, 0.2);
`;

export const TextIntro = styled.div`
  position: absolute;
  top: 180px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  background-color: rgb(250, 250, 250, 0.8);
  max-width: 700px;
  min-width: 300px;
  max-height: 300px;
  padding: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.9);
  border-radius: 20px;

  h1 {
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.primaryColor};
    font-size: 2rem;
    text-align: center;
  }

  span {
    color: black;
    font-size: 0.9rem;
    text-align: justify;
  }
`;
