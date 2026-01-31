import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
rootElement.classList.add("overflow-x-hidden");
rootElement.classList.add("bg-white");
rootElement.classList.add("dark:bg-black");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
