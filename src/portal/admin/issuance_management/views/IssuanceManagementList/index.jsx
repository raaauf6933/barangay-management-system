import React from "react";
import { Card } from "antd";
import Table from "../../../../components/Table";
import { columns, parseResponse } from "../../utils";
import Button from "../../../../components/Button";
import PageHeader from "../../../../components/PageHeader";
import { PlusOutlined } from "@ant-design/icons";
import useFetch from "../../../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { IssuanceMngtDetailsUrl } from "../../url";
import { GET_RESIDENT_ISSUANCES } from "../../api";

const IssuanceManagementList = () => {
  const navigate = useNavigate();

  const { loading, response } = useFetch({
    url: GET_RESIDENT_ISSUANCES,
  });

  const data = parseResponse(response);

  return (
    <>
      <Card>
        <PageHeader title="Issuance Management">
          <Button
            type="primary"
            onClick={() => navigate("/portal/admin/issuance_management/create")}
            icon={<PlusOutlined />}
            mobileView
          >
            <b>Create New Issuance</b>
          </Button>
        </PageHeader>
        <div className="responsive-table">
          <Table
            columns={columns}
            dataSource={data}
            loading={loading}
            searchColumns={["resident"]}
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
                navigate(IssuanceMngtDetailsUrl(record.id));
              },
            })}
            size="large"
          />
        </div>
      </Card>
    </>
  );
};

export default IssuanceManagementList;
