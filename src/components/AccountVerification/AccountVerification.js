import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import HomePageLogo from "../common/HomeLogo/HomePageLogo";
import {ACCOUNT_VERIFICATION_ENDPOINT} from "../constants/Endpoints";
import AccountVerificationSuccessful from "./AccountVerificationSucessful/AccountVerificationSuccessful";
import AccountVerificationFailure from "./AccountVerificationFailure/AccountVerificationFailure";


function AccountVerification() {
    const {token} = useParams();
    const {x, setX} = useState()
    // const {error, setError} = useState(null)

    const setSuss = () => {
        console.log('LKLJN')
      setX(true)
    }

    useEffect(()=> {
        // try {
        //     const response = await axios.post(ACCOUNT_VERIFICATION_ENDPOINT + "/" + token);
        //     console.log(response)
        //     setSuccess(true)
        // } catch (e) {
        //     console.log(e.response)
        //     setError(e)
        //     setSuccess(false)
        // }
        const testing = () => {
          setX(true)
        }
       testing()
    }, [token])


    return (
        <div>
            {x === true ? <AccountVerificationSuccessful/> : <AccountVerificationFailure/>}
        </div>
    )
}

export default AccountVerification;