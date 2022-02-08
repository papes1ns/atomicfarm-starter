import React, {useEffect, useState} from "react";
import {Header} from "../components/Header";

export const Home: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const products = await fetchProducts();
      console.log(products);
      setProducts(products);
    })();
  }, []);

  return (
    <React.Fragment>
      <Header title={"Manual measurements"} />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4 text-center text-gray-400">
              Hello Michael :)
            </div>
          </div>
          <div>
            Rails API data following{" "}
            <a className="underline" href="https://jsonapi.org/">
              JSON:API spec
            </a>
            :
          </div>
          <pre>{JSON.stringify(products, null, 2)}</pre>
        </div>
      </main>
    </React.Fragment>
  );
};

async function fetchProducts() {
  const resp = await fetch("/api/v1/products");
  const json = await resp.json();
  return json;
}
