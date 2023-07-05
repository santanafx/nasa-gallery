import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useApiRequests } from "../hooks/useApiRequests";
import {
  StyledButton,
  StyledContainer,
  StyledFadeEffectBot,
  StyledFadeEffectTop,
  StyledSection,
  StyledText,
} from "./PicOfTheDay.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./PicOfTheDay.css";
import { Modal } from "./Modal";

export const PicOfTheDay = () => {
  const [modal, setModal] = React.useState(false);
  const [url, setUrl] = React.useState(null);
  const [title, setTitle] = React.useState(null);
  const [media, setMedia] = React.useState(null);
  const [explanation, setExplanation] = React.useState(null);
  const { filesApod } = useSelector((rootReducer) => rootReducer.data);
  // console.log(filesApod);

  const dispatch = useDispatch();
  const { getRequestApod } = useApiRequests();

  React.useEffect(() => {
    getRequestApod().then((dataFromRequest) => {
      dispatch({
        type: "STORE_DATA_APOD",
        payload: dataFromRequest,
      });
    });
  }, []);

  const handleModal = (url, title, media_type, explanation) => {
    setModal(!modal);
    setUrl(url);
    setTitle(title);
    setMedia(media_type);
    setExplanation(explanation);
  };

  return (
    <StyledContainer>
      <StyledFadeEffectTop id={"picOfTheDay"}></StyledFadeEffectTop>
      <StyledText>
        <h1>APOD</h1>
        <span>
          Um dos websites mais populares na NASA é o Astronomy Picture of the
          Day (APOD). Na verdade, este website é um dos mais populares entre
          todas as agências federais.
        </span>
      </StyledText>

      <StyledSection>
        <Swiper
          effect={"coverflow"}
          modules={[EffectCoverflow, Pagination]}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          className="mySwiper"
        >
          {filesApod !== null ? (
            <>
              {filesApod.map((element) => (
                <SwiperSlide key={JSON.stringify(element)}>
                  {element.media_type === "image" ? (
                    <>
                      <img src={element.url} alt="Imagens do APOD." />
                      <h3>{element.title}</h3>
                      <StyledButton>
                        <button
                          onClick={() =>
                            handleModal(
                              element.url,
                              element.title,
                              element.media_type,
                              element.explanation
                            )
                          }
                        >
                          Abrir
                        </button>
                      </StyledButton>
                    </>
                  ) : (
                    <>
                      <iframe
                        width="100%"
                        height="300px"
                        src={element.url}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                      <h3>{element.title}</h3>
                      <StyledButton>
                        <button
                          onClick={() =>
                            handleModal(
                              element.url,
                              element.title,
                              element.media_type,
                              element.explanation
                            )
                          }
                        >
                          Abrir
                        </button>
                      </StyledButton>
                    </>
                  )}
                </SwiperSlide>
              ))}
            </>
          ) : (
            "Loading..."
          )}
        </Swiper>
      </StyledSection>
      <Modal
        modal={modal}
        setModal={setModal}
        url={url}
        title={title}
        media_type={media}
        explanation={explanation}
      />
      <StyledFadeEffectBot></StyledFadeEffectBot>
    </StyledContainer>
  );
};
