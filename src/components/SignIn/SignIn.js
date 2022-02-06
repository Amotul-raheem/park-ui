import React, {useState} from "react";
import "./SignIn.css"
import FormInput from "../common/FormInput/FormInput";
import FormButton from "../common/FormButton/FormButton";

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
            <div className="sign-in logo-container"/>
            <div className="sign-in sign-in-container">
                <div className="sign-in-form">
                    <h1 className="sign-in-header"> Sign In</h1>
                    <FormInput
                        name={"email"}
                        setValue={setEmail}
                    />
                    <FormInput
                        name={"password"}
                        setValue={setPassword}
                    />
                    <h4 className="sign-in-forgot"><a href="#">Forgot Password?</a></h4>
                    <FormButton
                        name={"Sign In"}
                        onClick={handleSignIn}
                    />
                    <h4 className="sign-in-dont-have-account">Don't have an account? <a href="#">Sign Up</a></h4>
                </div>
            </div>
        </div>
    )
}

export default SignIn