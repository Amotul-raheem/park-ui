import React, {useState} from 'react';
import './ResetPassword.css';
import key from "../../images/key.png"
import FormInput from "../common/FormInput/FormInput";
import FormButton from "../common/FormButton/FormButton";
import HomePageLogo from "../common/HomeLogo/HomePageLogo";
import {INPUT_REGEX, INPUTS} from "../constants/InputValidation";

function ResetPassword() {
    const [canSubmitInput, setCanSubmitInput] = useState(true)
    const [values, setValues] = useState({
        password: "",
        confirmPassword: ""
    })

    const inputs = [
        INPUTS.PASSWORD,
        {...INPUTS.CONFIRM_PASSWORD, pattern: values.password}
    ]

    function handleChange(e) {
        setCanSubmitInput(true)
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    function handleResetPassword(e) {
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
        const passwordPassValidation = INPUT_REGEX.PASSWORD_REGEX.regex.test(values.password)
        const confirmPasswordPassValidation = values.confirmPassword === values.password

        return passwordPassValidation === true && confirmPasswordPassValidation === true;
    }

    return (
        <div className={'reset-password'}>
            <div className="reset-password logo-container">
                <HomePageLogo/>
            </div>
            <div className="reset-password reset-password-container">
                <div className="reset-password-form">
                    <div className="reset-password-text-container">
                        <img src={key} alt="key-image" className="key-image"/>
                        <h1 className="reset-password-header"> Create a new password</h1>
                        <h4 className="reset-password-text"> Password must be different from previously used
                            password</h4>
                    </div>
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            handleChange={handleChange}
                        />
                    ))}
                    {canSubmitInput === false && (
                        <p className={"reset-password-submission-error"}>
                            There's an error in your input or no value inputted in fields above
                        </p>
                    )}
                    <div className="reset-password-button-container">
                        <FormButton
                            name={"Reset Password"}
                            onClick={handleResetPassword}
                        />
                    </div>
                </div>
            </div>

        </div>
    )


}

export default ResetPassword;