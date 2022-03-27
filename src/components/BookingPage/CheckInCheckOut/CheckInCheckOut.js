import BasicDateTimePicker from "../../common/BasicDateTimePicker/BasicDateTimePicker";
import React from "react";

export default function CheckInCheckOut(props) {
    const {checkInTime, setCheckInTime, checkOutTime, setCheckOutTime} = props

    return (
        <div>
            <div className="booking-time">
                <tr>
                    <td>
                        <h3>Check In Date Time</h3>
                    </td>
                    <td>
                        <h3>Check Out Date Time</h3>
                    </td>
                </tr>
            </div>
            <div>
                <tr>/
                    <td>
                        <div className="booking-date-time-range">
                            <BasicDateTimePicker
                                dateTime={checkInTime}
                                setDateTime={setCheckInTime}
                            />
                        </div>
                    </td>
                    <td>
                        <div className="booking-date-time-range">
                            <BasicDateTimePicker
                                dateTime={checkOutTime}
                                setDateTime={setCheckOutTime}
                            />
                        </div>
                    </td>
                </tr>
            </div>
        </div>
    )
}