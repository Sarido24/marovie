import { useContext } from 'react';

import { MyContext } from '../context';
import { useNavigate } from 'react-router-dom';

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
      <h1 className='text-white'>{text}</h1>
      <button className='bg-white' onClick={() => setText('Hello, world!')}>
        Click me
      </button>
      <button className='bg-white ml-2' onClick={() => backPage()}>
        Back
      </button>
    </>
  );
}
