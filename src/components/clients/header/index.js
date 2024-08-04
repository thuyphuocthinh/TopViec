import React from "react";
import { Layout } from "antd";
import { NavLink } from "react-router-dom";
import "../../../assets/style/index.scss";
const { Header } = Layout;

export const ClientHeader = () => {
  return (
    <>
      <Header
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <NavLink
          to={"/"}
          style={{
            color: "white",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "16px",
          }}
        >
          TopViec
        </NavLink>
        <ul className="header-list">
          <li className="header-item">
            <NavLink
              to={"/jobs"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Công việc
            </NavLink>
          </li>
          <li className="header-item">
            <NavLink
              to={"/company"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Công ty
            </NavLink>
          </li>
        </ul>
      </Header>
    </>
  );
};
