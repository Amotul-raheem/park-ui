import {Link} from "react-router-dom";
import "./HomePageLogo.css"


function HomePageLogo() {
    return (
        <div className="homepage-logo">
            <Link className="logo-link" to={"/"}>
                <h1>Park</h1>
            </Link>
        </div>
    )
}

export default HomePageLogo;