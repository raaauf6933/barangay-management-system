import React from "react";
import { Card } from "antd";
import Table from "../../../../components/Table";
import { columns, parseResponse } from "../../utils";
import Button from "../../../../components/Button";
import PageHeader from "../../../../components/PageHeader";
import { PlusOutlined } from "@ant-design/icons";
import useFetch from "../../../../../hooks/useFetch";
import usePost from "../../../../../hooks/usePost";
import { useNavigate } from "react-router-dom";
import { PositionDetailsUrl, PositionsListUrl } from "../../url";
import {
  CREATE_POSITION,
  EDIT_POSITION,
  GET_POSITION,
  GET_POSITIONS,
} from "../../api";
import createDialogActionHandler from "./../../../../utils/createActionHandler";
import PositionFormModal from "../../components/PositionFormModal";
import { useSearchParams } from "react-router-dom";
import useNotify from "../../../../hooks/useNotify";

const PositionsList = () => {
  const navigate = useNavigate();
  const notify = useNotify();
  const [searchParams] = useSearchParams();

  const [openModal, closeModal] = createDialogActionHandler(
    navigate,
    null,
    PositionsListUrl
  );

  const { loading, response, refetch } = useFetch({
    url: GET_POSITIONS,
  });

  const { response: position_data, loading: positionLoading } = useFetch(
    {
      url: GET_POSITION,
      params: {
        id: searchParams.get("id"),
      },
    },
    {
      skip: !searchParams.get("id"),
    }
  );

  const [createPosition] = usePost({
    onComplete: () => {
      closeModal();
      notify("success", "New Position has been created!");
      refetch();
    },
  });

  const [editPosition] = usePost({
    onComplete: () => {
      closeModal();
      notify("success", "Position has been successfully changed!");
      refetch();
    },
  });

  const data = parseResponse(response);

  const onSubmitCreate = (formData) => {
    createPosition({
      url: CREATE_POSITION,
      data: formData,
    });
  };

  const onSubmitEdit = (formData) => {
    editPosition({
      url: EDIT_POSITION,
      data: { ...formData, id: searchParams.get("id") },
    });
  };
  return (
    <>
      <Card>
        <PageHeader title="Positions">
          <Button
            type="primary"
            onClick={() => openModal("createPosition")}
            icon={<PlusOutlined />}
            mobileView
          >
            <b>Create Position</b>
          </Button>
        </PageHeader>
        <div className="responsive-table">
          <Table
            columns={columns}
            dataSource={data}
            loading={loading}
            searchColumns={["name"]}
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
                openModal("editPosition", {
                  id: record.id,
                });
              },
            })}
            size="large"
          />
        </div>
      </Card>
      <PositionFormModal
        open={searchParams.get("action") === "createPosition"}
        title="Create Position"
        close={() => closeModal()}
        onSubmit={onSubmitCreate}
        formName="positionCreateForm"
      />
      <PositionFormModal
        open={searchParams.get("action") === "editPosition"}
        formName="positionEditForm"
        title="Edit Position"
        close={() => closeModal()}
        onSubmit={onSubmitEdit}
        data={position_data?.data?.position}
        loading={positionLoading}
      />
    </>
  );
};

export default PositionsList;
