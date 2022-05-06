import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Booking.css"
import FormButton from "../common/FormButton/FormButton";
import Park from "./Park/Park";
import CheckInCheckOut from "./CheckInCheckOut/CheckInCheckOut";
import ParkDescription from "./ParkDescription/ParkDescription";
import SuccessfulOrFailureModal from "../common/Modal/SuccessfulOrFailureModal";
import {SIGN_IN_PATH} from "../constants/UrlPaths";
import {DEFAULT_ERROR_MESSAGE} from "../constants/ErrorMessage";
import {calculatePrice, getParkSpots, transformParkSpots} from "../Utils/BookingUtil";
import axios from "axios";
import {BOOKING_ENDPOINT} from "../constants/Endpoints";
import {getToken} from "../Utils/TokenUtils";
import {MODAL_MESSAGE} from "../constants/ModalMessage";
import BookingNavigation from "../BookingNavigation/BookingNavigation";


function Booking() {
    let navigate = useNavigate();
    let token = getToken();
    const [showModal, setShowModal] = useState(false)
    const [displayErrorMessageOnEmptyParkSpots, setDisplayErrorMessageOnEmptyParkSpots] = useState(false)
    const [bookingSuccessful, setBookingSuccessful] = useState(null)
    const [parkSpots, setParkSpots] = useState([])
    const [checkInTime, setCheckInTime] = useState(new Date());
    const [checkOutTime, setCheckOutTime] = useState(checkInTime);
    const [dropDown, setDropDown] = useState(false)
    const [success, setSuccess] = useState(false)
    const [price, setPrice] = useState(0)
    const [spaceName, setSpaceName] = useState(null)
    const [errorMessage, setErrorMessage] = useState(MODAL_MESSAGE.BOOKING.ERROR.HEADER)
    const [canSubmitInput, setCanSubmitInput] = useState(true)
    const [onBooking, setOnBooking] = useState(true)

    useEffect(async () => {
        try {
            if (!token) {
                navigate(SIGN_IN_PATH)
            }
            setCanSubmitInput(true)
            setSuccess(true)
            if (checkInTime <= checkOutTime) {
                await setParkData()
                setPrice(calculatePrice(checkInTime, checkOutTime))
            } else {
                setParkSpots([])
            }
        } catch (e) {
            console.error("Failure when getting parking spots")
            setParkSpots([])
            setSuccess(false)
        }
    }, [checkOutTime, checkInTime])

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
        navigate(0);
    }

    const onSelectSpot = (parkSpot) => {
        let updatedParkSpots = parkSpots.map(p => {
            let newP = {...p, isSelected: false};
            if (newP.isOccupied) {
                return newP;
            }
            return newP.id === parkSpot.id ? {...newP, isSelected: true} : newP;
        });
        setParkSpots(updatedParkSpots)
        setSpaceName(parkSpot.space_name)
        setCanSubmitInput(true)
    }

    const sendBookingRequest = async () => {
        try {
            await axios.post(BOOKING_ENDPOINT, {
                space_name: spaceName, check_in: checkInTime, check_out: checkOutTime, price: price
            }, {
                headers: {token}
            });
            setBookingSuccessful(true)
            setShowModal(true);
        } catch (error) {
            setShowModal(true);
            setBookingSuccessful(false)
            const errorResponse = error.response
            if (errorResponse.status === 401) {
                setErrorMessage("Access denied. You're unauthorised. Please sign out and sign in.")
                navigate(SIGN_IN_PATH);
            } else if (errorResponse.status === 400) {
                setErrorMessage("Token expired")
                navigate(SIGN_IN_PATH);
            } else {
                setErrorMessage("There was an issue making booking, please try again")
            }
        }
    }

    const handleSubmitBooking = async () => {
        if (canSubmitBooking() === true) {
            setCanSubmitInput(true)
            await sendBookingRequest()
        } else {
            if (parkSpots.length === 0) {
                setDisplayErrorMessageOnEmptyParkSpots(false)
            } else {
                setDisplayErrorMessageOnEmptyParkSpots(true)
            }
            setCanSubmitInput(false)
        }
    }

    const canSubmitBooking = () => {
        if (checkInTime >= checkOutTime || spaceName === null) {
            return false;
        }
        return true;
    }

    const first_arr = parkSpots.slice(0, 10);
    const second_arr = parkSpots.slice(10, 20);
    const third_arr = parkSpots.slice(20, 30);

    return (
        <div className="booking">
            <div onClick={closeDropDown}>
                {showModal && <SuccessfulOrFailureModal
                    success={bookingSuccessful}
                    onClick={closeModal}
                    buttonName= {"Go back to Booking"}
                    message={bookingSuccessful ? MODAL_MESSAGE.BOOKING.SUCCESSFUL.HEADER : errorMessage}
                /> }
                <div>
                    <BookingNavigation
                        toggleDropDown = {toggleDropDown}
                        dropDown = {dropDown}
                        onBooking = {onBooking}
                        onBookingHistory = {!onBooking}
                        heading = {"Park Booking"}
                    />
                </div>
                <div className="booking-container">
                    <div className="booking-content">
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
                            Failure getting parking spots. Kindly refresh page
                        </p>}
                        <div className="booking-cost">
                            <h2>Park Cost</h2>
                            <h3>{"$" + price}</h3>
                        </div>
                        {canSubmitInput === false && (displayErrorMessageOnEmptyParkSpots === true ? (
                            <p className={"booking-submission-error"}>
                                {DEFAULT_ERROR_MESSAGE.BOOKING}
                            </p>) : null)}
                        <div className="booking-button-container">
                            <FormButton
                                name={"BOOK NOW"}
                                onClick={handleSubmitBooking}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Booking;
