import React, { memo, useEffect } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Dropdown } from "antd";
import { NavLink } from "react-router-dom";
import { TOKEN } from "../../../config/system";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
const { Header } = Layout;

export function AdminHeader({ handleCollapse, collapsed }) {
  const { info } = useSelector((state) => state.CompanyReducer);
  const items = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer" href={info.website} >
          {info.companyName}
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink
          rel="noopener noreferrer"
          to={"/auth/login"}
          onClick={() => {
            localStorage.removeItem(TOKEN);
            toast.success("Đăng xuất thành công");
          }}
        >
          Đăng xuất
        </NavLink>
      ),
    },
  ];
  return (
    <Header
      style={{
        backgroundColor: "white",
        padding: "0",
        paddingRight: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={handleCollapse}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
      <Dropdown menu={{ items }} placement="bottomLeft">
        <Button icon={<UserOutlined />} />
      </Dropdown>
    </Header>
  );
}
