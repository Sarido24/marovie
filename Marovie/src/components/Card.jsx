import { useEffect, useState } from "react";
import ButtonWatch from "./ButtonWatch";
import axios from "axios";
let getPopularAPI =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
let Authorization = "APIKEY"
 

export default function Card() {
  let [popular, setPopular] = useState(null);

  async function fetch() {
    try {
      let response = await axios({
        method: "get",
        url: getPopularAPI,
        headers: {
          accept: "application/json",
          Authorization,
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

  return (popular &&

    <>
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full  bg-black gap-8 p-10 rounded-lg">
        {popular.slice(0, 15).map((el, i)=>{
          console.log(el);
          return <>
          <div key={i} className="card bg-gray h-44 md:60 lg:h-60 shadow-md shadow-white trnasition   hover:transition-transform hover:scale-105 duration-500 hover:duration-500 ">
          <figure className="px-0 pt-0">
            <img
              src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
              alt="Shoes"
              className="rounded-xl h-full w-full "
            />
          </figure>
          <div className="card-body text-white items-center text-center bottom-[5%] mx-auto absolute inset-x-0">
            <h2 className="card-title"></h2>
            <div className="card-actions">
              <ButtonWatch buttonName="Watch" />
            </div>
          </div>
        </div></>
        })}
        

       
      </div>
    </>
  );
}
