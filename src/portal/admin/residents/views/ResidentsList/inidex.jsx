import React from "react";
import { Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Table from "../../../../components/Table";
import Button from "../../../../components/Button";
import PageHeader from "../../../../components/PageHeader";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../../../hooks/useFetch";
import { columns, parseResponse } from "../../utils";
import { ResidentDetailsUrl } from "../../url";
import { GET_RESIDENTS } from "../../api";

const ResidentsList = () => {
  const navigate = useNavigate();
  //   const [searchParams] = useSearchParams();

  const { loading, response } = useFetch({
    url: GET_RESIDENTS,
  });

  const data = parseResponse(response);

  return (
    <Card>
      <PageHeader title="Residents">
        <Button
          type="primary"
          onClick={() => navigate("create")}
          icon={<PlusOutlined />}
          mobileView
        >
          <b>Create Resident</b>
        </Button>
      </PageHeader>
      <div className="responsive-table">
        <Table
          columns={columns}
          dataSource={data}
          loading={loading}
          searchColumns={["name", "house_no", "street_address", "apartment"]}
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
              navigate(ResidentDetailsUrl(record.id));
            },
          })}
          size="large"
        />
      </div>
    </Card>
  );
};

export default ResidentsList;
