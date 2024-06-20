import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faXmark,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../context";
import axios from "axios";
export default function Navbar() {
  const navigate = useNavigate();
  let [isOpen, setIsOpen] = useState(false);
  let { searchInput, setSearchInput } = useContext(MyContext);
  let { searchMovie, setSearchMovie } = useContext(MyContext);
  let { loading, setLoading } = useContext(MyContext);
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
    if (searchInput.length !== 0) {
      searchUrl = `https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=1`;
      try {
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
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      setSearchMovie()
      setLoading(false)
      navigate("/");
      navigate(0)
    }
  }
  
  function refreshPage(){
    if(searchMovie){
      navigate(0)
    }
  }

  function handleChange(e) {
    setSearchInput(e.target.value);
  }
  return (
    <>
      <nav className="flex items-center font-poppins w-full h-full">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center text-red uppercase p-10 gap-10">
            <Link
              className="decoration-neutral font-bold text-sm md:text-2xl "
              to={"/"} onClick={refreshPage}
            >
              marovie
            </Link>
            <div className="w-20 ml-4 md:w-full text-[8px] md:text-xs">
              <form action="" className="flex gap-1 h-5 w-12 justify-center items-center">
                <input className="px-1 py-1"
                  type="text"
                  placeholder="search"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <button
                  onClick={handleSearch}
                  type="submit"
                  className="bg-red  text-white inline-block px-2 py-1 rounded-lg text-xs hover:bg-rose-500"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </form>
            </div>

            <div className="hidden md:flex text-sm cursor-pointer">
              <ul className="flex text-white w-full p-10 gap-5 ">
                <li className="hover:text-gray duration-500 active:text-rose-200">
                  <Link to="/" className="decoration-neutral"  onClick={refreshPage}>
                    Home
                  </Link>
                </li>
                <li className="hover:text-gray duration-500 active:text-rose-200">
                  <Link to="/genre" className="decoration-neutral" >
                    Genre
                  </Link>
                </li>
                <li className="hover:text-gray duration-500 active:text-rose-200">
                  <Link to="/favorite" className="decoration-neutral" >
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
