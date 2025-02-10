export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  category: string;
  size: string;
  pictures: string[];
  __v: number;
  rank: number;
}

export type ProductQuantity = Product & {
  quantity: [number,number];
};



