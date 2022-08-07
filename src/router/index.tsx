import { Routes, Route } from "react-router-dom";
import { Andt } from "../views/antdex/ex";
import App from "../App";
import AndtEx3 from "../views/antdex/ex3";
import ShopCart from "../views/shopCart";
import { LoginPage } from "../views/login/login";
import ListPage from "../views/search/ListPage";
import { NotFound } from "../views/other/NotFound";

const routesConfig = [
  {
    path: "/",
    component: App,
    indexRoute: { component: ShopCart },
    chuldRoutes: [
      { path: "search" },
      // {path:'antd',component:}
    ],
  },
];
export default function () {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/search" element={<ListPage />}></Route>
      <Route path="/antd/:id" element={<Andt />}></Route>
      <Route path="/antd/ex3" element={<AndtEx3 />}></Route>
      <Route path="/shopcart" element={<ShopCart />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
//test1
//test2
