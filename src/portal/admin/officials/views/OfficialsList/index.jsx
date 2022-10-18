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
import { GET_OFFICIALS } from "../../api";
import { OfficialsListUrl } from "../../url";
import OfficialFormModal from "../../components/OfficialFormModal";

const OfficialsList = () => {
  const navigate = useNavigate();
  const notify = useNotify();
  const [searchParams] = useSearchParams();

  const { loading, response, refetch } = useFetch({
    url: GET_OFFICIALS,
  });

  const [openModal, closeModal] = createDialogActionHandler(
    navigate,
    null,
    OfficialsListUrl
  );

  const data = parseResponse(response);

  const onSubmitCreate = (formData) => {
    console.log(formData);
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
      />
    </>
  );
};

export default OfficialsList;
