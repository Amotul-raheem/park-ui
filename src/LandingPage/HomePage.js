import React, {Component} from "react";
import "./HomePage.css"
import AuxiliaryHeader from "./HomePageHeader/AuxiliaryHeaders/AuxiliaryHeader";

class HomePage extends Component {

    state = {
        cart: [],
        total: 0
    }

    render() {
        return (
            <div className={"landing-page"}>
                <div>
                    {/*<div> Park</div>*/}
                    <div className={"header"}>
                        <AuxiliaryHeader
                            headerName={'about'}
                        />
                        <AuxiliaryHeader
                            headerName={'pricing'}
                        />
                        <AuxiliaryHeader
                            headerName={'contact'}
                        />
                        <AuxiliaryHeader
                            headerName={'Sign In'}
                        />
                        <AuxiliaryHeader
                            headerName={'Sign Up'}
                        />
                    </div>
                </div>


            </div>
        )
    }
}

export default HomePage;
