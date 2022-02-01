import React, {Component} from "react";
import "./AuthenticationHeader.css"


class AuthenticationHeader extends Component {


    render() {
        const {headerName, sign} = this.props
        if (sign) {

        }
        return (
            <button id={headerName}>
                <a className={"home-page-header"} href={"#"}>
                    {headerName}
                </a>
            </button>

        )
    }
}

export default AuthenticationHeader ;