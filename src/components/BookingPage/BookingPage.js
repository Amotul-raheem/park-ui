import React,{useState} from "react";
import "./BookingPage.css"
import * as ImIcons from "react-icons/im";
import SideBar from "../common/SideBar/SideBar";
import {IconContext} from "react-icons";

import spots from './Data';


function BookingPage() {

    const first_arr = spots.slice(0,10);
    const second_arr = spots.slice(10,20);
    const third_arr = spots.slice(20,30);

    return (
        <div className="booking-page">
      
    <div className='booking-space-container'>
        <div>
            <SideBar
             onBookingHistory={false}
             onBooking={true}/>
        </div>
       
        <div className="booking-slot">
            {
                first_arr?.map((item)=>{
                    return   (
                    <div className="parking-space" style={{background: item?.isSelected ? '#01194A' : item?.isOccupied ? '#f00' : '#c4c4c4'}} >
                        {item?.space_number}
                    </div>)
                })
            }

        </div>
          <div className="booking-slot">
          {
              second_arr?.map((item)=>{
                  return   (
                  <div className="parking-space" style={{background: item?.isSelected ? '#01194A' : item?.isOccupied ? '#f00' : '#c4c4c4' }} >
                      {item?.space_number}
                  </div>)
              })
          }

      </div>
      <div className="booking-slot">
          {
              third_arr?.map((item)=>{
                  return   (
                  <div className="parking-space" style={{background: item?.isSelected ? '#01194A' : item?.isOccupied ? '#f00': '#c4c4c4'}} >
                      {item?.space_number}
                  </div>)
              })
          }

      </div>
  
      </div>
      <div className="booking-description">
          <div className="spot-selected" ></div>
        Your Selection
        <div className="spot-booked"></div>
        Already Booked
        <div className="spot-available"></div>
        Available</div>

        <div className="booking-time-container">
                <tr>
                    <td>
                        <div className="booking-time">
                            <h3>Check In Time</h3>
                          <div>      
 </div>
                        </div>
                    </td>
                    <td>
                        <div className="booking-time">
                            <h3>Check Out Time</h3>
                          <div></div>
                        </div>
                    </td>
            
                </tr>

            </div>

      </div>
      
    )
}

export default BookingPage;