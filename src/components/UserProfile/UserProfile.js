import React from "react";
import "./UserProfile.css"
import ProfileInput from "./ProfileInput/ProfileInput";
import FormButton from "../common/FormButton/FormButton";
import SideBar from "../common/SideBar/SideBar";


function UserProfile() {

    const handleGenderChange = (e) => {
        const {name, value} = e.target;
        console.log(name)
        console.log(value)
    }

    const handleChange = (e) => {

    }

//todo we need to handle updating the profile fields and
// also getting these values from the backend to display here
// ensuring no empty fields are present as well. If any field is
// deleted to be empty we'll replace the value with what was there before.

    return (
        <div className="user-profile">
            <div className="user-profile-logo-container">
                <SideBar/>
            </div>
            <div className="user-profile-content">
                <h1 className="profile-header-name">Profile</h1>
                <div className="user-profile-container">
                    <ProfileInput
                        label="First Name"
                        type="text"
                        value="Neemat"
                        placeholder="First Name"
                        handleChange={handleChange}
                    />
                    <ProfileInput
                        label="Last Name"
                        type="text"
                        value="Olajide"
                        placeholder="Last Name"
                        handleChange={handleChange}
                    />
                    <ProfileInput
                        label="Username"
                        type="text"
                        value="folaneem"
                        handleChange={handleChange}

                    />
                    <ProfileInput
                        label="Date Of Birth"
                        type="date"
                        value="2013-01-08"
                        handleChange={handleChange}
                    />
                    <tr>
                        <td>
                            <div className="profile-input-label">
                                <label className="profile-name">Gender</label>
                            </div>
                        </td>
                        <td>
                            <div className="profile-input-gender">
                                <input type="radio" value="MALE" name="gender" onChange={handleGenderChange}/> Male
                                <input type="radio" value="FEMALE" name="gender" onChange={handleGenderChange}/> Female
                                <input type="radio" value="OTHERS" name="gender" onChange={handleGenderChange}/> Others
                            </div>
                        </td>
                    </tr>
                    <div className="user-profile-button-container">
                        <FormButton
                            name={"Save Changes"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;