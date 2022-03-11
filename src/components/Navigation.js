import logo from "../Beer_mug.svg.png"

import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className="d-flex justify-content-center w-100 navigation">
            <Link to="/">
                <img className="beerSmall" src={logo} alt="beer" />
            </Link>

        </div>
    )
}


export default Nav