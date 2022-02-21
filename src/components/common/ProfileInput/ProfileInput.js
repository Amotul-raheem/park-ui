import "./ProfileInput.css";
import {useState} from "react";

function ProfileInput(props) {
    const [focused, setFocused] = useState(false)
    const {name, label, handleChange, type, errorMessage, ...inputProps} = props

    function handleFocus(e) {
        setFocused(true)

    }

    return (
        <div className="profile-input">
            <label className="profile-header-name"> {label} </label>
            <div className="profile-input-field-container">
                <input {...inputProps}
                       className="profile-input-field"
                       name={name}
                       type={type}
                       onChange={handleChange}
                       onBlur={handleFocus}
                       onFocus={() =>
                           name === "confirmPassword" && setFocused(true)
                       }
                       focused={focused.toString()}
                />
                <span className="error-text"> {errorMessage}</span>
            </div>
        </div>
    )
}

export default ProfileInput;
