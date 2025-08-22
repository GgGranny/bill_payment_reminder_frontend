import { useEffect, useState } from 'react';
import { billData } from '../../utils/calender';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const today = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Get first day of month and total days
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Generate days array for the month
    const days = [];




    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        days.push(null);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
    }

    // Navigate to previous/next month
    const prevMonth = () => {
        setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
    };

    const goToToday = () => {
        setCurrentDate(new Date());
    };

    // Check if a day is today
    const isToday = (day) => {
        return (
            day === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear()
        );
    };

    // Format month and year for display
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];


    return (
        <div className=" max-w-md mx-auto h-full bg-white rounded-lg shadow-md p-6">
            {/* Header */}
            <div className="flex items-center justify-between ">
                <button
                    onClick={prevMonth}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-400"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="text-center">
                    <h2 className="text-sm font-semibold text-gray-400">
                        {monthNames[currentMonth]} {currentYear}
                    </h2>
                    {/* <button
                        onClick={goToToday}
                        className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                        Today
                    </button> */}
                </div>

                <button
                    onClick={nextMonth}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-400"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Week days */}
            <div className="grid grid-cols-7 gap-2 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div
                        key={day}
                        className="text-center text-xs font-medium text-gray-500 py-2"
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-2">
                {days.map((day, index) => {
                    let formattedDate = `${currentYear}-${String(currentMonth).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                    return (
                        <div
                            key={index}
                            className={`relative h-6 flex items-center justify-center rounded-lg text-sm font-medium transition-colors
                            ${day ? 'cursor-pointer hover:bg-gray-100' : ''}
                            ${isToday(day) ? 'bg-blue-100 text-blue-700 border-2 border-blue-300' : 'text-gray-700'}
                            ${day && !isToday(day) ? 'hover:bg-gray-100' : ''}
                            ${billData.includes(formattedDate) ? "bg-blue-100 text-blue-700 border-2 border-blue-300" : ""}
                            `}>
                            {billData.includes(formattedDate) && (
                                <div className="absolute top-[-4px] right-0 h-[6px] w-[6px] outline-2 outline-white rounded bg-blue-400"></div>
                            )}
                            {day}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Calendar;