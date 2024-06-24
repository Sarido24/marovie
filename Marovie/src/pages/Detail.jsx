import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function Detail() {
  const { id } = useParams();
  const { popular, setPopular } = useContext(MyContext);
  const { searchMovie, setSearchMovie } = useContext(MyContext);
  const { favorites, setFavorites } = useContext(MyContext);
  const { error, setError } = useContext(MyContext);
  const [detail, setDetail] = useState(null);
  const [favoriteContainer, setFavoriteContainer] = useState([]);

  function detailMovie() {
    let movie;
    // console.log(searchMovie);
    if (searchMovie) {
      let sourceSearch = [].concat(searchMovie);
      movie = sourceSearch?.filter((el) => {
        return id == el.id;
      });
      // console.log(movie, "ini detail");
      setDetail(movie);
    } else {
      let sourceSearch = popular?.slice();
      movie = sourceSearch?.filter((el) => {
        return id == el.id;
      });
      setDetail(movie);
    }
  }

  function addFavorite(id) {
    // console.log(typeof(id));
    if (!favorites.length) {
      Swal.fire({
        title: "Add to favorite?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Add",
        denyButtonText: `Don't add`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
          setFavorites([detail]);
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    } else {
      // console.log(favorites);
      const idArray = favorites.map((el) => {
        return el[0].id;
      });

      // console.log(idArray);

      const isDuplicate = idArray.includes(Number(id));
      // console.log(isDuplicate, "INI DUPLICATE");
      if (isDuplicate === false) {
        Swal.fire({
          title: "Add to favorite?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Add",
          denyButtonText: `Don't add`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success");
            setFavorites((prevData) => {
              return [...prevData, detail];
            });
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        });
      } else {
        Swal.fire({
          title: "Upps!",
          text: "This Movie had been favorited",
          icon: "error",
          confirmButtonText: "Okayy",
        });
      }
    }
  }

  useEffect(() => {
    detailMovie();
  }, []);

  return (
    detail && (
      <>
        <div className="w-full h-full  text-gray flex flex-col py-2 lg:py-10 items-center text-xs lg:text-2xl font-poppins relative">
          <img
            className="object-fit p-5 w-[90vh] md:w-[100vh] h-[400px] md:h-[700px] shadow-lg shadow-red rounded-lg"
            src={`https://image.tmdb.org/t/p/original/${detail[0].poster_path}`}
            alt=""
          />
          <button
            onClick={() => {
              addFavorite(id);
            }}
            className="bg-red p-2 absolute text-white w-[50%] md:w-[25%] text-md rounded-md shadow-md transition  hover:transition-transform hover:scale-105 duration-500 hover:duration-500 shadow-zinc-400"
          >
            Add To Favorite
          </button>
          <div className="flex flex-col gap-5 justify-start shadow-lg p-20">
            <h1 className="">Judul : {detail[0].title}</h1>
            <p>Release Date: {detail[0].release_date} </p>
            <p>Rating: {detail[0].vote_average} </p>
            <p>Synopsis: {detail[0].overview}.</p>
          </div>
        </div>
      </>
    )
  );
}
