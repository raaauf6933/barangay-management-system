import React from "react";
import { Card, Input, Form, Select, Button } from "antd";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { CREATE_RESIDENT_ISSUANCE } from "./../../../../admin/issuance_management/api";
import { useUser } from "./../../../../context/auth/context";
import usePost from "../../../../../hooks/usePost";
import useNotify from "../../../../hooks/useNotify";

const IssuanceCreate = () => {
  const [form] = Form.useForm();
  const notify = useNotify();
  const navigate = useNavigate();
  const { user } = useUser();

  const issuance_types = [
    {
      label: "Barangay Clearance",
      value: 1,
    },
    {
      label: "Certificate Of Indigency",
      value: 2,
    },
    {
      label: "Certificate Of Residency",
      value: 3,
    },
    // {
    //   label: "Barangay Business Clearance",
    //   value: 4,
    // },
  ];

  const [createRequest] = usePost({
    onComplete: () => {
      notify(
        "success",
        "Your request has been submited",
        "Barangay staff will review your request shortly"
      );
      navigate("/portal/residence/issuance");
    },
    onError: (e) => {
      notify("error", e.response.data.message);
    },
  });

  const inititalData = {
    issuance_type: null,
    purpose: null,
  };

  const handleSubmit = (data) => {
    createRequest({
      url: CREATE_RESIDENT_ISSUANCE,
      data: {
        resident: user.id,
        issuance_type: data.issuance_type,
        purpose: data.purpose,
      },
    });
    console.log(data);
  };

  return (
    <>
      <Card title="Create Request">
        <Form form={form} initialValues={inititalData} onFinish={handleSubmit}>
          <Form.Item
            label={<span className="form-label">Request Type</span>}
            labelCol={{ span: 24 }}
            name="issuance_type"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Select
              placeholder="Select Issuance Type"
              size="large"
              name="issuance_type"
              // disabled={loading}
            >
              {issuance_types.map((e) => (
                <Select.Option key={e.value} value={e.value}>
                  {e.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label={<span className="form-label">Purpose</span>}
            labelCol={{ span: 24 }}
            name="purpose"
            rules={[{ required: true, message: "This field is required" }]}
            validateFirst
          >
            <Input.TextArea
              placeholder="Input Purpose"
              size="large"
              showCount
              maxLength={100}
              style={{ height: 120, resize: "none" }}
              // onChange={change}
              // value={data.purpose}
              // defaultValue={data.purpose}
              name="purpose"
              // disabled={loading}
            />
          </Form.Item>
          <Form.Item
            style={{
              textAlign: "center",
            }}
          >
            <Button
              type="primary"
              style={{
                marginRight: "1em",
              }}
              htmlType="submit"
              // onClick={submit}
              // loading={loading}
              // disabled={loading}
            >
              <strong>Submit</strong>
            </Button>
            <Button
              type="default"
              onClick={() => navigate("/portal/residence/issuance")}
            >
              <strong>Cancel</strong>
            </Button>
          </Form.Item>
        </Form>
        {/* <Radio.Group onChange={onChange} value={value}>
          <Space direction="vertical">
            <Radio value={1}>CLEARANCE</Radio>
            <Radio value={2}>RESIDENCY</Radio>
            <Radio value={3}>BUSINESS PERMIT</Radio>
            <Radio value={4}>INDIGENCY</Radio>
          </Space>
        </Radio.Group>
        <Divider />
        <div className="action-area">
          <Button>Back</Button>
          <Button type="primary" onClick={() => navigate(CreatePath_Form)}>
            Proceed
          </Button>
        </div> */}
      </Card>
    </>
  );
};

export default IssuanceCreate;
