import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "./UserProfile.css";
import ProfileInput from "./ProfileInput/ProfileInput";
import FormButton from "../common/FormButton/FormButton";
import SideBar from "../common/SideBar/SideBar";
import INPUTS from "./Inputs.js";
import {getToken} from "../Utils/TokenUtils";
import axios from "axios";
import {SIGN_IN_PATH, USER_PROFILE_PATH} from "../constants/UrlPaths";
import {GET_USER_PROFILE_ENDPOINT, UPDATE_USER_PROFILE_ENDPOINT} from "../constants/Endpoints";
import moment from "moment";
import SuccessfulOrFailureModal from "../common/Modal/SuccessfulOrFailureModal";
import {MODAL_MESSAGE} from "../constants/ModalMessage";
import {GENDER} from "../constants/Gender";

function UserProfile() {
    let navigate = useNavigate();
    let token = getToken();

    const [showModal, setShowModal] = useState(false)
    const [updateProfileSuccessful, setUpdateProfileSuccessful] = useState(null)
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
            console.log("error")
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
            setShowModal(true)
            setUpdateProfileSuccessful(true)

        } catch (e) {
            setShowModal(true)
            setUpdateProfileSuccessful(false)
            console.log(e.response)
        }
    }

    const handleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleProfileSubmit = async (e) => {
        e.preventDefault()
        await updateUserProfile()
    }
    useEffect(async () => {
        if (!token) {
            navigate(SIGN_IN_PATH)
        }
        await getUserProfile()

    }, [])

    const closeModal = () => {
        setShowModal(false)
        navigate(0);
        console.log(values)
    }

    return (
        <div className="user-profile">
            {showModal && <SuccessfulOrFailureModal
                success={updateProfileSuccessful}
                onClick={closeModal}
                buttonName={"Go back to Profile"}
                message={updateProfileSuccessful ? MODAL_MESSAGE.PROFILE.SUCCESSFUL : MODAL_MESSAGE.PROFILE.ERROR}
            />}
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
                                <input type="radio" value={GENDER.MALE} name="gender" checked={values.gender === GENDER.MALE}
                                       onChange={handleChange}/> Male
                                <input type="radio" value={GENDER.FEMALE} name="gender" checked={values.gender === GENDER.FEMALE}
                                       onChange={handleChange}/> Female
                                <input type="radio" value={GENDER.OTHERS} name="gender" checked={values.gender === GENDER.OTHERS}
                                       onChange={handleChange}/> Others
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