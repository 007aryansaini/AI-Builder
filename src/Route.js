import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./modules/home";
import GeneratedPage from "./modules/generateai/generatedpage";
import Quickwswap from "./modules/quickswap";
import Omega from "./modules/omega";
import Template1 from "./modules/template1";

function Routess() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/generated-page" element={<GeneratedPage />} />
          <Route path="/generated-template-1" element={<Quickwswap />} />
          <Route path="/generated-template-2" element={<Omega />} />
          <Route path="/generated-template-3" element={<Template1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routess;
