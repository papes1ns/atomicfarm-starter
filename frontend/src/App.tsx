import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Nav} from "./components/Nav";
import {Home} from "./views/Home";
import {About} from "./views/About";
import {NotFound} from "./views/NotFound";

console.log("vite env metadata", import.meta.env);

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
