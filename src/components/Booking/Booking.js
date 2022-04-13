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
import {SIGN_IN_PATH} from "../constants/UrlPaths";
import {DEFAULT_ERROR_MESSAGE} from "../constants/ErrorMessage";
import {calculatePrice, getParkSpots, transformParkSpots} from "../Utils/BookingUtil";
import axios from "axios";
import {BOOKING_ENDPOINT} from "../constants/Endpoints";
import {getToken} from "../Utils/TokenUtils";
import {MODAL_MESSAGE} from "../constants/ModalMessage";
import fail from "../../images/fail.png";


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
    const [spaceName, setSpaceName] = useState(null)
    const [errorMessage, setErrorMessage] = useState(MODAL_MESSAGE.ERROR.HEADER)
    const [canSubmitInput, setCanSubmitInput] = useState(true)

    useEffect(async () => {
        try {
            setCanSubmitInput(true)
            await setParkData()
            setPrice(calculatePrice(checkInTime, checkOutTime))
            setSuccess(true)
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
                space_name: spaceName, check_in: checkOutTime,
                check_out: checkOutTime, price: price
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
        <div onClick={closeDropDown}>
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
                        {success === true ?
                            <div>
                                <div className="booking-time-container">
                                    <CheckInCheckOut
                                        checkInTime={checkInTime}
                                        checkOutTime={checkOutTime}
                                        setCheckInTime={setCheckInTime}
                                        setCheckOutTime={setCheckOutTime}
                                    />
                                </div>
                                <div className="booking-park">
                                    <ParkDescription/>
                                    <Park
                                        first_arr={first_arr}
                                        second_arr={second_arr}
                                        third_arr={third_arr}
                                        onSelectSpot={onSelectSpot}
                                    />
                                </div>
                            </div> :
                            <div className="error-container">
                                <img src={fail} alt={"fail-image"} className="booking-fail-image"/>
                                <p className="booking-error">
                                    Failure getting parking spots. Kindly refresh page
                                </p>
                            </div>}
                        {success === true &&
                        <div className="booking-cost">
                            <h2>Park Cost</h2>
                            <h3>{"$" + price}</h3>
                        </div>}
                        {canSubmitInput === false && (
                            <p className={"booking-submission-error"}>
                                {DEFAULT_ERROR_MESSAGE.BOOKING}
                            </p>
                        )}
                        <div className="booking-button-container">
                            {success === true &&
                            <FormButton
                                name={"BOOK NOW"}
                                onClick={handleSubmitBooking}
                            />
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Booking;
