import React from "react";
import FormInput from "../common/FormInput/FormInput";
import FormButton from "../common/FormButton/FormButton";
import HomePageLogo from "../common/HomeLogo/HomePageLogo";
import "./MakePayment.css"
import lock from "../../images/lock.png"
// import code from "../../images/code.png"


function MakePayment() {
    const handleChange = (e) => {

    }

    return (
        <div className="payment">
            <div className="payment logo-container">
                <HomePageLogo/>
            </div>
            <div className="payment-container">
                <div className="payment-form">
                    <h1 className="payment-header">Make Your Payment</h1>
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
        </div>
    )
}

export default MakePayment;