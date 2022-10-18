import { Form, Input, Modal, Switch, InputNumber } from "antd";
import React, { useEffect } from "react";
import UploadImage from "../UploadImage";

const OfficialFormModal = (props) => {
  const { open, title, onSubmit, close, data, loading, formName } = props;
  const [form] = Form.useForm();
  const formStatus = Form.useWatch("status", form);
  const con = Form.useWatch(["contact_no"], form);

  console.log(typeof con);
  const initialData = {
    first_name: undefined || data?.first_name,
    last_name: undefined || data?.last_name,
    contact_no: 0 || data?.contact_no,
    email: undefined || data?.email,
    status: false || data?.status,
  };

  useEffect(() => {
    form.setFieldsValue(initialData);

    return () => {
      form.resetFields([
        "first_name",
        "last_name",
        "contact_no",
        "email",
        "status",
      ]);
    };
  }, [data && loading]);

  return (
    <>
      <Form
        form={form}
        initialValues={initialData}
        onFinish={onSubmit}
        id={formName}
      >
        <Modal
          title={title}
          open={open}
          okButtonProps={{
            htmlType: "submit",
            form: formName,
          }}
          cancelButtonProps={{
            onClick: close,
          }}
          okText="Save"
          onCancel={close}
        >
          <Form.Item
            label={<span className="form-label">First Name </span>}
            rules={[{ required: true, message: "This field is required" }]}
            labelCol={{ span: 24 }}
            name="first_name"
          >
            <Input size="large" autoFocus />
          </Form.Item>
          <Form.Item
            label={<span className="form-label">Last Name </span>}
            rules={[{ required: true, message: "This field is required" }]}
            labelCol={{ span: 24 }}
            name="last_name"
          >
            <Input size="large" autoFocus />
          </Form.Item>
          <Form.Item
            label={<span className="form-label">Contact No. </span>}
            rules={[
              {
                pattern: /^63/,
                message:
                  "Contact no. should starts with 63 (for example, 639066000801)",
              },
            ]}
            labelCol={{ span: 24 }}
            name="contact_no"
          >
            <InputNumber
              size="large"
              style={{ width: "100%" }}
              controls={false}
              minLength={12}
              maxLength={12}
            />
          </Form.Item>
          <Form.Item
            label={<span className="form-label">Email </span>}
            rules={[
              {
                type: "email",
                message: "Value must be valid email",
              },
            ]}
            labelCol={{ span: 24 }}
            name="email"
          >
            <Input size="large" autoFocus />
          </Form.Item>
          <Form.Item
            label={<span className="form-label">Status </span>}
            // rules={[{ required: true, message: "This field is required" }]}
            labelCol={{ span: 24 }}
            name="status"
          >
            <Switch
              // onChange={(e) => form.setFieldValue("status", e)}
              checkedChildren="Active"
              unCheckedChildren="Inactive"
              checked={formStatus}
            />
          </Form.Item>
          <Form.Item
            label={<span className="form-label">Official Photo</span>}
            labelCol={{ span: 24 }}
            name="image"
          >
            <UploadImage />
          </Form.Item>
        </Modal>
      </Form>
    </>
  );
};

export default OfficialFormModal;
