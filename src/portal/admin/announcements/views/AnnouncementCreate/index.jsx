import React from "react";
import {
  Card,
  Form,
  Input,
  Button,
  Switch,
  Upload,
  message,
  Select,
} from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

const AnnouncementCreate = () => {
  const [state, setState] = useState({
    loading: false,
  });

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) =>
        setState({
          imageUrl,
          loading: false,
        })
      );
    }
  };

  const { loading, imageUrl } = state;
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <Card title="Create Announcement">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "40em",
            }}
          >
            <Form
              name="basic"
              initialValues={{ remember: true }}
              autoComplete="off"
            >
              <Form.Item
                label="Title"
                name="title"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Type"
                name="type"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Select placeholder="Select Type" onChange={handleChange}>
                  <Select.Option value="NEWS">News</Select.Option>
                  <Select.Option value="ANNOUNCEMENTS">
                    Announcements
                  </Select.Option>
                  <Select.Option value="EVENTS">Events</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Description"
                name="description"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.TextArea rows={4} showCount />
              </Form.Item>
              <Form.Item
                label="Status"
                name="status"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Switch defaultChecked />
              </Form.Item>

              <Form.Item
                label="Announcement Image"
                name="image"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{ width: "100%" }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </Form.Item>

              <Form.Item
                style={{
                  textAlign: "center",
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    marginRight: "1em",
                  }}
                >
                  Saved Announcement
                </Button>
                <Button type="default" htmlType="button">
                  Cancel
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Card>
    </>
  );
};

export default AnnouncementCreate;
