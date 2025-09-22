import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./Components/Context/AuthContext.jsx";
import { Toaster } from "react-hot-toast";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <App />
        <Toaster position="top-right"  />
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);