import React from "react";
import { Drawer, Menu, Divider } from "antd";
import { useAuth } from "../../context/auth/context";
// import {
//   AppstoreOutlined,
//   MailOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";

const { SubMenu, Item } = Menu;

const DrawerComponent = ({
  openDrawer,
  setOpenDrawer,
  menuStructure,
  settingMenuStructure,
  navigate,
}) => {
  const onNavigate = (url) => {
    navigate(url);
    setOpenDrawer(false);
  };

  const { hasNavPermission } = useAuth();

  return (
    <Drawer
      placement="left"
      visible={openDrawer}
      size="default"
      closable={false}
      onClose={() => setOpenDrawer(false)}
    >
      <Menu
        theme="light"
        mode="inline"
        style={{
          width: "100%",
        }}
      >
        {menuStructure
          ? menuStructure.map((item) => {
              return hasNavPermission(item.permission) ? (
                <>
                  {item.children ? (
                    <SubMenu key={item.url} title={item.label} icon={item.icon}>
                      {item.children.map((sub) => (
                        <Item
                          key={sub.key}
                          icon={sub.icon}
                          onClick={() => onNavigate(item.url)}
                        >
                          {sub.label}{" "}
                        </Item>
                      ))}
                    </SubMenu>
                  ) : (
                    <Item
                      key={item.key}
                      icon={item.icon}
                      onClick={() => onNavigate(item.url)}
                    >
                      {item.label}
                    </Item>
                  )}
                </>
              ) : null;
            })
          : null}
        <Divider orientation="left">Settings</Divider>
        {settingMenuStructure.map((item) => {
          return hasNavPermission(item.permission) ? (
            <>
              <Item
                key={item.key}
                icon={item.icon}
                onClick={() => onNavigate(item.url)}
              >
                {item.label}
              </Item>
            </>
          ) : null;
        })}
      </Menu>
    </Drawer>
  );
};

export default DrawerComponent;
