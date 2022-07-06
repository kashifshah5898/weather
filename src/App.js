import React from "react";
import "./App.css";
import Footer from "./components/navigation/footer/Footer";
import Routes from "./routes/routes";
// import Routes from "./Routes/Routes";

function App() {
  return (
    <div className="weatherAppBgcolor">
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
