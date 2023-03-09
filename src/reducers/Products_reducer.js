import {
  GET_PRODUCTS_SUCCESS,
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
} from "../actions/actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      let featuredProducts = action.payload
        .filter((item) => item.featured === true)
        .slice(0, 3);
      return {
        ...state,
        products: action.payload,
        featured_products: featuredProducts,
      };
    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true };
    case SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false };
    default:
      throw new Error(`Check your action ${action.type} it doesn't exist!`);
  }
};
