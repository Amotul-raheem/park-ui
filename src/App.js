import React, {Component} from 'react';
import LandingPage from "./components/landingpage/LandingPage";
import SignUp from "./components/signup/SignUp";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path={"/"} element={<LandingPage/>}/>
                    <Route path={"/sign-up"} element={<SignUp/>}/>
                </Routes>
            </Router>
        );
    }
}

export default App;
