import Status from "./../../components/Status";

export const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (text) => <span className="table-body">{text}</span>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
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
