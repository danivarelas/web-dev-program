import React, { useState, useContext } from "react";
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
import { RacesContext } from "../../contexts/RacesContext/RacesContext";
import { GoalsContext } from "../../contexts/GoalsContext/GoalsContext";
import MenuHeader from "../../components/MenuHeader/MenuHeader";

function Calendar() {

    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { allRaces } = useContext(RacesContext);
    const { allGoals } = useContext(GoalsContext);

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
                formattedDate = format(day, dateFormat);
                const cloneDay = day;
                const newDate = format(day, 'yyyy-MM-dd');
                const races = renderRaceBadges(newDate);
                const goals = renderGoalBadges(newDate);
                days.push(
                    <div className={`column cell ${!isSameMonth(day, monthStart) ? "disabled" : isSameDay(day, selectedDate) ? "selected" : ""}`}
                        key={day}
                        onClick={() => onDateClick(cloneDay)} >
                        <span className="number">{formattedDate}</span>
                        {races}
                        {goals}
                    </div>
                );
                day = addDays(day, 1);
            }
            rows.push(
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

    const renderRaceBadges = currentDate => {
        if (allRaces && allRaces.length) {
            return allRaces.map( race => {
                if (currentDate === race.date) {
                    switch(race.type) {
                        case 'Running':
                            return (
                                <span key={race.name} className="badge badge-pill badge-info">{race.name}</span>
                            );
                        case 'Cycling':
                            return (
                                <span key={race.name} className="badge badge-pill badge-warning">{race.name}</span>
                            );
                        case 'Swimming':
                            return (
                                <span key={race.name} className="badge badge-pill badge-primary">{race.name}</span>
                            );
                        case 'Triathlon':
                            return (
                                <span key={race.name} className="badge badge-pill badge-danger">{race.name}</span>
                            );
                        default:
                            break;
                    }
                }
                return(null);
            })
        }
    }

    const renderGoalBadges = currentDate => {
        if (allGoals && allGoals.length) {
            return allGoals.map( goal => {
                if (currentDate === goal.date) {
                    if (goal.completed) {
                        return (
                            <span key={goal.description} className="badge badge-pill badge-success" >{goal.description}</span>
                        );
                    } else {
                        return (
                            <span key={goal.description} className="badge badge-pill badge-danger" >{goal.description}</span>
                        );
                    }
                }
                return(null);
            })
        }
    }

    return (
        <div>
            <NavBar></NavBar>
            <MenuHeader title="Calendar"/>
            <div className="calendar">
                <div>{header()}</div>
                <CalendarSubheader></CalendarSubheader>
                <div>{cells()}</div>
            </div>
                <div className="card-flex">
                    <h5>Labels Description</h5>
                    <span className="badge badge-pill badge-success">Completed Goals</span>
                    <span className="badge badge-pill badge-danger">Pending Goals</span>
                    <span className="badge badge-pill badge-warning">Records</span>
                    <span className="badge badge-pill badge-info">Running Races</span>
                    <span className="badge badge-pill badge-purple">Cycling Races</span>
                    <span className="badge badge-pill badge-primary">Swimming Races</span>
                    <span className="badge badge-pill badge-dark">Triathlon Races</span>
                </div>
        </div>
    );
}

export default Calendar;