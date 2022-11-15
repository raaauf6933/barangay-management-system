import React from "react";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";

const MenuComponent = ({ menuStructure, navigate, color }) => {
  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          width: "100%",
          background: color.background,
        }}
      >
        {menuStructure
          ? menuStructure.map((menu, index) => {
              return menu.position === "left" ? (
                menu.children ? (
                  <>
                    <SubMenu
                      key={index}
                      title={<b>{menu.label}</b>}
                      style={{
                        background: color,
                      }}
                    >
                      {menu.children.map((subMenu, index) => {
                        return (
                          <Menu.Item
                            key={index}
                            onClick={() => navigate(subMenu.url)}
                          >
                            {subMenu.label}{" "}
                          </Menu.Item>
                        );
                      })}
                    </SubMenu>
                  </>
                ) : (
                  <Menu.Item
                    key={index}
                    onClick={() => navigate(menu.url)}
                    style={{
                      background: color,
                    }}
                  >
                    <b>{menu.label}</b>
                  </Menu.Item>
                )
              ) : null;
            })
          : null}
      </Menu>

      {/*  portal tab */}
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "end",
          background: color.background,
        }}
      >
        {menuStructure
          ? menuStructure.map((menu, index) => {
              return menu.position === "right" ? (
                <Menu.Item
                  key={index}
                  onClick={() => navigate(menu.url)}
                  style={{
                    background: color,
                  }}
                >
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
