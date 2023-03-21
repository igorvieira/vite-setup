import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import ResetStyles from "./styles/reset";
import theme from "./styles/theme";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
