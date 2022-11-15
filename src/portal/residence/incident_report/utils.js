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
  // {
  //   title: "Claimant",
  //   dataIndex: "claimant",
  //   key: "claimant",
  // render: (text) => <span className="table-body">{text}</span>,
  // sorter: (a, b) => a.resident.localeCompare(b.resident),
  // sortDirections: ["descend"],
  // },
  {
    title: "Subject",
    key: "subject",
    dataIndex: "subject",
    // render: (status) => (
    //   <>{<Status type="DEFAULT" status={status ? "ACTIVE" : "INACTIVE"} />}</>
    // ),
  },
  {
    title: "Created At",
    key: "createdAt",
    dataIndex: "createdAt",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status) => (
      <>
        {
          <Status
            type="DEFAULT"
            status={status}
            text={status === "PENDING" ? "PENDING / REVIEWING" : null}
          />
        }
      </>
    ),
  },
];

export const parseResponse = (response) => {
  return response?.data?.incident_reports
    .map((e) => ({
      key: e.id,
      id: e.id,
      // claimant: e?.claimant
      //   ? `${e?.Resident?.first_name} ${e?.Resident?.last_name}`
      //   : `${e?.other_claimant}`,
      subject: e?.subject,

      createdAt: moment(e.createdAt).tz("Asia/Manila").format("LLL"),
      status: e.status,
    }))
    .reverse();
};
