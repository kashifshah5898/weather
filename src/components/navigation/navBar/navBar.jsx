import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/global.css";

const navBar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid navMargin">
        <Link style={{ color: "white" }} className="navbar-brand Link" to={"/"}>
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
              <NavLink
                // style={{ color: "white" }}
                className="nav-link responsive-font-example"
                to={"/"}
                style={({ isActive }) =>
                  isActive
                    ? {
                        border: "2px solid #59B2DE",
                        borderRadius: "10px",
                        color: "#59B2DE",
                      }
                    : {
                        border: "none",
                        borderRadius: "none",
                        color: "white",
                      }
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // style={{ color: "white" }}
                className="nav-link responsive-font-example"
                to={"/news"}
                style={({ isActive }) =>
                  isActive
                    ? {
                        border: "2px solid #59B2DE",
                        borderRadius: "10px",
                        color: "#59B2DE",
                      }
                    : {
                        border: "none",
                        borderRadius: "none",
                        color: "white",
                      }
                }
              >
                News
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // style={{ color: "white" }}
                className="nav-link responsive-font-example"
                to={"/live-cameras"}
                style={({ isActive }) =>
                  isActive
                    ? {
                        border: "2px solid #59B2DE",
                        borderRadius: "10px",
                        color: "#59B2DE",
                      }
                    : {
                        border: "none",
                        borderRadius: "none",
                        color: "white",
                      }
                }
              >
                Live Cameras
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // style={{ color: "white" }}
                className="nav-link responsive-font-example"
                to={"/photos"}
                style={({ isActive }) =>
                  isActive
                    ? {
                        border: "2px solid #59B2DE",
                        borderRadius: "10px",
                        color: "#59B2DE",
                      }
                    : {
                        border: "none",
                        borderRadius: "none",
                        color: "white",
                      }
                }
              >
                Photos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // style={{ color: "white" }}
                className="nav-link responsive-font-example"
                to={"/contact"}
                style={({ isActive }) =>
                  isActive
                    ? {
                        border: "2px solid #59B2DE",
                        borderRadius: "10px",
                        color: "#59B2DE",
                      }
                    : {
                        border: "none",
                        borderRadius: "none",
                        color: "white",
                      }
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navBar;
