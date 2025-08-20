import { FaRegCalendarTimes } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { LuCalendar } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";

export const cardIcons = {
    FaRegCalendarTimes,
    FaRegCalendarCheck,
    LuCalendar,
    FaRegCalendarAlt
}

export const cardData = [
    {
        icon: "FaRegCalendarTimes",
        title: "Overdue Bills",
        quantity: 20
    },
    {
        icon: "FaRegCalendarCheck",
        title: "Paid",
        quantity: 1000
    },
    {
        icon: "LuCalendar",
        title: "Upcomming Bills",
        quantity: 100
    },
    {
        icon: "FaRegCalendarAlt",
        title: "Total Bills",
        quantity: 1500
    }
]