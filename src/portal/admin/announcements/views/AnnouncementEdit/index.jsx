import React from "react";
import { Card } from "antd";
import AnnouncementForm from "../../components/AnnouncementForm";
import FormComponent from "../../../../components/Form";
import usePost from "../../../../../hooks/usePost";
import useFetch from "../../../../../hooks/useFetch";
import { EDIT_ANNOUNCEMENT, GET_ANNOUNCEMENT } from "../../api";
import useNotify from "../../../../hooks/useNotify";
import { useNavigate, useParams } from "react-router-dom";
import { AnnouncementListPath } from "../../url";

const AnnouncementEdit = () => {
  const { id } = useParams();
  const notify = useNotify();
  const navigate = useNavigate();

  const { loading: fetchLoading, response } = useFetch(
    {
      url: GET_ANNOUNCEMENT,
      params: {
        id,
      },
    },
    {
      skip: !id,
    }
  );

  const initData = response?.data?.announcements;

  const [editAnnouncement, editAnnouncementOpts] = usePost({
    onComplete: () => {
      notify("success", "Changes has been successfully completed!");
      navigate(AnnouncementListPath);
    },
    onError: (e) => {
      notify("error", e.response?.data?.message);
    },
  });

  const handleSubmit = async (form) => {
    const formData = new FormData();
    if (form.images.some((e) => e.originFileObj)) {
      const images = form.images
        .filter((e) => !e.isInit)
        .map((e) => e.originFileObj);
      console.log(images);
      for (const img of images) {
        formData.append("files", img);
      }
    }

    formData.append(
      "data",
      JSON.stringify({
        id,
        title: form.title,
        content: form.content,
        status: form.status,
        toDeleteImageId: form.forDeleteImages,
      })
    );

    await editAnnouncement({
      url: EDIT_ANNOUNCEMENT,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        data: "application/json",
      },
    });

    return null;
  };

  if (fetchLoading) {
    return null;
  }

  return (
    <>
      <Card title="Edit Announcement">
        <div
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        // }}
        >
          <FormComponent
            initial={{
              title: initData?.title || "",
              content: initData?.content || "",
              status: initData?.status || true,
              images: initData?.Images || [],
              forDeleteImages: [],
            }}
            onSubmit={handleSubmit}
          >
            {({ change, data, submit }) => (
              <AnnouncementForm
                change={change}
                data={data}
                submit={submit}
                loading={fetchLoading || editAnnouncementOpts.loading}
              />
            )}
          </FormComponent>
        </div>
      </Card>
    </>
  );
};

export default AnnouncementEdit;
