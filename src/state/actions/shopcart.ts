import * as types from "../types";
import type { productAction } from "../reducer/shopcart";
import { getProductList } from "../../api/shopcart";

export const addToCart = (id) => {
  return {
    type: types.ADD_TO_CART,
    payload: {
      id,
    },
  };
};

export const clearCart = () => {
  return {
    type: types.CLEAR_CART,
  };
};

export const addShop = (id) => {
  return {
    type: types.ADD_PRODECT,
    payload: {
      id,
    },
  };
};

export const reduceShop = (id) => {
  return {
    type: types.REDUCE_PRODECT,
    payload: {
      id,
    },
  };
};

export const receiveProduct = (products) => {
  return {
    type: types.RECEIVE_PRODUCT,
    payload: {
      products,
    },
  };
};

export const getAllProduct: () => Promise<
  types.Action<productAction>
> = async () => {
  let resData = await getProductList();
  return receiveProduct(resData);
};
