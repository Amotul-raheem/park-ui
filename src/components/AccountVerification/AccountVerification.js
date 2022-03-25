import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {ACCOUNT_VERIFICATION_ENDPOINT} from "../constants/Endpoints";
import AccountVerificationSuccessful from "./AccountVerificationSucessful/AccountVerificationSuccessful";
import AccountVerificationFailure from "./AccountVerificationFailure/AccountVerificationFailure";

function AccountVerification() {
    const {token} = useParams();
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(null)

    useEffect(async () => {
        try {
            const response = await axios.post(ACCOUNT_VERIFICATION_ENDPOINT + "/" + token);
            setSuccess(true)
        } catch (e) {
            setError(e)
            console.log(e.response)
            setSuccess(false)
        }
    }, [])

    return (
        <div>
            {success === true ?
                <AccountVerificationSuccessful/> :
                //Todo create ui and create an endpoint that resends verification email
                <AccountVerificationFailure/>
            }
        </div>
    )
}

export default AccountVerification;