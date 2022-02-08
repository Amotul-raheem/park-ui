import React, {useState} from 'react';
import './NewPassword.css';
import key from "../../images/key.png"
import FormInput from "../common/FormInput/FormInput";
import FormButton from "../common/FormButton/FormButton";
import HomePageLogo from "../common/HomeLogo/HomePageLogo";

function NewPassword() {

    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();


    function handleNewPassword(e) {
        e.preventDefault()
        console.log(password)
        console.log(confirmPassword)
    }

    return (
        <div className={'new-password'}>
            <div className="new-password logo-container">
                <HomePageLogo/>
            </div>
            <div className="new-password new-password-container">
                <div className="new-password-form">
                    <div className="new-password-text-container">
                        <img src={key} alt="key-image" className="key-image"/>
                        <h1 className="new-password-header"> Create a new password</h1>
                        <h4 className="new-password-text"> Password must be different from differently used password</h4>
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
                    <div className="new-password-button-container">
                        <FormButton
                            name={"Reset Password"}
                            onClick={handleNewPassword}
                        />
                    </div>
                </div>
            </div>

        </div>
    )


}

export default NewPassword;