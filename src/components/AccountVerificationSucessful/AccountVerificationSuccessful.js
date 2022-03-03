import React, {useState} from "react";
import "./AccountVerificationSuccessful.css"
import {useNavigate, useParams} from "react-router-dom";
import FormButton from "../common/FormButton/FormButton";
import HomePageLogo from "../common/HomeLogo/HomePageLogo";
import check from "../../images/check.png";
import axios from "axios";
import {ACCOUNT_VERIFICATION_SUCCESSFUL_PATH, SIGN_IN_PATH} from "../constants/UrlPaths";

function AccountVerificationSuccessful() {
    const navigate = useNavigate();
    const { token } = useParams();

    axios.post(ACCOUNT_VERIFICATION_SUCCESSFUL_PATH, {params: {token}}
        )

    return (
        <div className='account-verification-successful'>
            <div className="account-verification-successful logo-container">
                <HomePageLogo/>
            </div>
            <div className="account-verification-successful account-verification-successful-container">
                <div className="account-verification-successful-form">
                    <div className="account-verification-successful-text-container">
                        <img src={check} alt="check-image" className="check-image"/>
                        <h1 className="account-verification-successful-header">Account Verification Successful</h1>
                        <p className="account-verification-successful-text">Your account has been successfully verified.
                            Click below to sign in</p>
                    </div>
                    <div className="account-verification-successful-button-container">
                        <FormButton
                            name={"Sign In"}
                            onClick={() => navigate(SIGN_IN_PATH)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountVerificationSuccessful