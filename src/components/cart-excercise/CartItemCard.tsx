import { CartItem } from "../../types";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { formatCurrency } from "../../utils/formatCurrency";
import { Dispatch } from "react";
import { CartActions } from "../../reducers/cartReducer";

type CartItemProps = {
  item: CartItem;
  dispatch: Dispatch<CartActions>;
};

export default function CartItemCard({ item, dispatch }: CartItemProps) {
  return (
    <div className="border rounded my-2 p-2 grid grid-cols-4">
      <div className="col-span-3">
        <h4>{item.name}</h4>
        <p>
          Cantidad: <span className="font-semibold">{item.quantity}</span>
        </p>
        <p>
          Precio:{" "}
          <span className="font-bold">{formatCurrency(item.price)}</span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-between gap-2">
        <button
          disabled={item.quantity === 1}
          className="hover:scale-110 cursor-pointer disabled:opacity-50 disabled:hover:scale-100"
          onClick={(e) =>
            dispatch({ type: "decrease-quantity", payload: { id: item.id } })
          }>
          <MinusCircleIcon className="h-6 w-6" />
        </button>
        <button
          className="hover:scale-110 cursor-pointer"
          onClick={(e) =>
            dispatch({ type: "increase-quantity", payload: { id: item.id } })
          }>
          <PlusCircleIcon className="h-6 w-6" />
        </button>
        <button className="hover:scale-110 cursor-pointer">
          <XCircleIcon
            className="h-6 w-6 text-red-600"
            onClick={(e) =>
              dispatch({
                type: "remove-from-cart",
                payload: { item: item },
              })
            }
          />
        </button>
      </div>
    </div>
  );
}
