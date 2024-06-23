import { useEffect, useStat, useContext } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
let getPopularAPI =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
let Authorization = "APIKEY";

export default function Card({ id,poster_path }) {
  const navigate = useNavigate();
  function toPage(url) {
    navigate(url);
  }
  return (
    <div
      onClick={() => {
        toPage(`${id}`);
      }}
      className="card h-24 sm:h-36  lg:h-60 shadow-md shadow-red trnasition  hover:transition-transform hover:scale-105 duration-500 hover:duration-500"
    >
      <figure className="px-0 pt-0">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="Shoes"
          className="rounded-xl h-full w-full "
        />
      </figure>
      {/* <div  className="card-body text-white items-center text-center bottom-[25%] mx-auto absolute inset-x-0">
            <div  className="card-actions hidden  lg:flex">
            </div>
          </div> */}
    </div>
  );
}
