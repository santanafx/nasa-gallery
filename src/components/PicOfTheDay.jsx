import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useApiRequests } from "../hooks/useApiRequests";
import {
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

export const PicOfTheDay = () => {
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
    <StyledContainer>
      <StyledFadeEffectTop id={"picOfTheDay"}></StyledFadeEffectTop>
      <StyledText>
        <h1>APOD</h1>
        <span>
          {" "}
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
          {files !== null ? (
            <>
              {files.map((element) => (
                <SwiperSlide key={JSON.stringify(element)}>
                  <img src={element.url} alt="" />
                  <h3>{element.title}</h3>
                </SwiperSlide>
              ))}
            </>
          ) : (
            "Loading..."
          )}
        </Swiper>
      </StyledSection>
      <StyledFadeEffectBot></StyledFadeEffectBot>
    </StyledContainer>
  );
};
