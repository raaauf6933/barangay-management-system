import React from "react";
import { Popover, Button } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { useAuth } from "./../../../../context/auth/context";

const SettingButton = () => {
  const { logout } = useAuth();

  return (
    <Popover
      content={
        <div>
          <Button type="link" onClick={logout}>
            Logout
          </Button>
        </div>
      }
      trigger="click"
      placement="bottomRight"
    >
      <Button
        type="text"
        style={{
          color: "white",
        }}
        icon={
          <SettingOutlined
            style={{
              fontSize: "1.5em",
            }}
          />
        }
      ></Button>
    </Popover>
  );
};

export default SettingButton;
