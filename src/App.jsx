import { useDispatch, useSelector } from "react-redux";

function App() {
  const { teste } = useSelector((rootReducer) => rootReducer.teste);
  console.log(teste);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: "TESTE",
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
