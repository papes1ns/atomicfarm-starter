import React, {useState} from "react";
import {Header} from "../components/Header";
import {Table} from "./Table";

export const Measurements: React.FC = () => {
  const [isSiteClicked, setIsSiteClicked] = useState(true);
  const [isDepartmentClicked, setIsDepartmentClicked] = useState(true);
  const [isLocationClicked, setIsLocationClicked] = useState(true);
  const [templateDay, setTemplateDay] = useState("Sunday");
  return (
    <React.Fragment>
      <Header
        title="ADD OBSERVATIONS"
        subtitle="Observations captured will be added to time-series data."
      />
      <main>
        {/* <div className="mt-10 mx-auto max-w-screen-xl px-4 text-center font-bold text-2xl">
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
        <div className="mt-10 mx-auto max-w-screen-xl px-4 text-center font-bold text-2xl">
          Choose Template
        </div>
        <div className="mt-8 px-4 justify-center flex space-x-2">
          <div
            onClick={() => {
              setTemplateDay("Sunday");
            }}
            className={`text-center border-4 align-middle w-[10.5rem] h-24 flex flex-col items-center justify-center ${
              templateDay === "Sunday"
                ? "border-uf-green"
                : "border-uf-gray hover:border-uf-light-green"
            }`}
          >
            <h3 className="font-bold text-2xl">Sunday</h3>
          </div>
          <div
            onClick={() => {
              setTemplateDay("Monday");
            }}
            className={`text-center border-4 align-middle w-[10.5rem] h-24 flex flex-col items-center justify-center ${
              templateDay === "Monday"
                ? "border-uf-green"
                : "border-uf-gray hover:border-uf-light-green"
            }`}
          >
            <h3 className="font-bold text-2xl">Monday</h3>
          </div>
          <div
            onClick={() => {
              setTemplateDay("Tuesday");
            }}
            className={`text-center border-4 align-middle w-[10.5rem] h-24 flex flex-col items-center justify-center ${
              templateDay === "Tuesday"
                ? "border-uf-green"
                : "border-uf-gray hover:border-uf-light-green"
            }`}
          >
            <h3 className="font-bold text-2xl">Tuesday</h3>
          </div>
        </div> */}
        <div className={"justify-center items-center flex mt-10 mb-10"}>
          <div>
            <Table></Table>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};
