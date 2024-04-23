import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./modules/home";
import GeneratedPage from "./modules/generateai/generatedpage";
import Quickwswap from "./modules/quickswap";
import Omega from "./modules/omega";

function Routess() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/generated-page" element={<GeneratedPage />} />
          <Route path="/generated-template-1" element={<Quickwswap />} />
          <Route path="/generated-template-2" element={<Omega />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routess;
