import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { useState } from "react";
import data from "./components/Data";
import MapWithMarkers from "./components/Map";

function App() {
  return (
    <>
      <div className="app">
        <Card />
      </div>
    </>
  );
}

export default App;
