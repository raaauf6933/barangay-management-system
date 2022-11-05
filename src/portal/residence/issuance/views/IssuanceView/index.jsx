import React from "react";
import { Badge, Button, Card, Descriptions, Skeleton, Typography } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { certificateSectionUrl } from "../../url";
import { GET_RESIDENT_ISSUANCE } from "./../../../../admin/issuance_management/api";
import { ArrowLeftOutlined } from "@ant-design/icons";
import useFetch from "../../../../../hooks/useFetch";
import moment from "moment-timezone";

const IssuanceView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { response } = useFetch({
    url: GET_RESIDENT_ISSUANCE,
    params: {
      id,
    },
  });

  const data = response?.data?.issuance_resident;

  return (
    <>
      <Card
        className="announcement-card"
        extra={
          <>
            <Button
              onClick={() => navigate(certificateSectionUrl)}
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
              <Typography.Title level={3}>Request No. # {id} </Typography.Title>
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
            label="Name"
            labelStyle={{
              fontWeight: 600,
            }}
          >
            {data?.Resident?.first_name} {data?.Resident?.last_name}
          </Descriptions.Item>
          <Descriptions.Item
            label="Issuance Type"
            labelStyle={{
              fontWeight: 600,
            }}
          >
            {data?.Service_type?.name}
          </Descriptions.Item>
          <Descriptions.Item
            label="Requested At"
            labelStyle={{
              fontWeight: 600,
            }}
          >
            {moment(data?.createdAt).tz("Asia/Manila").format("LLL")}
          </Descriptions.Item>
          <Descriptions.Item
            label="Payment Status"
            labelStyle={{
              fontWeight: 600,
            }}
          >
            {!data?.Service_transaction?.isPaid ? (
              <Badge status="processing" text="Pending" color="red" />
            ) : data?.Service_transaction?.isPaid ? (
              <Badge status="success" text="Confirmed" />
            ) : (
              <Skeleton />
            )}
          </Descriptions.Item>
          <Descriptions.Item
            label="Status"
            labelStyle={{
              fontWeight: 600,
            }}
          >
            {data?.status === "PENDING" ? (
              <Badge
                status="processing"
                text="Pending / Reviewing"
                color="red"
              />
            ) : data?.status === "APPROVED" ? (
              <Badge status="success" text="APPOVED / FOR PICK-UP" />
            ) : data?.status === "RELEASED" ? (
              <Badge status="success" color="blue" text="RELEASED" />
            ) : (
              <Skeleton />
            )}
          </Descriptions.Item>
          <Descriptions.Item
            label="Purpose"
            labelStyle={{
              fontWeight: 600,
            }}
            span={5}
          >
            {data?.purpose}
          </Descriptions.Item>
          <Descriptions.Item
            label="Admin Remarks"
            labelStyle={{
              fontWeight: 600,
            }}
            span={5}
          >
            {data?.remarks ? data?.remarks : "N/A"}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </>
  );
};

export default IssuanceView;
