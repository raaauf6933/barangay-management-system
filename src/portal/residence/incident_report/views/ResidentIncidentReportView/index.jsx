import { Card, Descriptions, Typography } from "antd";
import moment from "moment-timezone";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../../../hooks/useFetch";
import { GET_INCIDENT_REPORT } from "../../api";

const ResidentIncidentReport = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { response } = useFetch({
    url: GET_INCIDENT_REPORT,
    params: {
      id,
    },
  });

  const incident_report_data = response?.data?.incident_report;

  console.log(incident_report_data);

  return (
    <Card>
      <Descriptions
        column={{ xxl: 4, xl: 4, lg: 4, md: 4, sm: 1, xs: 1 }}
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography.Title level={3}>
              Incident Report # {id}{" "}
            </Typography.Title>
            {/* <Button
                onClick={() => navigate(BlotterEditDetailssUrl(id))}
                shape="circle"
                type="primary"
                icon={<EditOutlined />}
              /> */}
          </div>
        }
        layout="vertical"
      >
        <Descriptions.Item
          label="Claimant"
          labelStyle={{
            fontWeight: 600,
          }}
        >
          {incident_report_data?.claimant
            ? `${incident_report_data?.Resident?.first_name} ${incident_report_data?.Resident?.first_name}`
            : incident_report_data?.other_claimant}
        </Descriptions.Item>
        <Descriptions.Item
          label="Subject"
          labelStyle={{
            fontWeight: 600,
          }}
        >
          {incident_report_data?.subject}
        </Descriptions.Item>
        <Descriptions.Item
          label="Incident Date & Time"
          labelStyle={{
            fontWeight: 600,
          }}
        >
          {moment(incident_report_data?.incident_date_time).format("LLL")}
        </Descriptions.Item>
        <Descriptions.Item
          label="Created At"
          labelStyle={{
            fontWeight: 600,
          }}
        >
          {moment(incident_report_data?.createdAt).format("LLL")}
        </Descriptions.Item>
        <Descriptions.Item
          label="Description"
          labelStyle={{
            fontWeight: 600,
          }}
          span={3}
        >
          {incident_report_data?.description}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default ResidentIncidentReport;
