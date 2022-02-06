import React, {useState} from "react";
import "./SignIn.css"

function SignIn() {
    const [values,setValues] = useState({
        email: "",
        password:""
    })
    function handleChange (e) {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    function handleSubmit (e) {
        e.preventDefault()
    }
    return (
        <div className="container">
            <div className="form-content-left">
                <h2 className="park-logo">Park</h2>
            </div>
            <form className= "form">
                <h2 className="sign-in">Sign In</h2>
                <span className="form-input-signup">Don't have an account? <a href="#">Sign Up</a> </span>
                <div className= "form-inputs">
                  <label
                      htmlFor="email"
                      className="form-label-email">
                      Email
                  </label>
                    <input
                        type= "email"
                        name="email"
                        className="form-input-email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <div className= "form-inputs">
                    <label
                        htmlFor="password"
                        className="form-label-password">
                        Password
                    </label>
                    <input
                        type= "password"
                        name="password"
                        className="form-input-password"
                        value={values.password}
                        onChange={handleChange}
                        size= "50"
                    />
                </div>
                <span className="form-input-forgot"><a>Forgot Password?</a></span>
                <button className= "form-input-btn" type= "submit" onClick={handleSubmit}>
                    <p className="btn-sign-in">Sign In</p>
                </button>
            </form>
        </div>
    )
}

export default SignIn