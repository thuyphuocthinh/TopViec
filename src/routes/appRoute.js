import React from "react";
import { authRoutes } from "./auth";
import { useRoutes } from "react-router-dom";
import { adminRoutes } from "./admin";

export function AuthRoute() {
  const routes = useRoutes(authRoutes);
  return <>{routes}</>;
}

export function AdminRoute() {
  const routes = useRoutes(adminRoutes);
  return <>{routes}</>;
}
