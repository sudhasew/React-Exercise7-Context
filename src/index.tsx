import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { OrderContextProvider } from "./context/OrderContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <OrderContextProvider>
      <App />
    </OrderContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
