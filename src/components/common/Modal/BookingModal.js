import React from "react";
import "./BookingModal.css"
import FormButton from "../FormButton/FormButton";
import check from "../../../images/check.png";
import fail from "../../../images/fail.png";
import {MODAL_MESSAGE} from "../../constants/ModalMessage";

function BookingModal(props) {
    const {success, onClick} = props
    const message = success ? MODAL_MESSAGE.SUCCESSFUL.HEADER : MODAL_MESSAGE.ERROR.HEADER;
    return (
        <div className="booking-modal">
            <div className="booking-modal-container">
                <div>
                    <img src={success ? check : fail}
                         alt={success ? "check-image" : "fail-image"}
                         className={success ? "check-image" : "fail-image"}/>
                    <h2 className="booking-modal-header">{message}</h2>
                </div>
                <div>
                    <FormButton
                        name={"Go Back To Booking"}
                        onClick={onClick}
                    />
                </div>
            </div>
        </div>
    )
}

export default BookingModal;