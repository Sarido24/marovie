import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Card from "./components/Card";

function App() {
  return (
    <>
    <div className="m-auto">

      <Navbar />
      <Carousel />
      <Card />
    </div>
    </>
  );
}

export default App;
