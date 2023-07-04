import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: black;
  padding: 30px 0;
  section {
    width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: white;
    padding: 0 20px;
    font-size: 1.3rem;
    &:hover {
      opacity: 0.5;
    }
  }
`;
