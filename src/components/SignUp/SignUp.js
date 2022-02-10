import React, {useState} from 'react';
import './SignUp.css';
import FormInput from "../common/FormInput/FormInput";
import {Link} from "react-router-dom";
import FormButton from "../common/FormButton/FormButton";
import HomePageLogo from "../common/HomeLogo/HomePageLogo";

function SignUp() {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text"
        },
        {
            id: 2,
            name: "email",
            type: "email"
        },
        {
            id: 3,
            name: "password",
            type: "password"
        },
        {
            id: 4,
            name: "confirm password",
            type: "password"
        },
    ]


    function handleChange(e) {
        e.preventDefault()
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    function handleSignUp(e) {
        e.preventDefault()
        console.log(values)
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