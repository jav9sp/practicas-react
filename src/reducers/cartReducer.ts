import { CartItem, Product } from "../types";

export type CartActions =
  | { type: "add-to-cart"; payload: { item: Product } }
  | { type: "increase-quantity"; payload: { id: Product["id"] } }
  | { type: "decrease-quantity"; payload: { id: Product["id"] } }
  | { type: "remove-from-cart"; payload: { item: Product } }
  | { type: "clear-cart" };

export type CartState = {
  cart: CartItem[];
};

export const initialState: CartState = {
  cart: [],
};

export const cartReducer = (
  state: CartState = initialState,
  actions: CartActions
) => {
  if (actions.type === "add-to-cart") {
    const itemExists = state.cart.find(
      (item) => item.id === actions.payload.item.id
    );

    let updatedCart = [];

    if (itemExists) {
      updatedCart = state.cart.map((item) => {
        if (item.id === actions.payload.item.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    } else {
      const newItem: CartItem = { ...actions.payload.item, quantity: 1 };
      updatedCart = [...state.cart, newItem];
    }

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (actions.type === "increase-quantity") {
    const updatedCart = state.cart.map((item) => {
      if (item.id === actions.payload.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (actions.type === "decrease-quantity") {
    const updatedCart = state.cart.map((item) => {
      if (item.id === actions.payload.id) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (actions.type === "remove-from-cart") {
    let updatedCart = state.cart.filter(
      (item) => item.id !== actions.payload.item.id
    );

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (actions.type === "clear-cart") {
    return {
      ...state,
      cart: [],
    };
  }

  return state;
};
