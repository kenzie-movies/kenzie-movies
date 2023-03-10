import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./providers/UserContext";
import { MoviesProvider } from "./providers/MoviesContext";
import { GlobalReset } from "./styles/reset";
import { TypographyStyle } from "./styles/typography";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalReset />
    <TypographyStyle />
    <BrowserRouter>
      <UserProvider>
        <MoviesProvider>
        <App />
      </MoviesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
