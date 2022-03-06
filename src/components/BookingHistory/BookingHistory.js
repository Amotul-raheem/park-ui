import React, {useState} from "react";
import "./BookingHistory.css"
import YearPicker from "react-year-picker";
import ParkingDetail from "../common/ParkingDetail/ParkingDetail";
import SideBar from "../common/SideBar/SideBar";

function BookingHistory() {

    const handleChange = (x) => {
        console.log(x)

    }
    return (
        <div className="booking-history">
            <div>
                <SideBar
                    onBookingHistory={true}
                    onBooking={false}
                />
            </div>

            <div className="booking-history-container">
                <h1 className="booking-header">Parking History</h1>
                {/*//todo this library has a bug and its features are limited.*/}
                {/*//todo you can't pass in the default value and it logs alot of errors*/}
                <YearPicker onChange={handleChange} className="year-picker"/>
                <ParkingDetail
                    label="Spot 5"
                    checkInTime="11 Feb,12:30pm"
                    checkOutTime="12 Feb, 12:30pm"
                    price="$99.99"/>
                <ParkingDetail
                    label="Spot 5"
                    checkInTime="11 Feb,12:30pm"
                    checkOutTime="12 Feb, 12:30pm"
                    price="$99.99"/>
                <ParkingDetail
                    label="Spot 5"
                    checkInTime="11 Feb,12:30pm"
                    checkOutTime="12 Feb, 12:30pm"
                    price="$99.99"/>
            </div>


        </div>
    )
}

export default BookingHistory