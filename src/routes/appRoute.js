import React from "react";
import { authRoutes } from "./auth";
import { useRoutes } from "react-router-dom";
import { adminRoutes } from "./admin";
import { clientsRoute } from "./clients";

export function AuthRoute() {
  const routes = useRoutes(authRoutes);
  return <>{routes}</>;
}

export function AdminRoute() {
  const routes = useRoutes(adminRoutes);
  return <>{routes}</>;
}

export function ClientsRoute() {
  const routes = useRoutes(clientsRoute);
  return <>{routes}</>;
}
