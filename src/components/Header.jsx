import { StyledHeader } from "./Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <section>
        <div>
          <img src="images/nasa-logo.png" alt="" />
        </div>
        <nav>
          <a href="/#">Home | </a>
          <a href="/#">APOD | </a>
          <a href="/#">Mars Rover | </a>
        </nav>
      </section>
    </StyledHeader>
  );
};
