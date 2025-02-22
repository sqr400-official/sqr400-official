import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const isProduction = import.meta.env.PROD;
const basename = isProduction ? "/sqr400-official" : "/";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
    <App />
    </BrowserRouter>
  </StrictMode>
);
