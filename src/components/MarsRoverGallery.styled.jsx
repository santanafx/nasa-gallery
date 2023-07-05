import { styled } from "styled-components";

export const StyledContainer = styled.section`
  position: relative;
  width: 100%;
  height: 120vh;
  background-image: url("./images/rover.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledImgContainer = styled.div`
  width: 400px;
  height: 400px;
  box-shadow: 0px 4px 20px rgba(250, 250, 250, 0.9);

  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    &:hover {
      cursor: zoom-in;
    }
  }
  @media (max-width: 1400px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 700px) {
    width: 200px;
    height: 200px;
  }
`;

export const StyledLeftArrow = styled.div`
  position: absolute;
  top: 55%;
  left: 5%;
  color: white;
  z-index: 2000;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }

  @media (max-width: 1000px) {
    left: 0%;
  }
`;
export const StyledRightArrow = styled.div`
  position: absolute;
  top: 55%;
  right: 5%;
  color: white;
  z-index: 2000;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 1000px) {
    right: 0%;
  }
`;
