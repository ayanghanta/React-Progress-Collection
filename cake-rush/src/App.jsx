import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import HomePage from "./ui/HomePage";
import MenuPage, { loader as menuLoader } from "./features/menu/MenuPage";
import ErrorPage from "./ui/ErrorPage";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as orderAction,
} from "./features/order/CreateOrder";
import OrderView, { loader as orderLoader } from "./features/order/OrderView";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/menu",
          element: <MenuPage />,
          errorElement: <ErrorPage />,
          loader: menuLoader,
        },
        {
          path: "/cart",
          errorElement: <ErrorPage />,
          element: <Cart />,
        },

        {
          path: "/order/:orderId",
          errorElement: <ErrorPage />,
          element: <OrderView />,
          loader: orderLoader,
        },
        {
          path: "/order/new",
          errorElement: <ErrorPage />,
          element: <CreateOrder />,
          action: orderAction,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
