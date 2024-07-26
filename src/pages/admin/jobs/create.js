import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select, Switch } from "antd";
import { tagsService } from "../../../services/TagsService";
import { cityService } from "../../../services/CityService";
import { useSelector } from "react-redux";
import { jobsService } from "../../../services/JobsService";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

export function JobsCreate() {
  const [tags, setTags] = useState([]);
  const [cities, setCities] = useState([]);
  const { info } = useSelector((state) => state.CompanyReducer);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getTags = async () => {
      try {
        const result = await tagsService.getAllTags();
        if (result.length > 0) {
          setTags(result);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const getCities = async () => {
      try {
        const result = await cityService.getAllCities();
        if (result.length > 0) {
          setCities(result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getTags();
    getCities();
  }, []);

  const handleSubmit = (values) => {
    const newJob = values;
    newJob.status = newJob.status ? "Open" : "Close";
    newJob.idCompany = info.id;
    newJob.createdAt = new Date();
    newJob.updatedAt = "";
    setLoading(true);
    setTimeout(async () => {
      const result = await jobsService.createJob(newJob);
      if (result) {
        toast.success("Thêm jobs mới thành công");
        navigate("/admin/jobs");
      } else {
        toast.error("Thêm jobs mới không thành công");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <h5 className="mt-3 mb-4 text-center">Tạo job mới</h5>
      <Form
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 18,
        }}
        onFinish={handleSubmit}
        layout="horizontal"
        size="middle"
        style={{
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        <Form.Item
          label="Tên job"
          name="name"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập vào tên job!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Tags"
          name="tags"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn ít nhất 1 tags!",
            },
          ]}
        >
          <Select
            mode="multiple"
            style={{
              width: "100%",
            }}
            placeholder="Chọn tags"
            options={tags.map((tag) => {
              return {
                label: tag.value,
                value: tag.key,
              };
            })}
          ></Select>
        </Form.Item>
        <Form.Item
          label="Thành phố"
          name="city"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn ít nhất 1 thành phố!",
            },
          ]}
        >
          <Select
            mode="multiple"
            style={{
              width: "100%",
            }}
            placeholder="Chọn thành phố"
            options={cities.map((city) => {
              return {
                label: city.value,
                value: city.key,
              };
            })}
          ></Select>
        </Form.Item>
        <Form.Item
          label="Mức lương"
          name="salary"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập vào tiền lương!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Trạng thái"
          name="status"
          valuePropName="checked"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn chọn trạng thái!",
            },
          ]}
        >
          <Switch />
        </Form.Item>
        <Form.Item
          name="description"
          label="Mô tả"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mô tả công việc!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Action">
          <Button icon={loading ? <LoadingOutlined /> : ""} htmlType="submit">
            Tạo
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
