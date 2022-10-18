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
    title: "Official",
    dataIndex: "official",
    key: "official",
    // render: (text) => <span className="table-body">{text}</span>,
    // sorter: (a, b) => a.resident.localeCompare(b.resident),
    // sortDirections: ["descend"],
  },
  {
    title: "Position",
    key: "position",
    dataIndex: "position",
    // render: (status) => (
    //   <>{<Status type="DEFAULT" status={status ? "ACTIVE" : "INACTIVE"} />}</>
    // ),
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
  return response?.data?.officials
    .map((e) => ({
      key: e.id,
      id: e.id,
      official: `${e.first_name} ${e.last_name}`,
      position: e.Position.name,
      status: e.status,
    }))
    .reverse();
};
