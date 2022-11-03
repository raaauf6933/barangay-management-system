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
        case "PENDING":
          return (
            <Tag color="red" key={status}>
              {"PENDING".toUpperCase()}
            </Tag>
          );
        case "CONFIRMED":
          return (
            <Tag color="green" key={status}>
              {"CONFIRMED".toUpperCase()}
            </Tag>
          );
        case "APPROVED":
          return (
            <Tag color="green" key={status}>
              {"APPROVED".toUpperCase()}
            </Tag>
          );
        case "SOLVED":
          return (
            <Tag color="green" key={status}>
              {"SOLVED".toUpperCase()}
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
