import React from "react";
import { Card } from "antd";
import AnnouncementForm from "../../components/AnnouncementForm";
import FormComponent from "../../../../components/Form";
import usePost from "../../../../../hooks/usePost";
import { CREATE_ANNOUNCEMENT } from "../../api";
import useNotify from "../../../../hooks/useNotify";
import { useNavigate } from "react-router-dom";
import { AnnouncementListPath } from "../../url";

const AnnouncementCreate = () => {
  const notify = useNotify();
  const navigate = useNavigate();

  const [createAnnouncement, createAnnouncementOpts] = usePost({
    onComplete: () => {
      notify("success", "Announcement has been created!");
      navigate(AnnouncementListPath);
    },
    onError: (e) => {
      notify("error", e.response?.data?.message);
    },
  });

  const handleSubmit = async (form) => {
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
              content: "<h2>This is the initial content of the editor.</h2>",
              status: true,
              images: [],
            }}
            onSubmit={handleSubmit}
          >
            {({ change, data, submit }) => (
              <AnnouncementForm
                change={change}
                data={data}
                submit={submit}
                loading={createAnnouncementOpts.loading}
              />
            )}
          </FormComponent>
        </div>
      </Card>
    </>
  );
};

export default AnnouncementCreate;
