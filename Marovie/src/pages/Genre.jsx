import { useContext } from 'react';

import { MyContext } from '../context';
import { useNavigate } from 'react-router-dom';
import GenreList from '../components/GenreList';

export default function Genre() {
  const navigate =useNavigate()
  const { text, setText } = useContext(MyContext);
  function backPage(){
    navigate(-1)
  }
  return (
    <>
      <h1 className="text-sm md:text-md lg:text-2xl font-poppins text-red text-center p-3 uppercase font-bold ">
        Genre
      </h1>
      <GenreList />
    </>
  );
}
