import React, { useCallback, useEffect, useState } from "react";
import { Layout } from "antd";
import { AdminHeader } from "../../components/admin/header";
import { AdminSider } from "../../components/admin/sider";
import { Outlet, useNavigate } from "react-router-dom";
import { TOKEN } from "../../config/system";
import { companyService } from "../../services/CompanyService";
const { Content } = Layout;

export function AdminLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const check = async () => {
      const token = localStorage.getItem(TOKEN);
      const result = await companyService.checkToken(token);
      if (result.length === 0) {
        navigate("/auth/login");
      }
    };
    check();
  }, []);

  const [collapsed, setCollapsed] = useState(false);
  const handleCollapse = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AdminSider collapsed={collapsed} />
      <Layout>
        <AdminHeader handleCollapse={handleCollapse} collapsed={collapsed} />
        <Content
          style={{
            margin: "24px 16px",
            padding: "1rem",
            minHeight: 280,
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
