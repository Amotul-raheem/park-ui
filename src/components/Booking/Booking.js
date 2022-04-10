import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Booking.css"
import SideBar from "../common/SideBar/SideBar";
import FormButton from "../common/FormButton/FormButton";
import spots from './Data';
import Park from "./Park/Park";
import CheckInCheckOut from "./CheckInCheckOut/CheckInCheckOut";
import ParkDescription from "./ParkDescription/ParkDescription";
import ProfileNav from "../common/ProfileNav/ProfileNav";
import BookingModal from "../common/Modal/BookingModal";
import {BOOKING_PATH} from "../constants/UrlPaths";


function Booking() {
    let navigate = useNavigate();
    const [showModal, setShowModal] = useState(false)
    const [bookingSuccessful, isBookingSuccessful] = useState(null)
    const [parkSpots, setParkSpots] = useState(spots)
    const [checkInTime, setCheckInTime] = useState(new Date());
    const [checkOutTime, setCheckOutTime] = useState(checkInTime);
    const [dropDown, setDropDown] = useState(false)

    function toggleDropDown(e) {
        console.log(dropDown)
        setDropDown(!dropDown)
    }

    const closeDropDown = (e) => {
        if (dropDown) {
            toggleDropDown(e)
        }
    }

    const first_arr = parkSpots.slice(0, 10);
    const second_arr = parkSpots.slice(10, 20);
    const third_arr = parkSpots.slice(20, 30);

    const onSelectSpot = (parkSpot) => {
        console.log(parkSpot)
        let newParkSpots = parkSpots.map(p => {
                let newP = {...p, isSelected: false};
                if (newP.isOccupied) {
                    return newP;
                }
                return newP.id === parkSpot.id ? {...newP, isSelected: true} : newP;
            }
        );
        setParkSpots(newParkSpots)
    }

    const closeModal = () => {
        setShowModal(false)
        navigate(BOOKING_PATH);
    }
    return (
        <div onClick={closeDropDown}>
            {showModal === true ?
                <BookingModal
                    success={bookingSuccessful}
                    onClick={closeModal}
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
                        <div className="booking-park">
                            <ParkDescription/>
                            <Park
                                first_arr={first_arr}
                                second_arr={second_arr}
                                third_arr={third_arr}
                                onSelectSpot={onSelectSpot}
                            />
                        </div>
                        <div className="booking-cost">
                            <h2>Park Cost</h2>
                            <h3>$99</h3>
                        </div>
                        <div className="booking-button-container">
                            <FormButton
                                name={"BOOK NOW"}
                                //todo make request to backend for booking and set the booking successful
                                onClick={() => {
                                    setShowModal(true);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking;