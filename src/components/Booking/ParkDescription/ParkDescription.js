import React from "react";
import "./ParkDescription.css"


export default function ParkDescription() {

    return (
        <div className="park-description">
            <div className="spot-container">
                <div className="spot spot-selected"/>
                <h5>Your Selection</h5>
            </div>
            <div className="spot-container">
                <div className="spot spot-booked"/>
                <h5> Already Booked</h5>
            </div>
            <div className="spot-container">
                <div className="spot spot-available"/>
                <h5>Available</h5>
            </div>

        </div>
    )
}