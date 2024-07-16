import React, { useState } from "react";
import { LockOutlined, UserOutlined, LoadingOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { companyService } from "../../../services/CompanyService";
import { TOKEN } from "../../../config/system";
import toast from "react-hot-toast";
import { loginAction } from "../../../redux/actions/CompanyActions";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    setLoading(true);
    setTimeout(async () => {
      const result = await companyService.login(values);
      if (result.length > 0) {
        if (result[0].email !== values.email) {
          toast.error("Sai email");
          setLoading(false);
          return;
        }
        if (result[0].password !== values.password) {
          toast.error("Sai password");
          setLoading(false);
          return;
        }
        const token = result[0].token;
        localStorage.setItem(TOKEN, token);
        toast.success("Đăng nhập thành công");
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
      <h2 style={{ marginBottom: "30px" }}>Đăng nhập</h2>
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
              Đăng nhập
            </Button>
          </div>
          <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
            Hoặc <NavLink to={"/auth/register"}>Đăng kí ngay</NavLink>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
