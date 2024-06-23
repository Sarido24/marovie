import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const { popular, setPopular } = useContext(MyContext);
  const { searchMovie, setSearchMovie } = useContext(MyContext);
  const [detail, setDetail] = useState(null);

  function detailMovie() {
    let movie;
    console.log(searchMovie);
    if (searchMovie) {
      let sourceSearch = [].concat(searchMovie)
      movie = sourceSearch?.filter((el) => {
        return id == el.id;
      });
      // console.log(movie, "ini detail");
      setDetail(movie)
    } else {
      let sourceSearch = popular?.slice()
      movie = sourceSearch?.filter((el) => {
        return id == el.id;
      }); 
      setDetail(movie)    
    }
  }

  console.log(detail);

  useEffect(() => {
    detailMovie();
  }, []);

  return (detail &&
    <>
      <div className="w-full h-full  text-gray flex flex-col py-2 lg:py-10 items-center text-xs lg:text-2xl font-poppins">
        <img
          className="object-fit p-5 w-[90vh] md:w-[100vh] h-[400px] md:h-[700px] shadow-lg shadow-red rounded-lg"
          src={`https://image.tmdb.org/t/p/original/${detail[0].poster_path}`}
          alt=""
        />
        <div className="flex flex-col gap-5 justify-start shadow-lg p-20">
          <h1 className="">Judul : {detail[0].title}</h1>
          <p>Release Date: {detail[0].release_date} </p>
          <p>Rating: {detail[0].vote_average} </p>
          <p>
            Synopsis: {detail[0].overview}.
          </p>
        </div>
      </div>
    </>
  );
}
