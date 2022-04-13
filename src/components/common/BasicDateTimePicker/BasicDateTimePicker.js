import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {subDays} from "date-fns";

export default function BasicDateTimePicker(props) {
    const {dateTime, setDateTime, defaultDateTime} = props

    const filterPassedTime = (time) => {
        const currentDate = defaultDateTime;
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };

    return (
        <DatePicker
            selected={dateTime}
            onChange={(date) => setDateTime(date)}
            showTimeSelect
            minDate={subDays(defaultDateTime, 0)}
            timeFormat="HH:mm"
            timeIntervals={60}
            timeCaption="time"
            filterTime={filterPassedTime}
            dateFormat="MMMM d, yyyy h:mm aa"
        />
    );
}