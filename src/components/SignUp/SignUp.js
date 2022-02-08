import React, {useState} from 'react';
import './SignUp.css';
import FormInput from "../common/FormInput/FormInput";
import {Link} from "react-router-dom";
import FormButton from "../common/FormButton/FormButton";
import HomePageLogo from "../common/HomeLogo/HomePageLogo";

function SignUp() {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();


    function handleSignUp(e) {
        e.preventDefault()
        console.log(username)
        console.log(email)
        console.log(password)
        console.log(confirmPassword)
    }

    return (
        <div className={'sign-up'}>
            <div className="sign-up logo-container">
                <HomePageLogo/>
            </div>
            <div className="sign-up sign-up-container">
                <div className="sign-up-form">
                    <h1 className="sign-up-header"> Sign Up</h1>
                    <FormInput
                        name={"username"}
                        type={"text"}
                        setValue={setUsername}
                    />
                    <FormInput
                        name={"email"}
                        type={"email"}
                        setValue={setEmail}
                    />
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