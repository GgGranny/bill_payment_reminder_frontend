import { MdSpaceDashboard } from "react-icons/md";
import { MdPendingActions } from "react-icons/md";
import { MdOutlineDownloadDone } from "react-icons/md";
import { MdNotifications } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";


export const icons = {

    MdSpaceDashboard,
    MdPendingActions,
    MdOutlineDownloadDone,
    MdNotifications,
    MdSettings,
    MdDarkMode
}


export const sidebarIcons = [
    {
        label: "COMPONENT",
        links: [
            {
                name: "Dashboard",
                icon: "MdSpaceDashboard",
                path: "/layout/dashboard"
            }
        ]
    },
    {
        label: "PAYMENT",
        links: [
            {
                name: "Pending",
                icon: "MdPendingActions",
                path: "/layout/payment"
            },
            {
                name: "Paid",
                icon: "MdOutlineDownloadDone",
                path: "/layout/paid"
            }
        ]
    },
    {
        label: "SYSTEM",
        links: [
            {
                name: "Notification",
                icon: "MdNotifications",
                path: "/layout/notification"
            },
            {
                name: "Settings",
                icon: "MdSettings",
                path: "/layout/setting"
            },
            {
                name: "Dark mode",
                icon: "MdDarkMode",
            }
        ]
    }
]