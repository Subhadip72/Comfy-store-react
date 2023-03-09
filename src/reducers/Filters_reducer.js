import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  UPDATE_SORT,
} from "../actions/actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      let new_price = action.payload.map((item) => item.price);
      new_price = Math.max(...new_price);
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: { ...state.filters, max_price: new_price, price: new_price },
      };
    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };
    case UPDATE_SORT:
      return { ...state, sort: action.payload };
    case SORT_PRODUCTS:
      const { sort, filtered_products } = state;

      if (sort === "price-lowest") {
        let newProducts = filtered_products.sort((a, b) => {
          return a.price - b.price;
        });
        return { ...state, filtered_products: newProducts };
      }

      if (sort === "price-highest") {
        let newProducts = filtered_products.sort((a, b) => {
          return b.price - a.price;
        });
        return { ...state, filtered_products: newProducts };
      }

      if (sort === "name-a") {
        let newProducts = filtered_products.sort((a, b) => {
          return a.name.toLowerCase().localeCompare(b.name);
        });
        return { ...state, filtered_products: newProducts };
      }

      if (sort === "name-z") {
        let newProducts = filtered_products.sort((a, b) => {
          return b.name.toLowerCase().localeCompare(a.name);
        });
        return { ...state, filtered_products: newProducts };
      }

    case FILTER_PRODUCTS:
      let { all_products } = state;
      let { text, category, company, color, price, shipping } = state.filters;

      let newProducts = [...all_products];

      if (text) {
        newProducts = newProducts.filter((item) =>
          item.name.toLowerCase().startsWith(text)
        );
      }

      if (category !== "all") {
        newProducts = newProducts.filter((item) => item.category === category);
      }

      if (company !== "all") {
        newProducts = newProducts.filter((item) => item.company === company);
      }

      if (color !== "all") {
        if (color === "all") {
          newProducts = newProducts.map((item) => {
            let colors = item.colors.map((c) => c);
            return colors;
          });
        }
        newProducts = newProducts.filter((item) => {
          let colors = item.colors.find((c) => c === color);
          return colors;
        });
      }

      newProducts = newProducts.filter((item) => item.price <= price);

      if (shipping) {
        newProducts = newProducts.filter((item) => item.shipping === true);
      }

      return { ...state, filtered_products: newProducts };
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          shipping: false,
          price: state.filters.max_price,
        },
      };
    default:
      throw new Error("Action does not exist!");
  }
};
