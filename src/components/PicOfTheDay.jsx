import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useApiRequests } from "../hooks/useApiRequests";

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
    <section>
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
    </section>
  );
};
