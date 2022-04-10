import React from "react";
import "./BookingSuccessful.css"
import {useNavigate} from "react-router-dom";
import FormButton from "../common/FormButton/FormButton";
import check from "../../images/check.png";

function BookingSuccessful() {
    const navigate = useNavigate();
    return (
        <div className="booking-successful">
            <div className="booking-successful-container">
                <div className="booking-successful-form">
                    <div className="booking-successful-text-container">
                        <img src={check} alt="check-image" className="check-image"/>
                        <h2 className="booking-successful-header">Booking Successfully Done!</h2>
                    </div>
                    <div className="booking-successful-button-container">
                        <FormButton
                            name={"Go Back To Home"}
                            onClick={() => navigate("/")}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingSuccessful;