import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"
        style={{
          background: "linear-gradient(90deg, #141e30, #243b55)",
          padding: "12px 20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <div className="container-fluid">
          {/* Logo / Title */}
          <a
            className="navbar-brand fw-bold fs-3"
            to="/"
            style={{
              letterSpacing: "1px",
              color: "#ffffff",
            }}
          >
            📰 NewsMonkey
          </a>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a
                  className="nav-link active fw-semibold"
                  aria-current="page"
                  to="/"
                  style={{
                    transition: "0.3s",
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
