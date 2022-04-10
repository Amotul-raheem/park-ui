import React from 'react'
import "./FormInput.css";
import {useState} from "react";

function FormInput(props) {
    const [focused, setFocused] = useState(false)
    const {name, label, handleChange, type, errorMessage, ...inputProps} = props

    function handleFocus(e) {
        setFocused(true)

    }

    return (
        <div className="form-input">
            <label className="header-name"> {label}</label>
            <div className="input-field-container">
                <input {...inputProps}
                       className="input-field"
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

export default FormInput;
