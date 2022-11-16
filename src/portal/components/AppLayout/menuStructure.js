import {
  HomeOutlined,
  FileTextOutlined,
  ContainerOutlined,
  DashboardOutlined,
  UserOutlined,
  BellOutlined,
  SnippetsOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { HiOutlineUserGroup } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { BiUser } from "react-icons/bi";
import { GrUserSettings } from "react-icons/gr";
import { PermissionEnum } from "./../../utils/permissionEnum";

export const createMenuStructure = () => {
  return [
    {
      key: "/portal/residence",
      icon: <HomeOutlined />,
      label: "Home",
      permission: [PermissionEnum.RESIDENT],
      url: "",
    },
    {
      key: "/portal/residence/issuance",
      icon: <FileTextOutlined />,
      label: "Issuance",
      permission: [PermissionEnum.RESIDENT],
      url: "residence/issuance",
    },
    {
      key: "/portal/residence/incident_report",
      icon: <FileTextOutlined />,
      label: "Incident Report",
      permission: [PermissionEnum.RESIDENT],
      url: "residence/incident_report",
    },
    // {
    //   key: "/portal/residence/reports",
    //   icon: <FileTextOutlined />,
    //   label: "Reports",
    //   permission: [PermissionEnum.RESIDENT],
    //   url: "reports",
    // },
    // {
    //   key: "/portal/residence/blotter",
    //   icon: <FileTextOutlined />,
    //   label: "Blotter",
    //   permission: [PermissionEnum.RESIDENT],
    //   url: "blotter",
    // },
    {
      key: "/portal/admin",
      icon: <DashboardOutlined />,
      label: "Dashboard",
      permission: [PermissionEnum.ADMIN, PermissionEnum.SUPER_ADMIN],
      url: "",
    },
    {
      key: "/portal/admin/announcements",
      icon: <BellOutlined />,
      label: "Announcement",
      permission: [PermissionEnum.ADMIN, PermissionEnum.SUPER_ADMIN],
      url: "/portal/admin/announcements",
    },
    {
      key: "/portal/admin/issuance_management",
      icon: <ContainerOutlined />,
      label: "Issuance Management",
      // children: [
      //   {
      //     key: "/portal/admin/services/issuance",
      //     icon: <FileTextOutlined />,
      //     label: "Service",
      //     permission: [PermissionEnum.ADMIN],
      //     url: "/portal/admin/services/issuance",
      //   },
      //   {
      //     key: "/portal/admin/services/issuance",
      //     icon: <FileTextOutlined />,
      //     label: "Issuance Request",
      //     permission: [PermissionEnum.ADMIN],
      //     url: "/portal/admin/services/issuance",
      //   },
      // ],
      permission: [PermissionEnum.ADMIN, PermissionEnum.SUPER_ADMIN],
      url: "/portal/admin/issuance_management",
    },
    {
      key: "/portal/admin/blotter",
      icon: <SnippetsOutlined />,
      label: "Blotter Report",
      permission: [PermissionEnum.ADMIN, PermissionEnum.SUPER_ADMIN],
      url: "/portal/admin/blotter",
    },
    {
      key: "/portal/admin/incident_report",
      icon: <SnippetsOutlined />,
      label: "Incident Report",
      permission: [PermissionEnum.ADMIN, PermissionEnum.SUPER_ADMIN],
      url: "/portal/admin/incident_report",
    },

    {
      key: "/portal/admin/officials_management",
      icon: <HiOutlineUserGroup />,
      label: "Officials Management",
      permission: [PermissionEnum.SUPER_ADMIN],
      children: [
        {
          key: "/portal/admin/officials_management/positions",
          icon: <GrUserSettings />,
          label: "Positions",
          permission: [PermissionEnum.ADMIN, PermissionEnum.SUPER_ADMIN],
          url: "/portal/admin/officials_management/positions",
        },
        {
          key: "/portal/admin/officials_management/officials",
          icon: <BiUser />,
          label: "Officials",
          permission: [PermissionEnum.ADMIN, PermissionEnum.SUPER_ADMIN],
          url: "/portal/admin/officials_management/officials",
        },
      ],
      url: "/portal/admin/officials_management",
    },
    {
      key: "/portal/admin/resident_management",
      icon: <HiOutlineUserGroup />,
      label: "Resident Management",
      permission: [PermissionEnum.SUPER_ADMIN],
      url: "/portal/admin/resident_management",
    },
    {
      key: "/portal/admin/users",
      icon: <UserOutlined />,
      label: "Non-Admin Authentication",
      permission: [PermissionEnum.SUPER_ADMIN],
      url: "/portal/admin/users",
    },
    {
      key: "/portal/admin/barangay_report",
      icon: <ContainerOutlined />,
      label: "Barangay Reports",
      permission: [PermissionEnum.SUPER_ADMIN],
      url: "/portal/admin/barangay_report",
    },
  ];
};

export const SettingStructure = () => [
  {
    key: "/portal/admin/content_settings",
    icon: <AppstoreOutlined />,
    label: "Content Management",
    permission: [PermissionEnum.SUPER_ADMIN],
    url: "/portal/admin/content_settings",
  },
  {
    key: "/portal/my_profile",
    icon: <CgProfile />,
    label: "My Account",
    permission: [
      PermissionEnum.ADMIN,
      PermissionEnum.SUPER_ADMIN,
      PermissionEnum.RESIDENT,
    ],
    url: "/portal/my_profile",
  },
];
