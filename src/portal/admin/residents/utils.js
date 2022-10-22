import Status from "./../../components/Status";
import moment from "moment-timezone";

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
    title: "Age",
    key: "age",
    dataIndex: "age",
    // render: (status) => (
    //   <>{<Status type="DEFAULT" status={status ? "ACTIVE" : "INACTIVE"} />}</>
    // ),
  },
  {
    title: "Gender",
    key: "gender",
    dataIndex: "gender",
    render: (text) => <span className="table-body">{text.toUpperCase()}</span>,
  },
  {
    title: "Is Voter",
    key: "isvoter",
    dataIndex: "isvoter",
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
  return response?.data?.residents
    .map((e) => ({
      key: e.id,
      id: e.id,
      name: `${e.first_name} ${e.last_name}`,
      age: moment().diff(e.birth_date, "years"),
      gender: e.gender,
      status: e.status,
    }))
    .reverse();
};
