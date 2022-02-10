import React, {useState} from 'react';
import './ResetPassword.css';
import key from "../../images/key.png"
import FormInput from "../common/FormInput/FormInput";
import FormButton from "../common/FormButton/FormButton";
import HomePageLogo from "../common/HomeLogo/HomePageLogo";
import inputs from "./ResetPasswordInputs"

function ResetPassword() {
    const [values, setValues] = useState({
        password: "",
        confirmPassword: ""
    })

    function handleChange(e) {
        e.preventDefault()
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
   

    function handleResetPassword(e) {
        e.preventDefault()
        console.log(values)
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