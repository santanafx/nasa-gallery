import { StyledBg } from "./Modal.styled";

export const Modal = ({
  url,
  title,
  media_type,
  modal,
  setModal,
  explanation,
}) => {
  return (
    <>
      {modal === true ? (
        <StyledBg>
          <div>
            {media_type === "image" ? (
              <>
                <img src={url} alt="Imagem APOD." />
                <h1>{title}</h1>
                <p>{explanation}</p>
                <button onClick={() => setModal(!modal)}>Fechar</button>
              </>
            ) : (
              <>
                <iframe
                  width="100%"
                  height="300px"
                  src={url}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <h1>{title}</h1>
                <p>{explanation}</p>
                <button onClick={() => setModal(!modal)}>Fechar</button>
              </>
            )}
          </div>
        </StyledBg>
      ) : (
        ""
      )}
    </>
  );
};
