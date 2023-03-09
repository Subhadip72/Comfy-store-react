import React, { useContext, useEffect, useReducer } from "react";
import { products_url } from "../utils/constants";
import axios from "axios";
import { reducer } from "../reducers/Products_reducer";
import {
  GET_PRODUCTS_SUCCESS,
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
} from "../actions/actions";

export const ProductsContext = React.createContext();

const initialState = {
  products: [],
  featured_products: [],
  isSidebarOpen: false,
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    try {
      const response = await axios(url);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  useEffect(() => {
    getProducts(products_url);
  }, []);
  //   console.log(state.featured_products);
  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductsContext);
};
