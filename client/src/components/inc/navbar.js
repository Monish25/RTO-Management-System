import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">
           REGIONAL TRANSPORT OFFICE
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <Link to="/" class="nav-link active">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/About" class="nav-link ">
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/Contact" class="nav-link ">
              Contact Us
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/Login" class="nav-link ">
              Login
            </Link>
            </li>
            
          
            
            <li class="nav-item">
              <Link to="/Signup" class="nav-link ">
                Register
              </Link>
            </li>
           
           
            
            
            
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
