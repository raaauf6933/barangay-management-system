import React from "react";
import { Tag, Skeleton } from "antd";

const { Button: SkeletonP } = Skeleton;

const Status = (props) => {
  const { type, status } = props;

  switch (type) {
    case "CERTIFICATES":
      switch (status) {
        case "FOR_PICKUP":
          return (
            <Tag color="green" key={status}>
              {"FOR PICKUP".toUpperCase()}
            </Tag>
          );
        case "PENDING":
          return (
            <Tag color="blue" key={status}>
              {"PENDING".toUpperCase()}
            </Tag>
          );
        default:
          return <SkeletonP active></SkeletonP>;
      }
    case "DEFAULT":
      switch (status) {
        case "ACTIVE":
          return (
            <Tag color="green" key={status}>
              {"ACTIVE".toUpperCase()}
            </Tag>
          );
        case "INACTIVE":
          return (
            <Tag color="error" key={status}>
              {"INACTIVE".toUpperCase()}
            </Tag>
          );
        default:
          return <SkeletonP active></SkeletonP>;
      }
    default:
      return <SkeletonP />;
  }
};

export default Status;
