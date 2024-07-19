import {
  Dashboard as DashboardIcon,
  ManageAccounts as ManageAccountIcon,
  Groups as GroupsIcon,
  Message as MessageIcon,
} from "@mui/icons-material";

export const adminTabs = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: <ManageAccountIcon />,
  },
  {
    name: "Chats",
    path: "/admin/groups",
    icon: <GroupsIcon />,
  },
  {
    name: "Messages",
    path: "/admin/messages",
    icon: <MessageIcon />,
  },
];
