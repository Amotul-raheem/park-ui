import React from "react";
import './HomePage.css'
import {Link, useNavigate} from "react-router-dom";

function HomePage(props) {

    const navigate = useNavigate();

    return (
        <div className="homepage">
            <div className="homepage-background">
            </div>
            <div className="header-nav-bar">
                <Link className={"logo"} to={"/"}>
                    <h1 className="homepage-name"> Park </h1>
                </Link>
                <ul>
                    <li><Link to={"/"} className={"nav-bar-text"}>About</Link></li>
                    <li><Link to={"/"}>Pricing</Link></li>
                    <li><Link to={"/"}>Contact</Link></li>
                </ul>
                <ul>
                    <button className="homepage-nav-bar-buttons" onClick={() => navigate("/sign-in")}>Sign In</button>
                    <button className="homepage-nav-bar-buttons" onClick={() => navigate("/sign-up")}>Sign Up</button>
                </ul>
            </div>
            <div className="homepage-text-container">
                <div className={'text-box'}>
                    <h2> Get Your Car Parked Safely with <span> OPark</span></h2>
                    <p>Fast, Affordable and Convenient Parking Platform. Its an easy to <br/> use next generation
                        platform for improving efficiency and <br/>enhancing customers experience.</p>
                    <button className='homepage-learn-more-btn' onClick="#">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;