import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload, message } from "antd";
import React, { useState } from "react";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

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

const UploadMultiImage = (props) => {
  const { change, data, onDelete, disabled, max } = props;

  const initialData = data
    ? data.map((e) => ({
        uid: e.id,
        name: "xxx.png",
        status: "done",
        type: "image/png",
        isInit: true,
        url: e.url,
      }))
    : [];

  console.log(initialData);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState(initialData);
  // const [fileToUpload, setFileToUpload] = useState();

  // const formData = new FormData();

  const handleCancel = () => setPreviewOpen(false);

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

  const handleChange = ({ fileList: newFileList }) => {
    const valid_files = newFileList
      .filter(
        (e) =>
          ["image/jpg", "image/jpeg", "image/png"].includes(e.type) &&
          e.status !== "size_error"
      )
      .map((e) => ({ ...e, status: "done" }));

    setFileList(valid_files);

    // formData.set(
    //   "files",
    //   valid_files.map((e) => e.originFileObj)
    // );

    change(valid_files);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <>
      <Upload
        // action={(e) => console.log(e)}
        maxCount={max ? max : 2}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        accept="image/png, image/jpeg"
        beforeUpload={beforeUpload}
        onRemove={(img) => img.isInit && onDelete(img.uid)}
        defaultFileList={
          data
            ? data.map((e) => ({
                uid: "1",
                name: "xxx.png",
                status: "done",
                response: "Server Error 500", // custom error message to show
                url: e.url,
              }))
            : []
        }
        disabled={disabled}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <span>(Max: {max} per upload & must less than 1mb)</span>
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

export default UploadMultiImage;
