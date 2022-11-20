import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand ms-5" href="#">
                <div className="d-flex align-items-center">
                <img src="https://res.cloudinary.com/dl6dxfigu/image/upload/v1668832073/Car%20Image/Pngtree_sea_logo_vector_4135220_oti9kc.jpg" alt="Logo" width="70" height="70" className="d-inline-block align-text-top"/>
                <h3 className='fw-bolder'>CarSEA</h3>
                </div>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse p-2 me-5 justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-3">
                <li className="nav-item">
                <Link className='text-decoration-none text-secondary' to={'/'}><a className="nav-link nav-link-active" aria-current="page">Home</a></Link>
                </li>
                <li className="nav-item">
                <Link className='text-decoration-none text-secondary' to={'/catalog'}><a className="nav-link">Car Catalog</a></Link>
                </li>
                <li className="nav-item">
                <Link className='text-decoration-none text-secondary' to={'/register'}><a className="nav-link nav-link-active">Register</a></Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
  );
}

export default Navbar;
