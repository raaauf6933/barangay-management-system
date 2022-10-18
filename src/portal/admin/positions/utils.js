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
    title: "Name",
    dataIndex: "name",
    key: "name",
    // render: (text) => <span className="table-body">{text}</span>,
    // sorter: (a, b) => a.resident.localeCompare(b.resident),
    // sortDirections: ["descend"],
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
  return response?.data?.positions
    .map((e) => ({
      key: e.id,
      id: e.id,
      name: e.name,
      status: e.status,
    }))
    .reverse();
};
