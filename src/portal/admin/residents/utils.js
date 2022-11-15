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
    title: "House No.",
    key: "house_no",
    dataIndex: "house_no",
    // render: (status) => (
    //   <>{<Status type="DEFAULT" status={status ? "ACTIVE" : "INACTIVE"} />}</>
    // ),
  },
  {
    title: "Street",
    key: "street_address",
    dataIndex: "street_address",
    // render: (status) => (
    //   <>{<Status type="DEFAULT" status={status ? "ACTIVE" : "INACTIVE"} />}</>
    // ),
  },
  {
    title: "Apartment",
    key: "apartment",
    dataIndex: "apartment",
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
    render: (status) => <>{<Status type="DEFAULT" status={status} />}</>,
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
  console.log(response);
  return response?.data?.residents
    .map((e) => ({
      key: e.id,
      id: e.id,
      name: `${e.first_name} ${e.last_name}`,
      age: moment().diff(e.birth_date, "years"),
      house_no: e.house_no,
      street_address: e.street_address,
      apartment: e.apartment,
      isvoter: e.is_voter ? "YES" : "NO",
      gender: e.gender,
      status: e.status,
    }))
    .reverse();
};
