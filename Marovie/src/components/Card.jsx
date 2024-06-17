import { useEffect, useState } from "react";
import ButtonWatch from "./ButtonWatch";
import axios from "axios";

let getPopularAPI = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
let Authorization = "APIKEY"
 

export default function Card({popular}) {
  

  return (popular &&

    <>
      <div className=" grid grid-cols-3  lg:grid-cols-5 w-full  bg-black gap-8 p-10 rounded-lg">
        {popular.slice(0, 15).map((el, index)=>{
          return <>
          <div className="card bg-gray h-24 sm:h-36  lg:h-60 shadow-md shadow-white trnasition  hover:transition-transform hover:scale-105 duration-500 hover:duration-500" key={index}>
          <figure className="px-0 pt-0">
            <img
              src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
              alt="Shoes"
              className="rounded-xl h-full w-full "
            />
          </figure>
          <div className="card-body text-white items-center text-center bottom-[25%] mx-auto absolute inset-x-0">
            <div className="card-actions hidden lg:flex">
              <ButtonWatch buttonName="Watch" />
            </div>
          </div>
        </div></>
        })}
        

       
      </div>
    </>
  );
}
