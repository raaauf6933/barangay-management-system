import React from "react";
import "./style.css";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = (props) => {
  const { children } = props;
  return <div className="container">{children}</div>;
};

export default Container;
