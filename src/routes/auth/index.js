import { AuthLayout } from "../../layouts/auth";
import { Login } from "../../pages/auth/login";
import { Register } from "../../pages/auth/register";

export const authRoutes = [
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];
