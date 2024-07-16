import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { companyService } from "../../services/CompanyService";
import { TOKEN } from "../../config/system";

export const AuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const check = async () => {
      const token = localStorage.getItem(TOKEN);
      if (token) {
        const result = await companyService.checkToken(token);
        if (result.length > 0) {
          navigate("/admin/dashboard");
        }
      }
    };
    check();
  }, []);

  return (
    <div style={{ minHeight: "100vh", overflow: "hidden" }}>
      <Row style={{ minHeight: "100vh" }}>
        <Col md={16} xs={24}>
          <img
            src={require("../../assets/img/auth_bg.jpg")}
            style={{ width: "100%", height: "100%" }}
            alt="TopViec background"
          />
        </Col>
        <Col md={8} xs={24}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};
