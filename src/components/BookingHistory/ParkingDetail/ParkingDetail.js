import React from "react";
import "./ParkingDetail.css"
import CheckInCheckoutHistory from "./CheckInCheckOutHistory/CheckInCheckoutHistory";

function ParkingDetail(props) {
    const {spot, checkInTime, checkOutTime, price} = props
    return (
        <div className="parking-detail">
            <label className="parking-detail-spot">{spot}</label>
            <div className="parking-detail-time">
                <CheckInCheckoutHistory
                    checkInTime={checkInTime}
                    checkOutTime={checkOutTime}
                />
            </div>
            <label className="parking-detail-price"> {price} </label>

        </div>
    )
}

export default ParkingDetail;