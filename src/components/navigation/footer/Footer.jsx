import React, { useState } from "react";
import "../../styles/global.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs";

const Footer = () => {
  const [email, setEmail] = useState("");

  const subscribe = (e) => {
    e.preventDefault();
    alert("Functionality Remained at backend: " + email);
  };
  return (
    <div className="footer">
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <form className="d-flex" onSubmit={subscribe}>
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email to subscribe"
                type="email"
                className="form-control responsive-font-example"
                id="footerInput"
                required
              />
              <input
                className="btn btn-primary responsive-font-example "
                id="footerSubmit"
                type="submit"
                value="Subscribe"
                // onClick={subscribe}
              />
            </form>
          </div>
          <div className="col-md-3 mt-2 d-flex">
            <ul className="ulClass">
              <li>
                <a style={{ color: "#1f85de" }} href="#">
                  <BsFacebook />
                </a>
              </li>
              <li>
                <a style={{ color: "#1f85de" }} href="#">
                  <AiFillTwitterCircle />
                </a>
              </li>
              <li>
                <a style={{ color: "#1f85de" }} href="#">
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a style={{ color: "#1f85de" }} href="#">
                  <BsYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <span className=" copyRight">Copyright by Kashif. All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
