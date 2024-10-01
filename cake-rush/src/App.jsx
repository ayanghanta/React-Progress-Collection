import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import HomePage from "./ui/HomePage";
import MenuPage from "./features/menu/MenuPage";
import ErrorPage from "./ui/ErrorPage";
import Cart from "./features/cart/Cart";

function App() {

  const router=createBrowserRouter([
    {
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/',
          element:<HomePage/>,
        },
        {
          path:'/menu',
          element:<MenuPage/>,
          errorElement:<ErrorPage/>,
        },
        {
          path:'/cart',
          element:<Cart/>
        }
      ]
    }
  ])

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
