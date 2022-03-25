import React from "react";
import "./ResetPasswordSuccessful.css"
import {useNavigate} from "react-router-dom";
import FormButton from "../common/FormButton/FormButton";
import HomePageLogo from "../common/HomeLogo/HomePageLogo";
import check from "../../images/check.png";

function ResetPasswordSuccessful() {
    const navigate = useNavigate();
    return (
        <div className='reset-password-successful'>
            <div className="reset-password-successful logo-container">
                <HomePageLogo/>
            </div>
            <div className="reset-password-successful reset-password-successful-container">
                <div className="reset-password-successful-form">
                    <div className="reset-password-successful-text-container">
                        <img src={check} alt="check-image" className="check-image"/>
                        <h1 className="reset-password-successful-header">Password Reset Successful</h1>
                        <p className="reset-password-successful-text">Your new password has been successfully reset.
                            Click below to sign in</p>
                    </div>
                    <div className="reset-password-successful-button-container">
                        <FormButton
                            name={"Sign In"}
                            onClick={() => navigate("/sign-in")}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordSuccessful