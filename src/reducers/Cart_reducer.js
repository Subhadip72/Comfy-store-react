import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions/actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, amount, product } = action.payload;

      let cartProducts = state.cart.find((item) => item.id === id);

      if (cartProducts) {
        let newCart = state.cart.map((item) => {
          if (item.id === id) {
            let newAmount = item.amount + amount;
            if (newAmount > item.max) {
              newAmount = item.max;
            }
            return { ...item, amount: newAmount };
          } else {
            return item;
          }
        });
        // console.log(newCart);
        return { ...state, cart: newCart };
      } else {
        const newCartItem = {
          id,
          name: product.name,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...state.cart, newCartItem] };
      }
    case CLEAR_CART:
      return { ...state, cart: [] };
    case COUNT_CART_TOTALS:
      let cartTotals = state.cart.reduce(
        (total, item) => {
          let { amount, price } = item;
          total.amount = total.amount + amount;
          total.total += amount * price;
          return total;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      return { ...state, total: cartTotals.total, amount: cartTotals.amount };
    case TOGGLE_CART_ITEM_AMOUNT:
      const { id: uniqueId, type } = action.payload;
      let tempCart = state.cart.map((item) => {
        if (item.id === uniqueId) {
          if (type === "inc") {
            let newAmount = item.amount + 1;
            if (newAmount > item.max) {
              newAmount = item.max;
            }
            return { ...item, amount: newAmount };
          }
          if (type === "dec") {
            let newAmount = item.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...item, amount: newAmount };
          }
        }
        return item;
      });
      return { ...state, cart: tempCart };
    case REMOVE_CART_ITEM:
      let newCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: newCart };
    default:
      throw new Error(`the action ${action.type} doesn't exist!`);
  }
};
