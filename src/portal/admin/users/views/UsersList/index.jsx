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

const User = () => {
  const navigate = useNavigate();
  const notify = useNotify();
  const [searchParams] = useSearchParams();

  const { loading, response, refetch } = useFetch({
    url: GET_USERS,
  });

  const { response: responseUser } = useFetch(
    {
      url: GET_USER,
      params: {
        id: searchParams.get("id"),
      },
    },
    {
      skip: !searchParams.get("id"),
    }
  );

  const user = responseUser?.data?.user;

  const data = parseResponse(response);

  const [openModal, closeModal] = createDialogActionHandler(
    navigate,
    null,
    UsersListPathUrl
  );

  const [createUser, createUserOpts] = usePost({
    onComplete: () => {
      refetch();
      notify("success", "New user has been added!");
      closeModal();
    },
    onError: (e) => {
      notify("error", e.response.data.message);
    },
  });

  const [editUser, editUserOpts] = usePost({
    onComplete: () => {
      refetch();
      notify("success", "User has been successfully changed!");
      closeModal();
    },
    onError: (e) => {
      notify("error", e.response.data.message);
    },
  });

  const handleCreateUser = (form) => {
    createUser({
      url: CREATE_USER,
      data: {
        role: 1,
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        password: form.password,
        status: 1,
      },
    });
  };

  const handleEditUser = (form) => {
    editUser({
      url: EDIT_USER,
      data: {
        id: searchParams.get("id"),
        role: 1,
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        password: form.password,
        status: 1,
      },
    });
  };

  return (
    <>
      <Card>
        {" "}
        <PageHeader title="Admin">
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
                openModal("editUser", { id: record.id });
              },
            })}
            size="large"
          />
        </div>
        <UserFormModal
          title="Create User"
          formName="createUserForm"
          open={searchParams.get("action") === "createUser"}
          close={() => closeModal()}
          onSubmit={handleCreateUser}
          loading={createUserOpts.loading}
        />
        <UserFormModal
          title="Edit User"
          formName="editUserForm"
          open={searchParams.get("action") === "editUser"}
          close={() => closeModal()}
          data={user}
          onSubmit={handleEditUser}
          type="edit"
          loading={editUserOpts.loading}
        />
      </Card>
    </>
  );
};

export default User;
