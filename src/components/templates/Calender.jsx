import { useState, useEffect } from 'react';
import { getAllBills } from '../../api/Bill';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [billData, setBillData] = useState([]);

    const today = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(i);

    useEffect(() => {
        const fetchBills = async () => {
            try {
                const response = await getAllBills();
                const billList = response.data.map((d) => ({
                    dueDate: d.dueDate,
                    status: d.status.toUpperCase()
                }));
                setBillData(billList);
            } catch (error) {
                console.error("Error fetching bills:", error);
            }
        };
        fetchBills();
    }, []);

    const prevMonth = () => setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
    const nextMonth = () => setCurrentDate(new Date(currentYear, currentMonth + 1, 1));

    const isToday = (day) =>
        day === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return (
        <div className="max-w-md mx-auto h-full bg-white rounded-lg shadow-md p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <button onClick={prevMonth} className="p-2 rounded-lg hover:bg-gray-100 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <div className="text-center">
                    <h2 className="text-sm font-semibold text-gray-400">
                        {monthNames[currentMonth]} {currentYear}
                    </h2>
                </div>
                <button onClick={nextMonth} className="p-2 rounded-lg hover:bg-gray-100 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Weekdays */}
            <div className="grid grid-cols-7 gap-2 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">{day}</div>
                ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
                {days.map((day, index) => {
                    if (!day) return <div key={index}></div>; // empty cells

                    const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                    const billForDay = billData.find(bill => bill.dueDate === formattedDate);

                    let bgColor = '';
                    let borderColor = '';
                    let dotColor = '';

                    if (billForDay) {
                        const billDate = new Date(billForDay.dueDate);
                        const isPastDue = billDate < today && billForDay.status === "PENDING";

                        if (billForDay.status === "PAID") {
                            bgColor = "bg-green-100";
                            borderColor = "border-2 border-green-300";
                            dotColor = "bg-green-400";
                        } else if (billForDay.status === "OVERDUE" || isPastDue) {
                            bgColor = "bg-red-100";
                            borderColor = "border-2 border-red-300";
                            dotColor = "bg-red-400";
                        } else if (billForDay.status === "PENDING") {
                            bgColor = "bg-blue-100";
                            borderColor = "border-2 border-blue-300";
                            dotColor = "bg-blue-400";
                        }
                    }

                    return (
                        <div
                            key={index}
                            className={`relative h-6 flex items-center justify-center rounded-lg text-sm font-medium transition-colors
                            ${day ? 'cursor-pointer hover:bg-gray-100' : ''}
                            ${isToday(day) ? 'bg-blue-100 text-blue-700 border-2 border-blue-300' : 'text-gray-700'}
                            ${bgColor} ${borderColor}`}
                        >
                            {billForDay && (
                                <div className={`absolute top-[-4px] right-0 h-[6px] w-[6px] outline-2 outline-white rounded ${dotColor}`}></div>
                            )}
                            {day}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Calendar;
