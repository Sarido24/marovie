import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

function App() {
  return (
    <>
    <div className="w-[90%] m-auto">

      <Navbar />
      <Carousel />
    </div>
    </>
  );
}

export default App;
