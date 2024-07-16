import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import { Button, Checkbox, TimePicker, Form, Input, InputNumber } from "antd";
import { companyService } from "../../../services/CompanyService";
import {
  getCompanyByTokenAction,
  updateCompanyAction,
} from "../../../redux/actions/CompanyActions";
import toast from "react-hot-toast";
import dayjs from "dayjs";
const { TextArea } = Input;

export function Company() {
  const [loading, setLoading] = useState(false);
  const [componentDisabled, setComponentDisabled] = useState(true);
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.CompanyReducer);
  const [updateInfo, setUpdateInfo] = useState(info);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      companyName: updateInfo.companyName,
      phone: updateInfo.phone,
      email: updateInfo.email,
      password: updateInfo.password,
      token: updateInfo.token,
      address: updateInfo.address,
      workingTime: [
        dayjs(updateInfo.workingTimeStart, "HH:mm"),
        dayjs(updateInfo.workingTimeEnd, "HH:mm"),
      ],
      website: updateInfo.website,
      quantityPeople: updateInfo.quantityPeople,
      description: updateInfo.description,
      detail: updateInfo.detail,
    });
    const getCompany = async () => {
      const result = await companyService.getInfoByToken();
      dispatch(getCompanyByTokenAction(result[0]));
    };
    getCompany();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateInfo({
      ...updateInfo,
      [name]: value,
    });
  };

  const handleChangeTimePicker = (dates, dateStrings, info) => {
    const [start, end] = dateStrings;
    setUpdateInfo({
      ...updateInfo,
      ["workingTimeStart"]: start,
      ["workingTimeEnd"]: end,
    });
  };

  const handleSubmit = async () => {
    console.log(updateInfo);
    delete updateInfo.id;
    setLoading(true);
    const result = await companyService.updateProfile(updateInfo, info.id);
    setTimeout(() => {
      if (result) {
        dispatch(updateCompanyAction(result));
        toast.success("Cập nhật hồ sơ công ty thành công");
      } else {
        toast.error("Cập nhập không thành công");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Bấm để có thể điền thông tin cập nhật
      </Checkbox>
      <Form
        form={form}
        name="company_form"
        className="company-form"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 18,
        }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{
          maxWidth: 600,
          margin: "auto",
          marginTop: "2rem",
        }}
        onSubmitCapture={handleSubmit}
      >
        <Form.Item
          label="Tên công ty"
          name="companyName"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập vào tên công ty!",
            },
          ]}
        >
          <Input name="companyName" onChange={handleChange} />
        </Form.Item>
        <Form.Item
          label="Email"
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
          name="email"
        >
          <Input name="email" onChange={handleChange} />
        </Form.Item>
        <Form.Item
          label="Số điện thoại"
          name="phone"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập vào số điện thoại!",
            },
            {
              max: 12,
              message: "Số điện thoại chỉ gồm 10 số",
            },
          ]}
        >
          <Input name="phone" onChange={handleChange} />
        </Form.Item>
        <Form.Item
          label="Địa chỉ"
          name="address"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập vào địa chỉ!",
            },
          ]}
        >
          <Input name="address" onChange={handleChange} />
        </Form.Item>
        <Form.Item
          label="Thời gian làm việc"
          name="workingTime"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập vào thời gian làm việc!",
            },
          ]}
        >
          <TimePicker.RangePicker
            onCalendarChange={handleChangeTimePicker}
            name="workingTime"
          />
        </Form.Item>
        <Form.Item
          label="Website"
          name="website"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập vào địa chỉ website!",
            },
          ]}
        >
          <Input name="website" onChange={handleChange} />
        </Form.Item>
        <Form.Item
          label="Số nhân viên"
          name="quantityPeople"
          rules={[
            {
              required: true,
              message:
                "Vui lòng nhập vào số lượng nhân viên hiện có của công ty!",
            },
          ]}
        >
          <InputNumber name="quantityPeople" onChange={handleChange} />
        </Form.Item>
        <Form.Item
          label="Mô tả"
          name="description"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập vào mô tả công ty!",
            },
          ]}
        >
          <TextArea name="description" rows={4} onChange={handleChange} />
        </Form.Item>
        <Form.Item
          label="Chi tiết"
          name="detail"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập vào thông tin chi tiết của công ty!",
            },
          ]}
        >
          <TextArea name="detail" rows={4} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Hành động">
          <Button htmlType="submit" icon={loading ? <LoadingOutlined /> : ""}>
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
