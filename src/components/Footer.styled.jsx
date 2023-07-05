import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  height: 300px;
  background-color: black;
  color: white;
  width: 100%;
  section {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    background-color: black;
  }

  svg {
    transition: 0.3s;
    cursor: pointer;
    font-size: 4rem;
    margin: 5px 10px;
    color: white;
    &:hover {
      opacity: 0.5;
    }
  }

  @media (max-width: 1000px) {
    section {
      flex-direction: column;
    }
    svg {
      font-size: 2rem;
    }
  }
`;
