import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { ListPage } from "./views/search/ListPage";
import { LoginPage as Login } from "./views/login/login";
import { Andt } from "./views/antdex/ex";
import Routes from "./router";

function App() {
  return (
    <div className="App">
      {/* <ListPage /> */}
      {/* <Login/> */}
      {/* <Andt/> */}
      <Routes />
    </div>
  );
}

export default App;
