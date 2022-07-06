import React, { useState } from "react";
import "../styles/global.css";
import "./home.css";
import { GrLocation } from "react-icons/gr";

const Home = () => {
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const findLocation = (e) => {
    e.preventDefault();
  };

  const getLocation = (e) => {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  };
  const showPosition = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
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
          &nbsp;
          <span className="pointer" onClick={getLocation}>
            <GrLocation className="locationIcon" />
          </span>
          &nbsp;
          <input
            className="btn btn-primary responsive-font-example "
            id="footerSubmit"
            type="submit"
            value="find"
          />
        </form>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Home;
