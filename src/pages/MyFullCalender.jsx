import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { useEffect, useState } from 'react'
import { getAllBills } from '../api/Bill'

export default function MyFullCalender() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        getAllBills()
            .then((response) => {
                // Assuming response.data is an array of bills like:
                // [{ id: 1, name: "Electricity Bill", dueDate: "2025-09-15", ...}, ...]

                const mappedEvents = response.data.map((bill) => ({
                    title: bill.name,          // or bill.category if you prefer
                    date: bill.dueDate,        // must be in yyyy-mm-dd format for most calendars
                }));

                setEvents(mappedEvents);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            events={events}
        />
    )
}