import React from "react";
import { Card } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import "./style.css";

const IssuanceCard = (props) => {
  const { title, description } = props;
  return (
    <>
      <Card
        title={<span className="issuance-card-title">{title}</span>}
        size="small"
        headStyle={{
          borderBottom: "unset",
        }}
        className="issuance-card"
        hoverable
        style={{
          transition: "0.3s",
        }}
      >
        <div className="issuance-card-content">
          <span>{description}</span>
          <div>
            <PlusSquareOutlined className="issuance-card-icon" />
          </div>
        </div>
      </Card>
    </>
  );
};

export default IssuanceCard;
