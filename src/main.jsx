import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import { MainStyles } from "./Main.styled.jsx";
import { Theme } from "./Theme.styled.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <MainStyles />
      <Provider store={store}>
        <App />
      </Provider>
    </Theme>
  </React.StrictMode>
);
