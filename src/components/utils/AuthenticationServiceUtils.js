import axios from "axios";
import {SIGN_UP_ENDPOINT} from "../constants/Endpoints";

export const signUpUser = (email, username, password) => {
    axios.post(SIGN_UP_ENDPOINT,
        {
        email: email,
        username: username,
        password: password
    })
        .then(res => {
            console.log(res.data)
            if (res.status !== 200) {
                throw new Error(res.data)
            }
            console.log("User has been signed up successfully ")
        })
        .catch(() => {
            throw new Error("Unable to sign up user, Please try again")
        })
}


