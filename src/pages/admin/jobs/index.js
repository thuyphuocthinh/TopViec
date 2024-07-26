import React, { useEffect, useState } from "react";
import { Button, Popconfirm, Table, Tag } from "antd";
import { jobsService } from "../../../services/JobsService";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function Jobs() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  useEffect(() => {
    const getJobs = async () => {
      try {
        const result = await jobsService.getAllJobs();
        if (result.length > 0) {
          setData(result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getJobs();
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
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (tags) => {
        return tags.map((tag) => {
          return <Tag color="magenta">{tag}</Tag>;
        });
      },
    },
    {
      title: "Lương",
      dataIndex: "salary",
      key: "salary",
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        return <Tag color={status === "Open" ? "green" : "red"}>{status}</Tag>;
      },
    },
    {
      title: "Công ty",
      dataIndex: "companyName",
      key: "companyName",
    },
    {
      title: "Thành phố",
      dataIndex: "city",
      key: "city",
      render: (city) => {
        return city.map((ct) => {
          return <Tag color="magenta">{ct}</Tag>;
        });
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record, index) => {
        return (
          <>
            <Popconfirm
              title="Xóa job"
              description="Bạn có chắc là muốn xóa job này?"
              okText="Có"
              cancelText="Không"
              onConfirm={async () => {
                const result = await jobsService.deleteJob(record.id);
                if (result) {
                  toast.success("Xóa thành công");
                  try {
                    const result = await jobsService.getAllJobs();
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
                navigate(`/admin/jobs/edit/${record.id}`);
              }}
            >
              Sửa
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <>
      <h5 className="my-3 text-center">Quản lí jobs</h5>
      <div className="d-flex justify-content-end mb-4">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => navigate("/admin/jobs/create")}
        >
          Thêm jobs{" "}
        </Button>
      </div>
      <Table columns={columns} dataSource={data} onChange={handleChange} />
    </>
  );
}
