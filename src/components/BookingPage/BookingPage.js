import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./BookingPage.css"
import * as ImIcons from "react-icons/im";
import * as CgIcons from "react-icons/cg";
import * as BiIcons from "react-icons/bi";
import SideBar from "../common/SideBar/SideBar";
import FormButton from "../common/FormButton/FormButton";
import {IconContext} from "react-icons";
import spots from './Data';
import BasicDateTimePicker from "../common/BasicDateTimePicker/BasicDateTimePicker";
import BookingSlot from "./BookingSlot";


function BookingPage() {
    const [parkSpots, setParkSpots] = useState(spots)
    const first_arr = parkSpots.slice(0, 10);
    const second_arr = parkSpots.slice(10, 20);
    const third_arr = parkSpots.slice(20, 30);

    const onSelectSpot = (parkSpot) => {
        console.log(parkSpot)
        let newParkSpots = parkSpots.map(p => {
                let newP = {...p, isSelected: false};
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
            <IconContext.Provider value={{color: '#000', size: '50px'}}>
                <div class="dropdown">
                    <CgIcons.CgProfile/>
                    <div class="dropdown-content">
                        <nav>
                            <ul>
                                <li className="dropdown-text">
                                    <Link to={"/user-profile"}>
                                        <CgIcons.CgProfile size={'30px'}/> <span>Profile</span>
                                    </Link>
                                </li>
                                <li className="dropdown-text">
                                    <Link to={"#"}>
                                        <BiIcons.BiLogOut size={'30px'}/> <span>SignOut</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='booking-space-container'>
                    <div className="parking-entrance"><ImIcons.ImArrowUp/>
                        <br/>
                        <span className="entrance">Entrance</span></div>

                    <div className="booking-slot">
                        {first_arr?.map((item) => (
                            <BookingSlot
                                item={item}
                                onSelectSpot={onSelectSpot}
                            />))}
                    </div>
                    <div className="booking-slot">
                        {second_arr?.map((item) => (
                            <BookingSlot
                                item={item}
                                onSelectSpot={onSelectSpot}
                            />))}
                    </div>
                    <div className="booking-slot">
                        {third_arr?.map((item) => (
                            <BookingSlot
                                item={item}
                                onSelectSpot={onSelectSpot}
                            />))}
                    </div>
                    <div className="parking-exit"><ImIcons.ImArrowUp/>
                        <br/>
                        <span className="exit">Exit</span></div>

                </div>

                <div className="booking-description">
                    <div className="spot-selected"></div>
                    Your Selection
                    <div className="spot-booked"></div>
                    Already Booked
                    <div className="spot-available"></div>
                    Available
                </div>

                <div className="booking-time-container">
                    <div className="booking-time">
                        <tr>
                            <td>
                                <h3>Check In Date Time</h3></td>
                            <td><h3>Check Out Date Time</h3></td>
                        </tr>
                    </div>
                    <div>
                        <tr>

                            <td>
                                <div className="booking-date-time-range">
                                    <BasicDateTimePicker/>

                                </div>
                            </td>
                            <td>
                                <div className="booking-date-time-range">
                                    <BasicDateTimePicker/></div>

                            </td>
                        </tr>
                    </div>

                    <div className="booking-button-container">
                        <FormButton
                            name={"BOOK NOW"}
                        />
                    </div>
                </div>
            </IconContext.Provider>
        </div>

    )
}

export default BookingPage;