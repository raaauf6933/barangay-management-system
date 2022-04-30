import React from "react";
import "./style.css";

const PageHeader = (props) => {
  const { title, children } = props;
  return (
    <div className="page-header">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default PageHeader;
