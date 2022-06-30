import React from "react";
import { Link } from "react-router-dom";
import "../../styles/global.css";

const navBar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid navMargin">
        <Link className="navbar-brand Link" to={"/"}>
          Weather
        </Link>
        <button
          className="navbar-toggler navBarBurger"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="col-6"></div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                style={{ color: "white" }}
                className="nav-link responsive-font-example"
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{ color: "white" }}
                className="nav-link responsive-font-example"
                to={"/news"}
              >
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{ color: "white" }}
                className="nav-link responsive-font-example"
                to={"/live-cameras"}
              >
                Live Cameras
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{ color: "white" }}
                className="nav-link responsive-font-example"
                to={"/photos"}
              >
                Photos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{ color: "white" }}
                className="nav-link responsive-font-example"
                to={"/contact"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navBar;
