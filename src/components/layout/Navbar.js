import React from "react";
import { Link, NavLink } from "react-router-dom";
import wallpaper from "./wallpaper.jpg";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{backgroundColor:"#e4bb87",position:"sticky"}}>
      <div className="container">
        <Link exact to="/">
          <img src={wallpaper} width="80px" height="70px" style={{borderRadius:"50%",margin:"0% 6px -7px -36px"}} />
        </Link>
        <h3 style={{color:"black"}}>The Student art guide</h3>
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

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto" style={{margin:"0% 5% 0% 26%"}}>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                <h4>Home</h4>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                <h4>About</h4>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/details">
               <h4> Details</h4>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact">
              <h4>Contact</h4>
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" exact
        to="/login"><h4>Login</h4></NavLink>
        </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
