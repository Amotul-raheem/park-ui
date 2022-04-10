import React from "react";
import * as CgIcons from "react-icons/cg";
import * as BiIcons from "react-icons/bi";
import {IconContext} from "react-icons";
import "./ProfileNav.css"

import {Link} from "react-router-dom";


export default function ProfileNav(props) {
    const {toggleDropDown, dropDown} = props;


    return (
        <div onClick={toggleDropDown} className="profile-nav">
            <IconContext.Provider value={{color: '#01194A', size: '65px'}}>
                <div className="dropdown">
                    <CgIcons.CgProfile onClick={toggleDropDown} on/>
                    {dropDown === true ? (
                        <div className="dropdown-content">
                            <nav>
                                <ul>
                                    <li className="dropdown-text">
                                        <Link to={"/user-profile"}>
                                            <CgIcons.CgProfile size={'30px'}/> <span>Profile</span>
                                        </Link>
                                    </li>
                                    <li className="dropdown-text">
                                        <Link to={"#"}>
                                            <BiIcons.BiLogOut size={'30px'}/> <span>SignOut</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    ) : null}

                </div>
            </IconContext.Provider>
        </div>
    )

}