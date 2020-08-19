import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar navbar-expand-lg py-3">
            <div className="container nav-container px-0 py-2">
                <ul className="navbar-nav mr-auto links">
                    <li className="nav-item mr-4">
                        <Link to="/" className="nav-link"> Overview </Link>
                    </li>
                    <li className="nav-item mr-4">
                        <a href="!#" className="nav-link"> Teams </a>
                    </li>
                    <li className="nav-item mr-4">
                        <Link to="/test" className="nav-link"> Modules </Link>
                    </li>
                    <li className="nav-item mr-4">
                        <a href="!#" className="nav-link"> Files </a>
                    </li>
                    <li className="nav-item"> 
                        <a href="!#" className="nav-link"> Progress </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
