import React, {useState} from "react";
import {Header} from "../components/Header";

export const Measurements: React.FC = () => {
  const [isSiteClicked, setIsSiteClicked] = useState(true);
  const [isDepartmentClicked, setIsDepartmentClicked] = useState(true);
  const [isLocationClicked, setIsLocationClicked] = useState(true);
  return (
    <React.Fragment>
      <Header title="Manual Measurements" />
      <main>
        <div className="mt-10 mx-auto max-w-screen-xl px-4 text-center font-bold text-2xl">
          Choose Site
        </div>
        <div className="mt-8 px-4 justify-center flex space-x-2 font-bold text-2xl">
          <div
            onClick={() => {
              setIsSiteClicked(!isSiteClicked);
            }}
            className={`text-center border-4 align-middle w-64 h-24 flex items-center justify-center ${
              isSiteClicked
                ? "border-uf-green"
                : "border-uf-gray hover:border-uf-light-green"
            }`}
          >
            <h3>Farm A</h3>
          </div>
          <div
            onClick={() => {
              setIsSiteClicked(!isSiteClicked);
            }}
            className={`text-center border-4 align-middle w-64 h-24 flex items-center justify-center ${
              isSiteClicked
                ? "border-uf-gray hover:border-uf-light-green"
                : "border-uf-green"
            }`}
          >
            <h3>Farm B</h3>
          </div>
        </div>
        <div className="mt-10 mx-auto max-w-screen-xl px-4 text-center font-bold text-2xl">
          Choose Department
        </div>
        <div className="mt-8 px-4 justify-center flex space-x-2 font-bold text-2xl">
          <div
            onClick={() => {
              setIsDepartmentClicked(!isDepartmentClicked);
            }}
            className={`text-center border-4 align-middle w-64 h-24 flex items-center justify-center ${
              isDepartmentClicked
                ? "border-uf-green"
                : "border-uf-gray hover:border-uf-light-green"
            }`}
          >
            <h3>Aquaculture</h3>
          </div>
          <div
            onClick={() => {
              setIsDepartmentClicked(!isDepartmentClicked);
            }}
            className={`text-center border-4 align-middle w-64 h-24 flex items-center justify-center ${
              isDepartmentClicked
                ? "border-uf-gray hover:border-uf-light-green"
                : "border-uf-green"
            }`}
          >
            <h3>Horticulture</h3>
          </div>
        </div>
        <div className="mt-10 mx-auto max-w-screen-xl px-4 text-center font-bold text-2xl">
          Choose Location
        </div>
        <div className="mt-8 px-4 justify-center flex space-x-2">
          <div
            onClick={() => {
              setIsLocationClicked(!isLocationClicked);
            }}
            className={`text-center border-4 align-middle w-64 h-24 flex flex-col items-center justify-center ${
              isLocationClicked
                ? "border-uf-green"
                : "border-uf-gray hover:border-uf-light-green"
            }`}
          >
            <h3 className="font-bold text-2xl">GO1</h3>
            <span className="font-medium text-base">Grow Out System #1</span>
          </div>
          <div
            onClick={() => {
              setIsLocationClicked(!isLocationClicked);
            }}
            className={`text-center border-4 align-middle w-64 h-24 flex flex-col items-center justify-center ${
              isLocationClicked
                ? "border-uf-gray hover:border-uf-light-green"
                : "border-uf-green"
            }`}
          >
            <h3 className="font-bold text-2xl">GO2</h3>
            <span className="font-medium text-base">Grow Out System #2</span>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};
