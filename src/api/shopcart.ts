import { productItem } from "../state/reducer/shopcart";
export const getProductList: () => Promise<productItem[]> = () => {
  return new Promise((resolve, reject) => {
    const list = [
      { id: 1, name: "hh1", price: 10, stock: 10 },
      { id: 2, name: "hh2", price: 20, stock: 1 },
      { id: 3, name: "hh3", price: 30, stock: 30 },
      { id: 4, name: "hh4", price: 40, stock: 20 },
      { id: 5, name: "hh5", price: 50, stock: 50 },
      { id: 6, name: "hh6", price: 60, stock: 1 },
    ];
    resolve(list);
  });
};
