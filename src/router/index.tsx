import { Routes, Route } from "react-router-dom";
import { Andt } from "../views/antdex/ex";
import { LoginPage } from "../views/login/login";
import { ListPage } from "../views/search/ListPage";
export default function () {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/search" element={<ListPage />}></Route>
      <Route path="/antd" element={<Andt />}></Route>
    </Routes>
  );
}
