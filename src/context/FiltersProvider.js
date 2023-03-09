import React, { useEffect, useContext, useReducer } from "react";
import { useProductContext } from "./ProductsProvider";
import { reducer } from "../reducers/Filters_reducer";
import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  UPDATE_SORT,
} from "../actions/actions";

export const FilterContext = React.createContext();

const initialState = {
  all_products: [],
  filtered_products: [],
  sort: "price-lowest",
  grid_view: true,
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

export const FiltersProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (products.length > 0) {
      dispatch({ type: LOAD_PRODUCTS, payload: products });
    }
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [state.filters, state.sort]);

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      e.preventDefault();
      value = e.target.textContent;
    }
    if (name === "color") {
      e.preventDefault();
      value = e.target.dataset.color;
    }
    if (name === "price") {
      value = Number(value);
    }
    if (name === "shipping") {
      value = e.target.checked;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = (e) => {
    e.preventDefault();
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{ ...state, handleChange, clearFilters, updateSort }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
