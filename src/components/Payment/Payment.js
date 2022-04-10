import React from "react";
import FormInput from "../common/FormInput/FormInput";
import FormButton from "../common/FormButton/FormButton";
import HomePageLogo from "../common/HomeLogo/HomePageLogo";
import "./Payment.css"
import lock from "../../images/lock.png"
import BookingDetails from "../Booking/BookingDetails/BookingDetails"


function Payment({closePayment}) {
    const handleChange = (e) => {

    }

    return (<div className="payment">


            <div className="payment-container">
                <div className="payment-form">
                    <h1 className="payment-header">Make Your Payment</h1>
                    <div className="payment-booking-details">
                        <BookingDetails
                            spot="25"
                            price="$99"
                            checkInTime="Mon 25th"
                            checkOutTime="Tue 26th"/>
                    </div>
                    <div className="vertical-line"></div>
                    <FormInput
                        id="ccn"
                        name="credit-number"
                        label="Card Number"
                        type="tel"
                        handleChange={handleChange}
                        pattern="[\d| ]{16,22}"
                        maxlength="19"
                        placeholder="xxxx xxxx xxxx xxxx"
                    />
                    <FormInput
                        label="Name On Card"
                        type="text"
                        handleChange={handleChange}
                    />
                    <FormInput
                        label="Expiration date"
                        type="tel"
                        maxlength="7"
                        pattern="\d\d/\d\d"
                        placeholder="MM/YY"
                        handleChange={handleChange}
                    />

                    <FormInput
                        label="Security Code"
                        type="tel"
                        pattern="\d{3,4}"
                        placeholder="CVC"
                        maxlength="3"
                        handleChange={handleChange}
                    />
                    <div className="payment-button-container">

                        <FormButton
                            name={"Pay Now"}
                        />
                        <img src={lock} alt="lock-image" className="lock-image"/>

                    </div>
                </div>
            </div>
        </div>)
}

export default Payment;