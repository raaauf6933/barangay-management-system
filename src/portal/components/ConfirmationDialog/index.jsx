import React from "react";
import { Modal } from "antd";

const ConfirmationDialog = (props) => {
  const { open, onClose, onSubmit, children, title } = props;

  return (
    <Modal
      title={title ? title : "Confirmation Dialoggg"}
      visible={open}
      onOk={onSubmit}
      onCancel={onClose}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </Modal>
  );
};

export default ConfirmationDialog;
