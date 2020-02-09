import React from 'react';

function  CalendarSubheader()  {
    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    const days = [];
    for (let i = 0; i < 7; i++) {
        days.push(
            <div className="column col-center day-title" key={i}>
                {daysOfWeek[i]}
            </div>
        );
    }
    return <div className="days row">{days}</div>;
};

export default CalendarSubheader;