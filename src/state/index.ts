import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
// 安装redux-devtools-extension的可视化工具。
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
import { getAllProduct } from "./actions/shopcart";
// 设置初始状态
// const initialState = {
// }
// export default createStore(reducer,initialState)
const loggerMiddleware = createLogger({ collapsed: true });
const store = createStore(reducer, composeWithDevTools());

let initStoreState = async () => {
  store.dispatch(await getAllProduct());
};
initStoreState();

export default store;
