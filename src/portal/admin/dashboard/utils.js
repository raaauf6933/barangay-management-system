import { BellFilled } from "@ant-design/icons";
import { MdPendingActions } from "react-icons/md";
import { HiOutlineClipboard, HiOutlineUserGroup } from "react-icons/hi";
import { TbReportSearch, TbReport } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { BiUserCheck } from "react-icons/bi";

export const createDashboardCard = () => [
  {
    key: "total_anouncement",
    label: "Total Announcement",
    value: "2",
    icon: <BellFilled />,
  },
  {
    key: "total_issuance_request",
    label: "Issuance Request",
    value: "2",
    icon: <HiOutlineClipboard />,
  },
  {
    key: "pending_issuance_request",
    label: "Pending Issuance Request",
    value: "2",
    icon: <MdPendingActions />,
  },
  {
    key: "total_registered_resident",
    label: "Registered Resident",
    value: "2",
    icon: <HiOutlineUserGroup />,
  },

  {
    key: "total_service_request",
    label: "Blotter Report",
    value: "2",
    icon: <TbReportSearch />,
  },
  {
    key: "total_service_request",
    label: "Pending Blotter Report",
    value: "2",
    icon: <TbReport />,
  },
  {
    key: "total_service_request",
    label: "Users",
    value: "2",
    icon: <FiUsers />,
  },
  {
    key: "total_service_request",
    label: "Active Users",
    value: "2",
    icon: <BiUserCheck />,
  },
];
