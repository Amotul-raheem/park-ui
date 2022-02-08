import React, {useState} from 'react';
import './ResetPassword.css';
import key from "../../images/key.png"
import FormInput from "../common/FormInput/FormInput";
import FormButton from "../common/FormButton/FormButton";
import HomePageLogo from "../common/HomeLogo/HomePageLogo";

function ResetPassword() {
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();


    function handleResetPassword(e) {
        e.preventDefault()
        console.log(password)
        console.log(confirmPassword)
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

                    <FormInput
                        name={"password"}
                        type={"password"}
                        setValue={setPassword}
                    />
                    <FormInput
                        name={"confirm password"}
                        type={"password"}
                        setValue={setConfirmPassword}
                    />
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