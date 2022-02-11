import React from "react";
import {Header} from "../components/Header";

export const Team: React.FC = () => {
  return (
    <React.Fragment>
      <Header title="Meet The Team" />
      <main>
        <div className="mx-auto max-w-screen-xl px-4 mt-12 mb-60">
          <div className="space-x-6 flex flex-row justify-center">
            <div className="bg-uf-pastel-green p-2 rounded-md w-1/2 shadow hover:animate-spin">
              <img
                className="h-70 w-auto rounded-md"
                src={"../../assets/portraits/Papes-Nathan.jpg"}
                alt="Workflow logo"
              />
              <div className="mt-1 font-bold text-2xl">Nathan Papes</div>
              <div className="font-medium">
                Software Consultant & Developer, Ann Arbor
              </div>
            </div>
            <div className="bg-uf-pastel-green p-2 rounded-md w-1/2 shadow hover:animate-bounce">
              <img
                className="h-70 w-auto rounded-md"
                src={"../../assets/portraits/Li-Michael.jpg"}
                alt="Workflow logo"
              />
              <div className="mt-1 font-bold text-2xl">Michael Li</div>
              <div className="font-medium">
                Software Consultant & Developer, Ann Arbor
              </div>
            </div>
          </div>
          <br />
          <div className="space-x-6 flex flex-row justify-center">
            <div className="bg-uf-pastel-green p-2 rounded-md w-1/2 shadow hover:animate-ping">
              <img
                className="h-70 w-auto rounded-md"
                src={"../../assets/portraits/Fitins-Justin.jpg"}
                alt="Workflow logo"
              />
              <div className="mt-1 font-bold text-2xl">Justin Fitins</div>
              <div className="font-medium">
                Software Consultant & Delivery Lead, Ann Arbor
              </div>
            </div>
            <div className="bg-uf-pastel-green p-2 rounded-md w-1/2 shadow hover:animate-pulse">
              <img
                className="h-70 w-auto rounded-md"
                src={"../../assets/portraits/Elkus-Bryan.jpg"}
                alt="Workflow logo"
              />
              <div className="mt-1 font-bold text-2xl">Bryan Elkus</div>
              <div className="font-medium">
                Software Consultant & Designer, Ann Arbor
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};
