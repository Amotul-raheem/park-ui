import React from "react";
import "./SuccessfulOrFailureModal.css"
import FormButton from "../FormButton/FormButton";
import check from "../../../images/check.png";
import fail from "../../../images/fail.png";

function SuccessfulOrFailureModal(props) {
    const {success, onClick, message, buttonName} = props
    return (
        <div className="modal">
            <div className="modal-container">
                <div>
                    <img src={success ? check : fail}
                         alt={success ? "check-image" : "fail-image"}
                         className={success ? "check-image" : "fail-image"}/>
                    <h2 className="modal-header">{message}</h2>
                </div>
                <div>
                    <FormButton
                        name={buttonName}
                        onClick={onClick}
                    />
                </div>
            </div>
        </div>
    )
}

export default SuccessfulOrFailureModal;