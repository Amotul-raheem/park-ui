import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {subDays} from "date-fns";

export default function BasicDateTimePicker(props) {
    const {dateTime, setDateTime} = props
    return (
        <DatePicker
            selected={dateTime}
            onChange={(date) => setDateTime(date)}
            showTimeSelect
            minDate={subDays(new Date(), 0)}
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
        />
    );
}