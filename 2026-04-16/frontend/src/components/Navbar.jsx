import IndexPage from "../pages/IndexPage"
import FlottaPage from "../pages/FlottaPage"
import UjPage from "../pages/UjPage"
import KolcsonzesPage from "../pages/KolcsonzesPage"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark nav-dark-custom">
                <div className="container">
                    <a className="navbar-brand" href="#">Drive-IT</a>
                    <div className="navbar-nav d-flex flex-row gap-3">
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "nav-link pending" : isActive ? "nav-link active" : "nav-link"
                        } to="/">Kezdőlap</NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "nav-link pending" : isActive ? "nav-link active" : "nav-link"
                        } to="/flotta">Flotta</NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "nav-link pending" : isActive ? "nav-link active" : "nav-link"
                        } to="/uj">Új autó</NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "nav-link pending" : isActive ? "nav-link active" : "nav-link"
                        } to="/kolcsonzes">Kölcsönzés</NavLink>
                    </div>
                </div>
            </nav >
    )
}

export default Navbar