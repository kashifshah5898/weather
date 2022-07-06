import React, { useState } from "react";
import "../styles/global.css";
import "./home.css";
import { GrLocation } from "react-icons/gr";
import { weatherAPI } from "../../api/service";
import Toast from "../Toast/Toast";

const Home = () => {
  const [location, setLocation] = useState("");
  const [latLongAPI, setLatLongAPI] = useState("");
  const [apiError, setAPiError] = useState(false);

  const findLocation = (e) => {
    e.preventDefault();
  };

  const getLocation = (e) => {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  };
  const showPosition = async (position) => {
    // try {
    //   let apiResponse = await weatherAPI(position.coords.latitude, position.coords.longitude);
    //   setLatLongAPI(apiResponse);
    // } catch (error) {
    //   setAPiError(true);
    //   setTimeout(() => {
    //     setAPiError(false);
    //   }, 5000);
    // }
  };
  return (
    <>
      {apiError ? <Toast /> : null}

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

          <div
            className="card mb-2"
            style={{ width: "18rem", background: "#262936", height: "14rem" }}
          >
            <div className="card-body">
              <h5 className="card-title color1">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
