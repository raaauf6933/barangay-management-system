import React from "react";
import { Button, Card, Col, Form, Input, Row, Typography } from "antd";
import "./style.css";
import useFetch from "../../hooks/useFetch";
import { GET_MY_PROFILE, UPDATE_PROFILE } from "./api";
import { useEffect } from "react";
import usePost from "../../hooks/usePost";
import useNotify from "../hooks/useNotify";

const MyProfile = () => {
  const [form] = Form.useForm();
  const formPassword = Form.useWatch(["new_password"], form);
  const notify = useNotify();
  const { response } = useFetch({
    url: GET_MY_PROFILE,
  });

  const user = response?.data?.user;

  const initialValue = {
    first_name: user?.first_name || null,
    last_name: user?.last_name || null,
    email: user?.email,
    current_password: null,
    new_password: "",
    confirm_password: "",
  };

  const [updateProfile, updateProfileOpts] = usePost({
    onComplete: () => {
      form.setFieldsValue(initialValue);
      notify("success", "Profile successfully updated!");
    },
    onError: (e) => {
      notify("error", e?.response?.data?.message);
    },
  });

  useEffect(() => {
    form.setFieldsValue(initialValue);
  }, [user]);

  const handleUpdateProfile = (formData) => {
    updateProfile({
      url: UPDATE_PROFILE,
      data: {
        current_password: formData.current_password,
        new_password: formData.new_password,
      },
    });
  };

  return (
    <>
      {/* <div className="my-profile-content"> */}
      <Row align="middle" justify="center">
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Card>
            <div className="my-profile-content">
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <Typography.Title>My Account</Typography.Title>
              </div>
              <Form
                form={form}
                initialValues={initialValue}
                onFinish={handleUpdateProfile}
              >
                <Form.Item
                  label={<span className="form-label">First Name</span>}
                  name="first_name"
                  labelCol={{ span: 24 }}
                  //   rules={[
                  //     { required: true, message: "This field is required" },
                  //   ]}
                >
                  <Input size="large" disabled />
                </Form.Item>
                <Form.Item
                  label={<span className="form-label">Last Name</span>}
                  name="last_name"
                  labelCol={{ span: 24 }}
                  //   rules={[
                  //     { required: true, message: "This field is required" },
                  //   ]}
                >
                  <Input size="large" disabled />
                </Form.Item>
                <Form.Item
                  label={<span className="form-label">Email</span>}
                  name="email"
                  labelCol={{ span: 24 }}
                  //   rules={[
                  //     { required: true, message: "This field is required" },
                  //   ]}
                >
                  <Input size="large" disabled />
                </Form.Item>
                <Form.Item
                  label={<span className="form-label">Current Password</span>}
                  name="current_password"
                  labelCol={{ span: 24 }}
                  rules={[
                    { required: true, message: "This field is required" },
                    {
                      min: 6,
                    },
                  ]}
                >
                  <Input.Password size="large" />
                </Form.Item>
                <Form.Item
                  label={<span className="form-label">New Password</span>}
                  name="new_password"
                  labelCol={{ span: 24 }}
                  rules={[
                    { required: true, message: "This field is required" },
                    {
                      min: 6,
                    },
                  ]}
                >
                  <Input.Password size="large" />
                </Form.Item>
                <Form.Item
                  label={<span className="form-label">Confirm Password</span>}
                  name="confirm_password"
                  labelCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: "This field is required",
                    },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (!value || getFieldValue("new_password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          "Confirm password doesn't match!"
                        );
                      },
                    }),
                  ]}
                  dependencies={["new_password"]}
                >
                  <Input.Password size="large" />
                </Form.Item>
                <Form.Item labelCol={{ span: 24 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    size="large"
                    disabled={!formPassword || updateProfileOpts.loading}
                  >
                    <strong>Update Profile</strong>
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Card>
        </Col>
      </Row>
      {/* </div> */}
    </>
  );
};

export default MyProfile;
