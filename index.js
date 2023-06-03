import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from '../src/components/Redux/store';
import "./index.css";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);
