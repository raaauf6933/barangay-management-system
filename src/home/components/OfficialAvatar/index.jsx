import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { Avatar, Card } from "antd";
import "./style.css";

const OfficialAvatar = (props) => {
  const { image, name, position } = props;
  return (
    <>
      <div>
        <Card className="officials-card ">
          <div className="officials-card-content">
            <Avatar
              size={{ xs: 150, sm: 150, md: 150, lg: 170, xl: 170, xxl: 170 }}
              {...(image ? { src: image } : { icon: <UserOutlined /> })}
              icon={<UserOutlined />}
            />
            <Card.Meta
              className="officials-details"
              title={<span className="officials-name">{name}</span>}
              description={
                <span className="officials-position">{position}</span>
              }
            />
          </div>
        </Card>
      </div>
    </>
  );
};

export default OfficialAvatar;
