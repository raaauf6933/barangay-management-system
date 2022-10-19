import { Form, Input, Modal, Switch, InputNumber, Select } from "antd";
import React, { useEffect } from "react";
import UploadImage from "../UploadImage";

const { Option } = Select;

const OfficialFormModal = (props) => {
  const {
    open,
    title,
    onSubmit,
    close,
    data,
    loading,
    formName,
    responsePositions,
    loadingPositions,
  } = props;
  const [form] = Form.useForm();
  const formStatus = Form.useWatch("status", form);
  const formImage = Form.useWatch(["image"], form);

  const initialData = {
    position: undefined || data?.Position?.id,
    first_name: undefined || data?.first_name,
    last_name: undefined || data?.last_name,
    contact_no: 0 || data?.contact_no,
    email: undefined || data?.email,
    status: data?.status !== undefined ? data?.status : false,
    image: data?.photo_url
      ? [
          {
            uid: data?.photo_url,
            name: "Official Photo",
            status: "done",
            type: "image/png",
            isInit: true,
            url: data?.photo_url,
          },
        ]
      : [],
  };

  useEffect(() => {
    form.setFieldsValue(initialData);
  }, [data]);

  useEffect(
    () => () => {
      form.resetFields([
        "position",
        "first_name",
        "last_name",
        "contact_no",
        "email",
        "status",
        "image",
      ]);
    },
    [open]
  );

  const positions = responsePositions?.data?.positions
    ? responsePositions?.data?.positions.map((position) => ({
        value: position?.id,
        label: position?.name,
      }))
    : [];

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
            loading,
          }}
          cancelButtonProps={{
            onClick: close,
          }}
          okText="Save"
          onCancel={close}
        >
          <Form.Item
            // eslint-disable-next-line react/no-unescaped-entities
            label={<span className="form-label">Official's Position</span>}
            labelCol={{ span: 24 }}
            name="position"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Select
              placeholder="Select Position"
              size="large"
              name="position"
              loading={loadingPositions || loading}
            >
              {positions.map((e) => (
                <Option key={e.value} value={e.value}>
                  {e.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
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
            <UploadImage
              change={(images) => form.setFieldValue("image", images)}
              data={formImage}
            />
          </Form.Item>
        </Modal>
      </Form>
    </>
  );
};

export default OfficialFormModal;
