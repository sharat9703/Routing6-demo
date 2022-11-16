import React from 'react';
import { Link } from 'react-router-dom';
 
const  Header =()=>{
    return(
           <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link className="navbar-brand" to={'/'}>My React App</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="fas fa-feather"></i>
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/post">
                <i className="fa fa-dollar"></i>
                Post
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                <i className="fa fa-user"></i>
                Profile
              </Link>
            </li>
          </ul>
    
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <i className="fa fa-globe"></i>
                EN
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">
                <i className="fa fa-user"></i>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn bg-white nav-link text-dark">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    )
}

export default Header;