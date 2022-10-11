import React from "react";
import { Table, Card } from "antd";
import { columns, parseResponse } from "./../../utils";
import Button from "../../../../components/Button";
import PageHeader from "../../../../components/PageHeader";
import { PlusOutlined } from "@ant-design/icons";
import useFetch from "../../../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { GET_ANNOUNCEMENTS } from "../../api";
import { AnnouncementDetailsUrl } from "../../url";

const AnnouncementList = () => {
  const navigate = useNavigate();

  const { loading, response } = useFetch({
    url: GET_ANNOUNCEMENTS,
  });

  const data = parseResponse(response);

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
            loading={loading}
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
            onRow={(record) => ({
              onClick: () => {
                navigate(AnnouncementDetailsUrl(record.id));
              },
            })}
            size="large"
          />
        </div>
      </Card>
    </>
  );
};

export default AnnouncementList;
