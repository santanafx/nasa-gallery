import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useApiRequests } from "../hooks/useApiRequests";
import {
  Intro,
  TextIntro,
  Title,
  YoutubeContainer,
  YoutubeVideo,
} from "./Home.styled";

function Home() {
  const { files } = useSelector((rootReducer) => rootReducer.data);
  console.log(files);

  const dispatch = useDispatch();
  const { getRequest } = useApiRequests();

  React.useEffect(() => {
    getRequest().then((dataFromRequest) => {
      dispatch({
        type: "STORE_DATA",
        payload: dataFromRequest,
      });
    });
  }, []);

  return (
    <main>
      <YoutubeContainer>
        <YoutubeVideo
          width="100%"
          height=""
          src="https://www.youtube.com/embed/WeA7edXsU40?autoplay=1&mute=1&enablejsapi=1&loop=1&playlist=WeA7edXsU40&vq=hd1080"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></YoutubeVideo>
        <Intro></Intro>
        <TextIntro>
          <Title>Bem vindo a galeria da Nasa!</Title>
          <span>Aqui você pode se conectar com as APIs da Nasa.</span>
          <span>Aproveite as imagens e funcionalidades.</span>
        </TextIntro>
      </YoutubeContainer>
      {files !== null ? (
        <>
          {files.map((element) => (
            <div key={JSON.stringify(element)}>
              <img src={element.url} alt="" />
            </div>
          ))}
        </>
      ) : (
        "Loading..."
      )}
    </main>
  );
}

export default Home;
