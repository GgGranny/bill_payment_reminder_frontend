import { useEffect, useState } from "react";
import { MdLightbulbOutline } from "react-icons/md";
import { calualateDate } from "../../api/Notifications";


const Notification = ({ data }) => {
    const [yesterdayNotifications, setYesterdayNotifications] = useState([]);
    useEffect(() => {
        const newData = [];
        if (data.length === 0) return;
        data.map((d) => {
            if (!calualateDate(d.createdAt)) {
                newData.push(d);
            }
        })
        setYesterdayNotifications(newData);
    }, [data]);
    return (
        <div className="flex flex-col bg-white overflow-auto h-[200px]">
            <div className="text-sm font-medium p-1 bg-gray-300 text-gray-500">
                <h1>Today</h1>
            </div>
            {console.log(yesterdayNotifications)}
            {data && data.map((d, index) => {
                if (calualateDate(d.createdAt)) {
                    return (
                        <div className="flex gap-1 p-2 hover:bg-gray-100 cursor-pointer" key={index}>
                            <div className="flex justify-center items-center">
                                <MdLightbulbOutline className="w-[25px] h-[25px] text-gray-500" />
                            </div>
                            <div className="">
                                <p className="text-sm font-medium ">{d.title}</p>
                                <p className="text-xs font-normal leading-5 text-gray-500">{d.message}</p>
                            </div>
                        </div>
                    )
                }
            })}
            <div className="text-sm font-medium p-1 bg-gray-300 text-gray-500">
                <h1>yesterday</h1>
            </div>
            {yesterdayNotifications && yesterdayNotifications.map((d, index) => {
                return (
                    <div className="flex gap-1 p-2 hover:bg-gray-200 cursor-pointer" key={index}>
                        <div className="flex justify-center items-center">
                            <MdLightbulbOutline className="w-[25px] h-[25px] text-gray-500" />
                        </div>
                        <div className="">
                            <p className="text-sm font-medium ">{d.title}</p>
                            <p className="text-xs font-normal leading-5 text-gray-500">{d.message}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Notification;