import React, { useEffect } from "react";
import { Col, Row, Card } from "antd";
import { Chart } from "./chart";
import { useDispatch, useSelector } from "react-redux";
import { companyService } from "../../../services/CompanyService";
import { getCompanyByTokenAction } from "../../../redux/actions/CompanyActions";

export function Dashboard() {
  const { info } = useSelector((state) => state.CompanyReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const getCompany = async () => {
      const result = await companyService.getInfoByToken();
      dispatch(getCompanyByTokenAction(result[0]));
    };
    getCompany();
  }, []);

  return (
    <>
      <Row>
        <Col span={24}>
          <h3 style={{ textAlign: "center" }}>Biểu đồ tăng trưởng năm 2024</h3>
        </Col>
        <Col span={24}>
          <Chart />
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={24}>
          <h3 style={{ textAlign: "center" }}>Tổng quan</h3>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="Company" size="small">
            <p>{info.companyName}</p>
            <p>{info.description}</p>
            <p>{info.address}</p>
            <p>{info.phone}</p>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="CV" size="small">
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="Jobs" size="small">
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
