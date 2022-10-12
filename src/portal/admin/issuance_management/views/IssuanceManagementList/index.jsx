import React from "react";
import { Table, Card } from "antd";
import { columns } from "../../utils";
import Button from "../../../../components/Button";
import PageHeader from "../../../../components/PageHeader";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { IssuanceMngtDetailsUrl } from "../../url";

const IssuanceManagementList = () => {
  const navigate = useNavigate();

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
            dataSource={[]}
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
