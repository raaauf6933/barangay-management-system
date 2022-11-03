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
    title: "Compliant",
    dataIndex: "compliant",
    key: "compliant",
    // render: (text) => <span className="table-body">{text}</span>,
    // sorter: (a, b) => a.resident.localeCompare(b.resident),
    // sortDirections: ["descend"],
  },
  {
    title: "Respondent",
    key: "respondent",
    dataIndex: "respondent",
    // render: (status) => (
    //   <>{<Status type="DEFAULT" status={status ? "ACTIVE" : "INACTIVE"} />}</>
    // ),
  },
  {
    title: "In-Charge",
    key: "incharge",
    dataIndex: "incharge",
  },
  {
    title: "Created At",
    key: "isvoter",
    dataIndex: "isvoter",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status) => <>{<Status type="DEFAULT" status={status} />}</>,
  },
];

export const parseResponse = (response) => {
  return response?.data?.blotter
    .map((e) => ({
      key: e.id,
      id: e.id,
      compliant: `${e?.Resident?.first_name} ${e.Resident?.last_name}`,
      respondent: e.respondent,
      incharge: e.in_charge,
      createdAt: moment(e.createdAt).tz("Asia/Manila").format("LLL"),
      status: e.status,
    }))
    .reverse();
};
