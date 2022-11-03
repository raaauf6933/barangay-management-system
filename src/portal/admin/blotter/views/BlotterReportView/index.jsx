import {
  Badge,
  Button,
  Card,
  Descriptions,
  Divider,
  // Empty,
  Skeleton,
  Typography,
} from "antd";
import { ArrowLeftOutlined, EditOutlined } from "@ant-design/icons";
import React from "react";
import useFetch from "../../../../../hooks/useFetch";
import { GET_BLOTTER_REPORT } from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment-timezone";
import { BlotterEditDetailssUrl, BlotterListPath } from "../../url";

const BlotterReportView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { response } = useFetch({
    url: GET_BLOTTER_REPORT,
    params: {
      id,
    },
  });

  const blotter_data = response?.data?.blotter;

  console.log(response);

  return (
    <Card
      className="announcement-card"
      extra={
        <>
          <Button
            onClick={() => navigate(BlotterListPath)}
            shape="circle"
            icon={<ArrowLeftOutlined />}
          />
        </>
      }
    >
      <Descriptions
        column={{ xxl: 5, xl: 5, lg: 5, md: 5, sm: 2, xs: 1 }}
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography.Title level={3}>
              Blotter Report # {id}{" "}
            </Typography.Title>
            <Button
              onClick={() => navigate(BlotterEditDetailssUrl(id))}
              shape="circle"
              type="primary"
              icon={<EditOutlined />}
            />
          </div>
        }
        layout="vertical"
      >
        <Descriptions.Item
          label="Complainant"
          labelStyle={{
            fontWeight: 600,
          }}
        >
          {blotter_data?.Resident?.first_name}{" "}
          {blotter_data?.Resident?.last_name}
        </Descriptions.Item>
        <Descriptions.Item
          label="Respondent"
          labelStyle={{
            fontWeight: 600,
          }}
        >
          {blotter_data?.respondent}{" "}
        </Descriptions.Item>
        <Descriptions.Item
          label="In-Charge"
          labelStyle={{
            fontWeight: 600,
          }}
        >
          {blotter_data?.in_charge}{" "}
        </Descriptions.Item>
        <Descriptions.Item
          label="Created At"
          labelStyle={{
            fontWeight: 600,
          }}
        >
          {moment(blotter_data?.createdAt).tz("Asia/Manila").format("LLL")}
        </Descriptions.Item>
        <Descriptions.Item
          label="Status"
          labelStyle={{
            fontWeight: 600,
          }}
        >
          {blotter_data?.status === "PENDING" ? (
            <Badge status="processing" text="Pending" color="gold" />
          ) : blotter_data?.status === "SOLVED" ? (
            <Badge status="success" text="Solved" />
          ) : (
            <Skeleton />
          )}
        </Descriptions.Item>
        <Descriptions.Item
          label="Statement"
          span={2}
          labelStyle={{
            fontWeight: 600,
          }}
        >
          {blotter_data?.statement}
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      {/* <div>
        <Typography.Title level={5}>Media / Files</Typography.Title>
        <Empty />
      </div> */}
    </Card>
  );
};

export default BlotterReportView;
