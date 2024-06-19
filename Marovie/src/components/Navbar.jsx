import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  let [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  return (
    <>
      <nav className="flex items-center font-poppins w-full h-full">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center text-red uppercase p-10 gap-10">
            <Link
              className="decoration-neutral font-bold text-sm md:text-2xl "
              to={'/'}
            >
              marovie
            </Link>
            <div className="hidden md:flex text-sm cursor-pointer">
              <ul className="flex text-white w-full p-10 gap-5 ">
                <li className="hover:text-gray duration-500 active:text-rose-200">
                  <Link to="/" className="decoration-neutral" href="">
                    Home
                  </Link>
                </li>
                <li className="hover:text-gray duration-500 active:text-rose-200">
                  <Link to="/genre" className="decoration-neutral" href="">
                    Genre
                  </Link>
                </li>
                <li className="hover:text-gray duration-500 active:text-rose-200">
                  <Link to="/favorite" className="decoration-neutral" href="">
                    Favorite
                  </Link>
                </li>
              </ul>
            </div>
           
          </div>

          <div className="w-full flex flex-col md:hidden items-end justify-end p-10 text-red">
            <div>
              <FontAwesomeIcon
                icon={faList}
                onClick={handleOpen}
                className={isOpen ? "hidden" : "block"}
              />
              <FontAwesomeIcon
                icon={faXmark}
                onClick={handleOpen}
                className={isOpen ? "block" : "hidden"}
              />
            </div>
          </div>
        </div>
      </nav>
      <div
        className={
          (isOpen
            ? "flex justify-end box-border py-0 px-0 mr-1 md:hidden"
            : "hidden") + ""
        }
      >
        <div className="flex flex-col  bg-red w-[20vh] rounded-lg items-s p-4 font-poppins font-light text-sm text-white">
          <Link
            to="/"
            className="hover:bg-black rounded-lg p-1 transition-colors duration-500 active:bg-gray"
          >
            Home
          </Link>
          <Link
            to="/genre"
            className="hover:bg-black rounded-lg p-1 transition-colors duration-500 active:bg-gray"
          >
            Genre
          </Link>
          <Link
            to="/favorite"
            className="hover:bg-black rounded-lg p-1 transition-colors duration-500 active:bg-gray"
          >
            Favorite
          </Link>
          <a
            href="#"
            className="hover:bg-black rounded-lg p-1 transition-colors duration-500 active:bg-gray"
          >
            Subscribe
          </a>
        </div>
      </div>
    </>
  );
}
