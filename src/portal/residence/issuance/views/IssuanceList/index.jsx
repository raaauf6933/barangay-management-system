import React from "react";
import { Table, Button, Card } from "antd";
import Status from "../../../../components/Status";
import PageHeader from "../../../../components/PageHeader";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { GET_RESIDENT_ISSUANCES } from "./../../../../admin/issuance_management/api";
import useFetch from "./../../../../../hooks/useFetch";
import { IssuanceDetailssUrl } from "../../url";
import { useUser } from "../../../../context/auth/context";

const IssuanceList = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const { response } = useFetch({
    url: GET_RESIDENT_ISSUANCES,
    params: {
      resident_id: user.id,
    },
  });

  console.log(response);

  const columns = [
    {
      title: "Reference No.",
      dataIndex: "id",
      key: "id",
      render: (text) => <span className="table-body">{text}</span>,
    },
    {
      title: "Request Type",
      dataIndex: "service",
      key: "service",
      render: (text) => <span className="table-body">{text}</span>,
    },
    {
      title: "Payment Status",
      key: "payment_status",
      dataIndex: "payment_status",
      render: (status) => (
        <>
          {<Status type="DEFAULT" status={status ? "CONFIRMED" : "PENDING"} />}
        </>
      ),
    },
    {
      title: "Requested At",
      dataIndex: "created",
      key: "created",
      render: (text) => <span className="table-body">{text}</span>,
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => <>{<Status type="DEFAULT" status={status} />}</>,
    },
  ];

  const data = response?.data?.issuance_residents
    ? response?.data?.issuance_residents.map((e) => ({
        key: e.id,
        id: e.id,
        service: e.Service_type.name,
        payment_status: e.Service_transaction.isPaid,
        created: moment(e.createdAt).tz("Asia/Manila").format("LLL"),
        status: e.status,
      }))
    : [];

  return (
    <>
      <Card>
        <PageHeader title="Issuance">
          <Button
            type="primary"
            onClick={() => navigate("/portal/residence/issuance/create")}
          >
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
            onRow={(record) => ({
              onClick: () => {
                navigate(IssuanceDetailssUrl(record.id));
              },
            })}
            onChange={() => console.log()}
          />
        </div>
      </Card>
    </>
  );
};

export default IssuanceList;
