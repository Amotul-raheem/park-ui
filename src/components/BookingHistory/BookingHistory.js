import React, {useState} from "react";
import "./BookingHistory.css"
import ParkingDetail from "./ParkingDetail/ParkingDetail";
import SideBar from "../common/SideBar/SideBar";
import YearPicker from "../common/YearPicker/YearPicker";
import Dropdown from "../common/Dropdown/Dropdown";
import {BOOKING_STATUS} from "../constants/BookingStatus";
import BookingNavigation from "../BookingNavigation/BookingNavigation";
import axios from "axios";
import {getToken} from "../Utils/TokenUtils";
import {GET_USER_BOOKINGS_ENDPOINT} from "../constants/Endpoints";

function BookingHistory() {
    let token = getToken();
    const [year, setYear] = useState(new Date());
    const [isOpen, setOpen] = useState(false);
    const [dropDown, setDropDown] = useState(false)
    const [bookingStatuses, setBookingStatuses] = useState(BOOKING_STATUS);
    const [selectedBookingStatus, setSelectedBookingStatus] = useState(BOOKING_STATUS[2]);
    const [onBooking, setOnBooking] = useState(true)
    const [userBookings, setUserBookings] = useState([])

    const getUserBookings = async () => {
        try{
            const response = await axios.post(GET_USER_BOOKINGS_ENDPOINT, {}, {headers: {token}})
            console.log(response)
        }catch(e){
            console.log(e.response)
        }
    }

    const toggleDropdown = () => setOpen(!isOpen);

    const toggleDropDown = () => {
        setDropDown(!dropDown)
    }
    const closeDropDown = (e) => {
        if (dropDown) {
            toggleDropDown(e)
        }
    }
    const handleStatusClick = async (id) => {
        let selectedBookingStatus = bookingStatuses.find(status => status.id == id)
        setSelectedBookingStatus(selectedBookingStatus)
        await getUserBookings()
        console.log(selectedBookingStatus)
        toggleDropdown()
    }

    return (
        <div
            onClick={closeDropDown}
             className="booking-history">
            <div>
                <BookingNavigation
                    toggleDropDown = {toggleDropDown}
                    dropDown = {dropDown}
                    onBooking = {!onBooking}
                    onBookingHistory = {onBooking}
                    heading = {"Park Booking History"}
                />
            </div>
            <div className="booking-history-container">
                <div className="booking-drop-down-year-picker">
                    <div className="booking-status-drop-down">
                        <Dropdown
                            bookingStatuses={bookingStatuses}
                            handleStatusClick={handleStatusClick}
                            toggleDropDown={toggleDropdown}
                            selectedBookingStatus={selectedBookingStatus}
                            isDropDownOpen={isOpen}
                        />
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