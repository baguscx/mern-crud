import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Index";
import Add from "../pages/Add";
import Edit from "../pages/Edit";
import RootLayout from "../layouts/RootLayout";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/edit/:id",
        element: <Edit />,
      },
    ],
  },
]);
