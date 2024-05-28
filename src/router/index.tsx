import Home from "../pages/Home";
import Item from "../pages/Item";
import { useRoutes } from "react-router-dom";

const Router = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/item/:id", element: <Item /> },
  ]);
};

export default Router;
