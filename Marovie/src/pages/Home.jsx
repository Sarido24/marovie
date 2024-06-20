import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Card from "../components/Card";
import { MyContext } from "../context";
import Loading from "../components/Loading";

export default function Home(){
  const popularAPI = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
const Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWRlOTI0ZTc2YWQ2YjBmMGI4NGMxN2MzMTViOGVhMiIsInN1YiI6IjY0YTY2NDY2MDdmYWEyMDExZTAzMDUxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ua2ZRuzO4A8Bh0FJQNiuovSteFgzds5J2KhM9AlkTus'

    const {popular, setPopular} = useContext(MyContext);
    const {searchMovie, setSearchMovie} = useContext(MyContext)
    const {searchInput, setSearchInput} = useContext(MyContext)
    const {loading, setLoading} = useContext(MyContext)

  async function fetchPopular() {
    try {
      setLoading(true)
      let response = await axios({
        method: "get",
        url: popularAPI,
        headers: {
          accept: "application/json",
        Authorization
        },
      });
      if (response.data) {
        setPopular(response.data.results);
      }
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {;
    fetchPopular()
  }, []);

    return (
        <>
        {loading && <Loading />}
        {/* <h1 className="text-sm md:text-md lg:text-2xl font-poppins text-red text-center p-3 uppercase font-bold ">{searchMovie? searchInput : "Popular"}</h1> */}
        {popular  && 
        <Card movies={searchMovie ? searchMovie: popular}/>}
        </>
    )
}