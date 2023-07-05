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
import { Modal } from "./Modal";

export const MarsRoverGallery = () => {
  const [modal, setModal] = React.useState(false);
  const [title, setTitle] = React.useState("Curiosity");
  const [explanation, setExplanation] = React.useState(
    "Front Hazard Avoidance Camera"
  );
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
          <img
            src={filesMarsRover[nextImg].img_src}
            alt="Imagem de marte"
            onClick={() => setModal(!modal)}
          />
          <StyledLeftArrow>
            <AiOutlineArrowLeft
              size={50}
              onClick={() => {
                if (nextImg === 0) {
                  setNextImg(filesMarsRover.length - 1);
                } else {
                  setNextImg(nextImg - 1);
                }
                setTitle(filesMarsRover[nextImg].rover.name);
                setExplanation(filesMarsRover[nextImg].camera.full_name);
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
                setTitle(filesMarsRover[nextImg].rover.name);
                setExplanation(filesMarsRover[nextImg].camera.full_name);
              }}
            />
          </StyledRightArrow>
        </StyledImgContainer>
      ) : (
        "Loading..."
      )}
      {filesMarsRover !== null ? (
        <Modal
          modal={modal}
          setModal={setModal}
          img_src={filesMarsRover[nextImg].img_src}
          title={title}
          explanation={explanation}
        />
      ) : (
        ""
      )}
      <StyledFadeEffectBot></StyledFadeEffectBot>
    </StyledContainer>
  );
};
