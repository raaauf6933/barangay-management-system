import React from "react";
import { Card, Avatar } from "antd";
import "./style.css";

const DashboardCard = (props) => {
  const { label, value, icon } = props;
  return (
    <>
      <Card>
        <div className="flex-row">
          <div className="flex-column">
            <span className="dashboard-label">{label}</span>
            <span className="dashboard-value">{value}</span>
          </div>
          <div className="dashboard-icon">
            {" "}
            <Avatar
              size={64}
              icon={icon}
              style={{
                background: "red",
              }}
            />
          </div>
        </div>
      </Card>
    </>
  );
};

export default DashboardCard;
