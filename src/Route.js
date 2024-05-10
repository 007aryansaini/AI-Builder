import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./modules/home";
import GeneratedPage from "./modules/generateai/generatedpage";
import Quickwswap from "./modules/quickswap";
import Omega from "./modules/omega";
import Template1 from "./modules/template1";
import Template3 from "./modules/template2";
import PrivateRoutes from "./utils/PrivateRoutes";
import Template4 from "./modules/template3";
import Cryzpto from "./modules/cryzpto";
import Desktop from "./modules/amplichat/Desktop";
import Template7 from "./modules/templat7";
import Demo1 from "./modules/demo1";



function Routess() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/demo-1" element={<Demo1 />} />
          <Route path="/generated-page" element={<Template1 />} />
          <Route element={<PrivateRoutes />}>
            {/* <Route path="/generated-page" element={<GeneratedPage />} /> */}
            <Route path="/generated-template-6" element={<Desktop />} />
            <Route path="/generated-template-7" element={<Template7 />} />
            <Route path="/generated-template-4" element={<Template4 />} />
            <Route path="/generated-template-5" element={<Cryzpto />} />

            <Route
              path="/generated-template-1"
              element={< Template1 />}
            />
            <Route path="/generated-template-2" element={<Omega />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Routess;
