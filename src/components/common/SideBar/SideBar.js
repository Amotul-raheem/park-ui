import {Link} from "react-router-dom";
import "./SideBar.css"
import home from "../../../images/home.png"
import history from "../../../images/history.png"
import React from "react";


function SideBar() {
    return (
        <div className="sidebar">
            <Link className="logo-link" to={"/"}>
                <img src={home} alt="home-image" className="home-image"/>
                <h1>Home</h1>
            </Link>
            <Link className="logo-link" to={"/"}>
                <img src={history} alt="history-image" className="history-image"/>
                <h1>History</h1>
            </Link>
        </div>
    )
}

export default SideBar;