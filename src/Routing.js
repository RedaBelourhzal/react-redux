import { createBrowserRouter } from "react-router-dom";
import MasterPage from "./layouts/MasterPage";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
export const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MasterPage />,
    children: [
      { path: "", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);
