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
        <div className={'reset-password-successful'}>
            <div className="reset-password-successful logo-container">
                <HomePageLogo/>
            </div>
            <div className="reset-password-successful reset-password-successful-container">
                <div className="reset-password-successful-form">
                    <div className="reset-password-successful-text-container">
                        <img src={key} alt="key-image" className="key-image"/>
                        <h1 className="reset-password-successful-header"> Create a new password</h1>
                        <h4 className="reset-password-successful-text"> Password must be different from previously used
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
                    <div className="reset-password-successful-button-container">
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