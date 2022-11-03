import React from "react";
import { Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Table from "../../../../components/Table";
import Button from "../../../../components/Button";
import PageHeader from "../../../../components/PageHeader";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../../../hooks/useFetch";
import { columns, parseResponse } from "../../utils";

import { GET_BLOTTER_REPORTS } from "../../api";
import { BlotterDetailssUrl } from "../../url";

const BlotterList = () => {
  const navigate = useNavigate();

  const { loading, response } = useFetch({
    url: GET_BLOTTER_REPORTS,
  });

  const data = parseResponse(response);
  return (
    <>
      <Card>
        {" "}
        <PageHeader title="Blotter">
          <Button
            type="primary"
            onClick={() => navigate("create")}
            icon={<PlusOutlined />}
            mobileView
          >
            <b>Create Report</b>
          </Button>
        </PageHeader>
        <div className="responsive-table">
          <Table
            columns={columns}
            dataSource={data}
            loading={loading}
            searchColumns={["compliant"]}
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
                navigate(BlotterDetailssUrl(record.id));
              },
            })}
            size="large"
          />
        </div>
      </Card>
    </>
  );
};

export default BlotterList;
