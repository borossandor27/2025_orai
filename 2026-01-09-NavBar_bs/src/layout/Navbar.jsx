import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link">About</NavLink>   
                </li>               
                 <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>   
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;