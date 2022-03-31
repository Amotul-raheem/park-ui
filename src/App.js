import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react';
import SignIn from "./components/SignIn/SignIn";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import "./App.css"
import HomePage from "./components/HomePage/HomePage";
import SignUp from "./components/SignUp/SignUp";
import ResetPasswordSuccessful from "./components/ResetPassword/ResetPasswordSuccessful/ResetPasswordSuccessful";
import ResetPasswordCheckEmail from "./components/ResetPassword/ResetPasswordCheckEmail/ResetPasswordCheckEmail"
import BookingSuccessful from "./components/BookingSuccessful/BookingSuccessful";
import BookingHistory from "./components/BookingHistory/BookingHistory";
import AccountVerificationCheckEmail
    from "./components/AccountVerification/AccountVerificationCheckEmail/AccountVerificationCheckEmail";
import AccountVerification from "./components/AccountVerification/AccountVerification";
import UserProfile from "./components/UserProfile/UserProfile";
import ResetPasswordFailure from "./components/ResetPassword/ResetPasswordFailure/ResetPasswordFailure";
import Booking from "./components/Booking/Booking";
import {
    ACCOUNT_VERIFICATION_CHECK_EMAIL_PATH,
    ACCOUNT_VERIFICATION_PATH,
    BOOKING_SUCCESSFUL_PATH,
    FORGOT_PASSWORD_PATH,
    HOMEPAGE_PATH,
    RESET_PASSWORD_CHECK_EMAIL_PATH,
    RESET_PASSWORD_PATH,
    RESET_PASSWORD_SUCCESSFUL_PATH,
    RESET_PASSWORD_FAILURE_PATH,
    SIGN_IN_PATH,
    BOOKING_HISTORY_PATH,
    USER_PROFILE_PATH,
    SIGN_UP_PATH,
    BOOKING_PATH
} from "./components/constants/UrlPaths";
import ParkDescription from "./components/Booking/ParkDescription";
import ParkingDetail from "./components/BookingHistory/ParkingDetail/ParkingDetail";
import CheckInCheckoutHistory
    from "./components/BookingHistory/ParkingDetail/CheckInCheckOutHistory/CheckInCheckoutHistory";
import ProfileNav from "./components/common/ProfileNav/ProfileNav";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path={HOMEPAGE_PATH} element={<HomePage/>}/>
                <Route path={SIGN_IN_PATH} element={<SignIn/>}/>
                <Route path={RESET_PASSWORD_PATH} element={<ResetPassword/>}/>
                <Route path={RESET_PASSWORD_SUCCESSFUL_PATH} element={<ResetPasswordSuccessful/>}/>
                <Route path={RESET_PASSWORD_FAILURE_PATH} element={<ResetPasswordFailure/>}/>
                <Route path={FORGOT_PASSWORD_PATH} element={<ForgotPassword/>}/>
                <Route path={SIGN_UP_PATH} element={<SignUp/>}/>
                <Route path={RESET_PASSWORD_CHECK_EMAIL_PATH} element={<ResetPasswordCheckEmail/>}/>
                <Route path={BOOKING_SUCCESSFUL_PATH} element={<BookingSuccessful/>}/>
                <Route path={ACCOUNT_VERIFICATION_PATH} element={<AccountVerification/>}/>
                <Route path={BOOKING_HISTORY_PATH} element={<BookingHistory/>}/>
                <Route path={BOOKING_PATH} element={<Booking/>}/>
                <Route path={USER_PROFILE_PATH} element={<UserProfile/>}/>
                <Route path={ACCOUNT_VERIFICATION_CHECK_EMAIL_PATH} element={<AccountVerificationCheckEmail/>}/>
            </Routes>
        </Router>
    );
}

export default App;
