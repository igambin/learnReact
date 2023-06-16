import React from 'react';
import classes from './CalendarDay.css';

const CalendarDay = (props) => {
console.log(props);
    const day = props.date.toLocaleString('de-DE', {day: '2-digit'});
    const month = props.date.toLocaleString('de-DE', {month: 'long'});
    const year = props.date.getFullYear();

    return (
        <div className={classes.CalendarDay}>
            <div className={classes.Month}>{month}</div>
            <div className={classes.Year}>{year}</div>
            <div className={classes.Day}>{day}</div>
        </div>
    );
};

export default CalendarDay;