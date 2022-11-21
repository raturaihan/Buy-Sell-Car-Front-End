import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const getIsAdminRole = () =>
    JSON.parse(localStorage.getItem("role") == "Role ADMIN" ? "true" : "false");
  const getIsBuyerRole = () =>
    JSON.parse(localStorage.getItem("role") == "Role BUYER" ? "true" : "false");
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="#">
            <div className="d-flex align-items-center">
              <img
                src="https://res.cloudinary.com/dl6dxfigu/image/upload/v1668832073/Car%20Image/Pngtree_sea_logo_vector_4135220_oti9kc.jpg"
                alt="Logo"
                width="70"
                height="70"
                className="d-inline-block align-text-top"
              />
              <h3 className="fw-bolder">CarSEA</h3>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse p-2 me-5 justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <Link className="text-decoration-none text-secondary" to={"/"}>
                  <a className="nav-link nav-link-active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="text-decoration-none text-secondary"
                  to={"/catalog"}
                >
                  <a className="nav-link">Car Catalog</a>
                </Link>
              </li>
              {!getIsBuyerRole() && !getIsAdminRole() ? (
                <li className="nav-item">
                  <Link
                    className="text-decoration-none text-secondary"
                    to={"/register"}
                  >
                    <a className="nav-link nav-link-active">Register</a>
                  </Link>
                </li>
              ) : (
                <></>
              )}
              {getIsBuyerRole() ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="text-decoration-none text-secondary"
                      to={"/favorite"}
                    >
                      <a className="nav-link nav-link-active">Favorite</a>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Hi, User!
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="text-decoration-none text-secondary"
                          to={"/profile"}
                        >
                          <a className="dropdown-item" href="#">
                            Account
                          </a>
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
