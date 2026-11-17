import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Login from "./pages/Login";

import "./styles/index.css";
// import Registrasi from "./pages/Registrasi";
// import Home from "./pages/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Login />
    {/* <Registrasi /> */}
    {/* <Home /> */}
  </StrictMode>,
);
