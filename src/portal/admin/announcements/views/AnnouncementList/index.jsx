import React from "react";
import { Table, Button } from "antd";
import Status from "../../../../components/Status";
import PageHeader from "../../../../components/PageHeader";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const AnnouncementList = () => {
  const navigate = useNavigate();

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <span className="table-body">{text}</span>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <span className="table-body">{text}</span>,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (text) => <span className="table-body">{text}</span>,
    },
    {
      title: "Created",
      key: "created",
      dataIndex: "created",
      render: (text) => <span className="table-body">{text}</span>,
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => <>{<Status type="DEFAULT" status={status} />}</>,
    },
  ];

  const data = [
    {
      key: "1",
      id: "00001",
      name: "Juan Dela Cruz",
      type: "NEWS",
      created: moment().format("LLL"),
      status: "INACTIVE",
    },
    {
      key: "2",
      id: "00002",
      name: "Juan Dela Cruz",
      type: "EVENTS",
      created: moment().format("LLL"),
      status: "ACTIVE",
    },
  ];

  return (
    <>
      <PageHeader title="Announcements">
        <Button
          type="primary"
          onClick={() => navigate("/portal/admin/announcements/create")}
        >
          <b>Create New Announcement</b>
        </Button>
      </PageHeader>
      <div className="responsive-table">
        <Table
          columns={columns}
          dataSource={data}
          loading={false}
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
        />
      </div>
    </>
  );
};

export default AnnouncementList;
