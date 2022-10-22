import Status from "./../../components/Status";
import moment from "moment-timezone";
import { Tag } from "antd";

export const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (text) => <span className="table-body">{text}</span>,
    sorter: (a, b) => parseInt(b.id) - parseInt(a.id),
    sortDirections: ["descend"],
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    // render: (text) => <span className="table-body">{text}</span>,
    // sorter: (a, b) => a.resident.localeCompare(b.resident),
    // sortDirections: ["descend"],
  },
  {
    title: "Role",
    key: "role",
    dataIndex: "role",
    render: (text) => <Tag color="green">{text}</Tag>,
  },
  {
    title: "Email",
    key: "email",
    dataIndex: "email",
    // render: (status) => (
    //   <>{<Status type="DEFAULT" status={status ? "ACTIVE" : "INACTIVE"} />}</>
    // ),
  },
  {
    title: "Created Date",
    key: "createdAt",
    dataIndex: "createdAt",
    render: (text) => (
      <span className="table-body">{moment(text).format("LL")}</span>
    ),
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status) => (
      <>{<Status type="DEFAULT" status={status ? "ACTIVE" : "INACTIVE"} />}</>
    ),
  },
];

export const parseResponse = (response) => {
  return response?.data?.users
    .map((e) => ({
      key: e.id,
      id: e.id,
      name: `${e.first_name} ${e.last_name}`,
      role: e.Role.name,
      email: e.email,
      createdAt: e.createdAt,
      status: e.status,
    }))
    .reverse();
};
