import { useContext } from 'react';
import { MyContext } from '../context';

export default function Genre() {
  const { text, setText } = useContext(MyContext);
  return (
    <>
      <h1 className="text-sm md:text-md lg:text-2xl font-poppins text-red text-center p-3 uppercase font-bold ">
        Genre
      </h1>
      <h1 className='text-white'>{text}</h1>
      <button className='bg-white' onClick={() => setText('Hello, world!')}>
        Click me
      </button>
      <button className='bg-white ml-2' onClick={() => setText('')}>
        Delete
      </button>
    </>
  );
}
