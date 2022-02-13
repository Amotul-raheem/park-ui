import React, {useState} from "react";
import "./SignIn.css"
import FormInput from "../common/FormInput/FormInput";
import FormButton from "../common/FormButton/FormButton";
import {Link} from "react-router-dom";
import HomePageLogo from "../common/HomeLogo/HomePageLogo";
import {INPUT_REGEX} from "../constants/InputValidationRegex";

function SignIn() {
    const [canSubmitInput, setCanSubmitInput] = useState(true)
    const [values, setValues] = useState({
        email: "",
        password: ""
    })
   const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            label: "email",
            errorMessage: "Invalid email address",
            required: true,
            pattern: INPUT_REGEX.EMAIL_REGEX.regexString
        },
        {
            id: 2,
            name: "password",
            type: "password",
            label: "password",
            errorMessage: "Password should be minimum six characters",
            required: true,
            pattern: INPUT_REGEX.PASSWORD_REGEX.regexString

        }
    ]


    function handleChange(e) {
        setCanSubmitInput(true)
        e.preventDefault()
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    function handleSignIn(e) {
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
        const emailPassValidation = INPUT_REGEX.EMAIL_REGEX.regex.test(values.email)
        const passwordPassValidation = INPUT_REGEX.PASSWORD_REGEX.regex.test(values.password)
        
        return emailPassValidation === true && passwordPassValidation === true;
    }



    return (
        <div className="sign-in">
            <div className="sign-in logo-container">
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
                            There's an error in your input or no value inputted in fields above
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