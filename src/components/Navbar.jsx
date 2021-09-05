import React from "react";
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Deepak</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" style={{justifyContent:'flex-end'}} id="navbarNav">
      <ul className="navbar-nav mx-3">
         
        <li className="nav-item">
          <Link className="nav-link active mx-3" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
            
          <Link className="nav-link mx-3" to='/resume'>Resume</Link>
          
        </li>
        <li className="nav-item">
           <Link className="nav-link mx-3" to='/experiance'>Experiance</Link>
        </li>
        <li className="nav-item">
           <Link className="nav-link mx-3" to='/contact'>Contact Us</Link>
        </li>
     
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
};

export default Navbar;
