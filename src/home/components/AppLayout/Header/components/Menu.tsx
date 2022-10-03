import React from "react";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";

interface MenuComponentProps {
  menuStructure: any;
  navigate: any;
}

const MenuComponent: React.FC<MenuComponentProps> = ({
  menuStructure,
  navigate,
}) => {
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
          ? menuStructure.map((menu: any, index: number) => {
              return menu.position === "left" ? (
                menu.children ? (
                  <>
                    <SubMenu key={index} title={<b>{menu.label}</b>}>
                      {menu.children.map((subMenu: any, index: number) => {
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
          ? menuStructure.map((menu: any, index: number) => {
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
