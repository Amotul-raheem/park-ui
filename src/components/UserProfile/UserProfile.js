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
            <h1 className="profile-header-name">PROFILE</h1>
            <div className="user-profile-container">
                <h1 className="profile-header">Account</h1>
                <hr/>
                <h1 className="profile-picture-name">Profile Picture <img src={profile} alt="profile-image"
                                                                          className="profile-image"/></h1>
                <ProfileInput
                    label="Full Name"
                    type="text"
                    description="Customize your account name"
                    placeholder="Full Name"
                />
                <ProfileInput
                    label="Username"
                    type="text"
                    description="Receive your ticket using your username"

                />
                <ProfileInput
                    label="Gender"
                    description="How you would like to be identified"

                />
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