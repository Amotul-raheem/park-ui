import {Link, useNavigate} from "react-router-dom";
import * as FaIcons from "react-icons/fa"
import "./SideBar.css"
import React, {useState} from "react";
import {IconContext} from "react-icons";
import {BOOKING_HISTORY_PATH, BOOKING_PATH} from "../../constants/UrlPaths";
import Dropdown from "../Dropdown/Dropdown";


function SideBar(props) {
    const navigate = useNavigate();
    const [openDropdown, setOpenDropdown] = useState(false)
    const {onBookingHistory, onBooking} = props


    function handleBookingHistory() {
        setOpenDropdown(true)
        navigate(BOOKING_HISTORY_PATH)

    }


    function handleBooking() {
        navigate(BOOKING_PATH)
    }

    return (
        <div className="sidebar">
            <IconContext.Provider value={{color: '#fff', size: '20px'}}>
                <div className="sidebar-container">
                    <nav>
                        <ul className="nav-menu-items">
                            <div
                                className={onBooking ? "sidebar-text sidebar-text-focus" : "sidebar-text-container"}
                                onClick={handleBooking}>
                                <FaIcons.FaHome/>
                                <span>Home</span>
                            </div>
                            <div
                                className={onBookingHistory ? "sidebar-text sidebar-text-focus" : "sidebar-text-container"}
                                onClick={handleBookingHistory}>
                                <FaIcons.FaHistory/>
                                <span>History</span>
                            </div>
                        </ul>
                        {openDropdown === true && <Dropdown/>}
                    </nav>
                </div>
            </IconContext.Provider>
        </div>
    )
}

export default SideBar;