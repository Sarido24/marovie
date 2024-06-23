import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Card from "../components/Card";
import { MyContext } from "../context";
import Loading from "../components/Loading";

export default function Home() {
  const popularAPI =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const Authorization =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWRlOTI0ZTc2YWQ2YjBmMGI4NGMxN2MzMTViOGVhMiIsInN1YiI6IjY0YTY2NDY2MDdmYWEyMDExZTAzMDUxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ua2ZRuzO4A8Bh0FJQNiuovSteFgzds5J2KhM9AlkTus";

  const { popular, setPopular } = useContext(MyContext);
  const { searchMovie, setSearchMovie } = useContext(MyContext);
  const { searchInput, setSearchInput } = useContext(MyContext);
  const { loading, setLoading } = useContext(MyContext);
  const { error, setError } = useContext(MyContext);

  async function fetchPopular() {
    try {
      setLoading(true);
      let response = await axios({
        method: "get",
        url: popularAPI,
        headers: {
          accept: "application/json",
          Authorization,
        },
      });
      if (response.data) {
        setPopular(response.data.results);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <>
      <h1 className="text-sm md:text-md lg:text-2xl font-poppins text-red text-center p-3 uppercase font-bold ">
        {searchMovie ? searchInput : "Popular"}
      </h1>
      <div className="grid grid-cols-3  lg:grid-cols-5 w-full  bg-black gap-8 p-10 rounded-lg">

          {searchMovie ? ( searchMovie?.map((el, index) => {
            return <Card poster_path={el.poster_path} id={el.id} title={el.title} key={index} />;
          })) : ( popular?.slice(0, 15).map((el, index) => {
            return <Card poster_path={el.poster_path} id={el.id} title={el.title} key={index} />;
          })) }
      </div>

      {loading && <Loading />}
      {error && <Loading />}
    </>
  );
}
