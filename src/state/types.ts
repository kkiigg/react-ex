import { type } from "os";

export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_BY_ID = "DELETE_BY_ID"; //todo
export const ADD_PRODECT = "ADD_PRODECT"; //。。。拼错了
export const REDUCE_PRODECT = "REDUCE_PRODECT";
export const CLEAR_CART = "CLEAR_CART";

export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";

export interface Action<T> {
  type: string;
  payload: T;
}
