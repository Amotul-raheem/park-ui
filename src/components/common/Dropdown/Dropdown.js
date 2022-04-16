import React from "react";

 export default function Dropdown() {

    return (
        <div className="dropdown">
            <ul className="">
                <li>Pending Bookings</li>
                <li>Active Bookings</li>
                <li>Fulfilled Bookings</li>
                <li>Cancelled Bookings</li>
            </ul>
        </div>
    )
}