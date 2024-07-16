import React, { useState } from "react";
import { LockOutlined, UserOutlined, LoadingOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { companyService } from "../../../services/CompanyService";
import { TOKEN } from "../../../config/system";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginAction } from "../../../redux/actions/CompanyActions";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    setLoading(true);
    setTimeout(async () => {
      const checkEmail = await companyService.checkEmail(values.email);
      if (checkEmail.length > 0) {
        toast.error("Email đã được sử dụng, vui lòng nhập email khác");
        setLoading(false);
        return;
      }
      const result = await companyService.register(values);
      if (result) {
        const token = result.token;
        localStorage.setItem(TOKEN, token);
        toast.success("Đăng kí thành công");
        dispatch(loginAction(true));
        navigate("/admin/dashboard");
      } else {
        toast.error("Email không tồn tại");
      }
      setLoading(false);
    }, 2000);
  };
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>Đăng kí</h2>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        style={{
          width: "70%",
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="companyName"
          rules={[
            {
              required: true,
              message: "Please input your Company name!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Company name"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập vào Email của bạn",
            },
            {
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Vui lòng nhập đúng định dạng Email",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập vào Password",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <div>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: "100%" }}
              icon={loading ? <LoadingOutlined /> : ""}
            >
              Đăng kí
            </Button>
          </div>
          <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
            Hoặc{" "}
            <NavLink to={"/auth/login"}>
              Đăng nhập ngay nếu đã có tài khoản
            </NavLink>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
