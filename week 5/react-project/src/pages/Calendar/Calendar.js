import React, { useState } from "react";
import {
    addDays,
    addMonths,
    subMonths,
    format,
    startOfWeek,
    startOfMonth,
    endOfWeek,
    endOfMonth,
    isSameDay,
    isSameMonth
} from 'date-fns';
import "./Calendar.scss";
import NavBar from '../../components/NavBar/NavBar';
import CalendarSubheader from "../../components/CalendarSubheader/CalendarSubheader";

function Calendar() {

    const [currentDate, setCurrentDate] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState(new Date())

    const header = () => {
        const dateFormat = "MMM yyyy";
        return (
            <div className="header row flex-middle">
                <div className="column col-start">
                    <div className="icon" onClick={prevMonth}>
                        chevron_left
                 </div>
                </div>
                <div className="column col-center">
                    <span>{format(currentDate, dateFormat)}</span>
                </div>
                <div className="column col-end">
                    <div className="icon" onClick={nextMonth}>
                        chevron_right
                 </div>
                </div>
            </div>
        );
    };

    const cells = () => {
        const monthStart = startOfMonth(currentDate);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);
        const dateFormat = "d";
        const rows = []; let days = [];
        let day = startDate;
        let formattedDate = "";
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                console.log(day);
                formattedDate = format(day, dateFormat);
                const cloneDay = day;
                days.push(
                    <div
                        className={`column cell ${!isSameMonth(day, monthStart)
                            ? "disabled" : isSameDay(day, selectedDate)
                                ? "selected" : ""}`}
                        key={day}
                        onClick={() => onDateClick(cloneDay)}
                    >
                        <span className="number">{formattedDate}</span>
                        <span class="badge badge-pill badge-primary">Primary</span>
                        <span class="badge badge-pill badge-secondary">Primary</span>
                        <span class="badge badge-pill badge-danger">Primary</span>
                        <span class="badge badge-pill badge-success">Primary</span>
                    </div>
                );
                day = addDays(day, 1);
            } rows.push(
                <div className="row" key={day}> {days} </div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>;
    };

    const nextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1));
    };

    const prevMonth = () => {
        setCurrentDate(subMonths(currentDate, 1));
    };

    const onDateClick = day => {
        setSelectedDate(day);
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="calendar">
                <div>{header()}</div>
                <CalendarSubheader></CalendarSubheader>
                <div>{cells()}</div>
            </div>
        </div>

    );
}

export default Calendar;