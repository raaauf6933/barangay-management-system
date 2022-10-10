import React from "react";
import { Card } from "antd";
import AnnouncementForm from "../../components/AnnouncementForm";
import FormComponent from "../../../../components/Form";
import usePost from "../../../../../hooks/usePost";
import { CREATE_ANNOUNCEMENT } from "../../api";

const AnnouncementCreate = () => {
  const [createAnnouncement] = usePost({});

  const handleSubmit = async (form) => {
    console.log(form);
    const formData = new FormData();

    const images = form.images.map((e) => e.originFileObj);

    for (const img of images) {
      formData.append("files", img);
    }

    formData.append(
      "data",
      JSON.stringify({
        title: form.title,
        content: form.content,
        status: form.status,
      })
    );

    await createAnnouncement({
      url: CREATE_ANNOUNCEMENT,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        data: "application/json",
      },
    });

    return null;
  };
  return (
    <>
      <Card title="Create Announcement">
        <div
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        // }}
        >
          <FormComponent
            initial={{
              title: null,
              content: null,
              status: true,
              images: [],
            }}
            onSubmit={handleSubmit}
          >
            {({ change, data, submit }) => (
              <AnnouncementForm change={change} data={data} submit={submit} />
            )}
          </FormComponent>
        </div>
      </Card>
    </>
  );
};

export default AnnouncementCreate;
