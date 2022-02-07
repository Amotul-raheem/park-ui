import React, {Component} from 'react';
import './SignUp.css';


class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    handleFirstNameChange = (e) => {
        this.setState({firstName: e.target.value})
    }
    handleLastNameChange = (e) => {
        this.setState({lastName: e.target.value})
    }
    handleUsernameChange = (e) => {
        this.setState({userName: e.target.value})
    }
    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }
    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }
    handleConfirmPasswordChange = (e) => {
        this.setState({confirmPassword: e.target.value})
    }


    render() {
        const {userName, firstName, lastName, email, password, confirmPassword} = this.state;
        return (
            <div className={'Details'}>
                <div className={'background-two'}>

                </div>
                <div className={'Details-container'}>
                        <header>
                            <div className={'header-headings'}>
                                <span> Create Account</span></div>
                        </header>
                        <form className='DetailsForm' onSubmit={this.onSubmit}>
                                <tr>
                                    <td><h3>Firstname</h3>
                                        <input id='firstname' name='firstname' type='firstname' value={firstName}
                                               onChange={this.handleFirstNameChange}/></td>
                                   <td><h3>Lastname</h3>
                                       <input id='lastname' name='lastname' type='lastname' value={lastName}
                                              onChange={this.handleLastNameChange}/></td>
                                </tr>

                                <h3>Username</h3>
                                <input id='username' name='username' type='username' value={userName}
                                       onChange={this.handleUsernameChange}/>
                                <h3>Email</h3>
                                <input id='email' name='email' type='email' value={email}
                                               onChange={this.handleEmailChange}/>
                                <h3>Password</h3>
                                <input id='password' name='password' type='password' value={password}
                                       onChange={this.handlePasswordChange}/>
                                <h3>Confirm Password</h3>
                                <input id='confirmPassword' name='confirmPassword' type='password' value={confirmPassword}
                                       onChange={this.handleConfirmPasswordChange}/>

                            <button className='btn-submit-form-one' type='submit'>SignUp</button>
                            <h5>already have an account? <a href={'#'}>Sign In</a></h5>
                        </form>

                </div>

            </div>
        )

    }
}

export default SignUp;