import React, {useState} from "react";
import "./ForgotPassword.css"
import FormInput from "../common/FormInput/FormInput";
import FormButton from "../common/FormButton/FormButton";
import key from "../../images/key.png"
import HomePageLogo from "../common/HomeLogo/HomePageLogo";
import {INPUT_REGEX, INPUTS} from "../constants/InputValidation";
import {useNavigate} from "react-router-dom";
import {DEFAULT_ERROR_MESSAGE} from "../constants/ErrorMessage";
import axios from "axios";
import {FORGOT_PASSWORD_ENDPOINT} from "../constants/Endpoints";
import {RESET_PASSWORD_CHECK_EMAIL_PATH} from "../constants/UrlPaths";

function ForgotPassword() {
    let navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(DEFAULT_ERROR_MESSAGE.FORGOT_PASSWORD)
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

    async function sendForgotPasswordRequest(values) {
        try {
            const response = await axios.post(FORGOT_PASSWORD_ENDPOINT, {email: values.email})
            console.log(response)
            navigate(RESET_PASSWORD_CHECK_EMAIL_PATH, {state: {email: values.email}});
        } catch (e) {
            setCanSubmitInput(false)
            const errorResponse = e.response
            console.log(errorResponse)
            if (errorResponse.status === 400 && errorResponse.data === "Incorrect Email") {
                setErrorMessage("Email does not exist")
            } else {
                setErrorMessage("There was an issue, please try again")
            }
        }
    }

    async function handleForgotPassword(e) {
        e.preventDefault()
        let validationPassed = validateForgotPasswordInput(values.email)
        if (validationPassed) {
            setCanSubmitInput(true)
            console.log(values.email)
            await sendForgotPasswordRequest(values)
        } else {
            setErrorMessage(DEFAULT_ERROR_MESSAGE.FORGOT_PASSWORD)
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
                            {errorMessage}
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