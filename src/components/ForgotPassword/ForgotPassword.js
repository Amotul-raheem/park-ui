import React, {useState} from "react";
import "./ForgotPassword.css"
import FormInput from "../common/FormInput/FormInput";
import FormButton from "../common/FormButton/FormButton";
import key from "../../images/key.png"
import HomePageLogo from "../common/HomeLogo/HomePageLogo";

function ForgotPassword() {

    const [email, setEmail] = useState();

    function handleForgotPassword(e) {
        e.preventDefault()
        console.log(email)
    }

    return (
        <div className='forgot-password'>
            <div className="forgot-password logo-container">
                <HomePageLogo/>
            </div>
            <div className="forgot-password forgot-password-container">
                <div className="forgot-password-form">
                    <div className="image-text-container">
                        <img src={key} alt="key-image" className="key-image"/>
                        <h1 className="forgot-password-header">Forgot Password?</h1>
                        <p className="forgot-password-text">Enter the email associated with your account and we'll send
                            an
                            email to reset your password</p>
                    </div>
                    <FormInput
                        name={"email"}
                        type={"email"}
                        setValue={setEmail}
                    />
                    <div className="forgot-password-button-container">
                        <FormButton
                            name={"Send link to mail"}
                            onClick={handleForgotPassword}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword