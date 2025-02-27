import React from "react";
import './Header.css';
// import Head from './Components/Header';
// import NewUser from './Components/Log';
import { Link } from "react-router-dom";


function Head() {
    return (
        <>
            <nav className="navbar">
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blog</h1>
                <ul className="nav-links">
                    <li><Link to="/" title="Landing Page">Home</Link></li>
                    <li><Link to=" " title="You can view a Existing Blogs by click this button">Blogs</Link></li>
                    <li><Link to="/create " title="Services of Explore world by Blogs">Services</Link></li>
                    <li><Link to=" " title="About this Explore world">About</Link></li>
                    <li><Link to="/contact" title="To fill the form by contact us">Contact</Link></li>
                </ul>
                <ul className="btn">
                    <li><button><Link to="/newuser">Log In &nbsp;&nbsp;&nbsp;</Link></button></li>
                    <li><button><Link to="/newuser">Sign Up &nbsp;&nbsp; &nbsp;</Link></button></li>
                </ul>
            </nav>
        </>
    )
}

export default Head;
