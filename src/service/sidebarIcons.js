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
                icon: "MdSpaceDashboard"
            }
        ]
    },
    {
        label: "PAYMENT",
        links: [
            {
                name: "Pending",
                icon: "MdPendingActions"
            },
            {
                name: "Paid",
                icon: "MdOutlineDownloadDone"
            }
        ]
    },
    {
        label: "SYSTEM",
        links: [
            {
                name: "Notification",
                icon: "MdNotifications"
            },
            {
                name: "Settings",
                icon: "MdSettings"
            },
            {
                name: "Dark mode",
                icon: "MdDarkMode"
            }
        ]
    }
]