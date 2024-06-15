import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  return (
    <>
      <nav className="flex items-center font-poppins w-full h-full">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center text-red uppercase p-10 gap-10">
            <a className="decoration-neutral font-bold text-sm md:text-2xl " href="#">
              marovie
            </a>
            <div className="hidden md:flex text-sm cursor-pointer">
              <ul className="flex text-white w-full p-10 gap-5 ">
                <li className="hover:text-gray duration-500 active:text-rose-200"><a className="decoration-neutral" href="">Home</a></li>
                <li className="hover:text-gray duration-500 active:text-rose-200"><a className="decoration-neutral" href="">Popular</a></li>
                <li className="hover:text-gray duration-500 active:text-rose-200"><a className="decoration-neutral" href="">Genre</a></li>

              </ul>
            </div>
          </div>
          <div className="dropdown dropdown-end md:hidden p-5 text-red   ">
            <div tabIndex={0} role="button" className="">
              <FontAwesomeIcon icon={faList} />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-red text-white rounded-box w-52"
            >
              <li>
                <a>Popular</a>
              </li>
              <li>
                <a>Genre</a>
              </li>
              <li>
                <a>My List</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
