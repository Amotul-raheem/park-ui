import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react';
import SignIn from "./components/SignIn/SignIn";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import "./App.css"
import HomePage from "./components/HomePage/HomePage";
import SignUp from "./components/SignUp/SignUp";
import ResetPasswordSuccessful from "./components/ResetPasswordSuccessful/ResetPasswordSuccessful";
import ResetPasswordCheckEmail from "./components/ResetPasswordCheckEmail/ResetPasswordCheckEmail"
import BookingSuccessful from "./components/BookingSuccessful/BookingSuccessful";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path={"/"} element={<HomePage/>}/>
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/reset-password" element={<ResetPassword/>}/>
                <Route path="/reset-password-successful" element={<ResetPasswordSuccessful/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/reset-password-check-email" element={<ResetPasswordCheckEmail/>}/>
                <Route path="/booking-successful" element={<BookingSuccessful/>}/>
                
            </Routes>
        </Router>
    );
}

export default App;
