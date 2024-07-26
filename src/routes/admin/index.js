import { AdminLayout } from "../../layouts/admin";
import { Company } from "../../pages/admin/company";
import { Cvs } from "../../pages/admin/cvs";
import { CvDetail } from "../../pages/admin/cvs/detail";
import { Dashboard } from "../../pages/admin/dashboard";
import { Jobs } from "../../pages/admin/jobs";
import { JobsCreate } from "../../pages/admin/jobs/create";
import { JobsEdit } from "../../pages/admin/jobs/edit";

export const adminRoutes = [
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "", element: <Dashboard /> },
      {
        path: "company",
        element: <Company />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "jobs/create",
        element: <JobsCreate />,
      },
      {
        path: "jobs/edit/:id",
        element: <JobsEdit />,
      },
      {
        path: "cvs",
        element: <Cvs />,
      },
      {
        path: "cvs/detail/:id",
        element: <CvDetail />,
      },
    ],
  },
];
