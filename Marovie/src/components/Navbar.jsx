import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  return (
    <>
      <nav className="flex items-center w-full h-full">
        <div className="flex justify-between w-full">
          <div className="text-red uppercase text-xl p-5 font-bold"><a className="decoration-neutral" href="#">marovie</a></div>
          <div className="navigation hidden md:block">
            <ul className="flex text-white w-full object-cover">
              <li>Home</li>
              <li>Popular</li>
              <li>Genre</li>
            </ul>
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
