import React, {useState} from "react";
import "./SignIn.css"
import FormInput from "../common/FormInput/FormInput";
import FormButton from "../common/FormButton/FormButton";
import {Link} from "react-router-dom";
import HomePageLogo from "../common/HomeLogo/HomePageLogo";

function SignIn() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function handleSignIn(e) {
        e.preventDefault()
        console.log(email)
        console.log(password)
    }

    return (
        <div className="sign-in">
            <div className="sign-in logo-container">
                <HomePageLogo/>
            </div>
            <div className="sign-in sign-in-container">
                <div className="sign-in-form">
                    <h1 className="sign-in-header"> Sign In</h1>
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
                    <h4 className="sign-in-forgot"><Link to="/forgot-password">Forgot Password?</Link></h4>
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