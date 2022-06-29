import React from "react";
import "./App.css";
import Routes from "./routes/routes";
// import Routes from "./Routes/Routes";

function App() {
  return (
    <div className="weatherAppBgcolor">
      <div className="container">
        <Routes />
      </div>
    </div>
  );
}

export default App;
