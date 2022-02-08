import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react';
import SignIn from "./components/SignIn/SignIn";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import "./App.css"
import HomePage from "./components/HomePage/HomePage";
import SignUp from "./components/SignUp/SignUp";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path={"/"} element={<HomePage/>}/>
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path={"/sign-up"} element={<SignUp/>}/>
            </Routes>
        </Router>
    );
}

export default App;
