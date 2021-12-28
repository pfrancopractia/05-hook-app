import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        // <nav>
        //     <ul>
        //         <li><Link to="/"> Home</Link></li>
        //         <li><Link to="/About">About</Link></li>
        //         <li><Link to="/Login">Login</Link></li>
        //     </ul>
        // </nav>


        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link className="navbar-brand" to="/" >useContext</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/">Home <span className="sr-only"></span></NavLink>
            <NavLink className="nav-item nav-link" to="/about">About</NavLink>
            <NavLink className="nav-item nav-link" to="/login">LogIn</NavLink>
            </div>
        </div>
        </nav>
    )
}
