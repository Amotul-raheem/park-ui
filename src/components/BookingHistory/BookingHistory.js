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
import {mergeBookingHistory} from "../Utils/BookingUtil";
import {DEFAULT_ERROR_MESSAGE} from "../constants/ErrorMessage";
import {useNavigate} from "react-router-dom";
import {SIGN_IN_PATH} from "../constants/UrlPaths";

function BookingHistory() {
    let navigate = useNavigate();

    let token = getToken();
    const [year, setYear] = useState(new Date());
    const [isOpen, setOpen] = useState(false);
    const [dropDown, setDropDown] = useState(false)
    const [bookingStatuses, setBookingStatuses] = useState(BOOKING_STATUS);
    const [selectedBookingStatus, setSelectedBookingStatus] = useState(null);
    const [onBooking, setOnBooking] = useState(true)
    const [userBookingHistory, setUserBookingHistory] = useState([])
    const [userBookingHistoryToDisplay, setUserBookingHistoryToDisplay] = useState([])
    const [displayErrorMessage,setDisplayErrorMessage] = useState(false)

    useEffect(async () => {
        if(!token) {
            navigate(SIGN_IN_PATH)
        }
        await getUserBookings()
    }, [])

    const getUserBookings = async () => {
        try {
            const response = await axios.post(GET_USER_BOOKINGS_ENDPOINT, {}, {headers: {token}})
            console.log(response)
            const mergedUserBookingHistory = mergeBookingHistory({bookingHistoryByStatus: response.data})
            setUserBookingHistory(mergedUserBookingHistory)
            setUserBookingHistoryToDisplay(mergedUserBookingHistory)
        } catch (e) {
            setUserBookingHistoryToDisplay(userBookingHistory)
            setDisplayErrorMessage(true)
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
        if (selectedBookingStatus.id === 4) {
            setUserBookingHistoryToDisplay(userBookingHistory)
        } else {
            const filteredUserBookingHistory = userBookingHistory.filter(booking => booking.status.toLowerCase() === selectedBookingStatus.label.toLowerCase())
            setUserBookingHistoryToDisplay(filteredUserBookingHistory)
        }
        toggleDropdown()
    }

    return (<div onClick={closeDropDown} className="booking-history">
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
            { displayErrorMessage === false ?  <div>
                {userBookingHistoryToDisplay.map((booking) =>
                    (<ParkingDetail
                    spot={booking.spaceName}
                    checkInTime={booking.checkIn}
                    checkOutTime={booking.checkOut}
                    price={booking.price}
                />))}
                </div> : <p className="booking-history-error">
                {DEFAULT_ERROR_MESSAGE.BOOKING_HISTORY}
            </p>}
        </div>
    </div>)
}

export default BookingHistory