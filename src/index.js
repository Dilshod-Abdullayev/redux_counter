import { StrictMode } from "react";
import ReactDOM from "react-dom";
import store from "./state/store";
import { Provider } from "react-redux";
import App from "./App";
import './index.css'
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
