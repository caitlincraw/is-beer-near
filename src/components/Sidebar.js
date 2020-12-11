import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faListAlt } from '@fortawesome/free-solid-svg-icons'
import './styles/Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar col-sm-3 p-0">
            <div className="sidebar-title">Beer is Near</div>
            <nav>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink exact to="/" className="nav-link" activeClassName="active"><FontAwesomeIcon className="icon" icon={faHome} />Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/search" className="nav-link"><FontAwesomeIcon className="icon" icon={faSearch} />Search</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/lists" className="nav-link"><FontAwesomeIcon className="icon" icon={faListAlt} />Lists</NavLink>
                    </li>
                </ul>
            </nav>
            <p className="copyright">
                    Copyright &copy;
                    {new Date().getFullYear()}
                    <br />
                    Beer is Near
            </p>
        </div>
    )
}

export default Sidebar;