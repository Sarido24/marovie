import "./App.css";
import { useState, React } from "react";
import { MyContext } from "./context";
import { RouterProvider } from "react-router-dom";
import router from "../src/router";

function App() {
  const [popular, setPopular] = useState(null);
  const [text, setText] = useState("");
  const [movie, setMovie] = useState(null);
  const [searchMovie, setSearchMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState(false);
  const [genreList, setGenreList] = useState(false);
  const [genreMovies, setGenreMovies] = useState(false);
  return (
    <>
      <MyContext.Provider
        value={{
          text,
          setText,
          searchInput,
          setSearchInput,
          searchMovie,
          setSearchMovie,
          loading,
          setLoading,
          popular,
          setPopular,
          error,
          setError,
          genreList, 
          setGenreList,
          genreMovies, 
          setGenreMovies,
        }}
      >
        <RouterProvider router={router} />
      </MyContext.Provider>
    </>
  );
}

export default App;
