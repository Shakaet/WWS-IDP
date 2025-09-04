import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { SignUp } from "../pages/SignUp";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"signin",
          element:<Login></Login>

        },
        {
          path:"signup",
          element:<SignUp></SignUp>

        },

    ]
  },
]);