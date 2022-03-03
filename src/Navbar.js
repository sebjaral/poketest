import React from "react";
import logo from "./logo.png";
import './App.css';

const Navbar = () => {

    return (
        <nav>
            <img src = {logo} 
            alt="Logo"
            className="navbar-img"/>
        </nav>
    );
};

export default Navbar;