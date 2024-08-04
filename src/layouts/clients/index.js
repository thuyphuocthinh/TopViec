import React from "react";
import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import { ClientHeader } from "../../components/clients/header";
const { Content } = Layout;

export const ClientsLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <ClientHeader />
      <Layout>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            style={{
              padding: 24,
              marginTop: "30px",
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              minHeight: "100vh",
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
