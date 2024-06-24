import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { MyContext } from "../context";
import { useLocation, useNavigate } from "react-router-dom";

const Authorization =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWRlOTI0ZTc2YWQ2YjBmMGI4NGMxN2MzMTViOGVhMiIsInN1YiI6IjY0YTY2NDY2MDdmYWEyMDExZTAzMDUxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ua2ZRuzO4A8Bh0FJQNiuovSteFgzds5J2KhM9AlkTus";

export default function GenreList() {
    const location = useLocation()
    const navigate = useNavigate()
  const genreListAPI =
    "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const { genreList, setGenreList } = useContext(MyContext);
  const { genreMovies, setGenreMovies } = useContext(MyContext);
  const { loading, setLoading } = useContext(MyContext);
  const { error, setError } = useContext(MyContext);
  const { searchMovie, setSearchMovie } = useContext(MyContext);
  const { searchInput, setSearchInput } = useContext(MyContext);

  async function fetchGenreList() {
    try {
      const response = await axios({
        method: "get",
        url: genreListAPI,
        headers: {
          accept: "application/json",
          Authorization,
        },
      });
    //   console.log(response.data);

      if(response.data){
        setGenreList(response.data)
       
      }
    } catch (error) {
      console.log(error);
      setError(true)
    }
  }


  async function fetchByGenre(e,genre){
    try {
        e.preventDefault(e)
        setSearchInput(genre)
        setLoading(true)
        const response = await axios({
            method: "get",
            url: `https://api.themoviedb.org/3/search/movie?query=${genre}&include_adult=false&language=en-US&page=1`,
            headers: {
              accept: "application/json",
              Authorization,
            },
          });
          if(response.data){
            setGenreMovies(response.data)
            setSearchMovie(response.data.results)
            if(location.pathname === '/genre' || location.pathname === '/favorite'){
                navigate('/')
            }
        
          }else{
            setError(true)
          }
    } catch (error) {
        console.log(error);
        setError(true)
    }finally{
        setLoading(false)
    }
  }

//   console.log(genreMovies);

  useEffect(()=>{
    fetchGenreList()
  },[])
//   console.log(genreList);

  return ( genreList &&
    <div className="text-red text-xs md:text-xl w-full text-center md:h-[100vh]  md:flex md:flex-col md:gap-2 font-poppins items-center justify-around">
        {genreList?.genres.map((el,i)=>{
            return  <p onClick={(e)=>{
                fetchByGenre(e, el.name)
            }} key={i} className="p-2 md:p-0 hover:underline hover:text-gray cursor-pointer">{el.name}</p>
        })}
    </div>
  );
}
