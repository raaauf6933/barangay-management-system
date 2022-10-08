import React from "react";
import { Card, Input, Divider, Button, Upload, message, Modal } from "antd";
import ConfirmationDialog from "../../../../../../components/ConfirmationDialog";
import { InboxOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { parse as parseQs, stringify as stringifyQs } from "qs";
import createDialogAcitonHandlers from "../../../../../../utils/createActionHandler";
import { certificateListPath } from "../../../../url";

const { Dragger } = Upload;
const { TextArea } = Input;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const FormCertificate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const qs = parseQs(location.search.substr(1));
  const params = qs;

  const [openModal, onClose] = createDialogAcitonHandlers(
    navigate,
    (params) => {
      return "?" + stringifyQs(params);
    },
    params
  );

  const onSubmit = () => {
    Modal.success({
      content: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <h2>Your Request is Being Reviewed</h2>
          <span>
            This may take up to 5 business days. You will receive an email when
            your request has been processed. Kindly check your email regularly
          </span>
        </div>
      ),
      onOk: () => navigate(certificateListPath),
    });
    onClose();
  };
  return (
    <>
      <Card title={<h2>Step - 2 Fill up Form</h2>}>
        <TextArea
          showCount
          maxLength={200}
          style={{ height: 120 }}
          autoSize={false}
          rows={2}
          className="form-textarea"
          placeholder="Purpose"
        />

        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload Valid ID (Postal ID,
            Philhealth ID, Employment ID etc.)
          </p>
          <p className="ant-upload-hint">
            Please upload JPEG, PNG File Format Only
          </p>
        </Dragger>
        <Divider />
        <div className="action-area">
          <Button>Back</Button>
          <Button type="primary" onClick={() => openModal("onSuccess")}>
            Submit
          </Button>
        </div>
      </Card>
      <ConfirmationDialog
        open={params.action === "onSuccess"}
        onClose={onClose}
        onSubmit={onSubmit}
        title="Confirmation"
      >
        <h3>Are you sure you want to submit?</h3>
      </ConfirmationDialog>
    </>
  );
};

export default FormCertificate;
