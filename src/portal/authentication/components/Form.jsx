import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useAuth } from "./../../context/auth/context";

const FormComponent = () => {
  const { login, loading } = useAuth();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    // console.log(values);

    const result = await login(values);

    if (result.response.status === 400) {
      form.setFields([
        {
          name: "username",
          errors: [result.response.data.message],
        },
        {
          name: "password",
          errors: [result.response.data.message],
        },
      ]);
    }
  };

  return (
    <Form
      form={form}
      id="loginForm"
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={
            <UserOutlined
              style={{
                color: "#08c",
              }}
              className="site-form-item-icon"
            />
          }
          placeholder="Username"
          size="large"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={
            <LockOutlined
              style={{
                color: "#08c",
              }}
              className="site-form-item-icon"
            />
          }
          type="password"
          placeholder="Password"
          size="large"
        />
      </Form.Item>
      {/* <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <a className="login-form-forgot" href="##">
            Forgot password ?
          </a>
        </Form.Item>
      </Form.Item> */}

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            width: "100%",
          }}
          size="large"
          loading={loading}
        >
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
