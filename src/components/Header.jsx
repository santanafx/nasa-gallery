import { Link } from "react-scroll";
import { StyledHeader } from "./Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <section>
        <div>
          <img src="images/nasa-logo.png" alt="" />
        </div>
        <nav>
          <Link to="" smooth={true} duration={1000}>
            Home |
          </Link>
          <Link to="picOfTheDay" smooth={true} duration={1000}>
            APOD |
          </Link>
          <Link to="" smooth={true} duration={1000}>
            Mars Rover |
          </Link>
        </nav>
      </section>
    </StyledHeader>
  );
};
