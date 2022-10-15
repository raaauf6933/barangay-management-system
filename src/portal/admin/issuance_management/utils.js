import Status from "./../../components/Status";
import moment from "moment-timezone";

export const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (text) => <span className="table-body">{text}</span>,
  },
  {
    title: "Resident",
    dataIndex: "resident",
    key: "resident",
    render: (text) => <span className="table-body">{text}</span>,
  },
  {
    title: "Service",
    key: "service",
    dataIndex: "service",
    render: (text) => <span className="table-body">{text}</span>,
  },
  {
    title: "Purpose",
    key: "purpose",
    dataIndex: "purpose",
    render: (text) => (
      <>
        <span className="table-body">{text}</span>
      </>
    ),
  },
  {
    title: "Remarks",
    key: "remarks",
    dataIndex: "remarks",
    render: (text) => (
      <>
        <span className="table-body">{text}</span>
      </>
    ),
  },
  {
    title: "Paid",
    key: "paid",
    dataIndex: "paid",
    render: (status) => (
      <>{<Status type="DEFAULT" status={status ? "CONFIRMED" : "PENDING"} />}</>
    ),
  },
  {
    title: "Created At",
    key: "createdAt",
    dataIndex: "createdAt",
    render: (text) => (
      <>
        <span className="table-body">{text}</span>
      </>
    ),
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status) => <>{<Status type="DEFAULT" status={status} />}</>,
  },
];

export const parseResponse = (response) => {
  return response?.data?.issuance_residents.map((e) => ({
    key: e.id,
    id: e.id,
    resident: e.resident_id,
    service: e.issuance_id,
    purpose: e.purpose,
    remarks: e.remarks,
    paid: e.Service_transaction.isPaid,
    createdAt: moment(e.createdAt).tz("Asia/Manila").format("LLL"),
    status: e.status,
  }));
};
