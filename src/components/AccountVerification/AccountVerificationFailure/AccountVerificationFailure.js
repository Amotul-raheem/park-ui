import React, {useEffect, useState} from "react";
import "./AccountVerificationFailure.css"
import {useNavigate, useParams} from "react-router-dom";
import FormButton from "../../common/FormButton/FormButton";
import HomePageLogo from "../../common/HomeLogo/HomePageLogo";
import fail from "../../../images/fail.png";
import axios from "axios";
import {ACCOUNT_VERIFICATION_PATH, SIGN_UP_PATH} from "../../constants/UrlPaths";

function AccountVerificationFailure() {
    const navigate = useNavigate();

    return(
        <div className='account-verification-failure'>
            <div className="account-verification-failure account-verification-failure-logo-container">
                <HomePageLogo/>
            </div>
            <div className="account-verification-failure account-verification-failure-container">
                <div className="account-verification-failure-form">
                    <div className="account-verification-failure-text-container">
                        <img src={fail} alt="fail-image" className="fail-image"/>
                        <h1 className="account-verification-failure-header">Account Verification Failure</h1>
                        <p className="account-verification-failure-text">This account which you tried to connect has already been used.<br/>Try creating a different account by clicking below</p>
                    </div>
                    <div className="account-verification-failure-button-container">
                        <FormButton
                            name={"Sign Up"}
                            onClick={() => navigate(SIGN_UP_PATH)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountVerificationFailure;