import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignIn from "./components/SignIn/SignIn";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import "./App.css"
import React, {Component} from 'react';
import LandingPage from "./components/landingpage/LandingPage";
import SignUp from "./components/signup/SignUp";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
              <Route exact path={"/"} element={<LandingPage/>}/>
              <Route path={"/sign-up"} element={<SignUp/>}/>
            </Routes>
        </Router>
    );
}

export default App;
