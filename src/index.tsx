import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import "./style/app.less";
import App from "./App";
import { ConfigProvider, DatePicker, message } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.less";
import { BrowserRouter } from "react-router-dom";

import ThemeProvidor from "./context/ThemeProvidor";
// import todoApp from './state'
import store from "./state";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ConfigProvider locale={zhCN}>
    <ThemeProvidor>
      <Provider store={store}>
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </Provider>
    </ThemeProvidor>
  </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
