import React from "react";

import {
  HddOutlined,
  InfoCircleOutlined,
  DashboardOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_KEY } from "../../../redux/actionTypes/CompanyTypes";
const { Sider } = Layout;

export function AdminSider({ collapsed }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { key } = useSelector((state) => state.CompanyReducer);
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={key}
        selectedKeys={key}
        onSelect={({ key }) => {
          dispatch({
            type: SET_KEY,
            payload: key,
          });
        }}
        items={[
          {
            key: "1",
            icon: <DashboardOutlined />,
            label: "Dashboard",
            onClick: () => {
              navigate("/admin/dashboard");
            },
          },
          {
            key: "2",
            icon: <InfoCircleOutlined />,
            label: "Thông tin công ty",
            onClick: () => {
              navigate("/admin/company");
            },
          },
          {
            key: "3",
            icon: <HddOutlined />,
            label: "Quản lý jobs",
            onClick: () => {
              navigate("/admin/jobs");
            },
          },
          {
            key: "4",
            icon: <AuditOutlined />,
            label: "Quản lý CV",
            onClick: () => {
              navigate("/admin/cvs");
            },
          },
        ]}
      />
    </Sider>
  );
}
