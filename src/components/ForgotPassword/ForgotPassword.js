import React, {useState} from "react";
import "./ForgotPassword.css"
import FormInput from "../common/FormInput/FormInput";
import FormButton from "../common/FormButton/FormButton";
import key from "../../images/key.png"
import HomePageLogo from "../common/HomeLogo/HomePageLogo";
import {INPUT_REGEX, INPUTS} from "../constants/InputValidation";

function ForgotPassword() {
    const [canSubmitInput, setCanSubmitInput] = useState(true)
    const [values, setValues] = useState({
        email: "",
    })

    function handleChange(e) {
        setCanSubmitInput(true)
        e.preventDefault()
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    function handleForgotPassword(e) {
        e.preventDefault()
        let validationPassed = validateForgotPasswordInput(values.email)
        if (validationPassed) {
            setCanSubmitInput(true)
            console.log(values.email)
        } else {
            setCanSubmitInput(false)
        }
    }

    const validateForgotPasswordInput = (email) => {
        const emailPassValidation = INPUT_REGEX.EMAIL_REGEX.regex.test(email)
        return emailPassValidation === true;
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
                        key={INPUTS.EMAIL.id}
                        {...INPUTS.EMAIL}
                        handleChange={handleChange}
                    />
                    {canSubmitInput === false && (
                        <p className={"forgot-password-submission-error"}>
                            There's an error in the email inputted above
                        </p>
                    )}
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