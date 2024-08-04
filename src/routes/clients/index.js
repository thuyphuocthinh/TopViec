import { ClientsLayout } from "../../layouts/clients";
import { Home } from "../../pages/clients/home";

export const clientsRoute = [
  {
    path: "",
    element: <ClientsLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
];
