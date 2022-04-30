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
      key: "/portal/residence/",
      icon: <HomeOutlined />,
      label: "Home",
      permission: PermissionEnum.RESIDENT,
      url: "",
    },
    {
      key: "/portal/residence/certificates",
      icon: <FileTextOutlined />,
      label: "Certificates",
      permission: PermissionEnum.RESIDENT,
      url: "certificates",
    },
    {
      key: "/portal/residence/reports",
      icon: <FileTextOutlined />,
      label: "Reports",
      permission: PermissionEnum.RESIDENT,
      url: "reports",
    },
    {
      key: "/portal/residence/blotter",
      icon: <FileTextOutlined />,
      label: "Blotter",
      permission: PermissionEnum.RESIDENT,
      url: "blotter",
    },
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
      url: "announcements",
    },
    {
      key: "/portal/admin/certificates",
      icon: <ContainerOutlined />,
      label: "Certificates",
      permission: PermissionEnum.ADMIN,
      url: "certificates",
    },
    {
      key: "/portal/admin/reports",
      icon: <ContainerOutlined />,
      label: "Reports",
      permission: PermissionEnum.ADMIN,
      url: "reports",
    },
    {
      key: "/portal/admin/blotter",
      icon: <ContainerOutlined />,
      label: "Blotter",
      permission: PermissionEnum.ADMIN,
      url: "blotter",
    },
    {
      key: "/portal/admin/users",
      icon: <UserOutlined />,
      label: "Users",
      permission: PermissionEnum.ADMIN,
      url: "users",
    },
  ];
};
