import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useApiRequests } from "../hooks/useApiRequests";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {
  StyledContainer,
  StyledImgContainer,
  StyledLeftArrow,
  StyledRightArrow,
} from "./MarsRoverGallery.styled";
import {
  StyledFadeEffectBot,
  StyledFadeEffectTop,
  StyledText,
} from "./PicOfTheDay.styled";

export const MarsRoverGallery = () => {
  const { filesMarsRover } = useSelector((rootReducer) => rootReducer.data);
  const [nextImg, setNextImg] = React.useState(0);

  const dispatch = useDispatch();
  const { getRequestMars } = useApiRequests();

  React.useEffect(() => {
    getRequestMars().then((dataFromRequest) => {
      dispatch({
        type: "STORE_DATA_MARSROVER",
        payload: dataFromRequest.photos,
      });
    });
  }, []);
  return (
    <StyledContainer>
      <StyledFadeEffectTop id={"mars"}></StyledFadeEffectTop>
      <StyledText>
        <h1>Mars Rover</h1>
        <span>
          Imagens coletadas pelos rovers Curiosity, Opportunity e Spirit da NASA
          em Marte.
        </span>
      </StyledText>
      {filesMarsRover !== null ? (
        <StyledImgContainer>
          <img src={filesMarsRover[nextImg].img_src} alt="" />
          <StyledLeftArrow>
            <AiOutlineArrowLeft
              size={50}
              onClick={() => {
                if (nextImg === 0) {
                  setNextImg(filesMarsRover.length - 1);
                } else {
                  setNextImg(nextImg - 1);
                }
              }}
            />
          </StyledLeftArrow>
          <StyledRightArrow>
            <AiOutlineArrowRight
              size={50}
              onClick={() => {
                if (nextImg === filesMarsRover.length - 1) {
                  setNextImg(0);
                } else {
                  setNextImg(nextImg + 1);
                }
              }}
            />
          </StyledRightArrow>
        </StyledImgContainer>
      ) : (
        "Loading..."
      )}
      <StyledFadeEffectBot></StyledFadeEffectBot>
    </StyledContainer>
  );
};
