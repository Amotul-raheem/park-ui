import React from "react";
import "./AccountVerificationCheckEmail.css"
import HomePageLogo from "../../common/HomeLogo/HomePageLogo";
import mail from "../../../images/mail.png";

function AccountVerificationCheckEmail() {
    function handleResendClick() {
        console.log("testing")
        //TODO API call to authentication service to resend account verification link
        // <Route path="/dashboard" element={<Dashboard authed={true} />} />
    }

    return (
        <div className='account-verification-check-email'>
            <div className='account-verification-check-email logo-container'>
                <HomePageLogo/>
            </div>

            <div className='account-verification-check-email account-verification-check-email-container'>
                <div className="account-verification-check-email-form">
                    <div className="account-verification-check-email-text-container">
                        <img src={mail} alt="mail-image" className="mail-image"/>
                        <h1 className="account-verification-check-email-header">Check your mail</h1>
                        <p className="account-verification-check-email-text">We are happy you signed up with us, please click
                        on the link in your email to verify your account.</p>
                    </div>
                    <div className="account-verification-check-email-resend-text-container">
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

export default AccountVerificationCheckEmail