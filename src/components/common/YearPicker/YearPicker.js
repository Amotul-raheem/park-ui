import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./YearPicker.css"

export default function YearPicker(props) {
    const {year, setYear} = props
    return (
        <DatePicker
            selected={year}
            onChange={(date) => setYear(date)}
            showYearPicker
            dateFormat="yyyy"
            yearItemNumber={6}
        />
    );
}