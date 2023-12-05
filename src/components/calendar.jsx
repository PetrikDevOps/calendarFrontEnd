import React, { useState, useEffect } from 'react';
import api from '../config/axiosConfig';

const Calendar = (id) => {
    const [msgs, setMsgs] = useState([{day: 1, msg: "Hello", open: false}, {day: 2, msg: "Alma", open: false}]); //[{day: 1, msg: "Hello", open: false}]

    useEffect(() => {
        api.get(`/api/calendar/?id=${id}`)
        .then(res => {
            console.log(res.data);
            setMsgs(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div>
            <h1>Calendar</h1>
            <div className="calendar">
                {msgs.map((msg, index) => (
                    <div key={index} className="day" onClick={() => handleClick(msg.day)}>
                        <div className="day-number">{msg.day}</div>
                        <div className={`day-msg ${msg.open ? "open" : ""}`}>{msg.msg}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Calendar;