import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";

import { message, Upload, Modal } from "antd";

const { Dragger } = Upload;

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 1;
  if (!isLt2M) {
    message.error("Image must smaller than 1MB!");
    file.status = "size_error";
  }

  return isJpgOrPng && isLt2M;
}

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const UploadImage = (props) => {
  const { change, data } = props;
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const fileListData =
    data &&
    data.map((e) => ({
      uid: e.id,
      name: e.name,
      status: "done",
      type: "image/png",
      isInit: true,
      url: e.url,
    }));

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleCancel = () => setPreviewOpen(false);

  const handleChange = ({ fileList: newFileList }) => {
    const valid_files = newFileList
      .filter(
        (e) =>
          ["image/jpg", "image/jpeg", "image/png"].includes(e.type) &&
          e.status !== "size_error"
      )
      .map((e) => ({ ...e, status: "done" }));

    change(valid_files);
  };

  return (
    <>
      <Dragger
        {...props}
        maxCount={1}
        onPreview={handlePreview}
        onChange={handleChange}
        accept="image/png, image/jpeg"
        beforeUpload={beforeUpload}
        fileList={fileListData}
        defaultFileList={fileListData}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag image to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support only for single image, accepted file (png/jpeg)
        </p>
      </Dragger>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};

export default UploadImage;
