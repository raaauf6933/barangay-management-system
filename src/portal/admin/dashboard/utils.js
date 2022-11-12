import { BellFilled } from "@ant-design/icons";
import { MdPendingActions } from "react-icons/md";
import { HiOutlineClipboard, HiOutlineUserGroup } from "react-icons/hi";
import { TbReportSearch, TbReport } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { BiUserCheck } from "react-icons/bi";

export const createDashboardCard = (data) => [
  {
    key: "total_anouncement",
    label: "Total Announcement",
    value: data?.announcemets,
    icon: <BellFilled />,
  },
  {
    key: "total_issuance_request",
    label: "Issuance Request",
    value: data?.issuances,
    icon: <HiOutlineClipboard />,
  },
  {
    key: "pending_issuance_request",
    label: "Pending Issuance Request",
    value: data?.pending_issuances,
    icon: <MdPendingActions />,
  },
  {
    key: "total_registered_resident",
    label: "Registered Resident",
    value: data?.residents,
    icon: <HiOutlineUserGroup />,
  },

  {
    key: "total_service_request",
    label: "Blotter Report",
    value: data?.blotters,
    icon: <TbReportSearch />,
  },
  {
    key: "total_service_request",
    label: "Pending Blotter Report",
    value: data?.pending_blotters,
    icon: <TbReport />,
  },
  {
    key: "total_service_request",
    label: "Users",
    value: data?.users,
    icon: <FiUsers />,
  },
  {
    key: "total_service_request",
    label: "Active Users",
    value: data?.active_users,
    icon: <BiUserCheck />,
  },
];
