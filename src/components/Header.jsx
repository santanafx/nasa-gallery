import { StyledHeader } from "./Header.styled";

export const Header = () => {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <StyledHeader>
      <section>
        <div>
          <img src="images/nasa-logo.png" alt="" />
        </div>
        <nav>
          <a href="/#">Home | </a>
          <a href="/#" onClick={() => handleClickScroll("apod")}>
            APOD |
          </a>
          <a href="/#" onClick={() => handleClickScroll("marsRover")}>
            Mars Rover |
          </a>
        </nav>
      </section>
    </StyledHeader>
  );
};
