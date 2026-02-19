import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>  {/* ✅ Only one BrowserRouter here */}
      <App />
      {/* this is a test branch */}
    </BrowserRouter>
  </React.StrictMode>
);
