import React from "react";
import {Header} from "../components/Header";

export const About: React.FC = () => {
  return (
    <React.Fragment>
      <Header title="About" />
      <main>
        <div className="max-w-7xl mx-auto mb-60 py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left flex flex-col items-center justify-center">
                <div className="animate-bounce">
                  <img
                    className="h-auto w-auto"
                    src={"../../assets/logo/Upward-Farms-Logo.png"}
                    alt="Workflow logo"
                  />
                </div>
                <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-uf-black sm:text-5xl sm:leading-none md:text-6xl">
                  About{" "}
                  <a
                    target="_blank"
                    className="text-uf-dark-green underline hover:font-black hover:text-uf-light-green"
                    href="https://eatupwardfarms.com"
                  >
                    Upward Farms
                  </a>
                </h2>
                <p className="mt-3 text-base text-uf-gray sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Upward Farms grows leafy greens and fish with the highest
                  ecological and quality standards so that everyone can nourish
                  their body, family, and the planet.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="https://eatupwardfarms.com"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-uf-dark-green hover:bg-uf-light-green focus:outline-none focus:ring transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                    >
                      Website
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="https://eatupwardfarms.com/our-story"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-uf-dark-green bg-uf-pastel-green hover:bg-uf-light-green focus:outline-none focus:ring focus:border-green-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};
