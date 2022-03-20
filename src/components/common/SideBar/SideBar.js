import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa"
import "./SideBar.css"
import React from "react";
import {IconContext} from "react-icons";


function SideBar(props) {
    const {onBookingHistory, onBooking} = props
    return (
        <div className="sidebar">
            <IconContext.Provider value={{color: '#fff', size: '20px'}}>
                <div className="sidebar-container">
                    <nav>
                        <ul className="nav-menu-items">
                            <li className={onBooking ? "sidebar-text sidebar-text-focus" : "sidebar-text"}>
                                <Link to={"/booking-page"}>
                                    <FaIcons.FaHome/> <span>Home</span>
                                </Link>
                            </li>
                            <li className={onBookingHistory ? "sidebar-text sidebar-text-focus" : "sidebar-text"}>
                                <Link to={"/booking-history"}>
                                    <FaIcons.FaHistory/> <span>History</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </IconContext.Provider>
        </div>
    )
}

export default SideBar;