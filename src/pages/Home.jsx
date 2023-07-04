import { PicOfTheDay } from "../components/PicOfTheDay";
import { DarkBg, TextIntro, YoutubeContainer } from "./Home.styled";

function Home() {
  return (
    <main>
      <YoutubeContainer>
        <iframe
          width="100%"
          height=""
          src="https://www.youtube.com/embed/WeA7edXsU40?autoplay=1&mute=1&enablejsapi=1&loop=1&playlist=WeA7edXsU40&vq=hd1080"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <DarkBg></DarkBg>
        <TextIntro>
          <h1>Bem vindo a galeria da Nasa!</h1>
          <span>Aqui você pode se conectar com as APIs da Nasa.</span>
          <span>Aproveite as imagens e funcionalidades.</span>
        </TextIntro>
      </YoutubeContainer>
      <PicOfTheDay />
    </main>
  );
}

export default Home;
