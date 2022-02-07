import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignIn from "./components/SignIn/SignIn";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import "./App.css"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
            </Routes>
        </Router>
    );
}

export default App;
