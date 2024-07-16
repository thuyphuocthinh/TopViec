import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Xin lỗi, trang bạn đang tìm kiếm không tồn tại"
      extra={
        <Button type="primary" onClick={() => navigate("/admin/dashboard")}>
          Back Home
        </Button>
      }
    />
  );
}
export default NotFound;
