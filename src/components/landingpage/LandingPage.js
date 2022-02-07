import React,{Component} from "react";
import './LandingPage.css'

class LandingPage extends Component{
    render() {
        return(
            <div className={'Homepage'}>
                <div className={'background-one'}>

                </div>
                    <div className={'Header__nav'}>
                        <h1>Park</h1>

                            <ul>
                                <li><a href={'#'} className={'Nav__text'}>About</a></li>
                                <li><a href={'#'} >Pricing</a></li>
                                <li><a href={'#'} >Contact</a></li>
                            </ul>
                        <ul>
                                <button  onClick="/login">Sign In</button>
                                <button onClick="/signup">Sign Up</button>
                        </ul>
                    </div>

                <div className={'content'}>
                    <div className={'textBox'}>
                        <h2> Get Your Car Parked Safely with <span> OPark</span></h2>
                        <p>Fast, Affordable and Convinient Parking Platform.Its an easy to <br/> use next generation platform for improving efficiency and <br/>enhancing customers experience.</p>
                        <button className='btn-submit-form' onClick="#">Learn More</button>
                    </div>


                </div>
            </div>
        )
    }
}
export default LandingPage;