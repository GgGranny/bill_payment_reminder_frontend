import { MdSpaceDashboard } from "react-icons/md";
import { MdPendingActions } from "react-icons/md";
import { MdOutlineDownloadDone } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { RiAddBoxFill } from "react-icons/ri";


export const icons = {

    MdSpaceDashboard,
    MdPendingActions,
    MdOutlineDownloadDone,
    MdSettings,
    MdDarkMode,
    RiAddBoxFill
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
                name: "Bills",
                icon: "RiAddBoxFill",
                path: "/layout/table"
            }
            // {
            //     name: "Pending",
            //     icon: "MdPendingActions",
            //     path: "/layout/payment"
            // },
            // {
            //     name: "Paid",
            //     icon: "MdOutlineDownloadDone",
            //     path: "/layout/paid"
            // }
        ]
    },
    {
        label: "SYSTEM",
        links: [
            {
                name: "Settings",
                icon: "MdSettings",
                path: "/layout/setting"
            },
            // {
            //     name: "Dark mode",
            //     icon: "MdDarkMode",
            // }
        ]
    }
]