import { Form, Button, Input, Row, Col, Select, Switch } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ResidentsListPath } from "./../../url";
import nationalities from "./../../../../utils/nationalities";

const ResidentForm = (props) => {
  const { loading, onSubmit, data } = props;
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const formStatus = Form.useWatch("status", form);
  const formIsVoter = Form.useWatch("is_voter", form);
  console.log(data);
  const initialData = {
    first_name: null || data?.first_name,
    middle_name: null || data?.middle_name,
    last_name: null || data?.last_name,
    gender: null || data?.gender,
    birth_date: null || data?.birth_date,
    email: null || data?.email,
    contact_number: null || data?.contact_number,
    address: null || data?.address,
    civil_status: null || data?.civil_status,
    citizenship: data?.citizenship || "Filipino",
    status: data?.status !== undefined ? data?.status : true,
    is_voter: data?.is_voter,
  };

  useEffect(() => {
    form.setFieldsValue(initialData);
  }, [data]);

  return (
    <>
      <Form form={form} initialValues={initialData} onFinish={onSubmit}>
        <Row gutter={[16]}>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Form.Item
              label={<span className="form-label">First Name</span>}
              name="first_name"
              labelCol={{ span: 24 }}
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Input size="large" placeholder="Enter First Name" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Form.Item
              label={<span className="form-label">Middle Name</span>}
              name="middle_name"
              labelCol={{ span: 24 }}
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Input size="large" placeholder="Enter Middle Name" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Form.Item
              label={<span className="form-label">Last Name</span>}
              name="last_name"
              labelCol={{ span: 24 }}
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Input size="large" placeholder="Enter Last Name" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <Form.Item
              label={<span className="form-label">Gender</span>}
              name="gender"
              labelCol={{ span: 24 }}
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Select placeholder="Select Gender" size="large">
                <Select.Option value="female">Female</Select.Option>
                <Select.Option value="male">Male</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <Form.Item
              label={<span className="form-label">Birth Date</span>}
              name="birth_date"
              labelCol={{ span: 24 }}
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Input size="large" placeholder="Enter Last Name" type="date" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <Form.Item
              label={<span className="form-label">Email</span>}
              name="email"
              labelCol={{ span: 24 }}
              rules={[
                { required: true, message: "This field is required" },
                { type: "email", message: "Input valid email" },
              ]}
            >
              <Input size="large" placeholder="Enter Email" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <Form.Item
              label={
                <span className="form-label">Contact No. / Mobile Number</span>
              }
              name="contact_number"
              labelCol={{ span: 24 }}
              rules={[
                { required: true, message: "This field is required" },
                {
                  pattern: /^63/,
                  message:
                    "Contact no. should starts with 63 (for example, 639066000801)",
                },
              ]}
            >
              <Input
                size="large"
                placeholder="Enter Contact Number / Mobile Number"
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item
              label={<span className="form-label">Address</span>}
              name="address"
              labelCol={{ span: 24 }}
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Input size="large" placeholder="Enter Address" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Form.Item
              label={<span className="form-label">Civil Status</span>}
              name="civil_status"
              labelCol={{ span: 24 }}
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Select placeholder="Select Civil Status" size="large">
                <Select.Option value="SINGLE">Single</Select.Option>
                <Select.Option value="MARRIED">Married</Select.Option>
                <Select.Option value="DIVORCED">Divorced</Select.Option>
                <Select.Option value="WIDOWED">Widowed</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Form.Item
              label={<span className="form-label">Citizenship</span>}
              name="citizenship"
              labelCol={{ span: 24 }}
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Select placeholder="Select Citizenship" size="large">
                {nationalities.map((e) => (
                  <>
                    <Select.Option value={e}>{e}</Select.Option>
                  </>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Form.Item
              label={<span className="form-label">Is Voter</span>}
              name="is_voter"
              labelCol={{ span: 24 }}
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Switch
                // onChange={(e) => form.setFieldValue("status", e)}
                checkedChildren="Yes"
                unCheckedChildren="No"
                checked={formIsVoter}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item
              label={<span className="form-label">Status</span>}
              name="status"
              labelCol={{ span: 24 }}
            >
              <Switch
                // onChange={(e) => form.setFieldValue("status", e)}
                checkedChildren="Active"
                unCheckedChildren="Inactive"
                checked={formStatus}
              />
            </Form.Item>
          </Col>
        </Row>

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
            loading={loading}
            disabled={loading}
          >
            <strong>Submit</strong>
          </Button>
          <Button type="default" onClick={() => navigate(ResidentsListPath)}>
            <strong>Cancel</strong>
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ResidentForm;
