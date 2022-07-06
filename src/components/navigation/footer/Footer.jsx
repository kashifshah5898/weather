import React, { useState } from "react";
import "../../styles/global.css";

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
          <div className="col-8">
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
          <div className="col-4 d-flex">
            <i class="fa-brands fa-facebook"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
