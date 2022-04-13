import React, {useState} from "react";
import "./SignIn.css"
import axios from "axios";
import FormInput from "../common/FormInput/FormInput";
import FormButton from "../common/FormButton/FormButton";
import {Link, useNavigate} from "react-router-dom";
import HomePageLogo from "../common/HomeLogo/HomePageLogo";
import {INPUT_REGEX, INPUTS} from "../constants/InputValidation";
import {DEFAULT_ERROR_MESSAGE} from "../constants/ErrorMessage";
import {SIGN_IN_ENDPOINT} from "../constants/Endpoints";
import {BOOKING_PATH, HOMEPAGE_PATH} from "../constants/UrlPaths";
import {setToken} from "../Utils/TokenUtils";

function SignIn() {
    let navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(DEFAULT_ERROR_MESSAGE.SIGN_IN)
    const [canSubmitInput, setCanSubmitInput] = useState(true)
    const [values, setValues] = useState({
        email: "",
        password: ""
    })
    const inputs = [
        INPUTS.EMAIL,
        INPUTS.PASSWORD
    ]

    function handleChange(e) {
        setCanSubmitInput(true)
        e.preventDefault()
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    async function sendSignInRequest(values) {
        try {
            const response = await axios.post(SIGN_IN_ENDPOINT, {email: values.email, password: values.password})
            setToken(response.headers.token)
            console.log(response.headers.token)
            navigate(BOOKING_PATH);
        } catch (e) {
            setCanSubmitInput(false)
            const errorResponse = e.response
            console.log(errorResponse)
            if (errorResponse.status === 400 && errorResponse.data === "Incorrect Email") {
                setErrorMessage("Incorrect Email, please try again with another email address or Sign In by clicking on the link below")
            } else if (errorResponse.status === 400 && errorResponse.data === "Incorrect password") {
                setErrorMessage("Password is incorrect, please try again")
            } else if (errorResponse.status === 401 && errorResponse.data === 'Your Email has not been verified. Check your mail') {
                setErrorMessage('Your Email has not been verified. Check your mail')
            } else if (errorResponse.status === 500) {
                setErrorMessage("There was an issue signing you in, please try again")
            } else {
                setErrorMessage("There was an issue signing you in, please try again")
            }
        }
    }

    async function handleSignIn(e) {
        e.preventDefault()
        let validationPassed = validateSignInInputs(values)
        if (validationPassed) {
            setCanSubmitInput(true)
            console.log(values)
            await sendSignInRequest(values)
        } else {
            setErrorMessage(DEFAULT_ERROR_MESSAGE.SIGN_IN)
            setCanSubmitInput(false)
        }
    }

    const validateSignInInputs = (values) => {
        const emailPassValidation = INPUT_REGEX.EMAIL_REGEX.regex.test(values.email)
        const passwordPassValidation = INPUT_REGEX.PASSWORD_REGEX.regex.test(values.password)

        return emailPassValidation === true && passwordPassValidation === true;
    }

    return (
        <div className="sign-in">
            <div className="sign-in sign-in-logo-container">
                <HomePageLogo/>
            </div>
            <div className="sign-in sign-in-container">
                <div className="sign-in-form">
                    <h1 className="sign-in-header"> Sign In</h1>
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            handleChange={handleChange}
                        />
                    ))}
                    <h4 className="sign-in-forgot"><Link to="/forgot-password">Forgot Password?</Link></h4>
                    {canSubmitInput === false && (
                        <p className={"sign-in-submission-error"}>
                            {errorMessage}
                        </p>
                    )}
                    <FormButton
                        name={"Sign In"}
                        onClick={handleSignIn}
                    />
                    <h4 className="sign-up-dont-have-account">Don't have an account?
                        <Link to="/sign-up"> Sign Up</Link>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default SignIn