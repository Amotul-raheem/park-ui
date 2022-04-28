import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "./UserProfile.css";
import ProfileInput from "./ProfileInput/ProfileInput";
import FormButton from "../common/FormButton/FormButton";
import SideBar from "../common/SideBar/SideBar";
import INPUTS from "./Inputs.js";
import {getToken} from "../Utils/TokenUtils";
import axios from "axios";
import {SIGN_IN_PATH} from "../constants/UrlPaths";
import {GET_USER_PROFILE_ENDPOINT, UPDATE_USER_PROFILE_ENDPOINT} from "../constants/Endpoints";
import moment from "moment";

//To Do Refresh page after profile page has been updated
// set gender value to radio when page is refreshed
// prevent submit if username field is empty

function UserProfile() {
    let navigate = useNavigate();
    let token = getToken();

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        username: "",
        dateOfBirth: "",
        gender: ""
    })
    const inputs = [
        INPUTS.FIRSTNAME,
        INPUTS.LASTNAME,
        INPUTS.USERNAME,
        INPUTS.DATEOFBIRTH
    ]



    const getUserProfile = async () => {
        try {
            const response = await axios.get(GET_USER_PROFILE_ENDPOINT, {headers: {'token': token}})
            const profileValues = response.data
            setValues({
                firstName: profileValues.first_name,
                lastName: profileValues.last_name,
                username: profileValues.username,
                dateOfBirth: moment(profileValues.date_of_birth).format("YYYY-MM-DD"),
                gender: profileValues.gender
            })
            console.log(profileValues)
        } catch (e) {
            console.log(e.response)
        }
    }

    const updateUserProfile = async () => {
        try {
            await axios.post(UPDATE_USER_PROFILE_ENDPOINT, {
                    first_name: values.firstName,
                    last_name: values.lastName,
                    username: values.username,
                    date_of_birth: values.dateOfBirth,
                    gender: values.gender
                },
                {headers: {token}})
        } catch (e) {
            console.log(e.response)
        }
    }

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleProfileSubmit = async (e) => {
        e.preventDefault()
        await updateUserProfile()
        console.log(values)
    }
    useEffect(async () => {
        if (!token) {
            navigate(SIGN_IN_PATH)
        }
        await getUserProfile()

    }, [])

    return (
        <div className="user-profile">
            <div className="user-profile-logo-container">
                <SideBar/>
            </div>
            <div className="user-profile-content">
                <h1 className="profile-header-name">Profile</h1>
                <div className="user-profile-container">
                    {inputs.map((input) => (
                        <ProfileInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            handleChange={handleChange}
                        />
                    ))}
                    <tr>
                        <td>
                            <div className="profile-input-label">
                                <label className="profile-name">Gender</label>
                            </div>
                        </td>
                        <td>
                            <div className="profile-input-gender">
                                <input type="radio" value="MALE" name="gender" onChange={handleChange}/> Male
                                <input type="radio" value="FEMALE" name="gender" onChange={handleChange}/> Female
                                <input type="radio" value="OTHERS" name="gender" onChange={handleChange}/> Others
                            </div>
                        </td>
                    </tr>
                    <div className="user-profile-button-container">
                        <FormButton
                            name={"Save Changes"}
                            onClick={handleProfileSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;