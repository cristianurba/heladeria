import React, {useEffect} from "react";
import useFetch from "./hooks/useFetch";
import {urlApiProducts} from "./utils/constants";

import TopMenu from "./components/TopMenu";
import Products from "./components/Products";


function App() {

  const products = useFetch(urlApiProducts, null);
  
  
  return (
    <div>
      <TopMenu />
      <Products products={products} />
    </div>
  );
}

export default App;
