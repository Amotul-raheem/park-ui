import React from 'react'
import "./ProfileInput.css";


function ProfileInput(props) {
    const {label, name, value, handleChange, type, placeholder} = props

    return (
        <div className="profile-input">
            <div className="profile-input-label">
                <label className="profile-name">{label}</label>
            </div>
            <div className="profile-input-field-container">
                <input
                    className="profile-input-field"
                    name={name}
                    type={type}
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

export default ProfileInput;
