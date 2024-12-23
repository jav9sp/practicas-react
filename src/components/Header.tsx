import { Link, useLocation } from "react-router-dom";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dispatch, useState } from "react";
import { CartActions } from "../reducers/cartReducer";
import { CartItem } from "../types";
import CartItemCard from "./cart-excercise/CartItemCard";
import { formatCurrency } from "../utils/formatCurrency";

type HeaderProps = {
  cart: CartItem[];
  dispatch: Dispatch<CartActions>;
};

export default function Header({ cart, dispatch }: HeaderProps) {
  const location = useLocation();
  const inShop = location.pathname.includes("carrito-compras");
  const [cartVisible, setCartVisible] = useState(false);

  const hasItems = cart.length > 0;

  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <header
      className={`max-w-7xl mx-auto h-12 flex items-center justify-between`}>
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link
              to={"/"}
              className={`${
                location.pathname === "/" && "underline underline-offset-8"
              } font-semibold text-lg hover:underline hover:underline-offset-8`}>
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to={"/practicas"}
              className={`${
                location.pathname.includes("practicas") &&
                "underline underline-offset-8"
              } font-semibold text-lg hover:underline hover:underline-offset-8`}>
              Prácticas
            </Link>
          </li>
        </ul>
      </nav>
      {inShop && (
        <>
          <div
            className={`flex items-center justify-center rounded-full w-14 h-14 ${
              hasItems ? "bg-yellow-400" : "bg-white"
            } transition-colors`}>
            <ShoppingCartIcon
              className={`w-10 h-10 cursor-pointer`}
              onClick={(e) => setCartVisible(true)}
            />
          </div>
          <div
            className={`fixed top-0 right-0 h-screen w-96 p-4 bg-white shadow-md ${
              cartVisible ? "translate-x-0" : "translate-x-full"
            } transition-transform`}>
            <XMarkIcon
              className="w-8 h-8 absolute top-2 right-2 cursor-pointer"
              onClick={(e) => setCartVisible(false)}
            />
            <h4 className="text-center font-semibold text-2xl">Carrito</h4>
            <div className="max-h-[70%] overflow-auto mt-12">
              {hasItems ? (
                cart.map((item) => (
                  <CartItemCard key={item.id} item={item} dispatch={dispatch} />
                ))
              ) : (
                <p className="text-center font-semibold text-xl">
                  Tu carrito está vacío
                </p>
              )}
            </div>
            {hasItems && (
              <>
                <div className="my-6">
                  <p className="text-2xl text-center">
                    Total del Pedido:{" "}
                    <span className="font-semibold">
                      {formatCurrency(total)}
                    </span>
                  </p>
                </div>
                <button
                  className="block w-full py-3 mt-6 border rounded text-center text-2xl font-bold cursor-pointer hover:bg-gray-200"
                  onClick={(e) => alert("Este botón no es funcional")}>
                  Completar Pedido
                </button>
                <button
                  className="w-full py-3 mt-6 border rounded font-semibold cursor-pointer hover:bg-gray-200"
                  onClick={(e) => dispatch({ type: "clear-cart" })}>
                  Vaciar Carrito
                </button>
              </>
            )}
          </div>
        </>
      )}
    </header>
  );
}
