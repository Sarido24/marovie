import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../context";
import axios from "axios";
export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { searchInput, setSearchInput } = useContext(MyContext);
  const { searchMovie, setSearchMovie } = useContext(MyContext);
  const { loading, setLoading } = useContext(MyContext);
  const { error, setError } = useContext(MyContext);
  function handleOpen() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  const Authorization =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWRlOTI0ZTc2YWQ2YjBmMGI4NGMxN2MzMTViOGVhMiIsInN1YiI6IjY0YTY2NDY2MDdmYWEyMDExZTAzMDUxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ua2ZRuzO4A8Bh0FJQNiuovSteFgzds5J2KhM9AlkTus";

  async function handleSearch(e) {
    e.preventDefault();
    setLoading(true);
    let searchUrl;
    try {
      if (searchInput.length !== 0) {
        searchUrl = `https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=1`;
        let response = await axios({
          method: "get",
          url: searchUrl,
          headers: {
            accept: "application/json",
            Authorization,
          },
        });
        // console.log(response);
        if (response.data) {
          setSearchMovie(response.data.results);
          navigate("/");
        }else{
          setError(true)
        }
      } else {
        setLoading(false);
        navigate("/");
        navigate(0);
      }
    } catch (error) {
      console.log(error);
      setError(true)
    } finally {
      setLoading(false);
    }
  }

  function refreshPage() {
    if (searchMovie) {
      navigate(0);
    }
  }

  function handleChange(e) {
    setSearchInput(e.target.value);
  }
  return (
    <>
      <nav className="flex items-center font-poppins w-full h-full relative box-border">
        <div className="flex justify-between items-center w-full">
          <div className="flex w-full gap-5 justify-evenly items-center">
            <Link
              className="decoration-neutral font-bold ml-2 md:ml-0 text-red text-sm md:text-2xl uppercase "
              to={"/"}
              onClick={refreshPage}
            >
              marovie
            </Link>

            <form className="flex md:gap-5">
              <input
                onSubmit={(e) => {
                  handleSearch(e);
                }}
                onChange={(e) => {
                  handleChange(e);
                }}
                type="text"
                id="input-search"
                placeholder="Search"
                className="input input-bordered w-28 md:w-56 h-7 md:h-11 text-[12px] md:text-[16px] "
              />
              <button
                type="submit"
                onClick={handleSearch}
                className="hidden md:flex md:items-center w-10 text-red text-2xl"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>

            <div className="hidden md:flex text-sm md:text-lg cursor-pointer">
              <ul className="flex text-white w-full p-10 gap-5 ">
                <li className="hover:text-gray duration-500 active:text-rose-200">
                  <Link
                    to="/"
                    className="decoration-neutral"
                    onClick={refreshPage}
                  >
                    Home
                  </Link>
                </li>
                <li className="hover:text-gray duration-500 active:text-rose-200">
                  <Link to="/genre" className="decoration-neutral">
                    Genre
                  </Link>
                </li>
                <li className="hover:text-gray duration-500 active:text-rose-200">
                  <Link to="/favorite" className="decoration-neutral">
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

        <div
          className={
            (isOpen
              ? "flex justify-end w-full box-border md:hidden absolute top-[100%]"
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
      </nav>
    </>
  );
}
