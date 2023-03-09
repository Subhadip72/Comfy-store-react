import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/ProductsProvider";
import { FiltersProvider } from "./context/FiltersProvider";
import { CartProvider } from "./context/CartProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <FiltersProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FiltersProvider>
    </ProductsProvider>
  </React.StrictMode>
);
