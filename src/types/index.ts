export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  image: string;
};

export type CartItem = Product & {
  quantity: number;
};
