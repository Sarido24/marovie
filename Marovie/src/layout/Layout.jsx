import { useState, useEffect,useContext } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";


import viteLogo from "/vite.svg";
import Navbar from "../components/Navbar"
// import Carousel from "./components/Carousel";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { MyContext } from "../context";



function Layout() {
  const {loading, setLoading} = useContext(MyContext)
  const {error, setError} = useContext(MyContext)

  return (
    <>
      <div className="m-auto">
        <div className="min-h-screen items-center">
          <div className="flex flex-col md:grid md:grid-cols-4 gap-1 w-full">
            {/* sidebar-start */}

            <section
              id="sidebar"
              className=" hidden border-r-2 border-red md:flex md:justify-center rounded-lg shadow-xl md:row-span-3 h-screen sticky top-0"
            ></section>

            {/* sidebar-end */}

            {/* Navbar-start */}

            <nav className="block border-b-2 bg-black border-red rounded-lg shadow-xl md:col-span-3 h-24 sticky top-0 z-10">
              <Navbar />
            </nav>

            {/* Navbar-end */}


            {/* Content-start*/}

            <section className=" rounded-lg shadow-xl row-span-2 h-[100vh] md:h-[200vh] lg:h-[150vh] w-full col-span-3">
            <Outlet />
            </section>

            {/* Content-end*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
