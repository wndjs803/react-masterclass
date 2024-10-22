import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";

const dartThem = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightThem = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={dartThem}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
