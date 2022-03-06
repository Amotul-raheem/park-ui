import React from "react";
import "./UserProfile.css"
import ProfileInput from "../common/ProfileInput/ProfileInput";
import FormButton from "../common/FormButton/FormButton";
import profile from "../../../src/images/profile.png"
import SideBar from "../common/SideBar/SideBar";


function UserProfile() {

    return (
        <div className="user-profile">
            <div>
                <SideBar/></div>
            <h1 className="profile-header-name">Profile</h1>
            <div className="user-profile-container">

                <ProfileInput
                    label="First Name"
                    type="text"
                    description="Customize your first name"
                    placeholder="First Name"
                />
                <ProfileInput
                    label="Last Name"
                    type="text"
                    description=" Your last name"
                    placeholder="Last Name"
                />
                <ProfileInput
                    label="Username"
                    type="text"
                    description="Receive your ticket using your username"

                />
                <tr>
                    <td>
                        <div className="profile-input-label">
                            <label className="profile-name">Gender</label>
                        </div>
                    </td>
                    <td>
                        <div className="profile-input-gender">
                            <input type="radio" value="MALE" name="gender"/> Male
                            <input type="radio" value="FEMALE" name="gender"/> Female
                            <input type="radio" value="OTHERS" name="gender"/> Others
                        </div>
                    </td>
                </tr>
                <ProfileInput
                    label="Date Of Birth"
                    type="date"
                    description="For your birthday"
                />
                <div className="user-profile-button-container">
                    <FormButton
                        name={"Save Changes"}
                    />
                </div>
            </div>


        </div>
    )
}

export default UserProfile;