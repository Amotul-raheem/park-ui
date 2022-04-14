import React, {useState} from "react";
import * as CgIcons from "react-icons/cg";
import * as BiIcons from "react-icons/bi";
import {IconContext} from "react-icons";
import "./ProfileNav.css"

import {Link, useNavigate} from "react-router-dom";
import {SIGN_IN_PATH} from "../../constants/UrlPaths";
import {setToken} from "../../Utils/TokenUtils";


export default function ProfileNav(props) {
    const navigate = useNavigate();
    const {toggleDropDown, dropDown} = props;

    const handleSignOut = () => {
        setToken(null)
        navigate(SIGN_IN_PATH)
    }
    return (
        <div onClick={toggleDropDown} className="profile-nav">
            <IconContext.Provider value={{color: '#01194A', size: '65px'}}>
                <div className="dropdown">
                    <CgIcons.CgProfile onClick={toggleDropDown} on/>
                    {dropDown === true ? (
                        <div className="dropdown-content">
                            <nav>
                                <ul>
                                    <div className="dropdown-text">
                                        <Link to={"/user-profile"}>
                                            <CgIcons.CgProfile size={'30px'}/> <span>Profile</span>
                                        </Link>
                                    </div>
                                    <div
                                        className="dropdown-text"
                                        onClick={handleSignOut}>
                                        <BiIcons.BiLogOut size={'30px'}/>
                                        <span>SignOut</span>
                                    </div>
                                </ul>
                            </nav>
                        </div>
                    ) : null}

                </div>
            </IconContext.Provider>
        </div>
    )

}