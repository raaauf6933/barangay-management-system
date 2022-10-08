import React from "react";
import { Table, Button, Card } from "antd";
import Status from "../../../../components/Status";
import PageHeader from "../../../../components/PageHeader";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { CreatePath_Choose } from "../../url";

const IssuanceList = () => {
  const navigate = useNavigate();

  const columns = [
    {
      title: "Reference No.",
      dataIndex: "reference_no",
      key: "reference_no",
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
      dataIndex: "created",
      key: "created",
      render: (text) => <span className="table-body">{text}</span>,
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => <>{<Status type="CERTIFICATES" status={status} />}</>,
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (text, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];

  const data = [
    {
      key: "1",
      reference_no: "00001",
      type: "BARANGAY CLEARANCE",
      created: moment().format("LLL"),
      status: "PENDING",
    },
    {
      key: "2",
      reference_no: "00002",
      type: "BARANGAY CLEARANCE",
      created: moment().format("LLL"),
      status: "FOR_PICKUP",
    },
  ];
  return (
    <>
      <Card>
        <PageHeader title="Issuance">
          <Button type="primary" onClick={() => navigate(CreatePath_Choose)}>
            <b>Create Request</b>
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
      </Card>
    </>
  );
};

export default IssuanceList;
