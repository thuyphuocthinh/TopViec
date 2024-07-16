import { AdminLayout } from "../../layouts/admin";
import { Company } from "../../pages/admin/company";
import { Dashboard } from "../../pages/admin/dashboard";

export const adminRoutes = [
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      {
        path: "company",
        element: <Company />,
      },
    ],
  },
];
