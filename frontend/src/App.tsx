import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Nav} from "./components/Nav";

import {Home} from "./views/Home";
import {About} from "./views/About";
import {NotFound} from "./views/NotFound";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
