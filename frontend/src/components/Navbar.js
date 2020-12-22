import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faListAlt } from '@fortawesome/free-solid-svg-icons'
import "./styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-light navbar-expand">
            <span className="navbar-brand mb-0 h1">Beer is Near</span>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink exact to="/" className="nav-link"><FontAwesomeIcon className="icon" icon={faHome} /></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/search" className="nav-link"><FontAwesomeIcon className="icon" icon={faSearch} /></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/lists" className="nav-link"><FontAwesomeIcon className="icon" icon={faListAlt} /></NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;