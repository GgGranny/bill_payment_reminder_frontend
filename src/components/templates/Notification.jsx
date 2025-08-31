import { useEffect, useState } from "react";
import { MdLightbulbOutline } from "react-icons/md";
import { calualateDate } from "../../api/Notifications";

const Notification = ({ data }) => {
    const [todayNotifications, setTodayNotifications] = useState([]);
    const [yesterdayNotifications, setYesterdayNotifications] = useState([]);

    useEffect(() => {
        if (!data || data.length === 0) return;

        // Sort by recent first
        const sorted = [...data].sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        // Separate today vs yesterday using your function
        const today = sorted.filter((d) => calualateDate(d.createdAt));
        const yesterday = sorted.filter((d) => !calualateDate(d.createdAt));

        setTodayNotifications(today);
        setYesterdayNotifications(yesterday);
    }, [data]);

    // Card component for reuse
    const NotificationCard = ({ d }) => (
        <div
            className={`flex gap-1 p-2 cursor-pointer 
                ${d.read ? "hover:bg-gray-100" : "bg-blue-100 hover:bg-blue-200"}`}
        >
            <div className="flex justify-center items-center">
                <MdLightbulbOutline
                    className={`w-[25px] h-[25px] ${d.read ? "text-gray-500" : "text-blue-600"
                        }`}
                />
            </div>
            <div>
                <p className="text-sm font-medium">{d.title}</p>
                <p className="text-xs font-normal leading-5 text-gray-500">
                    {d.message}
                </p>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col bg-white overflow-auto h-[200px]">
            <div className="text-sm font-medium p-1 bg-gray-300 text-gray-500">
                <h1>Today</h1>
            </div>
            {todayNotifications.map((d, index) => (
                <NotificationCard key={index} d={d} />
            ))}

            <div className="text-sm font-medium p-1 bg-gray-300 text-gray-500">
                <h1>Yesterday</h1>
            </div>
            {yesterdayNotifications.map((d, index) => (
                <NotificationCard key={index} d={d} />
            ))}
        </div>
    );
};

export default Notification;
