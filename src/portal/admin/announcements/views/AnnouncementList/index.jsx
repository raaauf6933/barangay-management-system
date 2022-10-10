import React from "react";
import { Table, Card } from "antd";
import { columns } from "./../../utils";
import Button from "../../../../components/Button";
import PageHeader from "../../../../components/PageHeader";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const AnnouncementList = () => {
  const navigate = useNavigate();

  const data = [
    {
      key: "1",
      id: "00001",
      name: "Juan Dela Cruz",
      type: "NEWS",
      created: moment().format("LLL"),
      status: "INACTIVE",
    },
    {
      key: "2",
      id: "00002",
      name: "Juan Dela Cruz",
      type: "EVENTS",
      created: moment().format("LLL"),
      status: "ACTIVE",
    },
  ];

  return (
    <>
      <Card>
        <PageHeader title="Announcements">
          <Button
            type="primary"
            onClick={() => navigate("/portal/admin/announcements/create")}
            icon={<PlusOutlined />}
            mobileView
          >
            <b>Create Announcement</b>
          </Button>
        </PageHeader>
        <div className="responsive-table">
          <Table
            columns={columns}
            dataSource={data}
            loading={false}
            // pagination={{
            //   showTotal: (test) => {
            //     console.log(test);
            //   },
            //   pageSize: 1,

            //   onShowSizeChange: (test) => {
            //     console.log(test);
            //   },
            // }}
            onChange={() => console.log()}
          />
        </div>
      </Card>
    </>
  );
};

export default AnnouncementList;
