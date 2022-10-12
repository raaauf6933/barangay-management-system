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
    render: (status) => <>{<Status type="DEFAULT" status={status} />}</>,
  },
  {
    title: "Remark",
    key: "remark",
    dataIndex: "remark",
    render: (status) => <>{<Status type="DEFAULT" status={status} />}</>,
  },
  {
    title: "Paid",
    key: "paid",
    dataIndex: "paid",
    render: (status) => <>{<Status type="DEFAULT" status={status} />}</>,
  },
  {
    title: "Created At",
    key: "createdAt",
    dataIndex: "createdAt",
    render: (status) => <>{<Status type="DEFAULT" status={status} />}</>,
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status) => <>{<Status type="DEFAULT" status={status} />}</>,
  },
];

export const parseResponse = (response) => {
  return response?.data?.announcements.map((e) => ({
    key: e.id,
    id: e.id,
    title: e.title,
    created: moment(e.createdAt).tz("Asia/Manila").format("LLL"),
    status: e.status ? "ACTIVE" : "INACTIVE",
  }));
};
