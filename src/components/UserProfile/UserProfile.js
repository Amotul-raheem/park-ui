import React, {useState} from "react";
import "./UserProfile.css"
import ProfileInput from "../common/ProfileInput/ProfileInput";
import FormButton from "../common/FormButton/FormButton";
import SideBar from "../common/SideBar/SideBar";
import {INPUT_REGEX, INPUTS} from "../constants/InputValidation";

function UserProfile() {
    const [canSubmitInput, setCanSubmitInput] = useState(true)
    const [values, setValues] = useState({
        Firstname: "",
        Lastname: "",
        Username: "",
        Gender: "",
        DateOfBirth: ""

    })
    const inputs = [
        INPUTS.FIRSTNAME,
        INPUTS.LASTNAME,
        INPUTS.USERNAME,
        INPUTS.GENDER,
        INPUTS.DATE_OF_BIRTH
    ]


    function handleChange(e) {
        setCanSubmitInput(true)
        e.preventDefault()
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    function handleUserProfile(e) {
        e.preventDefault()
        let validationPassed = validateUserProfileInputs(values)
        if (validationPassed) {
            setCanSubmitInput(true)
            console.log(values)
        } else {
            setCanSubmitInput(false)

        }
    }

    const validateUserProfileInputs = (values) => {
        const firstnamePassValidation = INPUT_REGEX.EMAIL_REGEX.regex.test(values.firstname)
        const lastnamePassValidation = INPUT_REGEX.EMAIL_REGEX.regex.test(values.lastname)
        const usernamePassValidation = INPUT_REGEX.EMAIL_REGEX.regex.test(values.username)
        const genderPassValidation = INPUT_REGEX.EMAIL_REGEX.regex.test(values.gender)
        const dateOfBirthPassValidation = INPUT_REGEX.PASSWORD_REGEX.regex.test(values.dateOfBirth)

        return firstnamePassValidation === true && lastnamePassValidation === true && usernamePassValidation === true && genderPassValidation === true && dateOfBirthPassValidation === true;
    }


    return (
        <div className="user-profile">
            <div className="user-profile logo-container">
                <SideBar/>
            </div>
            <div className="user-profile user-profile-container">
                <h1 className="user-profile-header"> Profile</h1>

                <div className="user-profile-form">
                    <h1 className="user-profile-header"> Account</h1>
                    <div className="user-profile-content">
                        <li><h1> Profile Picture</h1></li>
                        <li><h1> Firstname</h1></li>
                        <li><h1> Lastname</h1></li>
                        <li><h1> Username</h1></li>
                        <li><h1> Gender</h1></li>


                    </div>
                    {inputs.map((input) => (
                        <ProfileInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            handleChange={handleChange}
                        />
                    ))}
                    <FormButton
                        name={"Save Changes"}
                        onClick={handleUserProfile}
                    />
                </div>
            </div>
        </div>
    )
}

export default UserProfile;