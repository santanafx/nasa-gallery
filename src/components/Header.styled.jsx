import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background-color: black;
  padding: 30px 0;
`;

export const SectionContainer = styled.section`
  width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavOpts = styled.a`
  text-decoration: none;
  color: white;
  padding: 0 20px;
  font-size: 1.3rem;
  &:hover {
    opacity: 0.5;
  }
`;
