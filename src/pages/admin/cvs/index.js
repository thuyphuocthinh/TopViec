import React, { useEffect, useState } from "react";
import { Button, Popconfirm, Table, Tag } from "antd";
import { jobsService } from "../../../services/JobsService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { cvsService } from "../../../services/CvService";
import { companyService } from "../../../services/CompanyService";

export function Cvs() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  
  useEffect(() => {
    const getCvs = async () => {
      try {
        const result = await cvsService.getAllCvs();
        if (result.length > 0) {
          setData(result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCvs();
  }, []);

  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      sorter: (item1, item2) => {
        let name1 = item1.name.trim().toLowerCase();
        let name2 = item2.name.trim().toLowerCase();
        return name1 < name2 ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Link project",
      dataIndex: "linkProject",
      key: "linkProject",
      render: (link) => {
        return (
          <a href={link} target="_blacnk">
            Link Project
          </a>
        );
      },
    },
    {
      title: "Thành phố",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record, index) => {
        return (
          <>
            <Popconfirm
              title="Xóa job"
              description="Bạn có chắc là muốn xóa cv này?"
              okText="Có"
              cancelText="Không"
              onConfirm={async () => {
                const result = await cvsService.deleteCv(record.id);
                if (result) {
                  toast.success("Xóa thành công");
                  try {
                    const result = await cvsService.getAllCvs();
                    if (result.length > 0) {
                      setData(result);
                    }
                  } catch (error) {
                    console.log(error);
                  }
                } else {
                  toast.error("Xóa không thành công");
                }
              }}
            >
              <Button type="default" danger style={{ marginRight: "10px" }}>
                Xóa
              </Button>
            </Popconfirm>
            <Button
              type="primary"
              onClick={() => {
                navigate(`/admin/cvs/detail/${record.id}`);
              }}
            >
              Chi tiết
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <>
      <h5 className="mt-3 mb-4 text-center">Quản lí hồ sơ ứng tuyển</h5>
      <Table columns={columns} dataSource={data} onChange={handleChange} />;
    </>
  );
}
