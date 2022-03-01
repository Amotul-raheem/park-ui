import React, {useState} from 'react';
import './SignUp.css';
import FormInput from "../common/FormInput/FormInput";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import FormButton from "../common/FormButton/FormButton";
import HomePageLogo from "../common/HomeLogo/HomePageLogo";
import {INPUT_REGEX, INPUTS} from "../constants/InputValidation";
import {DEFAULT_ERROR_MESSAGE} from "../constants/ErrorMessage";
import {ACCOUNT_VERIFICATION_CHECK_EMAIL_PATH, SIGN_IN_PATH} from "../constants/UrlPaths";
import {SIGN_UP_ENDPOINT} from "../constants/Endpoints";


function SignUp() {
    let navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(DEFAULT_ERROR_MESSAGE.SIGN_UP)
    const [canSubmitInput, setCanSubmitInput] = useState(true)
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const inputs = [
        INPUTS.USERNAME,
        INPUTS.EMAIL,
        INPUTS.PASSWORD,
        {...INPUTS.CONFIRM_PASSWORD, pattern: values.password}
    ]

    function handleChange(e) {
        setCanSubmitInput(true)
        e.preventDefault()
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    async function sendSignUpRequest(values) {
        try {
            const response = await axios.post(SIGN_UP_ENDPOINT,
                {
                    email: values.email,
                    username: values.username,
                    password: values.password
                })
            console.log(response)
            navigate(ACCOUNT_VERIFICATION_CHECK_EMAIL_PATH);
        } catch (e) {
            setCanSubmitInput(false)
            const errorResponse = e.response
            if (errorResponse.status === 400) {
                setErrorMessage("Email already exists, please try again with another email address or Sign In by clicking on the link below")
            } else if (errorResponse.status === 500) {
                setErrorMessage("There was an issue signing you up to our service, please try again")
            } else {
                setErrorMessage("There was an issue signing you up to our service, please try again")
            }
        }
    }

    async function handleSignUp(e) {
        e.preventDefault()
        let validationPassed = validateSignUpInputs(values)
        if (validationPassed) {
            setCanSubmitInput(true)
            console.log(values)
            await sendSignUpRequest(values)
        } else {
            setErrorMessage(DEFAULT_ERROR_MESSAGE.SIGN_UP)
            setCanSubmitInput(false)
        }
    }

    const validateSignUpInputs = (values) => {
        const usernamePassValidation = INPUT_REGEX.USERNAME_REGEX.regex.test(values.username)
        const emailPassValidation = INPUT_REGEX.EMAIL_REGEX.regex.test(values.email)
        const passwordPassValidation = INPUT_REGEX.PASSWORD_REGEX.regex.test(values.password)
        const confirmPasswordPassValidation = values.confirmPassword === values.password

        return usernamePassValidation === true && emailPassValidation === true && passwordPassValidation === true && confirmPasswordPassValidation === true;
    }

    return (
        <div className={'sign-up'}>
            <div className="sign-up logo-container">
                <HomePageLogo/>
            </div>
            <div className="sign-up sign-up-container">
                <div className="sign-up-form">
                    <h1 className="sign-up-header"> Sign Up</h1>
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            handleChange={handleChange}
                        />
                    ))}
                    {canSubmitInput === false && (
                        <p className={"sign-up-submission-error"}>
                            {errorMessage}
                        </p>
                    )}
                    <div className="sign-up-button-container">
                        <FormButton
                            name={"Sign Up"}
                            onClick={handleSignUp}
                        />
                    </div>
                    <h4 className="sign-in-have-account">Already have an account?
                        <Link to={SIGN_IN_PATH}> Sign In</Link>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default SignUp;