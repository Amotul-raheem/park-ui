import React from "react"
import "./BookingDetails.css"

function BookingDetails(props){
    const {spot, checkInTime, checkOutTime, price} = props

    return(
        <div className="booking-details">
         <div className="booking-details-container">
             <h2 className="booking-details-header">Booking Details</h2>
             <div className="booking-details-list">
                 <ul>
                 <li> Spot Number: <label>{spot}</label> </li>
                 <li> Cost: <label>{price}</label> </li>
                 <li> CheckIn: <label>{checkInTime}</label> </li>
                 <li> CheckOut: <label>{checkOutTime}</label> </li>
                 </ul>
             </div>

         </div>
        </div>
    )
}
export default BookingDetails;