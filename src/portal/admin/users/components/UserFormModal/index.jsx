import React, { useEffect } from "react";
import { Divider, Form, Input, Typography, Modal } from "antd";

const UserFormModal = (props) => {
  const { title, formName, open, close, onSubmit, data, loading, type } = props;
  const [form] = Form.useForm();

  const password_ = Form.useWatch("password", form);

  const initialData = {
    first_name: null || data?.first_name,
    last_name: null || data?.last_name,
    email: null || data?.email,
    password: null,
    confirm_password: null,
    status: false || data?.status,
  };

  useEffect(() => {
    form.setFieldsValue(initialData);
  }, [data]);

  useEffect(() => {
    return () => {
      form.resetFields(Object.keys(initialData));
    };
  }, []);

  return (
    <>
      <Form
        id={formName}
        form={form}
        onFinish={onSubmit}
        // validateTrigger="onFinish"
      >
        <Modal
          title={title}
          open={open}
          okButtonProps={{
            htmlType: "submit",
            form: formName,
            loading,
          }}
          cancelButtonProps={{
            onClick: close,
          }}
          okText="Save"
          onCancel={close}
        >
          <Form.Item
            label={<span className="form-label">First Name</span>}
            name="first_name"
            labelCol={{ span: 24 }}
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            label={<span className="form-label">Last Name</span>}
            name="last_name"
            labelCol={{ span: 24 }}
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input size="large" />
          </Form.Item>
          {/* <Divider>
            {" "}
            <Typography.Text>Login Credentials</Typography.Text>
          </Divider>
          <Form.Item
            label={<span className="form-label">Email</span>}
            name="email"
            labelCol={{ span: 24 }}
            rules={[
              { required: true, message: "This field is required" },
              { type: "email", message: "Input valid email!" },
            ]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            label={<span className="form-label">Password</span>}
            name="password"
            labelCol={{ span: 24 }}
            rules={[
              {
                required: type === "edit" ? false : true,
                message: "This field is required",
              },
              {
                min: 6,
                message: "Password should be minimum of 6 characters",
              },
            ]}
          >
            <Input size="large" type="password" />
          </Form.Item>
          <Form.Item
            label={<span className="form-label">Confirm Password</span>}
            name="confirm_password"
            labelCol={{ span: 24 }}
            rules={[
              {
                required: type === "edit" && !password_ ? false : true,
                message: "This field is required",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Confirm password doesn't match!");
                },
              }),
            ]}
            dependencies={["password"]}
          >
            <Input size="large" type="password" />
          </Form.Item> */}
        </Modal>
      </Form>
    </>
  );
};

export default UserFormModal;
