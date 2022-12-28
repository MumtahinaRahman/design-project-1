import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
// import { Badge } from '@material-ui/core';

const NavBar = () => {

    const navStyle = {
        "text-decoration": "none"
    };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <div className="navbar-brand">
        <p> <h2> <span> <b> Sign</b></span>Us </h2></p>
        </div>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
                <Link style={navStyle} to='/'><li  className="nav-item nav-link">Home</li></Link>
                {/* <Link style={navStyle}><li  className="nav-item nav-link">About</li></Link> */}
                <Link style={navStyle} to='/lessons'><li  className="nav-item nav-link">Learn</li></Link>
                <Link style={navStyle} to='/tests'><li  className="nav-item nav-link">Test</li></Link>
                <Link style={navStyle} to='/interpret'><li  className="nav-item nav-link">Interpret</li></Link>
                
            </div>
            <div className="navbar-nav ms-auto">
                <Link style={navStyle} to='/login'><li className="nav-item nav-link">Login</li></Link>
                <Link style={navStyle} to='/signup'><li className="nav-item nav-link">Signup</li></Link>
                <Link style={navStyle} to='/profile'><li className="nav-item nav-link">Profile</li></Link>
                {/* <li> <Badge color="secondary" badgeContent={99}>
                    <MailIcon />
                    </Badge>
                </li> */}
            </div>
        </div>
    </div>
</nav>

  )
}

export default NavBar
