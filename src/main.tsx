import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./icons/bootstrap.min.css";
import "./icons/bootstrap-icons.css";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
