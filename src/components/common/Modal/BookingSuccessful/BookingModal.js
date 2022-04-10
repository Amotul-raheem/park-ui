import React from "react";
import "./BookingModal.css"
import {useNavigate} from "react-router-dom";
import FormButton from "../../FormButton/FormButton";
import check from "../../../../images/check.png";
import {MODAL_MESSAGE} from "../../../constants/ModalMessage";
import {BOOKING_PATH} from "../../../constants/UrlPaths";

function BookingModal(props) {
    const navigate = useNavigate();
    const {success, onClick} = props
    const message = success ? MODAL_MESSAGE.SUCCESSFUL.HEADER : MODAL_MESSAGE.ERROR.HEADER;
    return (
        <div className="booking-modal">
            <div className="booking-modal-container">
                <div>
                    <img src={check} alt="check-image" className="check-image"/>
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