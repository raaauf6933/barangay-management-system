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
    title: "Title",
    dataIndex: "title",
    key: "title",
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

export const parseResponse = (response) => {
  return response?.data?.announcements.map((e) => ({
    key: e.id,
    id: e.id,
    title: e.title,
    created: moment(e.createdAt).tz("Asia/Manila").format("LLL"),
    status: e.status ? "ACTIVE" : "INACTIVE",
  }));
};
