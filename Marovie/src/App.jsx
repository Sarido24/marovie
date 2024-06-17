import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import axios from "axios";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
function App() {
  let [popular, setPopular] = useState(null);

  async function fetch() {
    try {
      let response = await axios({
        method: "get",
        url: "../../data.json",
        headers: {
          accept: "application/json",
          // Authorization
        },
      });
      if (response.data) {
        setPopular(response.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      <div className="m-auto bg-gray">
        <div className="min-h-screen items-center">
          <div className="flex flex-col md:grid md:grid-cols-4 gap-1 w-full">
            {/* sidebar-start */}

            <section
              id="sidebar"
              className="bg-black hidden md:flex md:justify-center rounded-lg shadow-xl md:row-span-3 h-screen sticky top-0"
            ></section>

            {/* sidebar-end */}

            {/* Navbar-start */}

            <nav className="block bg-black rounded-lg shadow-xl md:col-span-3 h-24 sticky top-0 z-10">
              <Navbar />
            </nav>

            {/* Navbar-end */}

            {/* Content-start*/}

            <section className="bg-black rounded-lg shadow-xl row-span-2 h-[100vh] lg:h-[150vh] w-full col-span-3">
              <Card popular={popular} />
              <div className="flex justify-center bg-black ">
                <div className="join">
                  <button className="join-item btn">1</button>
                  <button className="join-item btn btn-active">2</button>
                  <button className="join-item btn">3</button>
                  <button className="join-item btn">4</button>
                </div>
              </div>
            </section>

            {/* Content-end*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
