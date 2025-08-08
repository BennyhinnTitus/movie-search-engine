import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="NavBar">
            <Link to='/' className="nav-link">Home</Link>
            <Link to='/favorites' className="nav-link">Favorites</Link>
        </div>
    )
}

export default NavBar
