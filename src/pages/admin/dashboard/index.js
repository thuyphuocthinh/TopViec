import React, { useEffect } from "react";
import { Col, Row, Card } from "antd";
import { Chart } from "./chart";
import { useDispatch, useSelector } from "react-redux";
import { companyService } from "../../../services/CompanyService";
import { getCompanyByTokenAction } from "../../../redux/actions/CompanyActions";
import { jobsService } from "../../../services/JobsService";
import { getAllJobsAction } from "../../../redux/actions/JobActions";

export function Dashboard() {
  const { info } = useSelector((state) => state.CompanyReducer);
  const { jobs } = useSelector((state) => state.JobsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const getCompany = async () => {
      const result = await companyService.getInfoByToken();
      dispatch(getCompanyByTokenAction(result[0]));
    };
    const getJobs = async () => {
      const result = await jobsService.getAllJobs();  
      dispatch(getAllJobsAction(JSON.stringify(result)));
    };
    getCompany();
    getJobs();
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
            <p>{info?.companyName}</p>
            <p>{info?.description}</p>
            <p>{info?.address}</p>
            <p>{info?.phone}</p>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="CV" size="small">
            <p>
              <span>Tổng số jobs:</span>
              <span> {jobs.length > 0 ? JSON.parse(jobs).length : "0"} </span>
            </p>
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
