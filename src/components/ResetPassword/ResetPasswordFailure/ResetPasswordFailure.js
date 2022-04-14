import React from 'react'
import "./ResetPasswordFailure.css"
import {useNavigate} from "react-router-dom";
import FormButton from "../../common/FormButton/FormButton";
import HomePageLogo from "../../common/HomeLogo/HomePageLogo";
import fail from "../../../images/fail.png";

function ResetPasswordFailure() {

    const navigate = useNavigate();
    return(
        <div className='reset-password-failure'>
            <div className="reset-password-failure reset-password-failure-logo-container">
                <HomePageLogo/>
            </div>
            <div className="reset-password-failure reset-password-failure-container">
                <div className="reset-password-failure-form">
                    <div className="reset-password-failure-text-container">
                        <img src={fail} alt="fail" className="fail-image"/>
                        <h1 className="reset-password-failure-header">Reset Password Failure</h1>
                        <p className="reset-password-failure-text">An error occurred while we processed your password<br/>reset request. Please try again later</p>
                    </div>
                    <div className="reset-password-failure-button-container">
                        <FormButton
                            name={"Create New Password"}
                            onClick={() => navigate("/reset-password/:token")}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordFailure;