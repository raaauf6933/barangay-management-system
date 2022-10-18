import Status from "./../../components/Status";
import moment from "moment-timezone";

export const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (text) => <span className="table-body">{text}</span>,
    sorter: (a, b) => parseInt(a.id) - parseInt(b.id),
    sortDirections: ["descend"],
  },
  {
    title: "Resident",
    dataIndex: "resident",
    key: "resident",
    // render: (text) => <span className="table-body">{text}</span>,
    // sorter: (a, b) => a.resident.localeCompare(b.resident),
    // sortDirections: ["descend"],
  },
  {
    title: "Service",
    key: "service",
    dataIndex: "service",
    render: (text) => <span className="table-body">{text}</span>,
  },
  {
    title: "Payment Status",
    key: "payment_status",
    dataIndex: "payment_status",
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
  return response?.data?.issuance_residents
    .map((e) => ({
      key: e.id,
      id: e.id,
      resident: `${e.Resident.first_name} ${e.Resident.last_name}`,
      service: e.Service_type.name,
      payment_status: e.Service_transaction.isPaid,
      createdAt: moment(e.createdAt).tz("Asia/Manila").format("LLL"),
      status: e.status,
    }))
    .reverse();
};
