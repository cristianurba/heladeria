import React, {useState} from "react";
import useFetch from "./hooks/useFetch";
import {urlApiProducts, STORAGE_PRODUCTS_CART} from "./utils/constants";
import {ToastContainer, Toast, toast} from "react-toastify";

import TopMenu from "./components/TopMenu";
import Products from "./components/Products";



function App() {

  const products = useFetch(urlApiProducts, null);
  const [productsCart, setProductsCart] = useState([]);

  const addProductCart = (id, name) => {
    const idsProducts = productsCart;
    idsProducts.push(id);
    setProductsCart(idsProducts);
    localStorage.setItem(STORAGE_PRODUCTS_CART, productsCart);

    toast.success(`${name} añadido al carrito`)
  }
  
  
  return (
    <div>
      <TopMenu />
      <Products products={products} addProductCart={addProductCart} />
      <ToastContainer 
        position="bottom-left"
        autoClose={5000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
