import React from "react";
import "./ResetPasswordCheckEmail.css"
import HomePageLogo from "../../common/HomeLogo/HomePageLogo";
import mail from "../../../images/mail.png";
import {useLocation, useNavigate} from "react-router-dom";
import {FORGOT_PASSWORD_PATH} from "../../constants/UrlPaths";

function ResetPasswordCheckEmail() {
    let navigate = useNavigate();
    const { state } = useLocation();
    console.log(state);

    function handleResendClick() {
        navigate(FORGOT_PASSWORD_PATH )
    }

    return (
        <div className='reset-password-check-email'>
            <div className='reset-password-check-email logo-container'>
                <HomePageLogo/>
            </div>

            <div className='reset-password-check-email reset-password-check-email-container'>
                <div className="reset-password-check-email-form">
                    <div className="reset-password-check-email-text-container">
                        <img src={mail} alt="mail-image" className="mail-image"/>
                        <h1 className="reset-password-check-email-header">Check your mail</h1>
                        <p className="reset-password-check-email-text">A password reset link has been sent to </p>
                        <p className=" reset-password-check-email-text user-text-mail"> {state.email} </p>
                    </div>
                    <div className="reset-password-check-email-resend-text-container">
                        <p>
                            Didn't receive email?
                            <a onClick ={handleResendClick} className= "resend-text"> Click to resend </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ResetPasswordCheckEmail