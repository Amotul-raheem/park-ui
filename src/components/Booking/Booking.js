import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Booking.css"
import SideBar from "../common/SideBar/SideBar";
import FormButton from "../common/FormButton/FormButton";
import Park from "./Park/Park";
import CheckInCheckOut from "./CheckInCheckOut/CheckInCheckOut";
import ParkDescription from "./ParkDescription/ParkDescription";
import ProfileNav from "../common/ProfileNav/ProfileNav";
import BookingModal from "../common/Modal/BookingModal";
import {BOOKING_PATH} from "../constants/UrlPaths";
import {DEFAULT_ERROR_MESSAGE} from "../constants/ErrorMessage";
import {calculatePrice, getParkSpots, transformParkSpots} from "../Utils/BookingUtil";
import axios from "axios";
import {BOOKING_ENDPOINT} from "../constants/Endpoints";
import {getToken} from "../Utils/TokenUtils";
import {MODAL_MESSAGE} from "../constants/ModalMessage";


function Booking() {
    let navigate = useNavigate();
    let token = getToken()
    const [showModal, setShowModal] = useState(false)
    const [bookingSuccessful, setBookingSuccessful] = useState(null)
    const [parkSpots, setParkSpots] = useState([])
    const [checkInTime, setCheckInTime] = useState(new Date());
    const [checkOutTime, setCheckOutTime] = useState(checkInTime);
    const [dropDown, setDropDown] = useState(false)
    const [success, setSuccess] = useState(false)
    const [price, setPrice] = useState(0)
    const [spaceName, setSpaceName] = useState(" ")
    const [errorMessage, setErrorMessage] = useState(MODAL_MESSAGE.ERROR.HEADER)

    useEffect(async () => {
        try {
            setSuccess(true)
            await setParkData()
            setPrice(calculatePrice(checkInTime, checkOutTime))
        } catch (e) {
            console.error("Failure when getting parking spots")
            setParkSpots([])
            setSuccess(false)
        }
    }, [checkOutTime])

    const setParkData = async () => {
        const response = await getParkSpots({checkInTime, checkOutTime})
        const parkSpots = transformParkSpots(response)
        setParkSpots(parkSpots)
    }

    const toggleDropDown = () => {
        setDropDown(!dropDown)
    }

    const closeDropDown = (e) => {
        if (dropDown) {
            toggleDropDown(e)
        }
    }

    const closeModal = () => {
        setShowModal(false)
        navigate(BOOKING_PATH);
    }

    const onSelectSpot = (parkSpot) => {
        let newParkSpots = parkSpots.map(p => {
            let newP = {...p, isSelected: false};
            if (newP.isOccupied) {
                return newP;
            }
            return newP.id === parkSpot.id ? {...newP, isSelected: true} : newP;

        });
        setSpaceName(parkSpot.space_name)
        setParkSpots(newParkSpots)
    }

    const sendBookingRequest = async () => {
        try {
            const response = await axios.post(BOOKING_ENDPOINT, {
                space_name: spaceName, check_in: checkOutTime, check_out: checkOutTime, price: price
            }, {
                headers: {token}
            })
            setBookingSuccessful(true)
            console.log(response)
        } catch (error) {
            setBookingSuccessful(false)
            console.log(error.response)
            const errorResponse = error.response
            if (errorResponse.status === 401) {
                setErrorMessage("Access denied. You're unauthorised. Please sign out and sign in.")
            } else if (errorResponse.status === 400) {
                setErrorMessage("Choose a park space and select a date or time range. Please try again")
            } else {
                setErrorMessage("There was an issue making booking, please try again")
            }
        }
    }

    const handleSubmitBooking = async () => {
        if (canSubmitBooking) {
            setShowModal(true);
            setBookingSuccessful(true)
            await sendBookingRequest()
        } else {
            setBookingSuccessful(false)
        }
    }

    const canSubmitBooking = () => {
        return !(checkInTime === checkOutTime || spaceName === " ");
    }

    const first_arr = parkSpots.slice(0, 10);
    const second_arr = parkSpots.slice(10, 20);
    const third_arr = parkSpots.slice(20, 30);

    return (<div onClick={closeDropDown}>
            {showModal === true ? <BookingModal
                success={bookingSuccessful}
                onClick={closeModal}
                errorMessage={errorMessage}
            /> : null}
            <div className="profile-nav-container">
                <ProfileNav
                    toggleDropDown={toggleDropDown}
                    dropDown={dropDown}
                />
            </div>
            <div className="booking">
                <div className="booking-logo-container">
                    <SideBar
                        onBookingHistory={false}
                        onBooking={true}
                    />
                </div>
                <div className="booking-container">
                    <div className="booking-content">
                        <h1 className="booking-header">Park Booking</h1>
                        <div className="booking-time-container">
                            <CheckInCheckOut
                                checkInTime={checkInTime}
                                checkOutTime={checkOutTime}
                                setCheckInTime={setCheckInTime}
                                setCheckOutTime={setCheckOutTime}
                            />
                        </div>

                        {success === true ? <div className="booking-park">
                            <ParkDescription/>
                            <Park
                                first_arr={first_arr}
                                second_arr={second_arr}
                                third_arr={third_arr}
                                onSelectSpot={onSelectSpot}
                            />
                        </div> : <p className="booking-error">
                            {DEFAULT_ERROR_MESSAGE.BOOKING}
                        </p>}
                        <div className="booking-cost">
                            <h2>Park Cost</h2>
                            <h3>{"$" + price}</h3>
                        </div>
                        <div className="booking-button-container">
                            <FormButton
                                name={"BOOK NOW"}
                                onClick={handleSubmitBooking}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Booking;
