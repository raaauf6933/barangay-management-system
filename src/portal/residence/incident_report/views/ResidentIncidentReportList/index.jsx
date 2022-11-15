import React from "react";
import { Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";
// import Button from '../../../../components/Button';
import PageHeader from "../../../../components/PageHeader";
import Table from "../../../../components/Table";
import { useNavigate } from "react-router-dom";
import { columns, parseResponse } from "../../utils";
import useFetch from "../../../../../hooks/useFetch";
import { GET_INCIDENT_REPORTS } from "../../api";
import { IncidentDetailssUrl } from "../../url";
import Button from "../../../../components/Button";
import { useUser } from "../../../../context/auth/context";

const ResidentIncidentReportList = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { loading, response } = useFetch({
    url: GET_INCIDENT_REPORTS,
    params: {
      id: user.id,
    },
  });

  const data = parseResponse(response);

  return (
    <>
      <Card>
        <PageHeader title="Incident Report">
          <Button
            type="primary"
            onClick={() => navigate("/portal/residence/incident_report/create")}
            icon={<PlusOutlined />}
            mobileView
          >
            <b>Submit Incident Report</b>
          </Button>
        </PageHeader>
        <div className="responsive-table">
          <Table
            columns={columns}
            dataSource={data}
            loading={loading}
            searchColumns={["claimant"]}
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
                navigate(IncidentDetailssUrl(record.id));
              },
            })}
            size="large"
          />
        </div>
      </Card>
    </>
  );
};

export default ResidentIncidentReportList;
