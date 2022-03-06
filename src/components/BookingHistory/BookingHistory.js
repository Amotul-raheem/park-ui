import React, {useState} from "react";
import "./BookingHistory.css"
import YearPicker from "react-year-picker";
import ParkingDetail from "../common/ParkingDetail/ParkingDetail";
import SideBar from "../common/SideBar/SideBar";

function BookingHistory() {

    return (
        <div className="booking-history">
            <div>
                <SideBar/></div>

            <div className="booking-history-container">


                <h1 className="booking-header">Parking History</h1>
                <YearPicker className="year-picker"/>
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