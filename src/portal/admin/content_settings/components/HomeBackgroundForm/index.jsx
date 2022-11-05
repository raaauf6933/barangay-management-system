import { Card, Typography, Button } from "antd";
import React from "react";
import useFetch from "../../../../../hooks/useFetch";
import usePost from "../../../../../hooks/usePost";
import FormComponent from "../../../../components/Form";
import UploadMultiImage from "../../../../components/UploadMultiImage";
import useNotify from "../../../../hooks/useNotify";
import { EDIT_HOME_PAGE_BG, GET_HOME_PAGE_BG } from "../../api";

const HomeBackgroundForm = () => {
  const notify = useNotify();
  const [editHomePageBackground] = usePost({});

  const { response, loading: fetchLoading } = useFetch({
    url: GET_HOME_PAGE_BG,
  });

  const initData = {
    images: response?.data?.result || [],
  };

  const handleSubmit = async (form) => {
    const formData = new FormData();
    if (form.images.some((e) => e.originFileObj)) {
      const images = form.images
        .filter((e) => !e.isInit)
        .map((e) => e.originFileObj);

      for (const img of images) {
        formData.append("files", img);
      }
    }

    formData.append(
      "data",
      JSON.stringify({
        placeholder: "placeholder",
        toDeleteImageId: form.forDeleteImages,
      })
    );

    notify("success", "Uploading on process, it might take a while");

    await editHomePageBackground({
      url: EDIT_HOME_PAGE_BG,
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
      <FormComponent
        initial={{
          images: initData?.images || [],
          forDeleteImages: [],
        }}
        onSubmit={handleSubmit}
      >
        {({ change, data, submit, hasChanged }) => (
          <Card
            title={
              <Typography.Title level={4}>Home Background</Typography.Title>
            }
          >
            <UploadMultiImage
              max={5}
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
              //   disabled={loading}
            />
            <div
              style={{
                marginTop: "2em",
              }}
            >
              <Button type="primary" onClick={submit} disabled={!hasChanged}>
                <strong>Save</strong>
              </Button>
            </div>
          </Card>
        )}
      </FormComponent>
    </>
  );
};

export default HomeBackgroundForm;
