import React from "react";
import { Drawer, Menu } from "antd";
// import {
//   AppstoreOutlined,
//   MailOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";

const { SubMenu } = Menu;

interface DrawerComponentProps {
  openDrawer: any;
  setOpenDrawer: any;
  menuStructure: any;
  navigate: any;
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({
  openDrawer,
  setOpenDrawer,
  menuStructure,
  navigate,
}) => {
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
          ? menuStructure.map((menu: any, index: any) => {
              if (menu.children) {
                return (
                  <>
                    <SubMenu key={index} title={<b>{menu.label}</b>}>
                      {menu.children.map((subMenu: any, index: any) => {
                        return (
                          <Menu.Item key={index}>{subMenu.label} </Menu.Item>
                        );
                      })}
                    </SubMenu>
                  </>
                );
              } else {
                return (
                  <Menu.Item key={index} onClick={() => navigate(menu.url)}>
                    <b>{menu.label}</b>
                  </Menu.Item>
                );
              }
            })
          : null}
      </Menu>
    </Drawer>
  );
};

export default DrawerComponent;
