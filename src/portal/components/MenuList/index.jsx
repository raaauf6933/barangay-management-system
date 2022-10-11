import React, { useState, useEffect } from "react";
import { Divider, Menu } from "antd";
import { useLocation, NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth/context";
import "./style.css";
const { SubMenu, Item } = Menu;

const MenuList = (props) => {
  const { menuStructure, settingMenuStructure } = props;
  const location = useLocation();
  const { hasNavPermission } = useAuth();
  const [current, setCurrent] = useState(location.pathname);

  useEffect(() => {
    if (location) {
      if (current !== location.pathname) {
        setCurrent(location.pathname);
      }
    }
  }, [location, current]);

  function handleClick(e) {
    setCurrent(e.key);
  }

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      // style={{ height: "100%", borderRight: 0 }}
      selectedKeys={[current]}
      onClick={handleClick}
      className="side-menu"
    >
      {menuStructure.map((item) => {
        return hasNavPermission(item.permission) ? (
          <>
            {item.children ? (
              <SubMenu key={item.url} title={item.label} icon={item.icon}>
                {item.children.map((sub) => (
                  <Item key={sub.key} icon={sub.icon}>
                    {sub.label}{" "}
                  </Item>
                ))}
              </SubMenu>
            ) : (
              <Item key={item.key} icon={item.icon}>
                <NavLink to={item.url}> {item.label}</NavLink>
              </Item>
            )}
          </>
        ) : null;
      })}
      <Divider orientation="left">Settings</Divider>
      {settingMenuStructure.map((item) => {
        return hasNavPermission(item.permission) ? (
          <>
            <Item key={item.key} icon={item.icon}>
              <NavLink to={item.url}> {item.label}</NavLink>
            </Item>
          </>
        ) : null;
      })}
    </Menu>
  );
};

export default MenuList;
