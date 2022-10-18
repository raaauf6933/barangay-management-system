import { Form, Input, Modal, Switch } from "antd";
import React, { useEffect } from "react";

const PositionFormModal = (props) => {
  const { open, title, onSubmit, close, data, loading, formName } = props;
  const [form] = Form.useForm();
  const formStatus = Form.useWatch("status", form);

  const initialData = {
    name: undefined || data?.name,
    status: false || data?.status,
  };

  useEffect(() => {
    form.setFieldsValue(initialData);

    return () => {
      form.resetFields(["name", "status"]);
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
            label={<span className="form-label">Name </span>}
            rules={[{ required: true, message: "This field is required" }]}
            labelCol={{ span: 24 }}
            name="name"
          >
            <Input size="large" autoFocus />
          </Form.Item>
          <Form.Item
            label={<span className="form-label">Status </span>}
            rules={[{ required: true, message: "This field is required" }]}
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
        </Modal>
      </Form>
    </>
  );
};

export default PositionFormModal;
