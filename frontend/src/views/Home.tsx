import React, {useEffect, useState} from "react";
import {apiBaseUrl} from "../App";
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
  const url = `${apiBaseUrl}/api/v1/products`;
  console.log(`fetchProducts URL = ${url}`);
  const resp = await fetch(url);
  const json = await resp.json();
  return json;
}
