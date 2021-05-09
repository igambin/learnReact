import React from 'react';
import './CalendarDay.css';

const CalendarDay = (props) => {

    const day = props.date.toLocaleString('de-DE', {day: '2-digit'});
    const month = props.date.toLocaleString('de-DE', {month: 'long'});
    const year = props.date.getFullYear();

    return (
        <div className='CalendarDay'>
            <div className='CalenderDay Month'>{month}</div>
            <div className='CalenderDay Year'>{year}</div>
            <div className='CalenderDay Day'>{day}</div>
        </div>
    );
};

export default CalendarDay;