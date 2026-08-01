import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ContactModalProvider } from "./context/ContactModalContext";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContactModalProvider>
        <App />
      </ContactModalProvider>
    </BrowserRouter>
  </StrictMode>
);