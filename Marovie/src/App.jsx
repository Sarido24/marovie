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
      <div className="m-auto bg-gray">
        <div className="min-h-screen items-center">
          <div className="flex flex-col md:grid md:grid-cols-4 gap-1 w-full">
            <div
              id="sidebar"
              className="bg-black hidden md:flex md:justify-center rounded-lg shadow-xl md:row-span-3 h-screen sticky top-0"
            >
            </div>
            <div className="block bg-black rounded-lg shadow-xl md:col-span-3 h-24 sticky top-0 z-10">
              <Navbar />
            </div>
            <div className="bg-black rounded-lg shadow-xl row-span-2 h-[150vh] w-full col-span-3">
              <Card />
              <div className="flex justify-center mt-10">
                <div className="join">
                  <button className="join-item btn">1</button>
                  <button className="join-item btn btn-active">2</button>
                  <button className="join-item btn">3</button>
                  <button className="join-item btn">4</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
