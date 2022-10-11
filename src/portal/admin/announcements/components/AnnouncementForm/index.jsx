import React from "react";
import RichTextEditor from "../../../../components/RichTextEditor";
import UploadMultiImage from "../../../../components/UploadMultiImage";
import { Form, Input, Button, Switch } from "antd";
import { AnnouncementListPath } from "../../url";
import { useNavigate } from "react-router-dom";

const AnnouncementForm = (props) => {
  const { change, data, submit, loading } = props;
  const navigate = useNavigate();

  return (
    <>
      <Form.Item
        // label="Title"
        name="title"
        rules={[{ required: true, message: "This field is required" }]}
      >
        <Input
          placeholder="Title"
          size="large"
          value={data.title}
          defaultValue={data.title}
          name="title"
          onChange={change}
          disabled={loading}
        />
      </Form.Item>
      {/* 
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
        </Form.Item> */}
      <Form.Item
        rules={[{ required: true, message: "This field is required" }]}
      >
        <RichTextEditor
          onEditorChange={(content) =>
            change({
              target: {
                name: "content",
                value: content,
              },
            })
          }
          initialValue={data.content}
          disabled={loading}
        />
        {/* <Input.TextArea rows={4} showCount /> */}
      </Form.Item>
      <Form.Item label="Status" name="status">
        <Switch
          checkedChildren="Active"
          unCheckedChildren="Inactive"
          defaultChecked
          checked={data.status}
          onChange={(value) => change({ target: { name: "status", value } })}
          disabled={loading}
        />
      </Form.Item>

      <Form.Item label="Announcement Image" name="image">
        {/* <Upload
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
          </Upload> */}
        <UploadMultiImage
          change={(images) =>
            change({
              target: {
                name: "images",
                value: images,
              },
            })
          }
          data={data.images}
          onDelete={(value) =>
            change({
              target: {
                name: "forDeleteImages",
                value: [...data.forDeleteImages, value.toString()],
              },
            })
          }
          disabled={loading}
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
          onClick={submit}
          loading={loading}
        >
          Saved Announcement
        </Button>
        <Button
          type="default"
          htmlType="button"
          onClick={() => navigate(AnnouncementListPath)}
        >
          Cancel
        </Button>
      </Form.Item>
    </>
  );
};

export default AnnouncementForm;
