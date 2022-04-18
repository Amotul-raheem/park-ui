import React, {useEffect, useState} from "react";
import "./BookingHistory.css"
import ParkingDetail from "./ParkingDetail/ParkingDetail";
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
    const [pendingBookings, setPendingBookings] = useState([])
    const [activeBookings, setActiveBookings] = useState([])
    const [fulfilledBookings, setFulfilledBookings] = useState([])
    const [cancelledBookings, setCancelledBookings] = useState([])
    const [allBookings, setAllBookings] = useState([])

    const [statusBookings, setStatusBookings] = useState()

    useEffect(async () => {
        await getUserBookings()
    }, [])

    const getUserBookings = async () => {
        try {
            const response = await axios.post(GET_USER_BOOKINGS_ENDPOINT, {}, {headers: {token}})
            const userBookings = response.data
            const pendingBookings = userBookings.pending
            const activeBookings = userBookings.active
            const fulfilledBookings = userBookings.fulfilled
            const cancelledBookings = userBookings.cancelled

            setPendingBookings(userBookings.pending)
            setActiveBookings(userBookings.active)
            setFulfilledBookings(userBookings.fulfilled)
            setCancelledBookings(userBookings.cancelled)
            const allBookings = [...pendingBookings, ...activeBookings, ...fulfilledBookings, ...cancelledBookings]
            // setAllBookings(allBookings)
            setUserBookings(allBookings)
        } catch (e) {
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
        if (bookingStatuses.label === "Pending") {
            setUserBookings(pendingBookings)
        } else if (bookingStatuses.label === "Fulfilled") {
            setUserBookings(fulfilledBookings)
        } else if (bookingStatuses.label === "Active") {
            setUserBookings(activeBookings)
        } else {
            setUserBookings(cancelledBookings)
        }
        console.log(userBookings)
        toggleDropdown()
    }

    return (
        <div onClick={closeDropDown} className="booking-history">
            <div className='booking-history-nav-bar'>
                <BookingNavigation
                    toggleDropDown={toggleDropDown}
                    dropDown={dropDown}
                    onBooking={!onBooking}
                    onBookingHistory={onBooking}
                    heading={"Park Booking History"}
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
                {userBookings.map((booking) => (
                    <ParkingDetail
                        // spot= {booking.space_name}
                        checkInTime={booking.check_in}
                        checkOutTime={booking.check_out}
                        price = {booking.price}
                    />
                ))}
                {/*<ParkingDetail*/}
                {/*    spot="Spot 5"*/}
                {/*    checkInTime="11 Feb,12:30pm"*/}
                {/*    checkOutTime="12 Feb, 12:30pm"*/}
                {/*    price="$99.99"/>*/}

            </div>
        </div>)
}

export default BookingHistory