import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Booking.css"
import * as ImIcons from "react-icons/im";
import * as CgIcons from "react-icons/cg";
import * as BiIcons from "react-icons/bi";
import SideBar from "../common/SideBar/SideBar";
import FormButton from "../common/FormButton/FormButton";
import {IconContext} from "react-icons";
import spots from './Data';
import BasicDateTimePicker from "../common/BasicDateTimePicker/BasicDateTimePicker";
import ParkSpace from "../common/ParkingSpace/ParkSpace";
import Park from "./Park/Park";
import CheckInCheckOut from "./CheckInCheckOut/CheckInCheckOut";


function Booking() {
    const [parkSpots, setParkSpots] = useState(spots)
    const [checkInTime, setCheckInTime] = useState(new Date());
    const [checkOutTime, setCheckOutTime] = useState(checkInTime);

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

    return (
        <div className="booking-page">
            <div>
                <SideBar
                    onBookingHistory={false}
                    onBooking={true}
                />
            </div>
            <h1 className="booking-header">Park Booking</h1>
            <div className={"booking-container"}>
                <div className='park-spaces'>
                    <div className="booking-description">
                        <div className="spot-selected"/>
                        Your Selection
                        <div className="spot-booked"/>
                        Already Booked
                        <div className="spot-available"/>
                        Available
                    </div>
                    <Park
                        first_arr={first_arr}
                        second_arr={second_arr}
                        third_arr={third_arr}
                        onSelectSpot={onSelectSpot}
                    />
                </div>


                <div className="booking-time-container">
                    <CheckInCheckOut
                        checkInTime={checkInTime}
                        checkOutTime={checkOutTime}
                        setCheckInTime={setCheckInTime}
                        setCheckOutTime={setCheckOutTime}
                    />
                </div>
                <div className="booking-button-container">
                    <FormButton
                        name={"BOOK NOW"}
                    />
                </div>
            </div>
            {/*<IconContext.Provider value={{color: '#000', size: '50px'}}> </IconContext.Provider>*/}
            {/*<div className="dropdown">*/}
            {/*    <CgIcons.CgProfile/>*/}
            {/*    <div className="dropdown-content">*/}
            {/*        <nav>*/}
            {/*            <ul>*/}
            {/*                <li className="dropdown-text">*/}
            {/*                    <Link to={"/user-profile"}>*/}
            {/*                        <CgIcons.CgProfile size={'30px'}/> <span>Profile</span>*/}
            {/*                    </Link>*/}
            {/*                </li>*/}
            {/*                <li className="dropdown-text">*/}
            {/*                    <Link to={"#"}>*/}
            {/*                        <BiIcons.BiLogOut size={'30px'}/> <span>SignOut</span>*/}
            {/*                    </Link>*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*        </nav>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    )
}

export default Booking;