import React, {useEffect} from "react";
import {Header} from "../components/Header";

export const Home: React.FC = () => {
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <React.Fragment>
      <Header title="Home" />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4 text-center text-gray-400"></div>
          </div>
          {/* /End replace */}
        </div>
      </main>
    </React.Fragment>
  );
};

async function fetchProducts() {
  const resp = await fetch("/api/v1/products");
  const json = await resp.json();
  console.log(json.data);
}
