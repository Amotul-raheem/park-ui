import React from "react";
import "./ResetPasswordCheckEmail.css"
import HomePageLogo from "../common/HomeLogo/HomePageLogo";
import mail from "../../images/mail.png";

function ResetPasswordCheckEmail() {
    function handleResendClick() {
        console.log("testing")
        // <Route path="/dashboard" element={<Dashboard authed={true} />} />
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
                        <p className=" reset-password-check-email-text user-text-mail"> User@gmail.com </p>
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