import { useContext } from "react";
import FavoriteCard from "../components/FavoriteCard";
import { MyContext } from "../context";

export default function Favorite() {
  const { favorites, setFavorites } = useContext(MyContext);
  console.log(favorites);
  return (
    favorites && (
      <>
        <h1 className="text-sm md:text-md lg:text-2xl font-poppins text-red text-center p-3 uppercase font-bold ">
          Favorite
        </h1>
        <div className="p-5 grid grid-cols-3 gap-3 md:grid-cols-5">
          {favorites.map((el) => {
            return <FavoriteCard img={el[0].poster_path} id={el[0].id} />;
          })}
        </div>
      </>
    )
  );
}
