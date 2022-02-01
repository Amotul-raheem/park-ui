import React, {Component} from "react";
import "./AuxiliaryHeader.css"


class AuxiliaryHeader extends Component {

    render() {
        const {headerName} = this.props
        return (
            <div className={"auxiliary-header"}>
                <button>
                    <a href={"#"}>
                        {headerName}
                    </a>
                </button>
            </div>


        )
    }
}

export default AuxiliaryHeader;