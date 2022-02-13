import React, {useState} from 'react';
import './SignUp.css';
import FormInput from "../common/FormInput/FormInput";
import {Link} from "react-router-dom";
import FormButton from "../common/FormButton/FormButton";
import HomePageLogo from "../common/HomeLogo/HomePageLogo";
import {INPUT_REGEX, INPUTS} from "../constants/InputValidation";


function SignUp() {
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

    function handleSignUp(e) {
        e.preventDefault()
        let validationPassed = validateSignUpInputs(values)
        if (validationPassed) {
            setCanSubmitInput(true)
            console.log(values)
        } else {
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
                            There's an error in your input or no value inputted in fields above
                        </p>
                    )}
                    <div className="sign-up-button-container">
                        <FormButton
                            name={"Sign Up"}
                            onClick={handleSignUp}
                        />
                    </div>
                    <h4 className="sign-in-have-account">Already have an account?
                        <Link to="/sign-in"> Sign In</Link>
                    </h4>
                </div>
            </div>
        </div>
    )


}

export default SignUp;