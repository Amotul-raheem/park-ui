import BasicDateTimePicker from "../../common/BasicDateTimePicker/BasicDateTimePicker";
import React from "react";
import './CheckInCheckOut.css'

export default function CheckInCheckOut(props) {
    const {checkInTime, setCheckInTime, checkOutTime, setCheckOutTime} = props

    return (
        <div className="checkin-checkout">
            <div className="check-in">
                <h3>Check In Date Time</h3>
                <div className="checkin-checkout-time-range">
                    <BasicDateTimePicker
                        dateTime={checkOutTime}
                        setDateTime={setCheckOutTime}
                        defaultDateTime={new Date()}
                    />
                </div>
            </div>
            <div className="check-out">
                <h3>Check Out Date Time</h3>
                <div className="checkin-checkout-time-range">
                    <BasicDateTimePicker
                        dateTime={checkInTime}
                        setDateTime={setCheckInTime}
                        defaultDateTime={checkOutTime}
                    />
                </div>
            </div>
        </div>
    )
}