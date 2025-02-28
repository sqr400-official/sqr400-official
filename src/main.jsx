import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ProductProvider } from "./contexts/ProductContext.jsx";
import { PostProvider } from "./contexts/PostContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

const isProduction = import.meta.env.PROD;
const basename = isProduction ? "/sqr400-official" : "/";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ProductProvider>
        <PostProvider>
          <BrowserRouter basename={basename}>
            <App />
          </BrowserRouter>
        </PostProvider>
      </ProductProvider>
    </AuthProvider>
  </StrictMode>
);
