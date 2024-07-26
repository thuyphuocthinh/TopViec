import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cvsService } from "../../../services/CvService";
import { Descriptions } from "antd";

export function CvDetail() {
  const params = useParams();
  const { id } = params;
  const [cv, setCv] = useState({});

  useEffect(() => {
    const getCv = async () => {
      try {
        const result = await cvsService.getCvById(id);
        if (result) {
          setCv(result);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCv();
  }, []);

  const items = [
    {
      key: "1",
      label: "Tên",
      children: cv.name,
    },
    {
      key: "2",
      label: "Số điện thoại",
      children: cv.phone,
    },
    {
      key: "3",
      label: "Email",
      children: cv.email,
    },
    {
      key: "4",
      label: "Mô tả",
      span: 2,
      children: cv.description,
    },
    {
      key: "5",
      label: "Link project",
      children: <a href={cv.linkProject} target="_blank">Link project</a>,
    },
  ];

  return (
    <>
      <h5 className="mt-3 mb-5 text-center">Chi tiết hồ sơ</h5>
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <Descriptions layout="vertical" items={items} />
      </div>
    </>
  );
}
