import React from "react";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";

const MenuComponent = ({ menuStructure, navigate }) => {
  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          width: "100%",
        }}
      >
        {menuStructure
          ? menuStructure.map((menu, index) => {
              return menu.position === "left" ? (
                menu.children ? (
                  <>
                    <SubMenu key={index} title={<b>{menu.label}</b>}>
                      {menu.children.map((subMenu, index) => {
                        return (
                          <Menu.Item key={index}>{subMenu.label} </Menu.Item>
                        );
                      })}
                    </SubMenu>
                  </>
                ) : (
                  <Menu.Item key={index} onClick={() => navigate(menu.url)}>
                    <b>{menu.label}</b>
                  </Menu.Item>
                )
              ) : null;
            })
          : null}
      </Menu>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "end",
        }}
      >
        {menuStructure
          ? menuStructure.map((menu, index) => {
              return menu.position === "right" ? (
                <Menu.Item key={index} onClick={() => navigate(menu.url)}>
                  <b>{menu.label}</b>
                </Menu.Item>
              ) : null;
            })
          : null}
      </Menu>
    </>
  );
};

export default MenuComponent;
