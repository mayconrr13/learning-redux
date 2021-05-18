export interface IProduct {
  id: string;
  title: string;
  price: number;
}

export interface ICartItem {
  product: IProduct;
  amount: number;
}

export interface ICartState {
  items: ICartItem[];
}