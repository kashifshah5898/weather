import React, { useState } from "react";
import "../styles/global.css";
import "./home.css";
const Home = () => {
  const [location, setLocation] = useState("");

  const findLocation = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bgImage">
      <div className="container">
        <form className="d-flex p45" onSubmit={findLocation}>
          <input
            className="form-control responsive-font-example"
            id="footerInput"
            type="text"
            placeholder="Find your location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            className="btn btn-primary responsive-font-example "
            id="footerSubmit"
            type="submit"
            value="find"
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
