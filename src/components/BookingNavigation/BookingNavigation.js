import React from "react";
import SideBar from "../common/SideBar/SideBar";
import ProfileNav from "../common/ProfileNav/ProfileNav";
import "./BookingNavigation.css"

function BookingNavigation(props) {
    const {toggleDropDown, dropDown, onBookingHistory, onBooking, heading}=props
    return (
        <div className="booking-navigation">
            <div className="profile-nav-container">
                <ProfileNav
                    toggleDropDown={toggleDropDown}
                    dropDown={dropDown}
                />
            </div>
                <div className="booking-logo-container">
                    <SideBar
                        onBookingHistory={onBookingHistory}
                        onBooking={onBooking}
                    />
                </div>
                <div className= "booking-header-container">
                    <h1 className="booking-header">{heading}</h1>
                </div>

        </div>
)}

export default BookingNavigation