import React, {useState} from "react";
import "./BookingHistory.css"
import ParkingDetail from "./ParkingDetail/ParkingDetail";
import SideBar from "../common/SideBar/SideBar";
import YearPicker from "../common/YearPicker/YearPicker";
import Dropdown from "../common/Dropdown/Dropdown";

function BookingHistory() {
    const [year, setYear] = useState(new Date());

    return (
        <div className="booking-history">
            <div className="booking-history-logo-container">
                <SideBar
                    onBookingHistory={true}
                    onBooking={false}
                />
            </div>
            <div className="booking-history-container">
                <h1 className="booking-history-header">Parking Booking History</h1>
                <div className="booking-drop-down-year-picker">
                    <div className="booking-status-drop-down">
                        <Dropdown/>
                    </div>
                    <div className="booking-history-year-picker">
                        <YearPicker
                            year={year}
                            setYear={setYear}
                        />
                    </div>
                </div>

                <ParkingDetail
                    spot="Spot 5"
                    checkInTime="11 Feb,12:30pm"
                    checkOutTime="12 Feb, 12:30pm"
                    price="$99.99"/>
                <ParkingDetail
                    spot="Spot 5"
                    checkInTime="11 Feb,12:30pm"
                    checkOutTime="12 Feb, 12:30pm"
                    price="$99.99"/>
                <ParkingDetail
                    spot="Spot 5"
                    checkInTime="11 Feb,12:30pm"
                    checkOutTime="12 Feb, 12:30pm"
                    price="$99.99"/>
                <ParkingDetail
                    spot="Spot 5"
                    checkInTime="11 Feb,12:30pm"
                    checkOutTime="12 Feb, 12:30pm"
                    price="$99.99"/>
                <ParkingDetail
                    spot="Spot 5"
                    checkInTime="11 Feb,12:30pm"
                    checkOutTime="12 Feb, 12:30pm"
                    price="$99.99"/>
                <ParkingDetail
                    spot="Spot 5"
                    checkInTime="11 Feb,12:30pm"
                    checkOutTime="12 Feb, 12:30pm"
                    price="$99.99"/>
                <ParkingDetail
                    spot="Spot 5"
                    checkInTime="11 Feb,12:30pm"
                    checkOutTime="12 Feb, 12:30pm"
                    price="$99.99"/>
                <ParkingDetail
                    spot="Spot 5"
                    checkInTime="11 Feb,12:30pm"
                    checkOutTime="12 Feb, 12:30pm"
                    price="$99.99"/>
                <ParkingDetail
                    spot="Spot 5"
                    checkInTime="11 Feb,12:30pm"
                    checkOutTime="12 Feb, 12:30pm"
                    price="$99.99"/>
            </div>
        </div>
    )
}

export default BookingHistory