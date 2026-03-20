import { NavLink } from "react-router-dom"
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <NavLink className="navbar-brand" to="/" activeClassName="active">Autókölcsönző</NavLink>
            <div className="navbar-nav">
                <NavLink className="nav-link" to="/lista" activeClassName="active">Lista</NavLink>
                <NavLink className="nav-link" to="/uj" activeClassName="active">Új autó</NavLink>
                <NavLink className="nav-link" to="/kep" activeClassName="active">Képek</NavLink>
            </div>
        </div>
    </nav>
  )
}
export default NavBar