import { styled } from "styled-components";

export const StyledBg = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 1000;
  div {
    position: absolute;
    width: 80%;
    height: 70%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    box-shadow: 0px 4px 20px rgba(250, 250, 250, 0.9);
    z-index: 1001;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  img {
    width: 100%;
    object-fit: cover;
    height: 70%;
  }

  h1 {
    padding: 10px;
  }

  p {
    padding: 10px;
    text-align: justify;
    font-size: 0.8rem;
  }

  iframe {
    user-select: none;
    width: 100%;
    object-fit: cover;
    height: 70%;
  }
  button {
    padding: 5px 15px;
    border-radius: 10px;
    border: none;
    margin: 10px 0;
    color: white;
    background-color: black;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;
