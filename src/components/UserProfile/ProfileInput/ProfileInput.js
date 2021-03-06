import React, {useState} from 'react'
import "./ProfileInput.css";


function ProfileInput(props) {
    const {label, name, value, handleChange, type, placeholder, errorMessage, ...inputProps} = props
    const [focused, setFocused] = useState(false)

    function handleFocus(e) {
        setFocused(true)
    }
    return (
        <div className="profile-input">
            <div className="profile-input-label">
                <label className="profile-name">{label}</label>
            </div>
            <div className="profile-input-field-container">
                <input {...inputProps}
                       className="profile-input-field"
                       name={name}
                       type={type}
                       value={value}
                       onChange={handleChange}
                       placeholder={placeholder}
                       onBlur={handleFocus}
                       onFocus={() =>
                           name === "username" && setFocused(true)
                       }
                       disabled={name === "username"}
                       focused={focused.toString()}
                />
                <span className="profile-error-text"> {errorMessage}</span>
            </div>
        </div>
    )
}

export default ProfileInput;
