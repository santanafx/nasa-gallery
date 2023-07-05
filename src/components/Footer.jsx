import { StyledFooter } from "./Footer.styled";
import { BsDiscord, BsGithub, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <StyledFooter>
      <section>
        <div>
          <img
            src="./images/nasa-footer-logo.png"
            alt="Imagem do logo da nasa."
          />
        </div>
        <Link to="https://wa.me/5531997915854">
          <BsWhatsapp />
        </Link>
        <Link to="https://github.com/santanafx">
          <BsGithub />
        </Link>
        <Link to="https://discordapp.com/users/254746660549296128">
          <BsDiscord />
        </Link>
        <Link to="https://www.linkedin.com/in/lucas-santana-figueiredo-907436115/">
          <BsLinkedin />
        </Link>
      </section>
      <section>
        <small className="contactAutor">
          &copy; Copyright 2023, Lucas Santana Figueiredo
        </small>
      </section>
    </StyledFooter>
  );
};
