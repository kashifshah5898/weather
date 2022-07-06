/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "../styles/global.css";
import "./home.css";
import { GrLocation } from "react-icons/gr";
import { weatherAPI } from "../../api/service";
import Toast from "../Toast/Toast";

const Home = () => {
  const [location, setLocation] = useState("");
  const [latLongAPI, setLatLongAPI] = useState("");
  const [apiError, setAPiError] = useState(false);
  const dependecy = 0;
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  useEffect(() => {
    getLocation();
  }, [dependecy]);

  const findLocation = (e) => {
    e.preventDefault();
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  };
  const showPosition = async (position) => {
    try {
      let apiResponse = await weatherAPI(position.coords.latitude, position.coords.longitude);
      setLatLongAPI(apiResponse);
    } catch (error) {
      apiErrorFunction();
    }
  };
  const apiErrorFunction = () => {
    window.scrollTo(0, 0);
    setAPiError(true);
    setTimeout(() => {
      setAPiError(false);
    }, 5000);
  };

  return (
    <>
      {apiError ? (
        <div className="container">
          <Toast color="error" message="Something went wrong while fetching data" />
        </div>
      ) : null}

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
            style={{ width: "25rem", background: "#262936", height: "14rem", borderRadius: "20px" }}
          >
            <div className="card-body" style={{ padding: "5px" }}>
              <h5 className="card-title color1 p-2" style={{ borderRadius: "10px" }}>
                <span className="textColor">{day}</span>
                <span className="textColor" style={{ float: "right", fontSize: "15px" }}>
                  {date} &nbsp;{month}
                </span>
              </h5>
              <h5 className="card-subtitle mt-2 mb-2 textColor p-4 ">{latLongAPI?.name}</h5>
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
