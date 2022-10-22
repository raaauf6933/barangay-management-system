import React from "react";
import { Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Table from "../../../../components/Table";
import Button from "../../../../components/Button";
import PageHeader from "../../../../components/PageHeader";
import { useNavigate, useSearchParams } from "react-router-dom";
import createDialogActionHandler from "./../../../../utils/createActionHandler";
import useFetch from "../../../../../hooks/useFetch";
import usePost from "../../../../../hooks/usePost";
import { columns, parseResponse } from "../../utils";
import { UsersListPathDetails, UsersListPathUrl } from "../../url";
import { GET_USERS, CREATE_USER, GET_USER, EDIT_USER } from "../../api";
import UserFormModal from "../../components/UserFormModal";
import useNotify from "../../../../hooks/useNotify";

const BlotterList = () => {
  const navigate = useNavigate();
  const notify = useNotify();

  const [openModal, closeModal] = createDialogActionHandler(navigate, null, "");

  const { loading, response, refetch } = useFetch({
    url: GET_USERS,
  });

  const data = parseResponse(response);

  return (
    <>
      <Card>
        {" "}
        <PageHeader title="Users">
          <Button
            type="primary"
            onClick={() => openModal("createUser")}
            icon={<PlusOutlined />}
            mobileView
          >
            <b>Create User</b>
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
                navigate("editUser", { id: record.id });
              },
            })}
            size="large"
          />
        </div>
      </Card>
    </>
  );
};

export default BlotterList;
