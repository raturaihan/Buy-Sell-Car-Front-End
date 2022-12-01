import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { resetFavorite } from "../redux/actions/favoriteAction";
import { FavoriteDispatch, UserDispatch } from "../redux/actions/typesActions";
import { resetUser } from "../redux/actions/userActions";
import { RootState } from "../redux/reducers/indexReducers";

function Navbar() {
  const navigate = useNavigate();
  const getIsAdminRole = () =>
    JSON.parse(localStorage.getItem("role") == "Role ADMIN" ? "true" : "false");
  const getIsBuyerRole = () =>
    JSON.parse(localStorage.getItem("role") == "Role BUYER" ? "true" : "false");
  const { carFavorites } = useSelector(
    (state: RootState) => state.favoriteReducer
  );
  const userDispatch: UserDispatch = useDispatch();
  const favoriteDispatch: FavoriteDispatch = useDispatch();
  const handleLogout = () => {
    localStorage.clear();
    userDispatch(resetUser());
    favoriteDispatch(resetFavorite());
    navigate("/register", { replace: true });
  };

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
              <h3 className="fw-bolder m-0">CarSEA</h3>
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
              {!getIsAdminRole() ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="text-decoration-none text-secondary"
                      to={"/"}
                    >
                      <a
                        className="nav-link nav-link-active"
                        aria-current="page"
                      >
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
                </>
              ) : (
                <></>
              )}
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
                      <a className="nav-link nav-link-active">
                        Favorite{" "}
                        {carFavorites.length != 0 ? (
                          <span className="badge text-bg-danger">
                            {carFavorites.length}
                          </span>
                        ) : (
                          <></>
                        )}
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="text-decoration-none text-secondary"
                      to={"/games"}
                    >
                      <a className="nav-link nav-link-active">Games</a>
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
                        <button
                          className="dropdown-item"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <></>
              )}
              {getIsAdminRole() ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="text-decoration-none text-secondary"
                      to={"/transactions"}
                    >
                      <a className="nav-link nav-link-active">Transaction</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="text-decoration-none text-secondary"
                      to={"/testdrives"}
                    >
                      <a className="nav-link nav-link-active">Test Drive</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="text-decoration-none text-secondary"
                      to={"/carlisting"}
                    >
                      <a className="nav-link nav-link-active">Car Listing</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="text-decoration-none text-secondary"
                      to={"/carcategories"}
                    >
                      <a className="nav-link nav-link-active">Car Categories</a>
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
                      Hi, Admin!
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
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
