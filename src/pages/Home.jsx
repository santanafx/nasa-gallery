import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useApiRequests } from "../hooks/useApiRequests";

function Home() {
  const { teste } = useSelector((rootReducer) => rootReducer.teste);
  console.log(teste);

  const dispatch = useDispatch();
  const { getRequest } = useApiRequests();
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    getRequest().then((dataFromRequest) => {
      setData(dataFromRequest);
    });
  }, []);

  const handleClick = () => {
    dispatch({
      type: "TESTE",
    });
  };

  return (
    <div>
      {data !== null ? console.log(data) : console.log("")}
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default Home;
