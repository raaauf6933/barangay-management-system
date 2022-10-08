import {
  HomeOutlined,
  FileTextOutlined,
  ContainerOutlined,
  DashboardOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { PermissionEnum } from "./../../utils/permissionEnum";

export const createMenuStructure = () => {
  return [
    {
      key: "/portal/residence",
      icon: <HomeOutlined />,
      label: "Home",
      permission: PermissionEnum.RESIDENT,
      url: "",
    },
    {
      key: "/portal/residence/issuance",
      icon: <FileTextOutlined />,
      label: "Issuance",
      permission: PermissionEnum.RESIDENT,
      url: "residence/issuance",
    },
    // {
    //   key: "/portal/residence/reports",
    //   icon: <FileTextOutlined />,
    //   label: "Reports",
    //   permission: PermissionEnum.RESIDENT,
    //   url: "reports",
    // },
    // {
    //   key: "/portal/residence/blotter",
    //   icon: <FileTextOutlined />,
    //   label: "Blotter",
    //   permission: PermissionEnum.RESIDENT,
    //   url: "blotter",
    // },
    {
      key: "/portal/admin/",
      icon: <DashboardOutlined />,
      label: "Dashboard",
      permission: PermissionEnum.ADMIN,
      url: "",
    },
    {
      key: "/portal/admin/announcements",
      icon: <ContainerOutlined />,
      label: "Announcement",
      permission: PermissionEnum.ADMIN,
      url: "/portal/admin/announcements",
    },
    {
      key: "/portal/admin/request",
      icon: <ContainerOutlined />,
      label: "Request",
      permission: PermissionEnum.ADMIN,
      url: "/portal/admin/request",
    },
    {
      key: "/portal/admin/blotter",
      icon: <ContainerOutlined />,
      label: "Blotter Report",
      permission: PermissionEnum.ADMIN,
      url: "/portal/admin/blotter",
    },
    {
      key: "/portal/admin/officials_management",
      icon: <ContainerOutlined />,
      label: "Officials Management",
      permission: PermissionEnum.ADMIN,
      url: "/portal/admin/officials_management",
    },
    {
      key: "/portal/admin/resident_management",
      icon: <ContainerOutlined />,
      label: "Resident Management",
      permission: PermissionEnum.ADMIN,
      url: "/portal/admin/resident_management",
    },
    {
      key: "/portal/admin/users",
      icon: <UserOutlined />,
      label: "Users",
      permission: PermissionEnum.ADMIN,
      url: "/portal/admin/users",
    },
  ];
};
