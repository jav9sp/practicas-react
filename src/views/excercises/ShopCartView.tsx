import { Dispatch } from "react";
import { products } from "../../data/products.json";
import { CartActions, CartState } from "../../reducers/cartReducer";
import { Product } from "../../types";
import { formatCurrency } from "../../utils/formatCurrency";

type ShopCartViewProps = {
  state: CartState;
  dispatch: Dispatch<CartActions>;
};

export default function ShopCartView({ state, dispatch }: ShopCartViewProps) {
  const storeProducts: Product[] = products;

  return (
    <div>
      <h1>Simulador de Carrito de Compras con useReducer</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center">
        {storeProducts.map((product) => (
          <div
            key={product.id}
            className="p-3 border rounded max-w-96 flex flex-col flex-1">
            <img
              src={product.image}
              alt={`imagen de ${product.name}`}
              className="aspect-square object-cover border"
            />
            <div className="flex flex-col mt-4">
              <div className="min-h-32">
                <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
                <p className="">{product.description}</p>
                <span className="text-xs text-gray-500">
                  {product.category}
                </span>
              </div>
              <div className="flex justify-between items-center mt-auto">
                <span className="font-bold text-4xl">
                  {formatCurrency(product.price)}
                </span>
                <button
                  className="border rounded py-2 px-4 hover:bg-gray-300"
                  onClick={(e) =>
                    dispatch({
                      type: "add-to-cart",
                      payload: { item: product },
                    })
                  }>
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
