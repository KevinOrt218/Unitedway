import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./Components/Navbar/NavBar";
import Main from "./Components/Main/Main";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavBar />
    <Main />
  </StrictMode>
);
