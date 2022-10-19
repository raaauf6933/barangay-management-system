import React from "react";
import { Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Button from "../../../../components/Button";
import { columns, parseResponse } from "../../utils";
import PageHeader from "../../../../components/PageHeader";
import useFetch from "../../../../../hooks/useFetch";
import Table from "../../../../components/Table";
import createDialogActionHandler from "./../../../../utils/createActionHandler";
import { useNavigate, useSearchParams } from "react-router-dom";
import useNotify from "../../../../hooks/useNotify";
import {
  CREATE_OFFICIAL,
  EDIT_OFFICIAL,
  GET_OFFICIAL,
  GET_OFFICIALS,
} from "../../api";
import { OfficialsListUrl } from "../../url";
import OfficialFormModal from "../../components/OfficialFormModal";
import { GET_POSITIONS } from "../../../positions/api";
import usePost from "../../../../../hooks/usePost";

const OfficialsList = () => {
  const navigate = useNavigate();
  const notify = useNotify();
  const [searchParams] = useSearchParams();

  const { loading, response, refetch } = useFetch({
    url: GET_OFFICIALS,
  });

  const { loading: loadingOfficial, response: responseOfficial } = useFetch(
    {
      url: GET_OFFICIAL,
      params: {
        id: searchParams.get("id"),
      },
    },
    {
      skip: !searchParams.get("id"),
    }
  );

  const { loading: loadingPositions, response: responsePositions } = useFetch({
    url: GET_POSITIONS,
  });

  const [openModal, closeModal] = createDialogActionHandler(
    navigate,
    null,
    OfficialsListUrl
  );
  const data = parseResponse(response);

  const [createOfficial, createOfficialOpts] = usePost({
    onComplete: () => {
      refetch();
      closeModal();
      notify("success", "New Official has been added!");
    },
  });

  const [editOfficial, editOfficialOpts] = usePost({
    onComplete: () => {
      refetch();
      closeModal();
      notify("success", "Official has been successfully updated!");
    },
  });

  const onSubmitCreate = async (form) => {
    const formData = new FormData();
    console.log(form);
    const images = form.image.map((e) => e.originFileObj);

    for (const img of images) {
      formData.append("files", img);
    }

    formData.append(
      "data",
      JSON.stringify({
        position: form.position,
        first_name: form.first_name,
        last_name: form.last_name,
        contact_no: form.contact_no,
        email: form.email,
        status: form.status,
      })
    );

    await createOfficial({
      url: CREATE_OFFICIAL,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        data: "application/json",
      },
    });

    return null;
  };

  const onSubmitEdit = async (form) => {
    const formData = new FormData();
    if (form.image.some((e) => e.originFileObj)) {
      const images = form.image
        .filter((e) => !e.isInit)
        .map((e) => e.originFileObj);

      for (const img of images) {
        formData.append("files", img);
      }
    }

    formData.append(
      "data",
      JSON.stringify({
        id: searchParams.get("id"),
        position: form.position,
        first_name: form.first_name,
        last_name: form.last_name,
        contact_no: form.contact_no,
        email: form.email,
        status: form.status,
      })
    );

    await editOfficial({
      url: EDIT_OFFICIAL,
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
      <Card>
        <PageHeader title="Officials">
          <Button
            type="primary"
            onClick={() => openModal("createOfficial")}
            icon={<PlusOutlined />}
            mobileView
          >
            <b>Create Official</b>
          </Button>
        </PageHeader>
        <div className="responsive-table">
          <Table
            columns={columns}
            dataSource={data}
            loading={loading}
            searchColumns={["official"]}
            // pagination={{
            //   showTotal: (test) => {
            //     console.log(test);
            //   },
            //   pageSize: 1,

            //   onShowSizeChange: (test) => {
            //     console.log(test);
            //   },
            // }}
            onChange={() => console.log()}
            onRow={(record) => ({
              onClick: () => {
                openModal("editOfficial", {
                  id: record.id,
                });
              },
            })}
            size="large"
          />
        </div>
      </Card>
      <OfficialFormModal
        open={searchParams.get("action") === "createOfficial"}
        title="Create Official"
        close={() => closeModal()}
        onSubmit={onSubmitCreate}
        formName="officialCreateForm"
        loadingPositions={loadingPositions}
        responsePositions={responsePositions}
        loading={createOfficialOpts?.loading || editOfficialOpts?.loading}
      />
      <OfficialFormModal
        open={searchParams.get("action") === "editOfficial"}
        title="Edit Official"
        close={() => closeModal()}
        onSubmit={onSubmitEdit}
        formName="officialEditForm"
        loadingPositions={loadingPositions}
        responsePositions={responsePositions}
        data={responseOfficial?.data?.official}
        loading={
          createOfficialOpts?.loading ||
          editOfficialOpts?.loading ||
          loadingOfficial
        }
      />
    </>
  );
};

export default OfficialsList;
