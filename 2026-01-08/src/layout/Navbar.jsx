import {Routes, Route, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <NavLink to="/">Főoldal</NavLink>
            <NavLink to="/about">Rólunk</NavLink>
            <NavLink to="/contact">Kapcsolat</NavLink>
        </ul>
    </nav>
  )
}

export default Navbar