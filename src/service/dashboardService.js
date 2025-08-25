import { FaRegCalendarTimes } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { LuCalendar } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import { countOverDueBills, countPaidBills, countUpcomingBills, countTotalBills } from "../api/Bill";

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
        quantity: countOverDueBills()
    },
    {
        icon: "FaRegCalendarCheck",
        title: "Paid",
        quantity: countPaidBills()
    },
    {
        icon: "LuCalendar",
        title: "Upcomming Bills",
        quantity: countUpcomingBills()
    },
    {
        icon: "FaRegCalendarAlt",
        title: "Total Bills",
        quantity: countTotalBills()
    }
]