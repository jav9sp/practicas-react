import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { CartActions, CartState } from "../reducers/cartReducer";
import { Dispatch } from "react";

type LayoutProps = {
  state: CartState;
  dispatch: Dispatch<CartActions>;
};

export default function Layout({ state, dispatch }: LayoutProps) {
  return (
    <main className="max-w-7xl mx-auto p-4">
      <Header cart={state.cart} dispatch={dispatch} />
      <Outlet />
    </main>
  );
}
