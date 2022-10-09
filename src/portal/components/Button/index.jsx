import React from "react";
import { Button as AntdButton, Grid } from "antd";

const { useBreakpoint } = Grid;

const Button = (props) => {
  const {
    children,
    onClick,
    style,
    type,
    className,
    disabled,
    name,
    icon,
    mobileView,
    ...rest
  } = props;

  const screens = useBreakpoint();

  return (
    <AntdButton
      type={type}
      onClick={onClick}
      style={style}
      className={className}
      disabled={disabled}
      name={name}
      icon={mobileView && screens.xs ? icon : null}
      shape={mobileView && screens.xs ? "circle" : null}
      {...rest}
    >
      {mobileView && screens.xs ? null : children}
    </AntdButton>
  );
};

export default Button;
