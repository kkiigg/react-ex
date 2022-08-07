import { combineReducers } from "redux";
import * as types from "../types";

//产品购买数量 id:个数
interface productNum {
  [key: string]: number;
}

interface shopCartState {
  cartIds: number[];
  productNumsObj: productNum;
}
const initialState: shopCartState = {
  cartIds: [],
  productNumsObj: {},
};
interface shopCartItem {
  productId: number;
  name: string;
  totalPirce: number;
  number: number;
}
interface cartAction {
  id: number;
}
const cartReduce = (state = initialState, action: types.Action<cartAction>) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      const id = action.payload.id;
      if (state.cartIds.indexOf(id) < 0) {
        return {
          ...state,
          ...{
            cartIds: [...state.cartIds, id],
          },
        };
      }
      return state;
    case types.CLEAR_CART:
      return initialState;
    case types.ADD_PRODECT:
    case types.REDUCE_PRODECT:
      const productNumsObj = Object.assign({}, state.productNumsObj);
      const thisProductNum = productNumsObj[action.payload.id];
      if (thisProductNum) {
        if (action.type === types.ADD_PRODECT) {
          //增加
          productNumsObj[action.payload.id]++;
        } else {
          //减少
          productNumsObj[action.payload.id]--;
        }
        return { ...state, ...{ productNumsObj } };
      } else {
        if (action.type === types.ADD_PRODECT) {
          productNumsObj[action.payload.id] = 1;
        }
        return { ...state, ...{ productNumsObj } };
      }
    default:
      return state;
  }
};

export interface productItem {
  id: number;
  name: string;
  price: number;
  stock: number;
}
export interface productAction {
  products?: productItem[];
}
const productReduce = (
  state: productItem[] = [],
  action: types.Action<productAction>
) => {
  switch (action.type) {
    case types.RECEIVE_PRODUCT:
      return action.payload.products;
    default:
      return state;
  }
};
export default combineReducers({
  cartReduce,
  productReduce,
});
