import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Nav} from "./components/Nav";
import {Home} from "./views/Home";
import {About} from "./views/About";
import {NotFound} from "./views/NotFound";

// global variables that come from the environment variables that were
// passed into the docker container on start up.
export const apiBaseUrl = window.globals.API_BASE_URL || API_BASE_URL || "";
export const versionInfo = window.globals.VERSION || VERSION || "";
console.info("vite env metadata", import.meta.env);
console.info({apiBaseUrl});
console.info({versionInfo});

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
